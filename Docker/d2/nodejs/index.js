
const http = require('http');
const mysql = require('mysql')

const port = 3000

// Configurar a conexão com o banco de dados
const config = {
    host: 'db',
    user: 'root',
    password: 'root',
    database: 'desafiodb'
};

const connection = mysql.createConnection(config)

// Conectar ao banco de dados
connection.connect((err) => {
    if (err) throw err;
    console.log('Conectado ao banco de dados MySQL!');
});

// Inserir 4 nomes na tabela
const sql1 = `CREATE TABLE IF NOT EXISTS usuarios (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(50) NOT NULL
  );`
const sql2 = `DELETE FROM usuarios;`
const sql3 = `INSERT INTO usuarios(nome) values('Carlos Henrique')`
const sql4 = `INSERT INTO usuarios(nome) values('Vivian Carla')`
const sql5 = `INSERT INTO usuarios(nome) values('Maria Luiza')`
const sql6 = `INSERT INTO usuarios(nome) values('Rafael')`
connection.query(sql1)
connection.query(sql2)
connection.query(sql3)
connection.query(sql4)
connection.query(sql5)
connection.query(sql6)

// Listar no Browser a lista criada
const server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/html' });

    connection.query('SELECT nome FROM usuarios', (err, results) => {
        if (err) throw err;
        res.write('<h1>Full Cycle Rocks!</h1></p>')
        res.write('<html><body><h2>Usuarios</h2><ul>');
        results.forEach(user => {
            res.write(`<li>${user.nome}</li>`);
        });
        res.write('</ul></body></html>');
        res.end();
    });
});

server.listen(3000, () => {
    console.log('Servidor rodando na porta 3000');
});
