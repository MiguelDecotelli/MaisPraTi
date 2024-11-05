-- A cafeteria BomGosto deseja controlar as suas vendas de café. A BomGosto controla suas vendas a partir de uma comanda. 
-- Uma comanda tem um código único, data, o número da mesa do cliente e o nome do cliente registrados. Nos itens da comanda é possível relacionar 
-- vários cafés listados no cardápio que foram vendidos. Cada item da comanda possui o código do cardápio e a quantidade requisitada deste e, 
-- não é possível inserir o mesmo código de cardápio mais de uma vez na mesma comanda.
-- No cardápio é apresentado o nome único do café, a descrição da sua composição e o preço unitário.

CREATE SCHEMA IF NOT EXISTS bom_gosto;

use bom_gosto;

CREATE TABLE IF NOT EXISTS cliente (
`cliente_id` INT NOT NULL AUTO_INCREMENT,
`nome_cliente`VARCHAR(45) NOT NULL,
PRIMARY KEY (`cliente_id`))
ENGINE = InnoDB;

CREATE TABLE IF NOT EXISTS cardapio (
`id_café` INT NOT NULL AUTO_INCREMENT,
`nome_café` VARCHAR(45) UNIQUE NOT NULL,
`composição` TEXT NOT NULL,
`preço` REAL NOT NULL,
PRIMARY KEY (`id_café`))
ENGINE InnoDB;

CREATE TABLE IF NOT EXISTS comanda (
`id_comanda` INT NOT NULL AUTO_INCREMENT,
`data` DATETIME NOT NULL,
`numero_mesa` INT NOT NULL,
`id_cliente` INT NOT NULL,
PRIMARY KEY (`id_comanda`),
FOREIGN KEY (`id_cliente`) REFERENCES `cliente` (`cliente_id`)
	ON DELETE CASCADE
	ON UPDATE NO ACTION)
ENGINE = InnoDB;

CREATE TABLE IF NOT EXISTS itens_comanda (
  `id_comanda` INT NOT NULL,
  `id_café` INT NOT NULL,
  `quantidade` INT NOT NULL,
  PRIMARY KEY (`id_comanda`, `id_café`),
  FOREIGN KEY (`id_comanda`) REFERENCES `comanda` (`id_comanda`)
    ON DELETE CASCADE
    ON UPDATE NO ACTION,
  FOREIGN KEY (`id_café`) REFERENCES `cardapio` (`id_café`)
    ON DELETE CASCADE
    ON UPDATE NO ACTION)
ENGINE = InnoDB;

-- 1)Faça uma listagem do cardápio ordenada por nome;
SELECT * FROM cardapio ORDER BY nome_café;
-- 2) Apresente todas as comandas (código, data, mesa e nome do cliente) e os itens da comanda (código comanda, nome do café, descricão, quantidade, 
-- preço unitário e preço total do café) destas ordenados data e código da comanda e, também o nome do café;
SELECT c.id_comanda, c.data, c.numero_mesa, cl.nome_cliente, i.id_café, ca.nome_café, ca.composição, i.quantidade, ca.preço, (i.quantidade * ca.preço) AS preço_total FROM comanda c
JOIN cliente cl ON c.id_cliente = cl.cliente_id JOIN itens_comanda i ON c.id_comanda = i.id_comanda JOIN cardapio ca ON i.id_café = ca.id_café ORDER BY c.data, c.id_comanda, ca.nome_café;
-- 3) Liste todas as comandas (código, data, mesa e nome do cliente) mais uma coluna com o valor total da comanda. Ordene por data esta listagem;
SELECT c.id_comanda AS codigo_comanda, c.data, c.numero_mesa, cl.nome_cliente, SUM(i.quantidade * ca.preço) AS valor_total_comanda FROM comanda c
JOIN cliente cl ON c.id_cliente = cl.cliente_id JOIN itens_comanda i ON c.id_comanda = i.id_comanda JOIN cardapio ca ON i.id_café = ca.id_café 
GROUP BY c.id_comanda, c.data, c.numero_mesa, cl.nome_cliente ORDER BY c.data;
-- 4) Faça a mesma listagem das comandas da questão anterior, mas traga apenas as comandas que possuem mais do que um tipo de café na comanda;
SELECT c.id_comanda, c.data, c.numero_mesa, cl.nome_cliente, SUM(i.quantidade * ca.preço) AS valor_total_comanda FROM comanda c 
JOIN cliente cl ON c.id_cliente = cl.cliente_id JOIN itens_comanda i ON c.id_comanda = i.id_comanda JOIN cardapio ca ON i.id_café = ca.id_café 
GROUP BY c.id_comanda, c.data, c.numero_mesa, cl.nome_cliente HAVING COUNT(DISTINCT i.id_café) > 1 ORDER BY c.data;
-- 5) Qual o total de faturamento por data? ordene por data esta consulta.
SELECT DATE(c.data) AS data, SUM(i.quantidade * ca.preço) AS total_faturamento FROM comanda c JOIN itens_comanda i ON c.id_comanda = i.id_comanda 
JOIN cardapio ca ON i.id_café = ca.id_café GROUP BY DATE(c.data) ORDER BY DATE(c.data);