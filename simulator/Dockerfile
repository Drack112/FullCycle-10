FROM golang:1.16 AS development

WORKDIR /go/src
ENV PATH="/go/bin:${PATH}"

RUN apt-get update && \
    apt-get install build-essential librdkafka-dev -y

CMD ["tail", "-f", "/dev/null"]

FROM golang:1.16 AS production

WORKDIR /go/src
ENV PATH="/go/bin:${PATH}"

RUN apt-get update && \
    apt-get install build-essential librdkafka-dev -y

COPY . .
RUN GOOS=linux go build -ldflags="-s -w" -o main.go
ENTRYPOINT ["./main"]
