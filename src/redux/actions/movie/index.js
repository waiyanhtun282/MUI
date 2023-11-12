import { ACTION_TYPE } from "../action_type";
export const caurosealMovies = (movies) => {
  // console.log(movies);
  return {
    type: ACTION_TYPE.CAUROSEAL_MOVIES,
    payload: movies,
  };
};

export const caurosealTvMovies = (movies) => {
  // console.log(movies);
  return {
    type: ACTION_TYPE.CAUROSEAL_TV_MOVIES,
    payload: movies,
  };
};

export const fetchMovies = (movies) => {
  console.log(movies);
  return {
    type: ACTION_TYPE.FETCH_MOVIES,
    payload: movies,
  };
};

export const fetchTvMovies = (movies) => {
  console.log(movies);
  return {
    type: ACTION_TYPE.FETCH_TV_MOVIES,
    payload: movies,
  };
};

export const selectedMovie = (movie) => {
  return {
    type: ACTION_TYPE.SELECTED_MOVIES,
    payload: movie,
  };
};

export const removeFetchMovie = () => {
  return {
    type: ACTION_TYPE.REMOVE_FETCHED_MOVIES,
    payload: null,
  };
};
