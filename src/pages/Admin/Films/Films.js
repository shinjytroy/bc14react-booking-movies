import React, { Fragment, useEffect } from "react";
import { Button, Table } from "antd";
import { history } from "../../../App";
import { Input, Space } from "antd";
import {
  AudioOutlined,
  EditOutlined,
  SearchOutlined,
  DeleteOutlined,
  CalendarOutlined,
} from "@ant-design/icons";
import { useDispatch, useSelector } from "react-redux";
import {
  layDanhSachPhimAction,
  xoaPhimAction,
} from "../../../redux/actions/QuanLyPhimAction";
import { NavLink } from "react-router-dom";

const { Search } = Input;
const suffix = (
  <AudioOutlined
    style={{
      fontSize: 16,
      color: "#1890ff",
    }}
  />
);

export default function Films() {
  const { arrFilmDefault } = useSelector((state) => state.QuanLyPhimReducer);
  const dispatch = useDispatch();
  console.log("arrFilmDefault", arrFilmDefault);

  useEffect(() => {
    dispatch(layDanhSachPhimAction());
  }, []);
  const columns = [
    {
      title: "Mã phim",
      dataIndex: "maPhim",
      sorter: (a, b) => a.maPhim - b.maPhim,
      sortDirections: ["descend", "ascend"],
      width: "5%",
    },
    {
      title: "Hình ảnh",
      dataIndex: "hinhAnh",
      render: (text, film, index) => {
        return (
          <Fragment>
            <img
              src={film.hinhAnh}
              alt={film.tenPhim}
              width={50}
              height={50}
              onError={(e) => {
                e.target.onError = null;
                e.target.src = `https://picsum.photos/id/${index}/50/50`;
              }}
            />
          </Fragment>
        );
      },
      width: "10%",
    },
    {
      title: "Tên phim",
      dataIndex: "tenPhim",
      sorter: (a, b) => {
        let tenPhimA = a.tenPhim.toLowerCase().trim();
        let tenPhimB = b.tenPhim.toLowerCase().trim();
        if (tenPhimA > tenPhimB) {
          return 1;
        }
        return -1;
      },
      sortDirections: ["descend", "ascend"],
      width: "10%",
    },
    {
      title: "Mô tả",
      dataIndex: "moTa",

      render: (text, film) => {
        return (
          <Fragment>
            {film.moTa.length > 50
              ? film.moTa.substr(0, 50) + " ..."
              : film.moTa}
          </Fragment>
        );
      },
      sortDirections: ["descend", "ascend"],
      width: "15%",
    },
    {
      title: "Hành động",
      dataIndex: "maPhim",
      render: (text, film) => {
        return (
          <Fragment>
            <NavLink
              key={1}
              className=" text-green-200 mr-2 text-2xl"
              style={{ color: "blue" }}
              to={`/admin/films/edit/${film.maPhim}`}
            >
              <EditOutlined />
            </NavLink>
            <span
              style={{ cursor: "pointer" }}
              key={2}
              className="text-2xl"
              onClick={() => {
                if (
                  window.confirm("Bạn có chắc muốn xoá phim " + film.tenPhim)
                ) {
                  dispatch(xoaPhimAction(film.maPhim));
                }
              }}
            >
              <DeleteOutlined style={{ color: "red" }} />{" "}
            </span>
            <NavLink
              key={1}
              className=" text-green-200 mr-2 text-2xl"
              style={{ color: "blue" }}
              to={`/admin/films/showtime/${film.maPhim}`}
            >
              <CalendarOutlined />
            </NavLink>
          </Fragment>
        );
      },
      sortDirections: ["descend", "ascend"],
      width: "10%",
    },
  ];

  const data = arrFilmDefault;

  const onSearch = (value) => {
    // console.log(value);

    dispatch(layDanhSachPhimAction(value));
  };

  return (
    <div>
      <Button
        className="mb-5"
        onClick={() => {
          history.push("/admin/films/addnew");
        }}
      >
        Thêm phim
      </Button>
      <h3 className="text-4xl">Quản lý phim</h3>
      <Search
        className="mb-5"
        placeholder="input search text"
        enterButton={<SearchOutlined />}
        size="large"
        suffix={suffix}
        onSearch={onSearch}
      />
      <Table
        columns={columns}
        dataSource={data}
        onChange={onChange}
        rowKey={"maPhim"}
      />
    </div>
  );
}

function onChange(pagination, filters, sorter, extra) {
  console.log("params", pagination, filters, sorter, extra);
}
