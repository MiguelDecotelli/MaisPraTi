CREATE SCHEMA IF NOT EXISTS escola_informatica;
USE escola_informatica;

CREATE TABLE IF NOT EXISTS professor (
    professor_id INT NOT NULL AUTO_INCREMENT,
    cpf VARCHAR(11) NOT NULL UNIQUE,
    nome VARCHAR(100) NOT NULL,
    data_nascimento DATE NOT NULL,
    titulacao VARCHAR(100) NOT NULL,
    PRIMARY KEY (professor_id)
) ENGINE = InnoDB;

CREATE TABLE IF NOT EXISTS telefone_professor (
    id INT NOT NULL AUTO_INCREMENT,
    professor_id INT NOT NULL,
    telefone VARCHAR(15) NOT NULL,
    PRIMARY KEY (id),
    FOREIGN KEY (professor_id) REFERENCES professor(professor_id)
        ON DELETE CASCADE
        ON UPDATE CASCADE
) ENGINE = InnoDB;

CREATE TABLE IF NOT EXISTS aluno (
    aluno_id INT NOT NULL AUTO_INCREMENT,
    codigo_matricula INT NOT NULL,
    data_matricula DATE NOT NULL,
    nome VARCHAR(100) NOT NULL,
    endereco TEXT,
    telefone VARCHAR(15),
    data_nascimento DATE NOT NULL,
    altura DECIMAL(3,2),
    peso DECIMAL(4,1),
    PRIMARY KEY (aluno_id)
) ENGINE = InnoDB;

CREATE TABLE IF NOT EXISTS curso (
    curso_id INT NOT NULL AUTO_INCREMENT,
    nome_curso VARCHAR(100) NOT NULL,
    descricao TEXT,
    PRIMARY KEY (curso_id)
) ENGINE = InnoDB;

CREATE TABLE IF NOT EXISTS turma (
    turma_id INT NOT NULL AUTO_INCREMENT,
    quantidade_alunos INT NOT NULL,
    horario TIME NOT NULL,
    duracao TIME NOT NULL,
    data_inicio DATE NOT NULL,
    data_final DATE NOT NULL,
    curso_id INT NOT NULL,
    professor_id INT NOT NULL,
    monitor_id INT,
    PRIMARY KEY (turma_id),
    FOREIGN KEY (curso_id) REFERENCES curso(curso_id)
        ON DELETE CASCADE
        ON UPDATE CASCADE,
    FOREIGN KEY (professor_id) REFERENCES professor(professor_id)
        ON DELETE SET NULL
        ON UPDATE CASCADE,
    FOREIGN KEY (monitor_id) REFERENCES aluno(aluno_id)
        ON DELETE SET NULL
        ON UPDATE CASCADE
) ENGINE = InnoDB;

CREATE TABLE IF NOT EXISTS matricula (
    matricula_id INT NOT NULL AUTO_INCREMENT,
    turma_id INT NOT NULL,
    aluno_id INT NOT NULL,
    ausencias INT DEFAULT 0,
    PRIMARY KEY (matricula_id),
    FOREIGN KEY (turma_id) REFERENCES turma(turma_id)
        ON DELETE CASCADE
        ON UPDATE CASCADE,
    FOREIGN KEY (aluno_id) REFERENCES aluno(aluno_id)
        ON DELETE CASCADE
        ON UPDATE CASCADE
) ENGINE = InnoDB;

-- 1) Listar os dados dos alunos
SELECT * FROM aluno;
-- 2) Listar os dados dos alunos e as turmas que eles estão matriculados
SELECT a.*, t.* FROM aluno a JOIN matricula m ON a.aluno_id = m.aluno_id JOIN turma t ON m.turma_id = t.turma_id;
-- 3) Listar os alunos que não possuem faltas
SELECT a.* FROM aluno a JOIN matricula m ON a.aluno_id = m.aluno_id WHERE m.ausencias = 0;
-- 4) Listar os professores e a quantidade de turmas que cada um leciona
SELECT p.nome, COUNT(t.turma_id) AS quantidade_turmas FROM professor p JOIN turma t ON p.professor_id = t.professor_id GROUP BY p.professor_id;
-- 5) Listar nome dos professores, um número de telefone do professor, dados da turma e alunos matriculados, ordenado por nome do professor, id turma e nome do aluno
SELECT p.nome AS nome_professor, tp.telefone AS telefone_professor, t.turma_id, t.data_inicio, t.data_final, t.horario, c.nome_curso, a.nome AS nome_aluno FROM professor p 
JOIN telefone_professor tp ON p.professor_id = tp.professor_id JOIN turma t ON p.professor_id = t.professor_id JOIN curso c ON t.curso_id = c.curso_id 
JOIN matricula m ON t.turma_id = m.turma_id JOIN aluno a ON m.aluno_id = a.aluno_id GROUP BY p.professor_id, t.turma_id, a.aluno_id ORDER BY p.nome, t.turma_id, a.nome;

-- 1) Alterar o nome de todos os professores para maiúsculo
UPDATE professor SET nome = UPPER(nome);
-- 2) Colocar o nome de todos os alunos que estão na turma com o maior número de alunos em maiúsculo
UPDATE aluno SET nome = UPPER(nome) WHERE aluno_id IN (SELECT m.aluno_id FROM matricula m JOIN turma t ON m.turma_id = t.turma_id WHERE t.quantidade_alunos = (SELECT MAX(quantidade_alunos) FROM turma));
-- 3) Excluir as ausências dos alunos nas turmas que estes são monitores
UPDATE matricula SET ausencias = 0 WHERE aluno_id IN (SELECT monitor_id FROM turma WHERE monitor_id IS NOT NULL);

