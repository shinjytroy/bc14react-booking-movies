
import _ from "lodash";
import React from "react";
import { useSelector } from "react-redux";
import "./Footer.css"

export default function Footer(props) {
  const { heThongRapChieu } = useSelector((state) => state.QuanLyRapReducer);

  const arrHeThongRap = _.map(heThongRapChieu, (heThongRap) =>
    _.pick(heThongRap, ["maHeThongRap", "tenHeThongRap", "logo"])
  );

  return (
    <footer className="px-4 py-8 bg-gray-800 text-coolGray-600">
      <div className=" container flex flex-wrap items-start justify-center mx-auto space-y-4 sm:justify-evenly  sm:space-y-0">
        <div className="flex flex-row pr-3 space-x-4 sm:space-x-8">
          <div className="flex justify-center items-center flex-shrink-0 w-30 h-100 rounded-full bg-violet-600">
            <img className="items-center Footer__logo items-center"
              src="https://iphimmoi.net/wp-content/uploads/2021/08/logo.png"
              alt="logophimmoi"
            />
          </div>
          <ul className="flex flex-wrap items-center space-x-4 sm:space-x-8">
            <li>
              <p className="pb-1 text-lg font-medium text-gray-600">
                Terms of Use
              </p>
            </li>
            <li>
              <p className="pb-1 text-lg font-medium text-gray-600">Privacy</p>
            </li>
          </ul>
        </div>
        <div className="col-span-6 text-center md:text-left md:col-span-3">
          <p className="pb-1 text-lg font-medium text-gray-600 text-center">
            Business partner :
          </p>
          <div className="grid grid-cols-3 md:grid-cols-6" style={{ color: "#fff" }}>
            {arrHeThongRap.map((htr, index) => {
              return (
                <div key={index}>
                  <img
                    className=" px-2 py-2"
                    src={htr.logo}
                    style={{ width: 50 }}
                  />
                </div>
              );
            })}
          </div>
        </div>
        <ul className="flex flex-wrap pl-3 space-x-4 sm:space-x-8">
          <li>
            <p className="pb-1 text-lg font-medium text-gray-600">Instagram</p>
          </li>
          <li>
            <p className="pb-1 text-lg font-medium text-gray-600">Facebook</p>
          </li>
          <li>
            <p className="pb-1 text-lg font-medium text-gray-600">Twitter</p>
          </li>
        </ul>
      </div>
    </footer>
  );
}
