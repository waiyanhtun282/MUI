import { useDispatch } from "react-redux";
import { api } from "../../api";
import SlideCauroseal from "../../components/common/cauroseal/SlideCauroseal";
import { api_key } from "../../api";
import {  fetchTvMovies } from "../../redux/actions/movie";
import { useEffect } from "react";
import TvMovie from "../../components/tv/TvMovie";

const RomancePage = () => {
  const dispatch = useDispatch();

  const getTvMovies = async () => {
    const res = await api.get(
      `/discover/movie?api_key=${api_key}&language=en-US&with_genres=10749`
    );
    // console.log(res.data.results);
    dispatch(fetchTvMovies(res.data.results));
  };
  useEffect(() => {
    getTvMovies();
  }, []);

  return (
    <div>
      <SlideCauroseal />
      <section className="mx-8">
        <TvMovie />
      </section>
    </div>
  );
};

export default RomancePage;
