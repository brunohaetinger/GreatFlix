FROM node:12.2.0 AS builder

WORKDIR /app

COPY . .

RUN npm install && \
    npm run build:prod

FROM nginx:alpine

COPY --from=builder /app/dist/great-flix/ /usr/share/nginx/html/
# expose port 80
EXPOSE 80

# run nginx
CMD ["nginx", "-g", "daemon off;"]