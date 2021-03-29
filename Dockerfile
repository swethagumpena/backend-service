#Specify a base image
FROM node:alpine

#Specify a working directory
WORKDIR /backend

#Copy the dependencies file
COPY ./package.json ./package.json
COPY ./package-lock.json ./package-lock.json

#Install dependencies
RUN npm install 

#Copy remaining files
COPY ./ ./

EXPOSE 1337

#Default command
# CMD ["npm","start"]