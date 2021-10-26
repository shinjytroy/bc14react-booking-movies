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

import { NavLink } from "react-router-dom";
import { layDanhSachNguoiDungAction } from "../../../redux/actions/QuanLyNguoiDungAction";

const { Search } = Input;
const suffix = (
  <AudioOutlined
    style={{
      fontSize: 16,
      color: "#1890ff",
    }}
  />
);

export default function Dashboard() {
  const { arrUserDefault } = useSelector(
    (state) => state.QuanLyNguoiDungReducer
  );
  const dispatch = useDispatch();
  console.log("arrUserDefault", arrUserDefault);

  useEffect(() => {
    dispatch(layDanhSachNguoiDungAction());
  }, []);
  const columns = [
    {
      title: "Tài Khoản",
      dataIndex: "taiKhoan",

      render: (text, user) => {
        return <Fragment>{user.taiKhoan}</Fragment>;
      },
      sortDirections: ["descend", "ascend"],
      width: "15%",
    },
    {
      title: "Mật Khẩu",
      dataIndex: "matKhau",

      render: (text, user) => {
        return <Fragment>{user.matKhau}</Fragment>;
      },
      sortDirections: ["descend", "ascend"],
      width: "15%",
    },
    {
      title: "Họ và Tên",
      dataIndex: "hoTen",

      render: (text, user) => {
        return <Fragment>{user.hoTen}</Fragment>;
      },
      sortDirections: ["descend", "ascend"],
      width: "15%",
    },
    {
      title: "Email",
      dataIndex: "moTa",

      render: (text, user) => {
        return <Fragment>{user.email}</Fragment>;
      },
      sortDirections: ["descend", "ascend"],
      width: "15%",
    },
    {
      title: "Số Điện Thoại",
      dataIndex: "soDt",

      render: (text, user) => {
        return <Fragment>{user.soDt}</Fragment>;
      },
      sortDirections: ["descend", "ascend"],
      width: "15%",
    },

    {
      title: "Hành động",
      dataIndex: "taiKhoan",
      render: (text, user) => {
        return (
          <Fragment>
            <NavLink
              key={1}
              className=" text-green-200 mr-2 text-2xl"
              style={{ color: "blue" }}
              to="#"
            >
              <EditOutlined />
            </NavLink>
            <span
              style={{ cursor: "pointer" }}
              key={2}
              className="text-2xl"
              to="#"
            >
              <DeleteOutlined style={{ color: "red" }} />{" "}
            </span>
          </Fragment>
        );
      },
      sortDirections: ["descend", "ascend"],
      width: "10%",
    },
  ];

  const data = arrUserDefault;

  const onSearch = (value) => {
    console.log(value);

    dispatch(layDanhSachNguoiDungAction(value));
  };

  return (
    <div>
      <Button
        className="mb-5"
        onClick={() => {
          history.push("/admin/users/adduser");
        }}
      >
        Thêm Người Dùng
      </Button>
      <h3 className="text-4xl">Quản lý Người Dùng</h3>
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
        rowKey={"taiKhoan"}
      />
    </div>
  );
}

function onChange(pagination, filters, sorter, extra) {
  console.log("params", pagination, filters, sorter, extra);
}
