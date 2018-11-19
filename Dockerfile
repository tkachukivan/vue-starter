FROM keymetrics/pm2:latest-alpine

# application path
RUN mkdir /app

# logs path 
RUN mkdir -p /var/log/nodejs
# explicitly declaring volume is a must
VOLUME ["/var/log/nodejs"]

WORKDIR /app
RUN apk update
RUN apk add vim

# First copy package.json and run npm i.
# That way docker will cache this, and we won't need to do npm i every time we change any other file
COPY package.json package.json
RUN npm install

# Expose required ports and copy project files
# explicitly declaring port is a must
EXPOSE 3000
COPY . .

# build front-end files
RUN npm run build

# run service
ENTRYPOINT [ "pm2-runtime", "start", "server/config/pm2.config.docker.json" ]