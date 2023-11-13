import { useEffect } from "react";
import Movie from "../../components/movies/Movie";
import {  fetchMovies } from "../../redux/actions/movie/index";
import { api, api_key } from "../../api";
import { useDispatch } from "react-redux";
import SlideCauroseal from "../../components/common/cauroseal/SlideCauroseal";
const HomePage = () => {
  const dispatch = useDispatch();

  const getMoives = async () => {
    const res = await api.get(
      `/movie/top_rated?api_key=${api_key}&language=en-US`
    );
    dispatch(fetchMovies(res.data.results));
  };

  useEffect(() => {
    getMoives();
  }, []);
  return (
    <div>
      <SlideCauroseal />

      <Movie />
    </div>
  );
};

export default HomePage;
