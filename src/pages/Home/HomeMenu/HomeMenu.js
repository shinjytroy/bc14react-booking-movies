import React, { Fragment } from "react";
import { Tabs } from "antd";
import { NavLink } from "react-router-dom";
import moment from "moment";
import "./HomeMenu.css"
const { TabPane } = Tabs;

export default class HomeMenu extends React.PureComponent {
  state = {
    tabPosition: "left",
  };

  changeTabPosition = (e) => {
    this.setState({ tabPosition: e.target.value });
  };

  componentDidMount() {}

  renderHeThongRap = () => {
    let { tabPosition } = this.state;
    return this.props.heThongRapChieu?.map((heThongRap, index) => {
      return (
        <TabPane
          tab={
            <img src={heThongRap.logo} className="rounded-full" width="50" />
          }
          key={index}
        >
          <Tabs 
            tabPosition={tabPosition}>
            {heThongRap.lstCumRap?.map((cumRap, index) => {
              return (
                <TabPane
                  tab={
                    <div style={{ width: "300px", display: "flex" }}>
                      <img
                        src="https://s3img.vcdn.vn/123phim/2021/01/bhd-star-pham-hung-16105959230642.png"
                        width="50"
                      />
                      <br />
                      <div className="home_menu-title text-left ml-2 md:mr-20 home__display">
                        {cumRap.tenCumRap}
                        <p className="text-red-400">[Chi tiết]</p>
                      </div>
                    </div>
                  }
                  key={index}
                >
                  {cumRap.danhSachPhim.map((phim, index) => {
                    return (
                      <Fragment key={index}>
                        <div className="my-5" style={{ display: "flex" }}>
                          <div 
                          >
                            <img
                              style={{ height: 100, width: 100 }}
                              src={phim.hinhAnh}
                              alt={phim.tenPhim}
                              onError={(e) => {
                                e.target.onerror = null;
                                e.target.src = "https://picsum.photos/100/100";
                              }}
                            />
                            <div className="ml-2">
                              <h1 className="font-bold ml-2">{phim.tenPhim}</h1>
                              <p>{cumRap.diaChi}</p>
                              <div className="grid grid-cols-3 gap-2">
                                {phim.lstLichChieuTheoPhim
                                  ?.slice(0, 8)
                                  .map((lichChieu, index) => {
                                    return (
                                      <NavLink
                                        className="text-1xl text-red-500"
                                        to={`/checkout/${lichChieu.maLichChieu}`}
                                        key={index}
                                      >
                                        {moment(
                                          lichChieu.ngayChieuGioChieu
                                        ).format("hh:mm A")}
                                      </NavLink>
                                    );
                                  })}
                              </div>
                            </div>
                          </div>
                        </div>
                        <hr />
                      </Fragment>
                    );
                  })}
                </TabPane>
              );
            })}
          </Tabs>
          ;
        </TabPane>
      );
    });
  };

  render() {
    const { tabPosition } = this.state;

    return (
      <>
        <Tabs tabPosition={tabPosition}>{this.renderHeThongRap()}</Tabs>
      </>
    );
  }
}
