FROM node:current-alpine
WORKDIR /usr/src/app
COPY source/package*.json ./
RUN npm install
COPY source/* ./
EXPOSE 8080
CMD ["node", "server.js"]
