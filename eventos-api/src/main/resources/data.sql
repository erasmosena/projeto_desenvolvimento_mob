--select 1 ;
delete from public.usuario;

-- INSERT INTO public.usuario(
--      identificador, login, nome, senha)
-- VALUES ( '37ceac42-66e7-11ed-9022-0242ac120002','erasmo', 'Erasmo Sena', 'asdf');
--
-- INSERT INTO public.usuario(
--     identificador, login, nome, senha)
-- VALUES ( '53f050f6-66e7-11ed-9022-0242ac120002','jamesh', 'James Hetfield', 'asdf');

delete from public.evento;

-- INSERT INTO public.evento(
--  data_fim, data_inicio, descricao, id_usuario, nome)
-- VALUES ('2022-11-11 18:00', '2022-11-11 08:00', 'Formatura dos alunos de ADS ', (select id from usuario where identificador= uuid('37ceac42-66e7-11ed-9022-0242ac120002')), 'Formatura - Turma 1 ');
--
-- INSERT INTO public.evento(
--     id, data_fim, data_inicio, descricao, id_usuario, nome)
-- VALUES (2, '2022-11-12 18:00', '2022-11-12 08:00', 'Formatura dos alunos de ADS ', 1, 'Formatura - Turma 2 ');
--
-- INSERT INTO public.evento(
--     id, data_fim, data_inicio, descricao, id_usuario, nome)
-- VALUES (3, '2022-11-13 18:00', '2022-11-13 08:00', 'Formatura dos alunos de ADS ', 2, 'Formatura - Turma 3 ');
