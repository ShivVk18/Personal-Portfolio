import React from "react";
import { FaGithub, FaLink } from "react-icons/fa";

function Card(props) {
  let review = props.review;

  return (
    <div className="relative w-full h-[300px] sm:h-[350px] md:h-[400px] rounded-md overflow-hidden mb-3 md:mb-7 bg-white group transition-all duration-300 mt-5">
      <div className="absolute right-2 top-2 group-hover:opacity-50 z-10 space-x-2">
        <button
          className="p-2 bg-white bg-opacity-70 rounded-full text-gray-800 hover:bg-opacity-100 transition-all duration-300"
          onClick={() => window.open(`${review.Giturl}`, "_blank")}
          type="button"
          aria-label="View GitHub repository"
        >
          <FaGithub className="w-4 h-4 sm:w-5 sm:h-5" />
        </button>

        <button
          onClick={() => window.open(`${review.Linkurl}`, "_blank")}
          type="button"
          className="p-2 bg-white bg-opacity-70 rounded-full text-gray-800 hover:bg-opacity-100 transition-all duration-300"
          aria-label="View live project"
        >
          <FaLink className="w-4 h-4 sm:w-5 sm:h-5" />
        </button>
      </div>

      <img
        src={review.img_url}
        alt="Project"
        className="z-0 h-full w-full rounded-md object-cover group-hover:opacity-50 transition-all duration-300 overflow-hidden"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent overflow-hidden"></div>
      <div className="absolute bottom-4 left-4 text-left w-[calc(100%-2rem)]">
        
        <ul className="flex flex-wrap gap-2 mt-2 opacity-0 group-hover:opacity-100 transition-all duration-300 text-xs sm:text-sm md:text-base">
          {review.techStack.map((element, index) => (
            <li
              key={index}
              className="text-white bg-gray-800 bg-opacity-50 px-2 py-1 rounded-full truncate"
            >
              {element}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Card;
