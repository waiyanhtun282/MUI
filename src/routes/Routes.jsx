import { useRoutes } from "react-router-dom";
import RootLayouts from "./RootLayouts";
import HomePage from "../pages/home/HomePage";
import TvPage from "../pages/tv/TvPage";
import MoviePage from "../pages/movie/MoviePage";
import PeoplePage from "../pages/people/PeoplePage";

 export default function Routes() {
    const elements =useRoutes([
        {
            path:'/',
            element:(
             <RootLayouts  >
             <HomePage />
             </RootLayouts>
            )
        },
        {
            path:'/tv',
            element:(
             <RootLayouts  >
             <TvPage />
             </RootLayouts>
            )
        },
        { 
            path:'/movie',
            element:(
             <RootLayouts  >
                <MoviePage />
             </RootLayouts>
            )
        },
        { 
            path:'/people',
            element:(
             <RootLayouts  >
                <PeoplePage />
             </RootLayouts>
            )
        }

    ]);
    return elements;
 }