import React from "react";
import {
  Html,
  JS,
  Css,
  Rct,
  Tailwind,
  NodeJs,
  ExpressJs,
  MongoDb,
  Sql
} from "../components/index";

const FrontEnd = [
  { id: 1, imgSrc: Html },
  { id: 2, imgSrc: Css },
  { id: 3, imgSrc: JS },
  { id: 4, imgSrc: Rct },
  { id: 5, imgSrc: Tailwind },
];

const BackEnd = [
  { id: 1, imgSrc: NodeJs },
  { id: 2, imgSrc: ExpressJs },
  { id: 3, imgSrc: MongoDb },
  { id: 4, imgSrc: Sql}
];

const Skills = () => {
  return (
    <div className="flex justify-center items-center flex-col w-full min-h-screen mt-10 pt-10 md:pt-20 px-4 sm:px-6 lg:px-8"  name="Skills">
      <div>
        <h1 className="text-center text-3xl sm:text-4xl font-bold">Skills</h1>
      </div>
      <div
       
        className="w-full max-w-4xl flex justify-center items-center gap-3 flex-col mt-10 p-4 sm:p-6 animate-soft-golden-glow dark:animate-glow"
      >
        <div className="flex flex-col justify-center items-center gap-4 mb-6 w-full">
          <div className="text-xl sm:text-2xl font-bold">
            <h2>Front End</h2>
          </div>
          <ul className="flex flex-wrap justify-center gap-4 sm:gap-6 md:gap-8 animate-soft-blue-glow p-4 sm:p-6 md:p-8 w-full">
            {FrontEnd.map((frontend) => (
              <li
                key={frontend.id}
                className="flex flex-col items-center group relative p-2 rounded-md transition-all duration-300 ease-in-out
                           border border-transparent hover:border-blue-500
                           bg-transparent hover:bg-blue-100 dark:hover:bg-blue-900
                           shadow-[0_0_2px_#4299e1] hover:shadow-[0_0_15px_#4299e1]"
              >
                <img
                  src={frontend.imgSrc}
                  className="w-[50px] h-[50px] sm:w-[70px] sm:h-[70px] md:w-[80px] md:h-[80px] transition duration-300 group-hover:scale-110"
                  alt={`Frontend skill ${frontend.id}`}
                />
              </li>
            ))}
          </ul>
        </div>
        <div className="flex flex-col justify-center items-center gap-4 mt-6 w-full">
          <div className="text-xl sm:text-2xl font-bold">
            <h4>Back End</h4>
          </div>
          <ul className="flex flex-wrap justify-center gap-4 sm:gap-6 md:gap-8 animate-soft-blue-glow p-4 sm:p-6 md:p-8 w-full">
            {BackEnd.map((backend) => (
              <li
                key={backend.id}
                className="flex flex-col items-center group relative p-2 rounded-md transition-all duration-300 ease-in-out
                           border border-transparent hover:border-blue-500
                           bg-transparent hover:bg-blue-100 dark:hover:bg-blue-900
                           shadow-[0_0_2px_#4299e1] hover:shadow-[0_0_15px_#4299e1]"
              >
                <img
                  src={backend.imgSrc}
                  className="w-[50px] h-[50px] sm:w-[70px] sm:h-[70px] md:w-[80px] md:h-[80px] transition duration-300 group-hover:scale-110"
                  alt={`Backend skill ${backend.id}`}
                />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Skills;

