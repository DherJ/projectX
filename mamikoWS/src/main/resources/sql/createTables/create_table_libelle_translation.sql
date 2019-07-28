-- Sequence: public.libelle_translation_id_seq

-- DROP SEQUENCE public.libelle_translation_id_seq;

CREATE SEQUENCE public.libelle_translation_id_seq
  INCREMENT 1
  MINVALUE 1
  MAXVALUE 99999
  START 1
  CACHE 1000;


-- Table: public."libelle_translation"

-- DROP TABLE public."libelle_translation";

CREATE TABLE public."libelle_translation"
(
  libelle_id integer NOT NULL DEFAULT nextval('libelle_translation_id_seq'::regclass),
  libelle_code_langue character varying(10),
  libelle_label character varying(50),
  libelle_level_id integer,
  CONSTRAINT pk_libelle_id PRIMARY KEY (libelle_id),
  FOREIGN KEY (libelle_level_id) REFERENCES arbo_categorie(tree_categorie_level_id)
)