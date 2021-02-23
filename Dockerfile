FROM node:12.20.2-alpine

# Create app directory
RUN mkdir -p /app
WORKDIR /app

# Installing dependencies
COPY package.json /app/
COPY yarn.lock /app/
RUN yarn install

# Copying source files
COPY . /app

# Building app
RUN yarn build

EXPOSE 3000

# Running the app
CMD ["yarn", "start"]
