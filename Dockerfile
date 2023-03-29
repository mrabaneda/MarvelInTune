# Dockerfile
FROM python:3.9-alpine
WORKDIR /app  
COPY . /app
RUN apk add zlib-dev jpeg-dev gcc musl-dev
RUN pip install -r ./requirements.txt
