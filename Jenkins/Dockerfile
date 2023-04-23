FROM node:14.15.0-alpine

LABEL version="1.0"
LABEL description="This is the base docker image for the dont forget Me backend API."
LABEL maintainer = ["yambi@ac.sce.ac.il"]

WORKDIR /

COPY ["package.json", "package-lock.json", "./"]
RUN ls
RUN npm install --production
COPY . .

EXPOSE 3001

CMD ["node", "index.js"]