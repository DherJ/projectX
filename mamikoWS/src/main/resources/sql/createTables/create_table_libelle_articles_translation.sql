-- Sequence: public.libelle_article_translation_id_seq

-- DROP SEQUENCE public.libelle_article_translation_id_seq;

CREATE SEQUENCE public.libelle_article_translation_id_seq
  INCREMENT 1
  MINVALUE 1
  MAXVALUE 99999
  START 1
  CACHE 1000;


-- Table: public."libelle_article_translation"

-- DROP TABLE public."libelle_article_translation";

CREATE TABLE public."libelle_article_translation"
(
  libelle_article_id integer NOT NULL DEFAULT nextval('libelle_article_translation_id_seq'::regclass),
  libelle_article_code_langue character varying(10),
  libelle_article_label character varying(50),
  libelle__article_id integer,
  CONSTRAINT pk_libelle_rticle_id PRIMARY KEY (libelle_article_id),
  FOREIGN KEY (libelle_article_id) REFERENCES articles(article_id)
)