-- ============================================================
-- SCRIPT SQL PARA INICIALIZAR O BANCO DE DADOS
-- ============================================================
-- Este script cria a tabela questao_tema e insere dados de exemplo

-- Criar tabela questao_tema
CREATE TABLE IF NOT EXISTS questao_tema (
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

-- Limpar dados antigos (comentar se quiser manter dados)
-- TRUNCATE TABLE questao_tema RESTART IDENTITY;

-- Inserir dados de exemplo
INSERT INTO questao_tema (questao, nome_T, nome_V, enunciado, validacao, comentario, dificuldade) VALUES
-- Porcentagem
('Qual é 25% de 100?', 'Porcentagem', 'ENEM', '25', 's', 'Porcentagem é a divisão do valor pela base multiplicado por 100.', 'Fácil'),
('Qual é 25% de 100?', 'Porcentagem', 'ENEM', '50', 'n', '', 'Fácil'),
('Qual é 25% de 100?', 'Porcentagem', 'ENEM', '75', 'n', '', 'Fácil'),
('Qual é 25% de 100?', 'Porcentagem', 'ENEM', '10', 'n', '', 'Fácil'),

-- Fração
('Simplifique a fração 12/18', 'Fração', 'FUVEST', '2/3', 's', 'Dividir numerador e denominador por 6.', 'Médio'),
('Simplifique a fração 12/18', 'Fração', 'FUVEST', '3/4', 'n', '', 'Médio'),
('Simplifique a fração 12/18', 'Fração', 'FUVEST', '6/9', 'n', '', 'Médio'),
('Simplifique a fração 12/18', 'Fração', 'FUVEST', '1/2', 'n', '', 'Médio'),

-- Razão e Proporção
('Qual é a razão entre 10 e 5?', 'Razão e Proporção', 'UNICAMP', '2', 's', 'Razão é a divisão entre dois números.', 'Fácil'),
('Qual é a razão entre 10 e 5?', 'Razão e Proporção', 'UNICAMP', '1/2', 'n', '', 'Fácil'),
('Qual é a razão entre 10 e 5?', 'Razão e Proporção', 'UNICAMP', '15', 'n', '', 'Fácil'),
('Qual é a razão entre 10 e 5?', 'Razão e Proporção', 'UNICAMP', '5', 'n', '', 'Fácil'),

-- Regra de 3
('Se 2 está para 4 assim como x está para 8, qual é x?', 'Regra de 3', 'ENEM', '4', 's', 'Regra de 3 simples: 2/4 = x/8.', 'Médio'),
('Se 2 está para 4 assim como x está para 8, qual é x?', 'Regra de 3', 'ENEM', '3', 'n', '', 'Médio'),
('Se 2 está para 4 assim como x está para 8, qual é x?', 'Regra de 3', 'ENEM', '6', 'n', '', 'Médio'),
('Se 2 está para 4 assim como x está para 8, qual é x?', 'Regra de 3', 'ENEM', '5', 'n', '', 'Médio'),

-- Mais exemplos
('Quanto é 50% de 200?', 'Porcentagem', 'PUC', '100', 's', 'Metade de 200 é 100.', 'Fácil'),
('Quanto é 50% de 200?', 'Porcentagem', 'PUC', '150', 'n', '', 'Fácil'),
('Quanto é 50% de 200?', 'Porcentagem', 'PUC', '50', 'n', '', 'Fácil'),
('Quanto é 50% de 200?', 'Porcentagem', 'PUC', '200', 'n', '', 'Fácil'),

('Qual é o resultado de 1/2 + 1/3?', 'Fração', 'ENEM', '5/6', 's', 'MMC de 2 e 3 é 6. Então 3/6 + 2/6 = 5/6.', 'Médio'),
('Qual é o resultado de 1/2 + 1/3?', 'Fração', 'ENEM', '2/5', 'n', '', 'Médio'),
('Qual é o resultado de 1/2 + 1/3?', 'Fração', 'ENEM', '1/6', 'n', '', 'Médio'),
('Qual é o resultado de 1/2 + 1/3?', 'Fração', 'ENEM', '2/3', 'n', '', 'Médio');

-- Exibir dados inseridos
SELECT * FROM questao_tema;
