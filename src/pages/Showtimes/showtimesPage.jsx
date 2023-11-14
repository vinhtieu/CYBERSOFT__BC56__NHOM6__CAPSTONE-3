import React from "react";
import { useSelector } from "react-redux";
import MobileShowtimes from "./mobileShowtimes";
import DesktopShowtimes from "./desktopShowtimes";
import { useMediaQuery } from "react-responsive";
import "./style.css";

export default function ShowtimesPage() {
  const Desktop = ({ children }) => {
    const isDesktop = useMediaQuery({ minWidth: 1150 });
    return isDesktop ? children : null;
  };

  const Mobile = ({ children }) => {
    const isMobile = useMediaQuery({ maxWidth: 1149.98 });
    return isMobile ? children : null;
  };

  const cinemaData = useSelector((state) => state.cinema.data);

  console.log("showtimePage running");
  console.log(cinemaData);

  return (
    <div className="flex-1 mt-[8rem] flex flex-col">
      <Desktop>
        <div className="mt-auto mb-auto">
          <DesktopShowtimes list={cinemaData} />
        </div>
      </Desktop>

      <Mobile>
        <div className="w-[90%] h-500px flex-1  mr-auto ml-auto mx-2 p-2">
          <MobileShowtimes list={cinemaData} />
        </div>
      </Mobile>
    </div>
  );
}
