FROM node:18

WORKDIR /app

COPY package* /app

RUN npm ci

COPY . /app/

CMD ["npm", "run", "start"]