enum GENERO {
  ACAO = "ação",
  DRAMA = "drama",
  COMEDIA = "comédia",
  ROMANCE = "romance",
  TERROR = "terror",
}

// 1. nome do filme; 2. ano de lançamento e 3. gênero do filme.
// 4. pontuação em site de resenha

type MovieType = {
  name: string;
  launchYear: number;
  genre: GENERO;
  review?: number;
};

const buildMovieObject = (
  name: string,
  launchYear: number,
  genre: GENERO,
  review?: number
): MovieType => {
  let object: MovieType;
  if (review) {
    object = {
      name,
      launchYear,
      genre,
      review,
    };
  } else {
    object = {
      name,
      launchYear,
      genre,
    };
  }

  return object;
};

console.log(buildMovieObject("Duna", 2021, GENERO.ACAO, 74));
console.log(buildMovieObject("Duna", 2021, GENERO.ACAO));
