FROM node:12.19.0-buster-slim

WORKDIR /usr/src/app
COPY . .
RUN yarn install

CMD ["yarn", "dev"]