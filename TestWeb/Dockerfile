# pull base image
FROM node:25.2.1-alpine3.21

ARG NODE_ENV=development
ENV NODE_ENV=$NODE_ENV

# default to port 19006 for node, and 19001 and 19002 (tests) for debug
ARG PORT=19006
ENV PORT=$PORT
EXPOSE $PORT 19001 19002

# install global packages
ENV NPM_CONFIG_PREFIX=/home/node/.npm-global
ENV PATH=/home/node/.npm-global/bin:$PATH
RUN npm i --unsafe-perm -g npm@latest expo-cli@latest

# install dependencies first, in a different location for easier app bind mounting for local development
# due to default /opt permissions we have to create the dir with root and change perms
RUN mkdir /opt/react_native_app && chown node:node /opt/react_native_app
WORKDIR /opt/react_native_app
ENV PATH=/opt/react_native_app/.bin:$PATH
USER node
COPY ./package.json ./
RUN yarn install

RUN mkdir assets
COPY ./assets ./assets
COPY app.json ./
COPY App.tsx ./
COPY babel.config.js ./
COPY tsconfig.json ./

CMD ["yarn", "web"]
