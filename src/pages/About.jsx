import React from "react";

const About = () => {
  return (
    <section id="about" className="container mx-auto px-4 py-16">
      <div className="grid md:grid-cols-2 place-items-center ">
        <img
          src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8dGVjaHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
          alt=""
          className="w-[525px] rounded-tl-lg rounded-br-lg"
        />
        <div className="flex flex-col gap-3 text-left ">
          <h2 className="text-xl text-primary font-semibold">ABOUT ME</h2>
          <h2 className="text-xl font-semibold">I'm Faiqul Washfi</h2>

          <p className="text-slate-200 text-xs">
            Far far away, behind the word mountains, far from the countries
            Vokalia and Consonantia, there live the blind texts. Separated they
            live in Bookmarksgrove right at the coast of the Semantics, a large
            language ocean.
          </p>
          <p className="text-slate-200 text-xs">
            Far far away, behind the word mountains, far from the countries
            Vokalia and Consonantia, there live the blind texts. Separated they
            live in Bookmarksgrove right at the coast of the Semantics, a large
            language ocean.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
