# select your base image to start with
FROM node:19-alpine AS base

#RUN mkdir -p /app
WORKDIR /usr/src/app

COPY package.json ./
RUN npm install
COPY . .

# Command to run when the container is ready
# Separate arguments as separate values in the array
CMD [ "node", "Day_01.js" ]