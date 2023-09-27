FROM node:18.12.1-alpine AS base

WORKDIR /app

COPY ./dist/packages/amplication-build-manager/package.json .

RUN curl -fsSL https://bun.sh/install | bash
RUN bun i --production

COPY ./dist/packages/amplication-build-manager .

ENV PORT=3333
EXPOSE $PORT

ENTRYPOINT ["node", "./main.js"]