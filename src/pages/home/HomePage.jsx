import { useEffect } from "react";
import Movie from "../../components/movies/Movie";
import { caurosealMovies } from "../../redux/actions/movie/index";
import { api, api_key } from "../../api";
import { useDispatch,  } from "react-redux";
import SlideCauroseal from "./cauroseal/SlideCauroseal";
const HomePage = () => {
  const dispatch = useDispatch();
  
  // console.log(movieItem);
  const getMoives = async () => {
    const res = await api.get(
      `/discover/movie?api_key=${api_key}&with_networks=213`
    );
    dispatch(caurosealMovies(res.data.results));
  };

  useEffect(() => {
    getMoives();
  }, []);
  return (
    <div>
      <SlideCauroseal  />

      <Movie />
    </div>
  );
};

export default HomePage;
