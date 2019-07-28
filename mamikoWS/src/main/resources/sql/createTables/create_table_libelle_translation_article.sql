
CREATE SEQUENCE public.libelle_translation_article_id_seq
  INCREMENT 1
  MINVALUE 1
  MAXVALUE 99999
  START 1
  CACHE 1000;


CREATE TABLE public.libelle_translation_article
(
    libelle_id integer NOT NULL DEFAULT nextval('libelle_translation_article_id_seq'::regclass),
    libelle_code_langue character varying(10) ,
    libelle_label character varying(50) ,
    libelle_article_id integer,
    libelle_article_type character varying(50) ,
    CONSTRAINT pk_libelle_article_id PRIMARY KEY (libelle_id),
    CONSTRAINT libelle_translation_libelle_article_id_fkey FOREIGN KEY (libelle_article_id)
        REFERENCES public.articles (article_id) MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION
)
TABLESPACE pg_default;

ALTER TABLE public.libelle_translation_article
    OWNER to postgres;