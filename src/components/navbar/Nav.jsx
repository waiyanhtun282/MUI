import {
  Button,
  IconButton,
  Input,
  
  Navbar,
  Typography,
} from "@material-tailwind/react";
import { AiOutlineSearch } from "react-icons/ai";
import React from "react";
import { Link, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { serachMovies } from "../../redux/actions/movie";

const Nav = () => {
  const [openNav, setOpenNav] = React.useState(false);
  const  {pathname} = useLocation();
  // console.log(pathname);
  const dispatch =useDispatch();
  const moviesAll =useSelector(state =>state.moviesData.movies);
  const handleSearch = (e) =>{
    // if(e.target.value){
      const searchText =e.target.value;
      const filterMovie = moviesAll.filter((item) => item.title.toLowerCase().includes(searchText.toLowerCase()));
      dispatch(serachMovies(filterMovie))
    // }
  }

  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);

  const navList = (
    <ul className="mt-2 mb-4 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6 ">
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal"
      >
        <Link to="/" className={(pathname === '/') ? 'active' : ''}>Home</Link>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal"
      >
        <Link to="/tv" className={(pathname === '/tv') ? 'active' : ''}>Romance Movies</Link>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal cursor-pointer"
      >
      <Link to={'/movie'} className={(pathname === '/movie') ? 'active' : ''}>
      Action Movie
      </Link>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal"
      >
      <Link to={'/people'} className={(pathname === '/people') ? 'active' : ''}>
      People
      </Link>
      </Typography>
    </ul>
  );

  return (
    <div className=" max-h-[768px] w-[calc(100% -48px)]  bg-blue-gray-50 backdrop-blur-sm">
      <Navbar className="sticky top-0 z-10 h-max max-w-full rounded-none px-4 py-2 lg:px-8 lg:py-4">
        <div className="   flex justify-between  items-center    text-blue-gray-900">
          <Typography
            as="a"
            href="#"
            className="mr-14 cursor-pointer py-1.5 font-semibold justify-self-start text-lg"
          >
            TMDB Movie
          </Typography>
          <div className=" hidden lg:block">{navList}</div>

          <div className="flex items-center gap-1 justify-self-end">
            <div className="mr-1 hidden lg:block">
              <Input
                label="Search Movie"  
                icon={<AiOutlineSearch size={20} />}
                onChange={handleSearch}
              />
            </div>
            <div className="flex items-center gap-x-1 ">
              <Button
                variant="text"
                size="sm"
                className="hidden lg:inline-block"
              >
                <span>Log In</span>
              </Button>
              <Button
                variant="gradient"
                size="sm"
                className="hidden lg:inline-block"
              >
                <span>Sign in</span>
              </Button>
            </div>
            <IconButton
              variant="text"
              className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
              ripple={false}
              onClick={() => setOpenNav(!openNav)}
            >
              {openNav ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  className="h-6 w-6"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </IconButton>
          </div>
        </div>
      </Navbar>
    </div>
  );
};

export default Nav;
