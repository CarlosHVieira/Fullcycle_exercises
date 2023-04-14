FROM golang:1.19.8 AS builder

WORKDIR /go/bin
RUN apt-get update

COPY app/ /go/src/app
RUN go install /go/src/app/hello.go 

FROM scratch

WORKDIR /bin
COPY --from=builder /go/bin .

CMD ["hello"]

#  docker build -t chgv/golang:prod . -f Dockerfile.prod
# docker run -it chgv/golang:prod

