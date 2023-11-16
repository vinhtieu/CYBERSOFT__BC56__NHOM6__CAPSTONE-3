import React from "react";
import { useSelector } from "react-redux";
import TabletShowtimes from "./tabletShowtimes";
import DesktopShowtimes from "./desktopShowtimes";
import MobileShowtimes from "./mobileShowtimes";
import { useMediaQuery } from "react-responsive";
import "./style.css";

export default function ShowtimesPage() {
  const Desktop = ({ children }) => {
    const isDesktop = useMediaQuery({ minWidth: 1150 });
    return isDesktop ? children : null;
  };

  const Tablet = ({ children }) => {
    const isTablet = useMediaQuery({ minWidth: 666, maxWidth: 1149.98 });
    return isTablet ? children : null;
  };

  const Mobile = ({ children }) => {
    const isTablet = useMediaQuery({ maxWidth: 665.98 });
    return isTablet ? children : null;
  };

  const cinemaData = useSelector((state) => state.cinema.data);

  return (
    <div className="flex-1 mt-[8rem] flex flex-col">
      <Desktop>
        <div className="mt-auto mb-auto">
          <DesktopShowtimes list={cinemaData} />
        </div>
      </Desktop>

      <Tablet>
        <div className="w-[90%] h-500px flex-1  mr-auto ml-auto mx-2 p-2">
          <TabletShowtimes list={cinemaData} />
        </div>
      </Tablet>

      <Mobile>
        <div className="w-[90%] h-500px flex-1  mr-auto ml-auto mx-2 p-2">
          <MobileShowtimes list={cinemaData} />
        </div>
      </Mobile>
    </div>
  );
}
