FROM node:17-alpine
WORKDIR /app
COPY package*.json ./
COPY prisma ./prisma/
COPY api .
RUN yarn install
EXPOSE 3000
CMD yarn prisma db push && yarn prisma generate && yarn start
