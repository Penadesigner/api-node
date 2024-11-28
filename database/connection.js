var knex = require('knex')({
    client: 'mysql2',
    connection: {
      host : '127.0.0.1',
      user : 'root',
      password : '',
      database : 'curso-node'
    }
  });
module.exports = knex

/*
const mysql = require('mysql2');
// Crie a conexão
const connection = mysql.createConnection({
    host: 'localhost',       // Substitua pelo host do seu servidor MySQL
    user: 'seu_usuario',     // Substitua pelo nome do usuário
    password: 'sua_senha',   // Substitua pela senha do usuário
    database: 'seu_banco',   // Nome do banco de dados
});

// Teste a conexão
connection.connect((err) => {
    if (err) {
        console.error('Erro ao conectar ao MySQL:', err);
    } else {
        console.log('Conexão ao MySQL bem-sucedida!');
    }
});

module.exports = connection;
*/


/*
MySQL: Recomendado para dados relacionais, requer esquemas bem definidos.
MongoDB: Recomendado para dados não relacionais ou mais dinâmicos, com flexibilidade de schema.

npm install mongoose 

-- Conectar ao MongoDB
const mongoose = require('mongoose');

const uri = 'mongodb://localhost:27017/nome_do_banco'; // URI do banco MongoDB

mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('Conexão ao MongoDB bem-sucedida!'))
    .catch(err => console.error('Erro ao conectar ao MongoDB:', err));


-- Definir um modelo (Schema)

const mongoose = require('mongoose');

const usuarioSchema = new mongoose.Schema({
    nome: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    idade: { type: Number },
});

const Usuario = mongoose.model('Usuario', usuarioSchema);

module.exports = Usuario;


-- Manipular dados no banco

const Usuario = require('./usuarioModel'); // Caminho para o arquivo do modelo

// Criar um novo usuário
const novoUsuario = new Usuario({ nome: 'João', email: 'joao@email.com', idade: 30 });
novoUsuario.save()
    .then(() => console.log('Usuário salvo!'))
    .catch(err => console.error('Erro ao salvar usuário:', err));

// Buscar usuários
Usuario.find()
    .then(usuarios => console.log('Usuários encontrados:', usuarios))
    .catch(err => console.error('Erro ao buscar usuários:', err));


*/