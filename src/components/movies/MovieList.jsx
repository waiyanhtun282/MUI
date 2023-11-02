import { Card, Option, Select, Typography } from "@material-tailwind/react";
import CardBox from "../common/card/CardBox";

const MovieList = () => {
  return (
    <div className="my-8">
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
      <div className="  grid grid-cols-4 gap-5 mt-10">
          <CardBox  />
          <CardBox  />
          <CardBox  />
          <CardBox  />
           <CardBox  />
          <CardBox  />
          <CardBox  />
          <CardBox  />
      </div>
    </div>
  );
};

export default MovieList;
