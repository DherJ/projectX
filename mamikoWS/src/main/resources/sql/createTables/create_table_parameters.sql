
-- Table: public."parameters"

-- DROP TABLE public."parameters";

CREATE TABLE public."parameters"
(
  parameter_code character varying(30) NOT NULL,
  parameter_value character varying(30) NOT NULL,
  CONSTRAINT pk_parameter_code PRIMARY KEY (parameter_code)
)