import React, { useState } from "react";
import { Tabs } from "antd";
import { FALLBACK_IMG } from "../../constant";
import "./style.css";

export default function DesktopShowtimes({ list }) {
  const [isImgError, setIsImgError] = useState(true);

  const renderShowtimesTable = (data) => {
    return data.map((cinema) => {
      return {
        label: (
          <figure className="theater-logo">
            <img
              className="object-contain w-full h-full"
              src={cinema.logo ? cinema.logo : FALLBACK_IMG}
            />
          </figure>
        ),
        key: cinema.cinemaID,
        children: (
          <Tabs
            style={{
              height: "600px",
            }}
            defaultActiveKey="1"
            tabPosition={"left"}
            items={getCinemaBranches(cinema)}
          />
        ),
      };
    });
  };

  const getCinemaBranches = (data) => {
    return data.branchList.map((branch, index) => {
      return {
        label: (
          <div className="max-[1669.98px]:w-[350px] min-[1670px]:w-[600px] py-[.35rem] text-left whitespace-pre-wrap transition-all">
            <p className="text-[#ae1f22]  max-[1669.98px]:text-lg  min-[1670px]:text-xl font-semibold mb-2 whitespace-pre-wrap transition-all">
              {branch.branchName}
            </p>
            <p className=" text-gray-300 max-[1669.98px]:text-base  min-[1670px]:text-lg transition-all">
              {branch.address}
            </p>
          </div>
        ),
        key: index,
        children: (
          <div className="flex flex-col w-full h-full gap-4 overflow-auto">
            {getMovieList(branch.movieList)}
          </div>
        ),
      };
    });
  };

  const getMovieList = (movies) => {
    return movies.map((film) => {
      if (film.nowPlaying === true) {
        return (
          <div
            key={film.movieID}
            className="grid w-full h-auto  grid-cols-[8rem,1fr] gap-8 p-4 ">
            <figure className="w-36 min-w-[28px]  aspect-[11/17]">
              <img
                className="object-cover w-full h-full"
                src={film.poster}
                alt={film.title}
                onError={(e) => {
                  if (isImgError) {
                    setIsImgError(false);
                    e.target.onerror = null;
                    e.target.src = FALLBACK_IMG;
                  }
                }}
              />
            </figure>
            <div className="">
              <span className="block mb-6 text-xl font-semibold text-white ">
                {film.title}
              </span>
              <div className="flex flex-row flex-wrap gap-2">
                {getMovieSchedules(film.showtimeList)}
              </div>
            </div>
          </div>
        );
      }
    });
  };

  const getMovieSchedules = (schedules) => {
    return schedules.map((schedule) => {
      return (
        <div
          key={schedule.showtimeID}
          className="inline-block p-2 mb-2 text-sm text-white transition-all bg-transparent border border-white border-solid rounded-lg cursor-pointer hover:bg-white hover:text-black">
          {schedule.showtime}
        </div>
      );
    });
  };

  return (
    <>
      <Tabs
        rootClassName=" w-[90%] h-[600px] max-h-[800px] mx-2 mr-auto ml-auto mt-auto mb-auto border border-gray-500 border-solid"
        defaultActiveKey="1"
        tabPosition={"left"}
        items={renderShowtimesTable(list)}
      />
    </>
  );
}
