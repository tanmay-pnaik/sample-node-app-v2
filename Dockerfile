FROM node:current-alpine
WORKDIR /usr/src/app
COPY source/package*.json ./
RUN npm install
COPY source/* ./
RUN chgrp -R 0 ./ \
  && chmod -R g+rwX ./
EXPOSE 8080
CMD ["node", "server.js"]
