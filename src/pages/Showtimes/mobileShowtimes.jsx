import React, { useEffect, useState } from "react";
import { Dropdown } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { showtimesSlice } from "../../lib/redux";

export default function MobileShowtimes({ list }) {
  const DEFAULT_CINEMA_ID = "cgv-aeon-tan-phu";
  const DEFAULT_CINEMA_NAME = "CGV - Aeon Tân Phú";
  const [showtimesList, setShowtimesList] = useState([]);
  const [cinemaName, setCinemaName] = useState([]);

  useEffect(() => {
    if (list.length > 0)
      setShowtimesList(renderShowtimesListById(DEFAULT_CINEMA_ID));
    setCinemaName(DEFAULT_CINEMA_NAME);
  }, []);

  const onClick = ({ item, key }) => {
    setCinemaName(item.props.children[0][1].props.children);
    setShowtimesList(renderShowtimesListById(key));
  };

  const renderDropdownItems = () => {
    return list.map((cinema) => {
      return {
        key: cinema.maHeThongRap,
        label: cinema.maHeThongRap,
        children: cinema.lstCumRap.map((branch) => {
          return {
            key: branch.maCumRap,
            label: branch.tenCumRap,
          };
        }),
      };
    });
  };

  const getMovieListById = (id) => {
    let movies;

    list.forEach((cinema) => {
      cinema.lstCumRap.forEach((branch) => {
        if (branch.maCumRap === id) return (movies = branch.danhSachPhim);
      });
    });

    return movies;
  };

  const getMovieSchedules = (schedules) => {
    return schedules.map((schedule) => {
      return (
        <div
          key={schedule.maLichChieu}
          className="inline-block p-2 mb-2 text-sm text-white transition-all bg-transparent border border-white border-solid rounded-lg cursor-pointer hover:bg-white hover:text-black">
          {schedule.ngayChieuGioChieu}
        </div>
      );
    });
  };

  const renderShowtimesListById = (key) => {
    const movieList = getMovieListById(key);
    return movieList.map((film) => {
      return (
        <div
          key={film.maPhim}
          className="grid w-full h-auto  grid-cols-[8rem,1fr] gap-8 py-4 ">
          <figure className="w-36 min-w-[28px] aspect-[11/17]">
            <img
              className="object-cover w-full h-full"
              src={film.hinhAnh}
              alt={film.tenPhim}
            />
          </figure>
          <div className="">
            <span className="block mb-6 text-xl font-semibold text-white ">
              {film.tenPhim}
            </span>
            <div className="flex flex-row flex-wrap gap-2">
              {getMovieSchedules(film.lstLichChieuTheoPhim)}
            </div>
          </div>
        </div>
      );
    });
  };

  const items = renderDropdownItems();

  return (
    <>
      <Dropdown menu={{ items, onClick }}>
        <div className="w-[35vh] cursor-pointer flex flex-row items-end justify-right gap-2 mr-auto mb-8">
          <figure className="w-6 h-6">
            <img
              className="w-full h-full object-contain"
              src="src\assets\img\pin.svg"
              alt=""
            />
          </figure>
          <span className="text-base hover:text-white">Choose Cinema</span>
        </div>
      </Dropdown>
      <h3 className="block max-[600px]:text-2xl max-[1000px]:text-4xl font-bold mt-10 mb-4">
        {cinemaName}
      </h3>

      <div>{showtimesList}</div>
    </>
  );
}
