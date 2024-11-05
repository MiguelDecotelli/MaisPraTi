CREATE SCHEMA IF NOT EXISTS `escola`;

USE `escola`;

CREATE TABLE IF NOT EXISTS `aluno` (
`aluno_id` INT NOT NULL AUTO_INCREMENT,
`nome` VARCHAR(45) NOT NULL,
`curso` VARCHAR(45) NOT NULL,
`nivel` VARCHAR(45) NOT NULL,
`idade`INT NOT NULL,
PRIMARY KEY (`aluno_id`))
ENGINE = InnoDB;

CREATE TABLE IF NOT EXISTS `turma` (
`turma_id` INT NOT NULL AUTO_INCREMENT,
`nome_turma` VARCHAR(45) NOT NULL,
`sala` VARCHAR(45) NOT NULL,
`horario` DATETIME NOT NULL,
PRIMARY KEY (`turma_id`))
ENGINE = InnoDB;

CREATE TABLE IF NOT EXISTS `matricula` (
`matricula_id` INT NOT NULL AUTO_INCREMENT,
`nota_1` REAL,
`nota_2` REAL,
`nota_3` REAL,
`nota_final` REAL NOT NULL,
`numero_faltas` INT NOT NULL,
`id_aluno` INT NOT NULL,
`id_turma` INT NOT NULL,
PRIMARY KEY (`matricula_id`),
FOREIGN KEY (`id_aluno`) REFERENCES `aluno` (`aluno_id`)
	ON DELETE CASCADE
	ON UPDATE NO ACTION,
FOREIGN KEY (`id_turma`) REFERENCES `turma` (`turma_id`)
	ON DELETE CASCADE
	ON UPDATE NO ACTION
)
ENGINE = InnoDB;

-- 1)Quais os nomes de todos os alunos?
SELECT nome FROM aluno;
-- 2)Quais os números das matrículas dos alunos?
SELECT matricula_id FROM matricula;
-- 3)Quais os números das matrículas dos alunos que não estão matriculados em uma turma?
SELECT matricula_id FROM matricula WHERE id_turma IS NULL;
-- 4)Quais os números dos alunos matriculados em uma turma de número '30'?
SELECT a.aluno_id FROM aluno a JOIN matricula m ON a.aluno_id = m.id_aluno JOIN turma t ON m.id_turma = t.turma_id WHERE t.sala = "30";
-- 5) Qual o horário da turma do aluno 'PATOLINO'?
SELECT t.horario FROM turma t JOIN matricula m ON t.turma_id = m.id_turma JOIN aluno a ON a.aluno_id = m.id_aluno WHERE a.nome = "PATOLINO";
