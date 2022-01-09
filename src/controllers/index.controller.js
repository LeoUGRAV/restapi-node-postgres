const { Pool } = require('pg');

const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    password: 'postgres',
    database: 'postgres',
    port: '5432'
});

//Listar todos os usuários
const getUsers = async (req, res) => {
    const response = await pool.query('SELECT * FROM users ORDER BY id ASC');
    res.status(200).json(response.rows);
};

//Listar 1 usuário
const getUserById = async (req, res) => {
    const id = parseInt(req.params.id);
    const response = await pool.query('SELECT * FROM users WHERE id = $1', [id]);
    res.json(response.rows);
};

//Criar cadastro
const createUser = async (req, res) => {
    const { nome, sobrenome, sexo, idade } = req.body;
    const response = await pool.query('INSERT INTO users (nome, sobrenome, sexo, idade) VALUES ($1, $2, $3, $4)', [nome, sobrenome, sexo, idade]);
    res.json({
        message: 'Usuário criado com sucesso!',
        body: {
            user: {nome, sobrenome, sexo, idade}
        }
    })
};

// Atualizar cadastro
const updateUser = async (req, res) => {
    const id = parseInt(req.params.id);
    const { nome, sobrenome, sexo, idade } = req.body;

    const response =await pool.query('UPDATE users SET nome = $1, sobrenome = $2, sexo = $3, idade = $4,  WHERE id = $5', [
        nome,
        sobrenome,
        sexo,
        idade,
        id
    ]);
    res.json('Usuário atualizado com sucesso!');
};

// Deletar cadastro
const deleteUser = async (req, res) => {
    const id = parseInt(req.params.id);
    await pool.query('DELETE FROM users where id = $1', [
        id
    ]);
    res.json(`Usuário ${id} deletado com Successo`);
};

module.exports = {
    getUsers,
    getUserById,
    createUser,
    updateUser,
    deleteUser
};