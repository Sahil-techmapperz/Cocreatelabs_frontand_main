import React, { useEffect } from "react";
import AboutHome from "../component/AboutHome";
import BuildCon from "../component/BuildCon";
import Process from "../component/Process";
import Mission from "../component/Mission";
import Credit from "../component/Credit";
import Team from "../component/Team";



export const About = () => {
   useEffect(() => {
        window.scrollTo(0, 0);
      }, []);
    return (
        <>
        <div class="font-sans w-full pt-[80px]">
            {<AboutHome />}
            {<BuildCon />}
            {<Process />}
            {<Mission />}
            {<Credit />}
            {<Team />}


            </div>

        </>
    );
};