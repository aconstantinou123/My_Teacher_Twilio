FROM node:8
ADD . /code
WORKDIR /code
RUN npm install
EXPOSE 3000
CMD npm start