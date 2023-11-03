import { ACTION_TYPE } from "../../actions/action_type";

const initialState = {
  movies: [],
  movie: {},
};

export const movieReducer = (state = initialState, { type, payload }) => {
  switch (type) {
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
    default: return state;
  }
};