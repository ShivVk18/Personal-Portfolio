import React, { useState } from "react";
import Card from "./Card";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";

function Projects(props) {
  const reviews = props.reviews;
  const [index, setIndex] = useState(0);

  const nextReview = () => {
    setIndex((prevIndex) => (prevIndex + 1) % reviews.length);
  };

  const prevReview = () => {
    setIndex((prevIndex) => (prevIndex - 1 + reviews.length) % reviews.length);
  };

  return (
    <div
      name="Projects"
      className="mt-10 py-12 sm:py-16 md:py-20 bg-white dark:bg-black w-full min-h-screen"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl sm:text-4xl font-bold text-center mb-8 sm:mb-12 text-gray-800 dark:text-white">
          My Projects
        </h1>
        <div className="max-w-4xl mx-auto">
          <div className="relative bg-gray-50 dark:bg-gray-900 rounded-xl shadow-2xl p-4 sm:p-6 transition-all duration-300 hover:shadow-3xl">
            <Card review={reviews[index]} />
            <div className="flex justify-between mt-6 sm:mt-8">
              <button
                onClick={prevReview}
                className="text-white bg-gradient-to-r from-blue-500 to-teal-500 hover:from-blue-600 hover:to-teal-600 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-teal-800 font-medium rounded-lg text-base sm:text-lg px-4 sm:px-6 py-2 sm:py-3 text-center transition-all duration-300 transform hover:scale-105"
              >
                <FaAngleLeft size={20} className="sm:hidden" />
                <FaAngleLeft size={24} className="hidden sm:block" />
              </button>
              <button
                onClick={nextReview}
                className="text-white bg-gradient-to-r from-teal-500 to-blue-500 hover:from-teal-600 hover:to-blue-600 focus:ring-4 focus:outline-none focus:ring-teal-300 dark:focus:ring-blue-800 font-medium rounded-lg text-base sm:text-lg px-4 sm:px-6 py-2 sm:py-3 text-center transition-all duration-300 transform hover:scale-105"
              >
                <FaAngleRight size={20} className="sm:hidden" />
                <FaAngleRight size={24} className="hidden sm:block" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
