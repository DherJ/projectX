


-- Table: public."order_detail"

-- DROP TABLE public."order_detail";

CREATE TABLE public."order_detail"
(
  order_detail_order_id integer NOT NULL,
  order_detail_article_id INTEGER,
  order_detail_quantity INTEGER,
  CONSTRAINT pk_order_detail PRIMARY KEY (order_detail_order_id, order_detail_article_id),
  CONSTRAINT fk_order_id FOREIGN KEY (order_detail_order_id) REFERENCES public.order(order_id),
  CONSTRAINT fk_article_id FOREIGN KEY (order_detail_article_id) REFERENCES public.articles(articles_id)
)

