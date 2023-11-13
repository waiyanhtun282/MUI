import { useDispatch } from "react-redux";
import SlideCauroseal from "../../components/common/cauroseal/SlideCauroseal";
import { api, api_key } from "../../api/index";
import { fetchActionMovies } from "../../redux/actions/movie";
import { useEffect } from "react";
import ActionMovie from "../../components/actionMovie/ActionMovie";
const ActionMoviePage = () => {
  const dispatch = useDispatch();

  const getActionMovies = async () => {
    const res = await api.get(
      `/discover/movie?api_key=${api_key}&language=en-US&with_genres=28`
    );
    dispatch(fetchActionMovies(res.data.results));
  };

  useEffect(() => {
    getActionMovies();
  }, []);
  return (
    <div>
      <SlideCauroseal />
      <section className="mx-8">
      <ActionMovie />
      </section>
    </div>
  );
};

export default ActionMoviePage;
