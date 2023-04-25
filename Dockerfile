FROM node:16.13-alpine

ENV HOME=/home/node

RUN npm config set unsafe-perm true && npm install -g serve

WORKDIR $HOME/app

COPY . .
RUN chown -R node:node $HOME/app

USER node

COPY package.json yarn.lock ./

RUN yarn && yarn cache clean

COPY . .

RUN npm run build:prod

# Running the app
CMD [ "serve", "-s", "build"]