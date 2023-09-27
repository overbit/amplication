FROM node:18.12.1-alpine AS base

WORKDIR /app

RUN apk update \
    && apk add --no-cache git \
    && rm /var/cache/apk/*

COPY ./dist/packages/amplication-git-pull-request-service/package.json .

RUN curl -fsSL https://bun.sh/install | bash
RUN bun i --production

COPY ./dist/packages/amplication-git-pull-request-service .

ENV PORT=3333
EXPOSE $PORT

ENTRYPOINT ["node", "./main.js"]