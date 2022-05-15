FROM node:12.22.9

COPY . /opt/app

WORKDIR /opt/app

RUN npm install

EXPOSE 4001

CMD ["npm", "start"]