FROM node:18-alpine As development

# Create app directory
WORKDIR /backend

# Installing dependencies
COPY ./package.json /backend

# Installing dependencies
RUN yarn

# Copying all the files in our project
COPY . .