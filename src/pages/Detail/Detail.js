import React, { useEffect } from "react";
import { CustomCard } from "@tsamantanis/react-glassmorphism";
import "@tsamantanis/react-glassmorphism/dist/index.css";
import { Tabs } from "antd";
import { useSelector, useDispatch } from "react-redux";
import { layThongTinChiTietPhim } from "../../redux/actions/QuanLyRapAction";
import moment from "moment";
import { NavLink } from "react-router-dom";

const { TabPane } = Tabs;

export default function Detail(props) {
  const filmDetail = useSelector((state) => state.QuanLyPhimReducer.filmDetail);

  console.log("filmDetail", filmDetail);
  const dispatch = useDispatch();
  useEffect(() => {
    let { id } = props.match.params;
    dispatch(layThongTinChiTietPhim(id));
  }, []);

  return (
    <div
      style={{
        backgroundImage: `url(${filmDetail?.hinhAnh})`,
        backgroundSize: "100%",
        backgroundPosition: "center",
        minHeight: "100vh",
      }}
    >
      <CustomCard
        style={{ paddingTop: 150, minHeight: "100vh" }}
        effectColor="#fff" // required
        color="#fff" // default color is white
        blur={5} // default blur value is 10px
        borderRadius={0} // default border radius value is 10px
      >
        <div className="grid grid-cols-12">
          <img
            style={{ width: 300, height: 400 }}
            className="col-span-4 ml-5"
            src={filmDetail?.hinhAnh}
            alt="123"
          />
          <div className="col-span-8 ml-3">
            <p className="text-2xl text-black">
              Ngày Chiếu:
              {moment(filmDetail?.ngayKhoiChieu).format("DD - MM - YYYY")}{" "}
            </p>
            <p className="text-4xl text-black">{filmDetail?.tenPhim}</p>
            <p className="text-2xl text-black">{filmDetail?.moTa}</p>
          </div>
        </div>
        <div className="mt-20 ml-72 w-2/3 container bg-white px-5 py-5 container">
          <Tabs defaultActiveKey="1" centered>
            <TabPane tab="Lịch Chiếu" key="1">
              <div>
                <Tabs tabPosition={"left"}>
                  {filmDetail?.heThongRapChieu?.map((htr, index) => {
                    return (
                      <TabPane
                        tab={
                          <div>
                            <img
                              src={htr?.logo}
                              alt="logoRap"
                              width={50}
                              height={50}
                            />
                            {htr?.tenHeThongRap}
                          </div>
                        }
                        key={index}
                      >
                        {/* Nội dung Lịch chiếu */}
                        {htr?.cumRapChieu.map((cumRap, index) => {
                          return (
                            <div className="mt-5" key={index}>
                              <div className="flex flex-row">
                                <img
                                  style={{ width: 60, height: 60 }}
                                  src={cumRap?.hinhAnh}
                                  alt="..."
                                />
                                <div className="ml-2">
                                  <p
                                    style={{
                                      fontSize: 20,
                                      fontWeight: "bold",
                                      lineHeight: 1,
                                    }}
                                  >
                                    {cumRap?.tenCumRap}
                                  </p>
                                  <p
                                    className="text-gray-400"
                                    style={{ marginTop: 0 }}
                                  >
                                    {cumRap?.diaChi}
                                  </p>
                                </div>
                              </div>
                              <div className="thong-tin-lich-chieu grid grid-cols-4">
                                {cumRap?.lichChieuPhim
                                  .slice(0, 12)
                                  .map((lichChieu, index) => {
                                    return (
                                      <NavLink
                                        to={`/checkout/${lichChieu?.maLichChieu}`}
                                        key={index}
                                        className="col-span-1 text-green-800 font-bold"
                                      >
                                        {moment(
                                          lichChieu?.ngayChieuGioChieu
                                        ).format("hh:mm A")}
                                      </NavLink>
                                    );
                                  })}
                              </div>
                            </div>
                          );
                        })}
                      </TabPane>
                    );
                  })}
                </Tabs>
              </div>
            </TabPane>

            <TabPane tab="Thông Tin" key="2">
              Đang Tải .....
            </TabPane>
            <TabPane tab="Đánh giá" key="3">
              Đang Tải .....
            </TabPane>
          </Tabs>
        </div>
      </CustomCard>
    </div>
  );
}
