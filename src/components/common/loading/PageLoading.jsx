import { Spinner } from "@material-tailwind/react";

const PageLoading = () => {
  return (
     <div className=" h-screen flex justify-center items-center">
     <Spinner  color="indigo"   className=" w-16 h-16"/>
     </div>
  );
};

export default PageLoading;
