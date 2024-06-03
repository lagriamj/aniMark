/* eslint-disable no-unused-vars */
import { useState, useEffect } from "react";
import Slider from "react-slick";
import axios from "axios";
import myLogo from "../assets/mainlogo.png";
import fblogo from "../assets/fblogo.webp";
import iglogo from "../assets/iglogo.png";
import xlogo from "../assets/xlogo.jpg";
import githublogo from "../assets/githublogo.png";
import {
  MagnifyingGlassIcon,
  FireIcon,
  PlayIcon,
  ForwardIcon,
} from "@heroicons/react/24/solid";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import SliderComp from "../components/SliderComp";

const Home = () => {
  return (
    <div className="w-full h-screen text-white font-sans">
      <header className="flex items-center text-black h-24 shadow-lg">
        <img src={myLogo} alt="" className="w-72 h-24 ml-10" />
        <input
          type="text"
          className=" h-14 w-[22%] border-2 rounded-lg shadow-sm outline-none px-3 text-lg "
          placeholder="Search for an anime..."
        />
        <button className="bg-red-700 rounded-md flex items-center justify-center gap-1 mr-14 text-white text-lg font-semibold tracking-wide h-14 w-28 ml-2 hover:border-red-700 hover:bg-white hover:text-red-700 hover:border-2 transition-all">
          <MagnifyingGlassIcon className="h-6 w-6" />
          Search
        </button>
        {/**  <div className="flex items-center justify-center gap-2 ml-auto">
          <img src={fblogo} alt="" className="w-10 h-10 " />
          <img src={iglogo} alt="" className="w-10 h-10 " />
          <img src={xlogo} alt="" className="w-10 h-10 " />
          <img src={githublogo} alt="" className="w-10 h-10 " />
        </div>*/}
        <button className="bg-[#613448] rounded-md flex items-center justify-center gap-1 ml-auto mr-14 text-white text-lg font-semibold tracking-wide h-14 w-24 hover:border-red-700 hover:bg-white hover:text-red-700 hover:border-2 transition-all">
          Login
        </button>
      </header>
      <SliderComp />
      <div className="h-auto w-full font-sans">
        <div className="flex gap-3 font-sans ml-20 mt-8">
          <button className=" rounded-md flex items-center justify-center gap-1 shadow-md  text-black border-2 text-lg font-semibold tracking-wide h-14 w-44 ml-2  hover:bg-red-700 hover:text-white hover:border-2 transition-all duration-300">
            <FireIcon className=" w-6 h-6" />
            Popular
          </button>
          <button className=" rounded-md flex items-center justify-center gap-1 shadow-md text-black border-2 text-lg font-semibold tracking-wide h-14 w-44 ml-2 hover:bg-red-700 hover:text-white hover:border-2 transition-all duration-300">
            <PlayIcon className=" w-6 h-6" />
            Airing
          </button>
          <button className=" rounded-md flex items-center justify-center gap-1 shadow-md text-black border-2 text-lg font-semibold tracking-wide h-14 w-44 ml-2 hover:bg-red-700 hover:text-white hover:border-2 transition-all duration-300">
            <ForwardIcon className=" w-6 h-6" />
            Upcoming
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
