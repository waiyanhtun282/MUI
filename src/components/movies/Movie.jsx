import { useDispatch } from "react-redux";
import MovieList from "./MovieList";
import { api, api_key } from "../../api";
import { useEffect } from "react";
 import { fetchMovies,  } from "../../redux/actions/movie";
import SlideCauroseal from "../common/cauroseal/SlideCauroseal";

const Movie = () => {
  const dispatch = useDispatch();

  const getMoives = async () => {
    const res = await api.get(
      `/discover/movie?api_key=${api_key}&with_networks=213`
    );
    dispatch(fetchMovies(res.data.results))
    // console.log("Movies",res);
  
  };

  useEffect(() => {
    getMoives();
  }, []);
  return (
    <div className=" mx-8">

      <MovieList />
    </div>
  );
};

export default Movie;
