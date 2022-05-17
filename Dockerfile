FROM node:16-alpine

COPY . /opt/app

WORKDIR /opt/app

RUN npm install

EXPOSE 4001

ENTRYPOINT [ "node", "index.js" ]