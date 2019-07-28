-- Table: public."link_categorie_article"

-- DROP TABLE public."link_categorie_article";

CREATE TABLE public."link_categorie_article"
(
  article_id integer NOT NULL,
  categorie_id integer NOT NULL,
  CONSTRAINT pk_link_categorie_article_id PRIMARY KEY (article_id, categorie_id),
  FOREIGN KEY (categorie_id) REFERENCES tree_categorie(tree_categorie_level_id),
  FOREIGN KEY (article_id) REFERENCES articles(article_id)
)