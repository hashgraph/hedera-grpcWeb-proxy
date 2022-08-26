const yaml = require('js-yaml');
const fs = require('fs');

const configsFolder = `./configs`;
const envoyTemplateFile = './templates/envoyTemplate.yaml';
const shellScriptTemplateFile = './templates/start.sh.template';

const defaultPort = 50211;
let envoyPort = 10000;

let dockerCompose = {
    version: '3',
    services: {}
}

try {
    // create a folder for configurations
    if (fs.existsSync(configsFolder)){
        fs.rmSync(configsFolder, { recursive: true });
        console.log(`deleted existing configs from ${configsFolder}`);
    }
    fs.mkdirSync(configsFolder);

    // load the generator configuration from yaml
    const configYaml = yaml.load(fs.readFileSync('./config.yaml', 'utf-8'));
    const configuration = configYaml.configuration;
    const nodes = configYaml.nodes;
    const dockerComposeFileName = `${configsFolder}/docker-compose.yaml`;

    // load the envoyTemplate
    const envoyTemplate = fs.readFileSync(envoyTemplateFile, 'utf-8');

    let nodeIndex = 0;
    let startPort = configuration.startPort;
    nodes.forEach(node => {
       let template = envoyTemplate;
        template = template.replace("$listenPort", envoyPort);
        template = template.replace("$nodeAddress", node.address);
        template = template.replace("$nodePort", node.port ?? defaultPort);

        const fileName = `${configsFolder}/${nodeIndex}.${configuration.network}.hedera.com.yaml`;
        fs.writeFileSync(fileName, template);
        console.log(`written ${fileName}`);

        let serviceDefinition = {};
        serviceDefinition["image"] = configuration.envoyImage;
        serviceDefinition.environment = {"ENVOY_UID": 777, "ENVOY_GID": 777};
        serviceDefinition.ports = [`${startPort}:${envoyPort}`];
        serviceDefinition.volumes = [`./${nodeIndex}.${configuration.network}.hedera.com.yaml:/etc/envoy/envoy.yaml`];

        dockerCompose.services[`envoy-${configuration.network}-${nodeIndex}`] = serviceDefinition;
        envoyPort += 1;
        startPort += 1;
        nodeIndex += 1;
    });

    fs.writeFileSync(dockerComposeFileName, yaml.dump(dockerCompose));
    console.log(`written ${dockerComposeFileName}`);

    // load the shell script template
    let shellScriptTemplate = fs.readFileSync(shellScriptTemplateFile, 'utf-8');
    shellScriptTemplate = shellScriptTemplate.replace("$startPort", configuration.startPort);
    shellScriptTemplate = shellScriptTemplate.replace("$image", configuration.envoyImage);
    fs.writeFileSync(`${configsFolder}/start.sh`, shellScriptTemplate);
    console.log(`written ${configsFolder}/start.sh`);
} catch (e) {
    console.log(e);
}
