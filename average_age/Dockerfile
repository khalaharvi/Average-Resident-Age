FROM node:8.8
WORKDIR /app
ADD . /app
EXPOSE 8080
RUN npm install
ENV Port 8080
CMD ["npm", "start"]