FROM node:17-alpine
WORKDIR /app
COPY package*.json ./
COPY prisma ./prisma/
COPY .env ./
COPY . .
RUN yarn install
RUN npx prisma generate
EXPOSE 3000
CMD yarn start
