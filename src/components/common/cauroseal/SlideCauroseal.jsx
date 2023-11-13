import { Button, Carousel } from "@material-tailwind/react";
// import React from "react";
import { useSelector } from "react-redux";

const SlideCauroseal = () => {
  // console.log(movieItem);
  let caurosealMovieData = [];
  caurosealMovieData = useSelector((state) => state.moviesData.movies);
  // console.log(caurosealMovieData);
  return (
    <div className="  lg:h-screen ">
      <Carousel
        transition={{ duration: 0.8 }}
        className="  lg:h-screen "
        navigation={({ setActiveIndex, activeIndex, length }) => (
          <div className="absolute bottom-4 left-2/4 z-50 flex -translate-x-2/4 gap-2">
            {new Array(length).fill("").map((_, i) => (
              <span
                key={i}
                className={`block h-1 cursor-pointer rounded-2xl transition-all content-[''] ${
                  activeIndex === i ? "w-8 bg-white" : "w-4 bg-white/50"
                }`}
                onClick={() => setActiveIndex(i)}
              />
            ))}
          </div>
        )}
      >
        {caurosealMovieData.length > 0 ? (
         caurosealMovieData.map((data) => (
          <div key={data.id} className=" h-full relative ">
          <img
            src={`https://image.tmdb.org/t/p/original${data.poster_path}`}
            alt="image 1"
            className="h-[100%] w-full   object-cover"
          />
          <p className="  bg-[#090909] absolute top-0 left-0  w-full h-full  opacity-40"></p>
          <div className=" absolute  left-[10%] top-[45%] ">
           <div className="   my-3  space-y-5">
           <div className=" max-w-lg space-y-5">
           <h1 className=" text-white text-3xl  font-medium ">
           {data.original_title}
          </h1>
          <p className="text-white ">{data.overview.slice(0,250)}....</p>
           </div>
           <Button  color="red" variant="gradient" size="lg" >
           Watch now
           </Button>
           </div>
          </div>
        </div>
         ))
        ) : (
          <h1>Loading</h1>
        )}
      </Carousel>
    </div>
  );
};

export default SlideCauroseal;
