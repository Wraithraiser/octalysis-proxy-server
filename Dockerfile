###############################################################################
# Step 1 : Builder image

FROM node:16-slim as builder

ENV APP_DIR=/usr/src/app

WORKDIR ${APP_DIR}

COPY . ./

RUN yarn install --frozen-lockfile
RUN yarn build

###############################################################################
# Step 2 : Run image

FROM node:16-slim

ARG NODE_ENV=production
ENV APP_DIR=/usr/src/app \
  NODE_ENV=${NODE_ENV} \
  PORT=8090

WORKDIR ${APP_DIR}

COPY --from=builder ${APP_DIR}/package.json ${APP_DIR}/yarn.lock ./

RUN yarn install --frozen-lockfile && yarn cache clean

COPY --from=builder ${APP_DIR}/build ./build/

EXPOSE ${PORT}

CMD [ "yarn", "start" ]
