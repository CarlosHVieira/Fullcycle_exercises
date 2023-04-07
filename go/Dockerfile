FROM golang:latest

WORKDIR /go/bin
RUN apt-get update

COPY app/ /go/src/app
RUN go install /go/src/app/hello.go 

CMD ["hello"]

# docker build -t chgv/golang:latest .
# docker run -it chgv/golang bash

