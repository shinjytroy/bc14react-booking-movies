import React, { useEffect } from "react";
import { Carousel } from "antd";
import { useSelector, useDispatch } from "react-redux";
import { getCarouselAction } from "../../../../redux/actions/CarouselAction";
import "./HomeCarousel.css";

const contentStyle = {
  width: "100%",
  height: "100%",
  color: "#fff",
  lineHeight: "160px",
  textAlign: "center",
  backgroundPosition: "center",
  backgroundSize: "100%",
  backgroundRepeat: "no-repeat",
};

export default function HomeCarousel(props) {
  const { arrImg } = useSelector((state) => state.CarouselReducer);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCarouselAction());
  }, []);

  const renderImg = () => {
    return arrImg.map((item, index) => {
      return (
        <div key={index}>
          <div
            style={{ ...contentStyle, backgroundImage: `url(${item.hinhAnh})` }}
          >
            <img src={item.hinhAnh} className="opacity-0" alt={item.hinhAnh} />
          </div>
        </div>
      );
    });
  };

  return (
    <Carousel effect="fade" style={{ width: "100%", height:"100%", padding: 0, margin: 0 }}>
      {renderImg()}
    </Carousel>
  );
}
