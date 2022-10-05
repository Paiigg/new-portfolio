import React from "react";
import Coding from "../assets/coding.svg";
import UinUX from "../assets/uiux.svg";

const WhatIDo = () => {
  return (
    <section className="">
      <div className="container mx-auto px-4">
        <div className="pb-10">
          <p className="text-primary text-xl">WHAT I DO</p>
          <h2 className="font-semibold text-2xl">SPECIALIZING IN</h2>
        </div>
        <div className="flex flex-col md:flex-row gap-3 md:gap-0 justify-evenly text-left">
          <div className="bg-secondary md:w-[480px] px-7 py-7 flex flex-col gap-7 rounded-xl">
            <div className="flex text-xl font-semibold items-center gap-3">
              <div className="bg-icon p-4 w-[66px] h-[66px] rounded-xl">
                <img src={Coding} alt="" />
              </div>
              <div>
                <p>Front-end </p>
                <p>Developer</p>
              </div>
            </div>
            <p className="text-slate-200 text-xs text-left">
              Lom ipsum dolo, sit amet consectetu adpisicing elit, rem voluptas
              sed blanditiis
            </p>
          </div>
          <div className="bg-secondary md:w-[480px] px-7 py-7 flex flex-col gap-7 rounded-xl">
            <div className="flex text-xl font-semibold items-center gap-3">
              <div className="bg-icon p-4 w-[66px] h-[66px] rounded-xl">
                <img src={UinUX} alt="" />
              </div>
              <div>
                <p>UI/UX </p>
                <p>Designer</p>
              </div>
            </div>
            <p className="text-slate-200 text-xs text-left">
              Lom ipsum dolo, sit amet consectetu adpisicing elit, rem voluptas
              sed blanditiis
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatIDo;
