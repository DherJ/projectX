CREATE TABLE public.product_type
(
  id integer,
  libelle character varying(100)
)
WITH (
  OIDS=FALSE
);
ALTER TABLE public.product_type
  OWNER TO postgres;