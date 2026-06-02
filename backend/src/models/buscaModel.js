const pool = require('../config/database');

    async function listarTodos() {
        const result = await pool.query('SELECT * FROM questao_tema');
        return result.rows;
    }

    async function listarPorTema(nomeTema) {
        const result = await pool.query('SELECT * FROM questao_tema WHERE nome_T = $1', [nomeTema]);
        return result.rows;
    }
    async function listarPorVestibular(vestibular) {
        const result = await pool.query('SELECT * FROM questao_tema WHERE nome_V = $1', [vestibular]);
        return result.rows;
    }

module.exports = { 
    listarTodos,
    listarPorTema,
    listarPorVestibular
};