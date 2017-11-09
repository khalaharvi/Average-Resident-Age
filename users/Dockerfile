FROM node:8.8
WORKDIR /app
ADD . /app
EXPOSE 9005
RUN npm install
ENV Port 9005
CMD ["npm", "start"]