import { Button, Chip } from "@material-tailwind/react";

const CardBox = ({ movieCard }) => {
  // console.log(movieCard);
  return (
    <div className="  group  cursor-pointer">
      <div className="w-[340px]  h-fit relative rounded-md   duration-300 transition-all   hover:scale-110     hover:rounded-md">
        <img
          src={`https://image.tmdb.org/t/p/original${movieCard.poster_path}`}
          className="w-[400px]  h-[380px] object-cover rounded-md  hover:rounded-md"
        />
        <div className="absolute top-0 left-0 bg-black w-full h-full opacity-0 group-hover:opacity-50 transition-opacity duration-300 "></div>
        <div className="absolute   bottom-[8%]  left-10 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300  ">
          <h1 className=" font-medium text-[20px] mb-3">
            {movieCard.title.slice(0, 30)}
          </h1>
          <p>{movieCard.overview.slice(0, 200)}...</p>
         <div className=" flex gap-3 mt-3   justify-around">
         <div  className="  ">
         <Chip color="amber" value= {((movieCard.popularity)/ 100).toFixed(2)} />
         </div>
         
         <Button size="sm" variant="gradient" color="light-blue"  className=" flex-1 mr-3   inline ">
         {movieCard.release_date}
         </Button>
         </div>

        </div>
      </div>
    </div>
  );
};

export default CardBox;
