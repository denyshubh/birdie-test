FROM node:alpine
RUN mkdir -p /srv/app/birdie-server
WORKDIR /srv/app/birdie-server
COPY package.json /srv/app/birdie-server
COPY package-lock.json /srv/app/birdie-server
RUN yarn
COPY . /srv/app/birdie-server
CMD ["yarn","run", "start"]
