import { useParams } from "react-router-dom";
import { api, api_key } from "../../api";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { selectedMovie } from "../../redux/actions/movie";
import { Card, Typography } from "@material-tailwind/react";

const MovieDetail = () => {
  const dispatch = useDispatch();
  const { movieId } = useParams();
  // console.log(id);
  const getSelectedMovie = async () => {
    const res = await api.get(`/movie/${movieId}?api_key=${api_key}`);
    // dispatch(res.data)
    if (res.data) {
      dispatch(selectedMovie(res.data));
    }
  };

  useEffect(() => {
    getSelectedMovie();
  });
  return <div></div>;
};

export default MovieDetail;
