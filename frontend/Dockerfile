# Fetching the latest node image on alpine linux
FROM node:18-alpine AS development

# Declaring env
ENV NODE_ENV development

# Setting up the work directory
WORKDIR /frontend

# Installing dependencies
COPY ./package.json /frontend

RUN yarn

# Copying all the files in our project
COPY . .