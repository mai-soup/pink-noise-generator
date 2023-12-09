FROM node:21-alpine

EXPOSE 5173

WORKDIR /usr/src/app

ADD package.json package-lock.json ./
RUN npm install

ADD src ./src
ADD public ./public
ADD vite.config.js index.html postcss.config.js tailwind.config.js ./

CMD ["npm", "run", "dev"]