-- Sequence: public.comment_comment_id_seq

-- DROP SEQUENCE public.comment_comment_id_seq;

CREATE SEQUENCE public.clients_id_seq
  INCREMENT 1
  MINVALUE 1
  MAXVALUE 99999
  START 1
  CACHE 1000;
ALTER TABLE public.clients_id_seq
  OWNER TO postgres;


-- Table: public."clients"

-- DROP TABLE public."clients";

CREATE TABLE public."clients"
(
  client_id integer NOT NULL DEFAULT nextval('clients_id_seq'::regclass),
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
