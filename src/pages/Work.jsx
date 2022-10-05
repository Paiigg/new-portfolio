import React from "react";
import work1 from "../assets/Desktop - 1.png";
import work3 from "../assets/thumbnail.png";
import work4 from "../assets/Home.png";
import work2 from "../assets/Frame Thumbnails.png";

const Work = () => {
  return (
    <section id="work" className="pt-16 text-left">
      <div className="container mx-auto px-4">
        <div className="pb-10 text-center">
          <p className="text-primary text-xl">PORTFOLIO</p>
          <h2 className="font-semibold text-2xl">LATEST PROJECT</h2>
        </div>
        <div className="grid md:grid-cols-3 grid-cols-1 gap-5">
          <div className=" rounded-lg bg-secondary">
            <img src={work1} alt="" className="rounded-t-lg h-[283px] w-full" />
            <div className="px-6 py-5 flex flex-col gap-3">
              <p className="font-semibold text-lg">NFT Landing Page</p>
              <p className="text-slate-200 text-xs">
                Made with ReactJS and TailwindCSS
              </p>
              <button className="bg-button px-4 py-2 rounded-lg w-full md:w-[128px]">
                View Demo
              </button>
            </div>
          </div>
          <div className="  rounded-b-lg bg-secondary">
            <img src={work2} alt="" className="rounded-t-lg h-[283px] w-full" />
            <div className="px-6 py-5 flex flex-col gap-3">
              <p className="font-semibold text-lg">NFT Landing Page</p>
              <p className="text-slate-200 text-xs">
                Made with ReactJS, TailwindCSS and TheMovieDB API
              </p>
              <button className="bg-button px-4 py-2 rounded-lg w-full md:w-[128px]">
                View Demo
              </button>
            </div>
          </div>
          <div className="  rounded-b-lg bg-secondary">
            <img src={work3} alt="" className="rounded-t-lg h-[283px] w-full" />
            <div className="px-6 py-5 flex flex-col gap-3">
              <p className="font-semibold text-lg">NFT Landing Page</p>
              <p className="text-slate-200 text-xs">
                Made with ReactJS, TailwindCSS and News API
              </p>
              <button className="bg-button px-4 py-2 rounded-lg w-full md:w-[128px]">
                View Demo
              </button>
            </div>
          </div>
          <div className="  rounded-b-lg bg-secondary md:col-start-2">
            <img src={work4} alt="" className="rounded-t-lg h-[283px] w-full" />
            <div className="px-6 py-5 flex flex-col gap-3">
              <p className="font-semibold text-lg">NFT Landing Page</p>
              <p className="text-slate-200 text-xs">
                Made with ReactJS and TailwindCSS
              </p>
              <button className="bg-button px-4 py-2 rounded-lg w-full md:w-[128px]">
                View Demo
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Work;
