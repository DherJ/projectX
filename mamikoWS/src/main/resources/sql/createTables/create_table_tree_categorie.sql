-- Sequence: public.tree_categorie_id_seq

-- DROP SEQUENCE public.tree_categorie_id_seq;

CREATE SEQUENCE public.tree_categorie_id_seq
  INCREMENT 1
  MINVALUE 1
  MAXVALUE 99999
  START 1
  CACHE 1000;


-- Table: public."tree_categorie"

-- DROP TABLE public."tree_categorie";

CREATE TABLE public."tree_categorie"
(
  tree_categorie_level_id integer NOT NULL DEFAULT nextval('tree_categorie_id_seq'::regclass),
  tree_categorie_level_num integer NOT NULL,
  tree_categorie_parent_level_num integer,
  tree_categorie_parent_level_id integer,
  CONSTRAINT pk_tree_categorie_level_id PRIMARY KEY (tree_categorie_level_id)
)