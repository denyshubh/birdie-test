FROM node:alpine as builder
RUN mkdir -p /srv/app/birdie-client
WORKDIR /srv/app/birdie-client
COPY package.json /srv/app/birdie-client
COPY package-lock.json /srv/app/birdie-client
RUN yarn
COPY . /srv/app/birdie-client
CMD ["yarn","run", "build"]