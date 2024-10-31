import React from "react";
import Bannerimage from "../../assets/books.jpg"

const Banner = () => {
  return (
    <div>
      <div className="hero bg-base-200 rounded-xl p-10">
        <div className="hero-content flex-col lg:flex-row-reverse gap-10">
          <img
            src={Bannerimage}
            className=" rounded-lg shadow-2xl"
          />
          <div>
            <h1 className="text-5xl font-bold pb-8">Books to freshen up <br /> your bookshelf</h1>
            
            <button className="w-full btn btn-success">Get Started</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
