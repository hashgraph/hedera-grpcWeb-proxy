# Envoy proxy docker and docker-compose for Hedera testnet and mainnet consensus nodes

This project contains a utility generator to create configuration files for docker such that you can run an envoy proxy for web clients to interact with Hedera's native APIs.

Hedera APIs are defined using gRPC (protocol buffers) which is not natively supported by web browsers. Indeed web browsers support gRPCWeb instead.

To this effect, in order for a web client to interact with Hedera's native APIs, a proxy needs to be in place such that it can receive gRPCWeb requests from web clients and transmit them to Hedera over gRPC.

For the purpose of this project, [Envoy](https://www.envoyproxy.io/) was selected since it supports this type of proxy activity.

## Deployment topology

First of all, it is not possible to run a single proxy for all Hedera nodes since transactions sent to a particular node need to identify the AccountId of the node the transaction is being sent to. The mapping of node address and AccountId is performed in the SDK, it is therefore not possible for a single proxy to distribute transactions to a variety of Hedera nodes since it would not be possible to ensure that the node selected by the SDK is the node the proxy would forward the transaction to.

As a result, an instance of a proxy needs to exist for each of the Hedera nodes you wish to communicate with.

This can be achieved in one of two ways
* Operate a single server which runs an image in docker for each proxy
* Operate a server per proxy

In both cases, docker is used since Envoy provide an image you can run alongside configuration for the image.

## Generating configuration files

The generator will take a configuration from `config.yaml` and automatically generate configuration files for Envoy, a docker-compose file to run all the envoy proxies on a single server and a shell script which can be used on individual servers.

### Config.yaml

To start with, copy `config.yaml.sample` to `config.yaml`

The `config.yaml` file contains two sections

* `configuration:`
  * `network:` testnet, mainnet or previewnet - this is merely used in the name of the configuration files and docker containers  
  * `startPort:` specifies the starting port number for the docker images (e.g. 8080), note: if a single server per proxy is used, all servers will serve the grpcWeb proxy on this port.
  * `envoyImage:` default to `envoyproxy/envoy-dev:4c397d395ebbda2b307e20fb3ef30f99f473a073`, specifies the envoy images. The configuration templates for Envoy are dependent on this version, changing the image tag may require changes to the Envoy templates.
* `nodes:` list of all the Hedera node endpoints for which proxies need to be configured
  * `- { address: 0.testnet.hedera.com, port: 50211, account: 0.0.3}`
  * `- { address: 1.testnet.hedera.com, port: 50211, account: 0.0.4}`
  * ...

### Setting up your environment

_note: You will require node installed on your computer._

```shell
npm install
```

### Running the generator

```shell
node generate.js
```

This will use the `config.yaml` file as input and create configuration, docker-compose and shell script which will be written to `./configs`.

### Running the proxies

#### Single server

To start

```shell
cd configs
docker-compose up -d
```

To stop 

```shell
cd configs
docker-compose down
```

```shell
cd grpc-web-testnet-compose
docker compose up
```

#### Multiple servers

Copy the appropriate `yaml` file to your server from the `configs` folder.
Copy the `configs/start.sh` file to your server

On your server

```shell
# in the command below, n is the number at the start of the associated 'yaml' file (e.g. 0, 1, 2...).
./start.sh n 
```

## Code examples to direct SDK clients to the proxies

_note: this **only** applies to web clients, it will not work with other clients._

* The accountId is the AccountId of the node which the proxy is targetting.

### Single server running all proxies

* Replace `http://localhost` with the hostname/ip of the docker host
* The port number starts with the `configuration.startPort` from the `config.yaml` file and increases with each proxy container

#### Javascript

```javascript
let client = Client.forNetwork(
    {"http://localhost:8080": AccountId.fromString("0.0.3")},
    {"http://localhost:8081": AccountId.fromString("0.0.4")},
    {"http://localhost:8082": AccountId.fromString("0.0.5")},
    ...
);
```

### Individual server running per proxy

* Replace `http://host` with the hostname/ip of each proxy server
* The port number is the `configuration.startPort` from the `config.yaml` file

```javascript
let client = Client.forNetwork(
    {"http://host:8080": AccountId.fromString("0.0.3")},
    {"http://host:8080": AccountId.fromString("0.0.4")},
    {"http://host:8080": AccountId.fromString("0.0.5")},
    ...
);
```

## Testing

