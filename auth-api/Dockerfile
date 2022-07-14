FROM node:17-alpine
WORKDIR /app
COPY package*.json ./
COPY .env ./
COPY api .
RUN yarn install
EXPOSE 3000
CMD yarn start
