import {  Option, Select, Typography } from "@material-tailwind/react";
import CardBox from "../common/card/CardBox";
import { useSelector } from "react-redux";

const MovieList = () => {

  let movieAll=[];
 movieAll = useSelector(state =>state.moviesData.movies);
  // console.log(movieAll);
  const filterMovie =useSelector(state =>state.moviesData.searchItem);

  let filteredMovies =[...movieAll];
  if (filterMovie && typeof filterMovie === "string") {
    filteredMovies = filteredMovies.filter((movie) =>
      movie.title.toLowerCase().includes(filterMovie.toLowerCase())
    );
  }
//  console.log(filteredMovies);
  return (
    <div className="my-8 select-none">
      <div className="  flex items-center justify-between ">
        <Typography variant="h5">Trending Movies</Typography>
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
      {filteredMovies.length > 0 ? (
        filteredMovies.map((movie) => (
          <CardBox movieCard={movie} key={movie.id} />
        ))
      ) : (
        <h1>No matching movies found</h1>
      )}
         
      </div>
    </div>
  );
};

export default MovieList;
