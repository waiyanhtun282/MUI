import { Option, Select, Typography } from "@material-tailwind/react";
import { useSelector } from "react-redux";
import CardBox from "../common/card/CardBox";

const ActionMovie = () => {
  let actionMoviesData =[];
  actionMoviesData =useSelector(state =>state.moviesData.movies);

  return (
    <div className="my-8 select-none">
    <div className="  flex items-center justify-between ">
      <Typography variant="h5">Tv Movies</Typography>
      <div>
        <div className=" flex gap-3  ">
          <Select variant="outlined" label="SortBy">
            <Option value="default">SortBy</Option>
            <Option value="release_date">Date</Option>
            <Option value="vote_average">Rating</Option>
          </Select>
          <Select variant="outlined" label="Ascending">
            <Option value="asc">Asecending</Option>
            <Option value="desc">Descending</Option>
          </Select>
        </div>
      </div>
    </div>
    <div className="   flex  flex-wrap justify-between items-center gap-5 mt-10">
    {
      actionMoviesData.length > 0 ?
      actionMoviesData.map((movie) =>  <CardBox   movieCard={movie} key={movie.id}/>)
      : <h1>Loading</h1>
    }
       
    </div>
  </div>
    );
};

export default ActionMovie;
