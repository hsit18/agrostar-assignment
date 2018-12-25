##################################
# docker build -t hsit18/node-react:v3 .
# docker run -d -p 3000:80 hsit18/node-react:v3
##################################

### STAGE 1: Build #################
FROM hsit18/node-react as build
RUN mkdir /usr/src/app
WORKDIR /usr/src/app
COPY package.json /usr/src/app
RUN yarn install --slient
COPY . /usr/src/app
RUN yarn run build

### STAGE 2: Production Environment ###
FROM nginx:1.13.12-alpine
COPY --from=build /usr/src/app/dist /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]



