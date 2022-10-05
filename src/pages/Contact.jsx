import React from "react";

const Contact = () => {
  return (
    <section>
      <div className="flex justify-center py-[120px] px-4">
        <div className="bg-secondary w-[980px] h-[277px] px-4 rounded-xl flex flex-col items-center justify-center gap-3">
          <p className="text-3xl font-semibold">Have any project in mind?</p>
          <button className="bg-button px-4 py-2 rounded-lg w-full md:w-[128px]">
            Contact Me
          </button>
        </div>
      </div>
    </section>
  );
};

export default Contact;
