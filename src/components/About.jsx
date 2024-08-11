import React from "react";
import { FaSquareXTwitter, FaLinkedin } from "react-icons/fa6";
import image from "../images/photo.main.jpeg";

const About = () => {
  return (
    <div className="w-full min-h-screen pb-10 md:pb-20">
      <h1 className="text-center text-4xl font-bold mb-8" name="About">
        About
      </h1>
      <section>
        <div className="container mx-auto px-4 md:px-10 lg:px-20 flex flex-col md:flex-row gap-8">
          <div className="about-text md:w-1/2 mt-10 md:mt-20 space-y-4 order-2 md:order-1">
            <h1 className="text-center text-4xl font-bold mb-4">About Me</h1>
            <p className="text-base leading-loose tracking-tight font-normal text-justify">
              I'm a front-end web developer passionate about crafting dynamic,
              responsive interfaces that deliver exceptional user experiences.
              With a strong foundation in front-end technologies, I'm actively
              mastering the MERN stack to become a full-stack developer. My goal
              is to build scalable, robust web applications that meet user
              needs. Committed to continuous learning and contributing to
              innovative projects, I'm excited about what the future holds!
            </p>
            <div className="flex flex-col items-center md:flex-row justify-between space-y-6 md:space-y-0">
              <h2 className="font-bold text-center mb-2 md:mb-0">
                Find Me Online
              </h2>
              <ul className="social-links flex space-x-5">
                <li>
                  <a
                    href="https://x.com/CodeWithShiv27"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaSquareXTwitter className="text-2xl hover:text-blue-500 transition duration-300 ease-in-out cursor-pointer" />
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.linkedin.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaLinkedin className="text-2xl hover:text-blue-500 transition duration-300 ease-in-out cursor-pointer" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="about-image md:w-1/2 md:ml-8 lg:ml-12 xl:ml-24 md:mt-20 mt-8 order-1 md:order-2 flex justify-center items-center">
            <img
              src={image}
              className="rounded-full shadow-lg w-[80%] max-w-[350px] aspect-square object-cover"
              alt="Profile Picture"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
