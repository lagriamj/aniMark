import { useState, useEffect } from "react";
import Slider from "react-slick";
import axios from "axios";
import { ChevronRightIcon } from "@heroicons/react/24/solid";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const SliderComp = () => {
  const [topAnimeList, setTopAnimeList] = useState([]);

  useEffect(() => {
    const fetchTopAnime = async () => {
      try {
        const response = await axios.get(
          `https://api.jikan.moe/v4/top/anime?filter=bypopularity`
        );

        const animeData = response.data.data;
        console.log(animeData);
        setTopAnimeList(animeData);
      } catch (error) {
        console.error("Error fetching data from Jikan API", error);
      }
    };

    // Call the fetchTopAnime function
    fetchTopAnime();
  }, []);

  const settings = {
    infinite: true,
    speed: 700,
    fade: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    pauseOnHover: true,
    autoplay: true,
    autoplaySpeed: 5000,
  };
  return (
    <div className="w-full mt-4 h-auto text-white font-sans">
      {topAnimeList.length === 0 ? (
        <p>Loading...</p>
      ) : (
        <Slider {...settings} className="w-full">
          {topAnimeList.map((anime) => {
            console.log(anime); // Log anime object to inspect its structure
            return (
              <div key={anime.mal_id} className="relative w-full flex">
                <img
                  src={anime.images?.webp?.large_image_url}
                  className="lg:w-[25%] w-full lg:h-[84vh] object-cover ml-4"
                  alt=""
                />

                <div className="absolute left-[29rem] -top-2  flex-1 p-4">
                  {/* Details of the anime here */}
                  <h3 className="text-5xl font-bold text-black">
                    {anime.title_english}
                  </h3>
                  <h3 className="text-2xl font-medium mt-2 text-black">
                    {anime.title}
                  </h3>
                  <div className="flex items-center flex-nowrap mt-2">
                    {anime.genres.map((genre) => {
                      return (
                        <div key={genre.mal_id}>
                          <p className="border-2 rounded-2xl text-xl  bg-red-700 text-white px-3 py-1 mr-2 flex items-center justify-center">
                            {genre.name}
                          </p>
                        </div>
                      );
                    })}
                  </div>
                  <div className="w-[95%] h-[12vh] border-2 bg-[#F8F8F8] my-4 flex items-center">
                    <div className="w-[20%] h-full flex flex-col items-center justify-center border-r-2">
                      <p className="text-2xl font-semibold text-white bg-red-700 px-5">
                        Score
                      </p>
                      <p className="text-3xl font-bold italic text-black">
                        {anime.score}
                      </p>
                    </div>
                    <div className="w-[20%] h-full flex flex-col items-center justify-center border-r-2">
                      <p className="text-2xl font-semibold text-white bg-red-700 px-5">
                        Rank
                      </p>
                      <p className="text-2xl font-bold italic text-black">
                        #{anime.rank}
                      </p>
                    </div>
                    <div className="w-[20%] h-full flex flex-col items-center justify-center border-r-2">
                      <p className="text-2xl font-semibold text-white bg-red-700 px-5">
                        Popularity
                      </p>
                      <p className="text-2xl font-bold italic text-black">
                        #{anime.popularity}
                      </p>
                    </div>
                    <div className="w-[20%] h-full flex flex-col items-center justify-center border-r-2">
                      <p className="text-2xl font-semibold text-white bg-red-700 px-5">
                        Members
                      </p>
                      <p className="text-2xl font-bold italic text-black">
                        {anime.members.toLocaleString()}
                      </p>
                    </div>
                    <div className="w-[20%] h-full flex flex-col items-center justify-center border-r-2">
                      <p className="text-2xl font-semibold text-white bg-red-700 px-5">
                        Year
                      </p>
                      <p className="text-3xl font-bold italic text-black">
                        {anime.year}
                      </p>
                    </div>
                  </div>
                  <div className="flex text-xl w-[95%] text-black font-sans border-y-2 border-gray-700 py-4">
                    <div className="w-1/2 flex flex-col gap-2">
                      <div className="flex gap-2">
                        <p className="font-bold">Japanese: </p>
                        <p className="font-semibold italic">
                          {anime.title_japanese}
                        </p>
                      </div>
                      <div className="flex gap-2">
                        <p className="font-bold">Episodes: </p>
                        <p className="font-semibold italic">{anime.episodes}</p>
                      </div>
                      <div className="flex gap-2">
                        <p className="font-bold">Status: </p>
                        <p className="font-semibold italic">{anime.status}</p>
                      </div>
                    </div>
                    <div className="flex flex-col w-1/2 gap-2">
                      <div className="flex gap-2">
                        <p className="font-bold">Duration: </p>
                        <p className="font-semibold italic">{anime.duration}</p>
                      </div>
                      <div className="flex gap-2">
                        <p className="font-bold">Studio: </p>
                        <p className="font-semibold italic">
                          {anime.studios[0].name}
                        </p>
                      </div>
                    </div>
                  </div>
                  <p className="font-bold text-black w-[95%] text-justify mt-2">
                    <b className="text-red-700 font-bold ">Synopsis:</b>{" "}
                    {anime.synopsis}
                  </p>
                  <div className="flex gap-2 text-black mt-4 ml-2">
                    <button className="bg-red-700 text-white py-4 px-5 rounded-lg text-lg flex items-center justify-center gap-2">
                      Wactch Trailer
                      <ChevronRightIcon className="w-6 h-6" />
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </Slider>
      )}
    </div>
  );
};

export default SliderComp;
