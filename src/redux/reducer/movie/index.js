import { ACTION_TYPE } from "../../actions/action_type";

const initialState = {
  curosealMovies:[],
  movies: [],
  movie: {}, 
};

export const movieReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ACTION_TYPE.CAUROSEAL_MOVIES:
      return {
        ...state,
        curosealMovies:payload
      }
    case ACTION_TYPE.FETCH_MOVIES: 
    return{
        ...state,
        movies:payload
    }
    case ACTION_TYPE.SELECTED_MOVIES: 
    return{
        ...state,
        movie:payload
    }
    case ACTION_TYPE.REMOVE_FETCHED_MOVIES: 
    return{
      ...state,
      movie:{}
    }
    default: return state;
  }
};
