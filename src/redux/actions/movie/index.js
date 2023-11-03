import { ACTION_TYPE } from "../action_type";

export const fetchMovies = (movies) => {
  // console.log(movies);
  return {
    type: ACTION_TYPE.FETCH_MOVIES,
    payload: movies,
  };
};

export const selectedMovie = (movie) => {
  return {
    type: ACTION_TYPE.SELECTED_MOVIES,
    payload: movie,
  };
};
