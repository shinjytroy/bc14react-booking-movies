import React, { Component } from "react";
import Slider from "react-slick";
import Film_Flip from "../Phim/Film_Flip";
import { useDispatch, useSelector } from "react-redux";
import {
  SET_FILM_DANG_CHIEU,
  SET_FILM_SAP_CHIEU,
} from "../../redux/types/QuanLyPhimType";

const MultipleRowSlick = (props) => {
  const dispatch = useDispatch();
  const { dangChieu, sapChieu } = useSelector(
    (state) => state.QuanLyPhimReducer
  );

  const renderPhims = () => {
    return props.arrPhim.map((item, index) => {
      return (
        <div className="mt-2" key={index}>
          <Film_Flip item={item} />
        </div>
      );
    });
  };
  let activeClassDC = dangChieu === true ? "active_Film" : "none_active_Film";

  let activeClassSC = sapChieu === true ? "active_Film" : "none_active_Film";
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
  };

  return (
    <div className="container">
      <button
        type="button"
        class="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded mx-2"
        onClick={() => {
          const action = { type: SET_FILM_DANG_CHIEU };
          dispatch(action);
        }}
      >
        PHIM CHIẾU RẠP
      </button>
      <button
        type="button"
        class="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded mx-2"
        onClick={() => {
          const action = { type: SET_FILM_SAP_CHIEU };
          dispatch(action);
        }}
      >
        PHIM SẮP CHIẾU
      </button>
      <Slider {...settings}>{renderPhims()}</Slider>
    </div>
  );
};

export default MultipleRowSlick;
