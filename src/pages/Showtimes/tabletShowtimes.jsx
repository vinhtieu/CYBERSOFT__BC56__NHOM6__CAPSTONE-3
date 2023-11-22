import React, { useEffect, useState } from "react";
import { Dropdown } from "antd";
import { useDispatch, useSelector } from "react-redux";
// import { showtimesSlice } from "../../lib/redux";
import { FALLBACK_IMG } from "../../constant";

export default function TabletShowtimes({ list }) {
  const DEFAULT_CINEMA_ID = "cgv-aeon-tan-phu";
  const DEFAULT_CINEMA_NAME = "CGV - Aeon Tân Phú";
  const [isImgError, setIsImgError] = useState(true);
  const [showtimesList, setShowtimesList] = useState([]);
  const [cinemaName, setCinemaName] = useState([]);

  useEffect(() => {
    if (list.length > 0)
      setShowtimesList(renderShowtimesListByCinema(DEFAULT_CINEMA_ID));
    setCinemaName(DEFAULT_CINEMA_NAME);
  }, []);

  const onClick = ({ item, key }) => {
    setCinemaName(item.props.children[0][1].props.children);
    setShowtimesList(renderShowtimesListByCinema(key));
  };

  const getCinemaBranches = (data) => {
    return data.map((cinema) => {
      return {
        key: cinema.cinemaID,
        label: cinema.cinemaID,
        children: cinema.branchList.map((branch) => {
          return {
            key: branch.branchID,
            label: branch.branchName,
          };
        }),
      };
    });
  };

  const getMovieListByBranch = (id) => {
    let movies;

    list.forEach((cinema) => {
      cinema.branchList.forEach((branch) => {
        if (branch.branchID === id) return (movies = branch.movieList);
      });
    });

    return movies;
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

  const renderShowtimesListByCinema = (key) => {
    const movieList = getMovieListByBranch(key);
    return movieList.map((film) => {
      if (film.nowPlaying === true) {
        return (
          <div
            key={film.movieID}
            className="grid w-full h-auto  grid-cols-[12rem,1fr] gap-8 py-4 ">
            <figure className="w-48 min-w-[28px] aspect-[11/17]">
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

  const items = getCinemaBranches(list);

  return (
    <>
      <Dropdown className="" menu={{ items, onClick }}>
        <div className="flex flex-row items-end gap-2 mb-8 mr-auto cursor-pointer w-fit justify-right">
          <figure className="w-6 h-6">
            <img
              className="object-contain w-full h-full"
              src="/assets/img/pin.svg"
              alt=""
            />
          </figure>
          <span className="text-base hover:text-white">Choose Cinema</span>
        </div>
      </Dropdown>
      <h3 className="block max-[600px]:text-2xl text-4xl font-bold mt-10 mb-4">
        {cinemaName}
      </h3>

      <div>{showtimesList}</div>
    </>
  );
}
