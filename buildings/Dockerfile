FROM node:8.8
WORKDIR /app
ADD . /app
EXPOSE 8005
RUN npm install
ENV Port 8005
CMD ["npm", "start"]