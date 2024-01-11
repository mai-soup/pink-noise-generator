FROM node:21-alpine AS build

WORKDIR /usr/src/app

ADD package.json package-lock.json ./
RUN npm install 

ADD src ./src
ADD public ./public
ADD vite.config.js index.html postcss.config.js tailwind.config.js ./

RUN npm run build

FROM node:21-alpine as prod 

WORKDIR /usr/src/app

ADD package.json package-lock.json ./
RUN npm install --production

COPY --from=build /usr/src/app/dist ./dist

RUN npm install -g serve

EXPOSE 5173

CMD ["serve", "-s", "dist", "-p", "5173"]