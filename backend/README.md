# 🎓 PregMath - Backend API

## 📋 Requisitos

- Node.js v14+
- PostgreSQL v12+
- npm ou yarn

## 🚀 Setup do Projeto

### 1. Instalar dependências
```bash
npm install
```

### 2. Configurar variáveis de ambiente

Crie um arquivo `.env` na raiz do backend com as seguintes variáveis:

```env
# Configurações do Banco de Dados PostgreSQL
DB_USER=postgres
DB_HOST=localhost
DB_NAME=PregMath
DB_PASSWORD=senai
DB_PORT=5432

# Porta do servidor
PORT=3000

# Ambiente (development, production)
NODE_ENV=development

# Chave secreta para JWT 
JWT_SECRET=ChavedaPreguica
AUTH_USER=profMuller@adm.com
AUTH_PASSWORD=muller123
```

### 3. Criar banco de dados

Abra o PostgreSQL e execute:

```sql
CREATE DATABASE PregMath;
```

Ou pelo terminal:
```bash
createdb -U postgres PregMath
```

### 4. Importar dados de exemplo

```bash
psql -U postgres -d PregMath -f database.sql
```

Ou copie o conteúdo de `database.sql` e execute no pgAdmin.

### 5. Iniciar o servidor

```bash
npm start
```

Você verá uma mensagem como:
```
==================================================
🚀 Servidor rodando!
📍 URL: http://localhost:3000
💾 Banco de Dados: PostgreSQL
==================================================
```

## 📚 Rotas Disponíveis

### GET `/busca/questoes-tema`
Retorna todas as questões

**Resposta:**
```json
[
  {
    "idq": 1,
    "questao": "Qual é 25% de 100?",
    "nome_t": "Porcentagem",
    "nome_v": "ENEM",
    "enunciado": "25",
    "validacao": "s",
    "comentario": "...",
    "dificuldade": "Fácil"
  }
]
```

### GET `/busca/questoes-tema/filtrar/:tema`
Filtra questões por tema

**Exemplo:** `/busca/questoes-tema/filtrar/Porcentagem`

**Parâmetros:**
- `tema` (string): Nome do tema (Porcentagem, Fração, Razão e Proporção, Regra de 3)

### GET `/busca/questoes-tema/vestibular/:vestibular`
Filtra questões por vestibular

**Exemplo:** `/busca/questoes-tema/vestibular/ENEM`

**Parâmetros:**
- `vestibular` (string): Nome do vestibular (ENEM, FUVEST, UNICAMP, PUC)

## 🔌 Conectar ao Frontend

O frontend em React está em `http://localhost:5173` e a API em `http://localhost:3000`.

A configuração de CORS está configurada para aceitar requisições do frontend.

## 🐛 Troubleshooting

### Erro: "Erro ao conectar ao PostgreSQL"
- Verifique se PostgreSQL está rodando
- Verifique as credenciais no `.env`
- Verifique se o banco de dados `PregMath` existe

### Erro: "Conexão recusada em localhost:5432"
- PostgreSQL pode não estar rodando
- No Windows: Procure por "Services" e inicie o PostgreSQL
- No macOS: `brew services start postgresql`
- No Linux: `sudo service postgresql start`

### Erro CORS: "Access to fetch has been blocked"
- Verifique se o URL do frontend está correto no CORS middleware
- Frontend padrão: `http://localhost:5173`

## 📝 Estrutura de Dados

### Tabela: questao_tema

```sql
CREATE TABLE questao_tema (
    idq SERIAL PRIMARY KEY,
    questao TEXT NOT NULL,
    nome_T VARCHAR(100) NOT NULL,
    nome_V VARCHAR(50) NOT NULL,
    enunciado TEXT NOT NULL,
    validacao CHAR(1) DEFAULT 'n',
    comentario TEXT,
    imgq VARCHAR(255),
    dificuldade VARCHAR(20)
);
```

- `idq`: ID único da questão
- `questao`: Enunciado principal da questão
- `nome_T`: Tema (Porcentagem, Fração, etc.)
- `nome_V`: Vestibular (ENEM, FUVEST, etc.)
- `enunciado`: Opção de resposta
- `validacao`: 's' para resposta correta, 'n' para incorreta
- `comentario`: Explicação da resposta
- `dificuldade`: Nível de dificuldade

## 🔧 Variáveis de Ambiente

| Variável | Descrição | Padrão |
|----------|-----------|--------|
| DB_USER | Usuário do PostgreSQL | postgres |
| DB_HOST | Host do PostgreSQL | localhost |
| DB_NAME | Nome do banco de dados | PregMath |
| DB_PASSWORD | Senha do PostgreSQL | senai |
| DB_PORT | Porta do PostgreSQL | 5432 |
| PORT | Porta da API | 3000 |
| NODE_ENV | Ambiente | development |

## 📞 Contato

Desenvolvido por alunos da Instituição SESI Vinhedo-CE242
