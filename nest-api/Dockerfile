FROM node:16-alpine As development

RUN apk add --no-cache bash

RUN yarn global add @nestjs/cli

RUN mkdir -p /home/node/app
WORKDIR /home/node/app

COPY package.json yarn.lock tsconfig.json /home/node/app/
RUN yarn install

COPY . /home/node/app/

RUN yarn build

FROM node:16-alpine as production

ARG NODE_ENV=production
ENV NODE_ENV=${NODE_ENV}

RUN mkdir -p /home/node/app
WORKDIR /home/node/app

COPY package.json yarn.lock tsconfig.json /home/node/app/

RUN yarn install --production=false

COPY . /home/node/app/
COPY --from=development /home/node/app/dist ./dist

CMD ["yarn", "start:prod"]
