ARG NODE_MODULES=19.5.0


FROM node:${NODE_MODULES}-alpine
WORKDIR .
COPY ./package*.json .
COPY . .
RUN npm install
EXPOSE 5000
CMD npm run dev