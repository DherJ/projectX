CREATE TABLE public.types_articles
(
  type_article_id integer,
  type_article_label character varying(100)
)
WITH (
  OIDS=FALSE
);
ALTER TABLE public.types_articles
  OWNER TO postgres;