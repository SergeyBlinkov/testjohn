ARG NODE_VERSION=19.5.0

FROM node:${NODE_VERSION}-alpine
WORKDIR .
COPY package*.json .
COPY ./src ./src
COPY . .
COPY ./public ./public
EXPOSE 3000
RUN npm install \
    && npm run build
CMD npm run dev