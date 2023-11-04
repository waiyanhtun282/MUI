import { useEffect } from "react";
import Movie from "../../components/movies/Movie";
import {caurosealMovies} from "../../redux/actions/movie/index";
import { api, api_key } from "../../api";
import { useDispatch, useSelector } from "react-redux";
import SlideCauroseal from "../../components/common/cauroseal/SlideCauroseal";
const HomePage = () => {
  const dispatch = useDispatch();
  let caurosealMovieData = [];
  const movieItem = caurosealMovieData.map((item) => item);
  // console.log(movieItem);
  const getMoives = async () => {
    const res = await api.get(
      `/discover/movie?api_key=${api_key}&with_networks=213`
    );
    dispatch(caurosealMovies(res.data.results));
    // console.log("Movies",res);
  };

  useEffect(() => {
    getMoives();
  }, []);
  return (
    <div>
     
       <SlideCauroseal  movieItem={movieItem}/>
       
      
      <Movie />
    </div>
  );
};

export default HomePage;
