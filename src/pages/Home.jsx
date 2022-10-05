import React from "react";
import { FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";
import BgImage from "../assets/bg-image 1.png";
import Typewriter from "typewriter-effect";

const Home = () => {
  return (
    <section id="home">
      <div className=" ">
        <img
          src={BgImage}
          alt=""
          className="h-screen w-full object-cover bg-center"
        />
        <div className="absolute top-[40%] right-0 left-0 flex flex-col gap-4 justify-center items-center text-center">
          <h1 className="text-4xl md:text-6xl font-bold drop-shadow-2xl">
            I'm Faiqul Washfi
          </h1>
          <div className="text-xl font-semibold">
            <Typewriter
              options={{
                strings: ["FrontEnd Developer", "Student"],
                autoStart: true,
                loop: true,
              }}
            />
          </div>
          <div className="cursor-pointer flex items-center gap-5">
            <a href="https://www.instagram.com/faiqlw_/" target="_blank">
              <FaInstagram size={25} />
            </a>
            <a href="#" target="_blank">
              <FaLinkedin size={25} />
            </a>
            <a href="https://github.com/Paiigg" target="_blank">
              <FaGithub size={25} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
