-- Sequence: public.arbo_articles_id_seq

-- DROP SEQUENCE public.arbo_articles_id_seq;

CREATE SEQUENCE public.arbo_articles_id_seq
  INCREMENT 1
  MINVALUE 1
  MAXVALUE 99999
  START 1
  CACHE 1000;


-- Table: public."arbo_articles"

-- DROP TABLE public."arbo_articles";

CREATE TABLE public."arbo_articles"
(
  client_id integer NOT NULL DEFAULT nextval('arbo_articles_id_seq'::regclass),
  client_name character varying(30),
  client_firstname character varying(30),
  client_adress character varying,
  client_mail character varying(70),
  client_password character varying,
  CONSTRAINT pk_client_id PRIMARY KEY (client_id)
)
WITH (
  OIDS=FALSE
);
ALTER TABLE public."clients"
  OWNER TO postgres;
