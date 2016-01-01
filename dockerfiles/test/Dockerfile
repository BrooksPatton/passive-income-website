FROM node:5.3.0
MAINTAINER Brooks Patton

RUN mkdir /data
RUN npm install -g \
	nodemon \
	mocha

CMD npm install; npm test

ENV NODE_ENV=development

VOLUME /data

WORKDIR /data