import { useRoutes } from "react-router-dom";
import RootLayouts from "./RootLayouts";
import HomePage from "../pages/home/HomePage";
import PeoplePage from "../pages/people/PeoplePage";
import ActionMoviePage from "../pages/actionmovie/ActionMoviePage";
import RomancePage from "../pages/romance/RomancePage";

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
             <RomancePage />
             </RootLayouts>
            )
        },
        { 
            path:'/movie',
            element:(
             <RootLayouts  >
                <ActionMoviePage />
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