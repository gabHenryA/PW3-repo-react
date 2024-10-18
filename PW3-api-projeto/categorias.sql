create database bd_rpgismo_api;

use bd_rpgismo_api;

insert into tbl_categorias (nome_categoria, createdAt, updatedAt) VALUES ('Regras e referências', now(), now());
insert into tbl_categorias (nome_categoria, createdAt, updatedAt) VALUES ('Personagem', now(), now());
insert into tbl_categorias (nome_categoria, createdAt, updatedAt) VALUES ('Jogo físico', now(), now());
insert into tbl_categorias (nome_categoria, createdAt, updatedAt) VALUES ('Visuais e auxiliares', now(), now());
insert into tbl_categorias (nome_categoria, createdAt, updatedAt) VALUES ('Outro', now(), now());

drop database bd_rpgismo_api;