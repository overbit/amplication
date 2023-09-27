FROM node:18.12.1 AS base

WORKDIR /app

COPY ./dist/ee/packages/amplication-git-pull-service/package.json .

RUN curl -fsSL https://bun.sh/install | bash
RUN bun i --production

COPY ./dist/ee/packages/amplication-git-pull-service .

ENV PORT=3333
EXPOSE $PORT

ENTRYPOINT ["node", "./main.js"]