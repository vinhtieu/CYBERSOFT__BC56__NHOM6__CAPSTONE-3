import React, { useEffect, useRef } from "react";
import Slider from "react-slick";
import { useDispatch, useSelector } from "react-redux";
import { movieService } from "../../services/services";
import { setList } from "../../lib/redux/movieListSlice";
import Card from "../card";
import NextArrow from "./nextArrow";
import PrevArrow from "./prevArrow";
import "./style.css";

const Carousel = ({ className }) => {
  const movieList = useSelector((state) => state.movieList.movies);
  const dispatch = useDispatch();
  const slickRef = useRef(0);

  useEffect(() => {
    movieService
      .getList()
      .then((res) => {
        dispatch(setList(res.data));
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const settings = {
    prevArrow: <PrevArrow ref={slickRef} />,
    nextArrow: <NextArrow ref={slickRef} />,
    // autoplay: true,
    autoplaySpeed: 2000,
    infinite: true,
    speed: 500,
    slidesToShow: 7,
    slidesToScroll: 1,
    arrows: true,
    vertical: false,
    centerMode: true,
    variableWidth: true,
  };

  return (
    <div className={`relative ${className}`}>
      <div className="w-full ml-auto mr-auto">
        <Slider {...settings} ref={slickRef} className="group ">
          {movieList.map((movie, index) => {
            return <Card key={index} imgSrc={movie.poster}></Card>;
          })}
        </Slider>
      </div>
    </div>
  );
};

export default Carousel;
