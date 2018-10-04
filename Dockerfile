FROM node:10.4.0

COPY app .

WORKDIR /app
RUN npm install
RUN npm run deploy-storybook