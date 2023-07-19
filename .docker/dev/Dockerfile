FROM node:20-alpine

# Install bash separately for alpine image
RUN apk update && apk add bash

# Create and define the node_modules's cache directory.
WORKDIR /cache

COPY package*.json .

RUN npm install --silent

WORKDIR /app

ENV PATH /app/node_modules/.bin:$PATH

COPY . .

RUN mkdir -p node_modules/.cache && chmod -R 777 node_modules/.cache

RUN chown -R node node_modules

USER node

# Expose port 5173 to the outside world
EXPOSE 5173