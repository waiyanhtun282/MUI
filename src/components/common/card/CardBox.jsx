const CardBox = () => {
  return (
    <div className="  group ">
    <div className="w-[340px]  h-fit relative">
      <img
        src="https://plus.unsplash.com/premium_photo-1697968234949-854d20ef0e7a?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyfHx8ZW58MHx8fHx8"
        className="w-full h-full"
      />
      <div className="absolute top-0 left-0 bg-black w-full h-full opacity-0 hover:opacity-50 transition-opacity duration-300"></div>
      <h1 className="absolute  bottom-16  left-10 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 ">Heading1</h1>
    </div>
    </div>
  );
};

export default CardBox;
