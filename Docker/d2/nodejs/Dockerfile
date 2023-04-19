# Imagem Node.js
FROM node:15 AS node_base

# Diretório da aplicaçãops
WORKDIR /usr/src/app

# Copia a aplicação para o diretório de trabalho
COPY . .

RUN npm install --save express && \
    npm install --save http && \
    npm install --save mysql

# Instala as dependências da aplicação
RUN npm install 

RUN apt-get update && \
    apt-get install -y wget
#    apt-get install -y wget && \
#    apt-get install -y bash

ENV DOCKERIZE_VERSION v0.6.1
RUN wget https://github.com/jwilder/dockerize/releases/download/$DOCKERIZE_VERSION/dockerize-linux-amd64-$DOCKERIZE_VERSION.tar.gz \
    && tar -C /usr/local/bin -xzvf dockerize-linux-amd64-$DOCKERIZE_VERSION.tar.gz \
    && rm dockerize-linux-amd64-$DOCKERIZE_VERSION.tar.gz

# Expõe a porta 3000
EXPOSE 3000

# Obtem imagem menor
FROM node:lts-alpine3.17
# Diretório da aplicaçãops
WORKDIR /usr/src/app
RUN rm -rf /usr/src/app

# Copia imagem original para a imagem customizada
COPY --from=node_base /usr/src/app .

# Comando para iniciar a aplicação
CMD ["node", "index.js"]