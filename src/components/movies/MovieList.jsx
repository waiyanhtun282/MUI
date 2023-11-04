import { Card, Option, Select, Typography } from "@material-tailwind/react";
import CardBox from "../common/card/CardBox";
import { useSelector } from "react-redux";

const MovieList = () => {
  let movieAll=[];
 movieAll = useSelector(state =>state.moviesData.movies);
  // console.log(movieAll);
  return (
    <div className="my-8 select-none">
      <div className="  flex items-center justify-between ">
        <Typography variant="h5">Popular Movies</Typography>
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
        movieAll.length > 0 ?
        movieAll.map((movie) =>  <CardBox   movieCard={movie} key={movie.id}/>)
        : <h1>Loading</h1>
      }
         
      </div>
    </div>
  );
};

export default MovieList;
