CREATE TABLE aula_autenticacao_signup (
  id VARCHAR(255) NOT NULL UNIQUE PRIMARY KEY,
  email VARCHAR(255) NOT NULL UNIQUE,
  password VARCHAR(255) NOT NULL
);

DESCRIBE aula_autenticacao_signup;

SELECT * FROM aula_autenticacao_signup;