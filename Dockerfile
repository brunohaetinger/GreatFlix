FROM node:alpine AS builder

WORKDIR /app

COPY . .

RUN npm install && \
    npm run build:prod

COPY --from=builder /app/dist/great-flix/ /dist/great-flix/
