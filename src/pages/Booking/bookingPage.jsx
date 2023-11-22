import { Dropdown, Tabs } from "antd";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

export default function BookingPage() {
  const cinemaData = useSelector((state) => state.cinema.data);
  const [movieTitle, setMovieTitle] = useState("");
  const [movieId, setMovieId] = useState("");
  const [items, setItems] = useState([]);
  const [showtimesList, setShowtimesList] = useState("");

  const getMovieInfo = () => {
    const currentURL = window.location.href;
    const splitURL = currentURL.split("/");
    const lastIndex = splitURL.length - 1;
    return splitURL[lastIndex].split("-");
  };

  const onClick = ({ key }) => {
    const cinemaId = key;
    setShowtimesList(renderShowtimes(cinemaData, cinemaId, movieId));
  };

  const getMovieById = (list, id) => {
    const filteredList = list.filter((movie) => +movie.movieID === +id);
    if (filteredList.length === 0) {
      return undefined;
    } else {
      return filteredList.map((movie) => {
        return (
          <div key={movie.movieID} className="flex flex-row flex-wrap gap-2">
            {getMovieSchedules(movie.showtimeList)}
          </div>
        );
      });
    }
  };

  const getMovieSchedules = (list) => {
    return list.map((schedule) => {
      return (
        <div
          key={schedule.showtimeID}
          className="inline-block p-2 mb-2 text-sm text-white transition-all bg-transparent border border-white border-solid rounded-lg cursor-pointer hover:bg-white hover:text-black">
          {schedule.showtime}
        </div>
      );
    });
  };

  const getCinemas = (data) => {
    return data.map((cinema) => {
      return {
        key: cinema.cinemaID,
        label: cinema.cinemaID,
      };
    });
  };

  const renderShowtimes = (data, cinemaId, movieId) => {
    const cinema = data.filter((cinema) => cinema.cinemaID === cinemaId);
    const branches = cinema[0].branchList.filter((branch) =>
      branch.movieList.find((movie) => +movie.movieID === +movieId)
    );
    return branches.map((branch, index) => {
      return (
        <div key={index}>
          <span>{branch.branchName}</span>
          <span>{branch.address}</span>
          <div>{getMovieById(branch.movieList, movieId)}</div>
        </div>
      );
    });
  };

  const renderBookingTickets = () => {
    return <div></div>;
  };

  useEffect(() => {
    // const [id, title] = getMovieInfo();
    // setMovieId(id);
    // setMovieTitle(title.replace(/%20/g, " "));
    // setItems(getCinemas(cinemaData));
    // setShowtimesList(renderShowtimes(cinemaData, "CGV", movieId));
  });

  return (
    <div className="flex flex-1 h-full mt-24 2xl:mt-28 place-items-center">
      <div className="w-[90%] mr-auto ml-auto h-full flex flex-row">
        <div>
          <Dropdown className="" menu={{ items, onClick }}>
            <div className="flex flex-row items-end gap-2 mb-4 mr-auto cursor-pointer w-fit justify-right">
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

          {/* <h3 className="block max-[600px]:text-2xl text-4xl font-bold mb-8">
            {cinemaName}
          </h3> */}

          <h2>{movieTitle}</h2>
          <div>{showtimesList}</div>
        </div>
        {renderBookingTickets}
      </div>
    </div>
  );
}
