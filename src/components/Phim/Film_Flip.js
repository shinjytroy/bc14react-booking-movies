import React from "react";
import { PlayCircleOutlined } from "@ant-design/icons";
import "./Film_Flip.css";
import { history } from "../../App";

export default function Film_Flip(props) {
  const { item } = props;

  return (
    <div className="flip-card ">
      <div className="flip-card-inner">
        <div className="flip-card-front">
          <img className="w-full h-full "
            src={item.hinhAnh}
            alt="Avatar"
            // style={{ width: 300, height: 300 }}
            onError={(e) => {
              e.target.onerror = null;
              e.target.src = "https://picsum.photos/300/300";
            }}
          />
        </div>
        <div
          className="flip-card-back"
          style={{ position: "relative", backgroundColor: "rgba(0,0,0,.9)" }}
        >
          <div
            style={{
              justifyContent: "center",
              position: "absolute",
              top: 0,
              left: 0,
            }}
          >
            <img className="Film_Flip__img"
              src={item.hinhAnh}
              alt="Avatar"
              style={{ width: 300, height:300 }}
              onError={(e) => {
                e.target.onerror = null;
                e.target.src = "https://picsum.photos/300/300";
              }}
            />
          </div>
          <div
            className="w-full h-full"
            style={{
              position: "absolute",
              backgroundColor: "rgba(0,0,0,.5)",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <div>
              <div className="rounded-full cursor-pointer">
                <PlayCircleOutlined style={{ fontSize: "50px" }} />
              </div>
              <div className="text-2xl mt-3 font-bold home__carousel__font ">{item.tenPhim}</div>
            </div>
          </div>
        </div>
      </div>
      <div
        onClick={() => {
          history.push(`/detail/${item.maPhim}`);
        }}
        className="bg-orange-300 text-center cursor-pointer py-2 bg-gray-400 text-white my-2 text-success-50 font-bold "
      >
        ĐẶT VÉ
      </div>
    </div>
  );
}
