FROM node:current-alpine3.17

LABEL version="1.0"
LABEL description="This is the base docker image for the dont forget Me backend API."
LABEL maintainer = ["yambi@ac.sce.ac.il"]

WORKDIR /server

COPY ["package.json", "package-lock.json", "./"]

RUN npm install

COPY . .

EXPOSE 3001

ENV NODE_ENV=production

CMD ["npm", "start"]