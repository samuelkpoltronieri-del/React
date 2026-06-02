const QuestaoTema = require('../models/buscaModel');

    async function listarTodos(req, res) {
        try {
            const dados = await QuestaoTema.listarTodos();
            return res.status(200).json(dados);
        } catch (error) {
            return res.status(500).json({ error: error.message });
        }
    }

    async function listarPorTema(req, res) {
        const { tema } = req.params;
        
        try {
            if (!tema) {
                return res.status(400).json({ message: 'O parâmetro "tema" é obrigatório.' });
            }
            const dados = await QuestaoTema.listarPorTema(tema);
            return res.status(200).json(dados);
        } catch (error) {
            return res.status(500).json({ error: error.message });
        }
    }

    async function listarPorVestibular(req, res) {
        const { vestibular } = req.params;

        try {
            if (!vestibular) {
                return res.status(400).json({ message: 'O parâmetro "vestibular" é obrigatório.' });
            }
            const dados = await QuestaoTema.listarPorVestibular(vestibular);
            return res.status(200).json(dados);
        } catch (error) {
            return res.status(500).json({ error: error.message });
        }
    }

module.exports = { 
    listarTodos,
    listarPorTema,
    listarPorVestibular
};