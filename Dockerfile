FROM node:16.15.0-alpine

COPY . /opt/app

WORKDIR /opt/app

RUN npm install

EXPOSE 4001

CMD ["npm", "start"]