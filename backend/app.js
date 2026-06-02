// ============================================================
// APP.JS - Arquivo Principal da Aplicação (PostgreSQL)
// ============================================================

// Carregar variáveis de ambiente do arquivo .env o mais cedo possível
require('dotenv').config();

// Importar o Express
const express = require('express');
const app = express();

// Usar a porta do .env ou 3000 como padrão
const PORT = process.env.PORT || 3000;

// ============================================================
// MIDDLEWARES
// ============================================================
app.use(express.static('public')); // Servir arquivos estáticos da pasta 'public'
// Middleware para processar JSON no body das requisições
app.use(express.json());


// ============================================================
// IMPORTAR ROTAS
// ============================================================

const buscaRoute = require('./src/routes/buscaRoute');
const authRoute = require('./src/routes/authRoute');

// ============================================================
// REGISTRAR ROTAS
// ============================================================

// Definindo o prefixo '/busca' para este grupo de rotas
app.use('/busca', buscaRoute);
// Definindo o prefixo '/auth' para o login
app.use('/auth', authRoute);

// ============================================================
// ROTA RAIZ (Boas-vindas)
// ============================================================

app.get('/', (req, res) => {
  res.json({
    mensagem: 'API da Faculdade com PostgreSQL - Bem-vindo!',
    versao: '1.0',
    banco: 'PostgreSQL'
  });
});

// ============================================================
// INICIAR O SERVIDOR
// ============================================================

app.listen(PORT, () => {
  console.log('='.repeat(50));
  console.log('🚀 Servidor rodando!');
  console.log(`📍 URL: http://localhost:${PORT}`);
  console.log(`💾 Banco de Dados: PostgreSQL`);
  console.log('='.repeat(50));
  console.log('📋 Rotas principais disponíveis:');
  console.log(`   Raiz:  http://localhost:${PORT}/`);
  console.log(`   Busca: http://localhost:${PORT}/busca/questoes-tema`);
  console.log('='.repeat(50));
});
