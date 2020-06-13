FROM node:12

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

HEALTHCHECK CMD curl --fail http://localhost || exit 1  

CMD ["npm","start"]