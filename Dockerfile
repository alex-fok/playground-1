FROM node:19-alpine
WORKDIR /app

COPY package*.json ./
RUN npm install

# WORKDIR /app
COPY . /app

WORKDIR /app/playground-2
RUN npm install
RUN npm run build

ENV PORT=8080

EXPOSE 8080

WORKDIR /app

CMD ["npm", "run", "start"]
