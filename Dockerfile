FROM node:10-alpine

WORKDIR /app

ENV NODE_ENV=production
ENV NEXT_TELEMETRY_DISABLED=1

COPY package.json yarn.lock /app/
COPY pages /app/pages
COPY src /app/src

RUN yarn --production --frozen-lockfile --no-cache
RUN yarn build

ENTRYPOINT ["yarn", "start"]
