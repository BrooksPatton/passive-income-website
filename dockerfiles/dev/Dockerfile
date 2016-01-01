FROM node:5.3.0
MAINTAINER Brooks Patton

RUN mkdir /data
RUN npm install -g \
	nodemon

CMD /bin/bash

EXPOSE 3000

ENV NODE_ENV=development \
	PORT=3000

VOLUME /data

WORKDIR /data