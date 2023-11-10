import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { showtimesSlice } from "../../lib/redux";
import { showtimesService } from "../../services";
import MobileShowtimes from "./mobileShowtimes";
import DesktopShowtimes from "./desktopShowtimes";
import "./style.css";

export default function ShowtimesPage() {
  const showtimesList = useSelector((state) => state.showtimes.list);
  const { setList } = showtimesSlice.actions;
  const dispatch = useDispatch();

  useEffect(() => {
    Promise.all([showtimesService.getData()])
      .then(([showtimesRes]) => {
        dispatch(setList(showtimesRes.data.content));
      })
      .catch((err) => {
        console.log("ERROR", err);
      });
  }, []);

  return (
    <div className="flex-1 mt-[8rem] flex flex-col">
      <div className="min-[1150px]:block hidden mt-auto mb-auto">
        <DesktopShowtimes list={showtimesList} />
      </div>

      <div className="max-[1149.98px]:block hidden  w-[90%] h-500px flex-1  mr-auto ml-auto mx-2 p-2">
        <MobileShowtimes list={showtimesList} />
      </div>
    </div>
  );
}
