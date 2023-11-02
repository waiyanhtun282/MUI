import { ACTION_TYPE } from "../action_type";

export const fetchMovies = (movies) => {
  return {
    type: ACTION_TYPE.SELECTED_MOVIE,
    payload: movies,
  };
};

export const selectedMovie = (movie) => {
  return {
    type: ACTION_TYPE.SELECTED_MOVIE,
    payload: movie,
  };
};
