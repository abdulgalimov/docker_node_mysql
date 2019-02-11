FROM node:carbon

WORKDIR /docker_test

COPY package*.json ./
RUN npm install

COPY src /docker_test/src
COPY docker-entrypoint.sh /usr/local/bin/docker-entrypoint.sh

ENTRYPOINT ["/usr/local/bin/docker-entrypoint.sh"]