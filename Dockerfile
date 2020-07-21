FROM node:current-alpine
ENV USER_ID=1000290000
USER root
RUN mkdir -p /tmp/prd-temp-files && chown -R ${USER_ID}:0 /tmp/prd-temp-files
WORKDIR /usr/src/app
COPY source/package*.json ./
RUN npm install
COPY source/* ./
USER ${USER_ID}
EXPOSE 8080
CMD ["node", "server.js"]
