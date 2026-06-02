const pool = require('../config/database');

async function listarTodos() {
    try {
        console.log('Executando query: SELECT * FROM questao_tema');
        const result = await pool.query('SELECT * FROM questao_tema');
        console.log(`✅ Query executada com sucesso. Registros: ${result.rows.length}`);
        return result.rows;
    } catch (error) {
        console.error('❌ Erro na query listarTodos:', error);
        throw new Error(`Erro ao buscar questões: ${error.message}`);
    }
}

async function listarPorTema(nomeTema) {
    try {
        console.log(`Executando query: SELECT * FROM questao_tema WHERE nome_T = '${nomeTema}'`);
        const result = await pool.query('SELECT * FROM questao_tema WHERE nome_T = $1', [nomeTema]);
        console.log(`✅ Query executada com sucesso. Registros: ${result.rows.length}`);
        return result.rows;
    } catch (error) {
        console.error('❌ Erro na query listarPorTema:', error);
        throw new Error(`Erro ao buscar questões por tema: ${error.message}`);
    }
}

async function listarPorVestibular(vestibular) {
    try {
        console.log(`Executando query: SELECT * FROM questao_tema WHERE nome_V = '${vestibular}'`);
        const result = await pool.query('SELECT * FROM questao_tema WHERE nome_V = $1', [vestibular]);
        console.log(`✅ Query executada com sucesso. Registros: ${result.rows.length}`);
        return result.rows;
    } catch (error) {
        console.error('❌ Erro na query listarPorVestibular:', error);
        throw new Error(`Erro ao buscar questões por vestibular: ${error.message}`);
    }
}

module.exports = { 
    listarTodos,
    listarPorTema,
    listarPorVestibular
};