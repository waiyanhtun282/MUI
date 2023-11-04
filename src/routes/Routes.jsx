import { useRoutes } from "react-router-dom";
import RootLayouts from "./RootLayouts";
import { lazy } from "react";
import HomePage from "../pages/home/HomePage";
import TvPage from "../pages/tv/TvPage";

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
        }
    ]);
    return elements;
 }