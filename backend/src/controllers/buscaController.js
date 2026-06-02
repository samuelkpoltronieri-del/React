const QuestaoTema = require('../models/buscaModel');

async function listarTodos(req, res) {
    try {
        console.log('📋 Buscando todas as questões...');
        const dados = await QuestaoTema.listarTodos();
        console.log(`✅ Total de questões encontradas: ${dados.length}`);
        return res.status(200).json(dados);
    } catch (error) {
        console.error('❌ Erro ao listar todas as questões:', error.message);
        return res.status(500).json({ 
            error: 'Erro ao buscar questões',
            mensagem: error.message 
        });
    }
}

async function listarPorTema(req, res) {
    const { tema } = req.params;
    
    try {
        if (!tema) {
            console.warn('⚠️ Parâmetro "tema" não fornecido');
            return res.status(400).json({ message: 'O parâmetro "tema" é obrigatório.' });
        }

        console.log(`📋 Buscando questões por tema: "${tema}"`);
        const dados = await QuestaoTema.listarPorTema(tema);
        console.log(`✅ Total de questões encontradas: ${dados.length}`);
        
        return res.status(200).json(dados);
    } catch (error) {
        console.error(`❌ Erro ao listar questões por tema "${tema}":`, error.message);
        return res.status(500).json({ 
            error: 'Erro ao buscar questões por tema',
            mensagem: error.message,
            tema: tema
        });
    }
}

async function listarPorVestibular(req, res) {
    const { vestibular } = req.params;

    try {
        if (!vestibular) {
            console.warn('⚠️ Parâmetro "vestibular" não fornecido');
            return res.status(400).json({ message: 'O parâmetro "vestibular" é obrigatório.' });
        }

        console.log(`📋 Buscando questões por vestibular: "${vestibular}"`);
        const dados = await QuestaoTema.listarPorVestibular(vestibular);
        console.log(`✅ Total de questões encontradas: ${dados.length}`);
        
        return res.status(200).json(dados);
    } catch (error) {
        console.error(`❌ Erro ao listar questões por vestibular "${vestibular}":`, error.message);
        return res.status(500).json({ 
            error: 'Erro ao buscar questões por vestibular',
            mensagem: error.message,
            vestibular: vestibular
        });
    }
}

module.exports = { 
    listarTodos,
    listarPorTema,
    listarPorVestibular
};