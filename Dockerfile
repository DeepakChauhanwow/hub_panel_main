FROM node:18
WORKDIR /usr/src/app
COPY . .
RUN npm install && npm install pm2 -g
RUN npm run build-dev
EXPOSE 6001
CMD [ "pm2-runtime", "start", "server.js" ]
