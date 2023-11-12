import { useDispatch } from "react-redux";
import SlideCauroseal from "./cauroseal/SlideCauroseal";
import { api } from "../../api";
import { api_key } from "../../api";
import {  caurosealTvMovies, fetchTvMovies,  } from "../../redux/actions/movie";
import { useEffect } from "react";
import TvMovie from "../../components/tv/TvMovie";

const TvPage = () => {
  const dispatch = useDispatch();

  const  getTvMovies = async()  =>{
    const res = await api.get(
      `movie/top_rated?api_key=${api_key}&language=en-US`
    );
    // console.log(res.data.results);
    dispatch(caurosealTvMovies(res.data.results));
    dispatch(fetchTvMovies(res.data.results));
  };
  useEffect(() =>{
    getTvMovies();
    
  },[]);

  return (
    <div>
       <SlideCauroseal />
      <section className="mx-8">
      <TvMovie />
      </section>
    </div>
  );
};

export default TvPage;
