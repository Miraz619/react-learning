import React from "react";
import book from "../../assets/sober.jpg";

const Banner = () => {
  return (
    <div className="flex flex-col md:flex-row justify-around md:items-center bg-[#B3B3B3] rounded-xl px-6 sm:px-16 md:px-25 py-12 md:py-30 gap-8 md:gap-4">
      <div>
        <h1 className="font-bold text-3xl sm:text-4xl md:text-5xl mb-8">
          Books to freshen up <br />
          your bookshelf
        </h1>
        <button className="bg-green-500 btn btn-xs rounded-xl sm:btn-sm md:btn-md lg:btn-lg">
          View The List
        </button>
      </div>

      <div className="w-40 sm:w-56 md:w-64">
        <img
          className="w-full h-auto object-cover rounded-xl"
          src={book}
          alt=""
        />
      </div>
    </div>
  );
};

export default Banner;
