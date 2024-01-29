import React from "react";
import { Link } from "react-router-dom";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";

const GetAnswer = () => {
  return (
    <div className="">
      <div className="flex justify-between p-4 relative">
        <div className="text-2xl font-bold">
          Get Answer
          <span className="absolute right-0 cursor-pointer flex">
            <AiOutlineLeft className="text-gray-500 text-4xl" />
            <AiOutlineRight className="text-black text-4xl" />
          </span>
          <span className="font-bold block">to all your questions</span>
        </div>
      </div>
      <div className="flex justify-evenly p-2 relative">
        <div className="shadow-lg mx-2 p-2 border-1">
          <div className="p-2 text-lg">
            <div className="font-bold">How FDs are</div>
            <div className="font-bold">taxed</div>
          </div>
          <p className="p-2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p >
          <div className="text-blue-500 underline-link mt-3 p-2"><Link >Read more...</Link></div>
        </div>
        <div className="shadow-lg mx-2 p-2 border-1">
          <div className="p-2 text-lg">
            <div className="font-bold">How FDs are</div>
            <div className="font-bold">taxed</div>
          </div>
          <p className="p-2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <div className="text-blue-500 underline-link mt-3 p-2"><Link >Read more...</Link></div>
        </div>
        <div className="shadow-lg mx-2 p-2 border-1">
          <div className="p-2 text-lg">
            <div className="font-bold">How FDs are</div>
            <div className="font-bold">taxed</div>
          </div>
          <p className="p-2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <div className="text-blue-500 underline-link mt-3 p-2"><Link >Read more...</Link></div>
        </div>
      </div>
    </div>
  );
};

export default GetAnswer;
