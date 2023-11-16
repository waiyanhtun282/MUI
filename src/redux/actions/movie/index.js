import { ACTION_TYPE } from "../action_type";

export const fetchMovies = (movies) => {
  // console.log(movies);
  return {
    type: ACTION_TYPE.FETCH_MOVIES,
    payload: movies,
  };
};

export const fetchTvMovies = (movies) => {
  return {
    type: ACTION_TYPE.FETCH_TV_MOVIES,
    payload: movies,
  };
};

export const fetchActionMovies = (movies) => {
  // console.log("moviesAction",movies);
  return {
    type: ACTION_TYPE.FETCH_ACTION_MOVIES,
    payload: movies,
  };
};

export const serachMovies= (movies) =>{
  return {
    type:ACTION_TYPE.SEARCH_MOVIES,
    payload:movies
  }
}

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
