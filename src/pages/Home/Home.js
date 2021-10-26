import React, { useEffect } from "react";
import HomeMenu from "./HomeMenu/HomeMenu";
import { useSelector, useDispatch } from "react-redux";
import MultipleRowSlick from "../../components/RSlick/MultipleRowSlick";
import { layDanhSachPhimAction } from "../../redux/actions/QuanLyPhimAction";
import { layDanhSachHeThongRapAction } from "../../redux/actions/QuanLyRapAction";
import HomeCarousel from "../../templates/HomeTemplate/Layout/HomeCarousel/HomeCarousel";
import "./HomeMenu/HomeMenu.css"

export default function Home(props) {
  const { arrPhim } = useSelector((state) => state.QuanLyPhimReducer);
  const { heThongRapChieu } = useSelector((state) => state.QuanLyRapReducer);
  const dispatch = useDispatch();
  // console.log("propsHome", arrPhim);

  useEffect(() => {
    const action = layDanhSachPhimAction();
    dispatch(action);
    dispatch(layDanhSachHeThongRapAction());
  }, []);

  return (
    <div>
      <HomeCarousel />
      <section className="text-gray-600 body-font py-32 md:py-8 home__carousel">
        <div className="container  mx-auto ">
          <MultipleRowSlick arrPhim={arrPhim} />
        </div>
      </section>

      <div className="home__menu mx-44 grid">
        <HomeMenu heThongRapChieu={heThongRapChieu} />
      </div>
    </div>
  );
}
