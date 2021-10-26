import { Fragment, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Redirect, Route } from "react-router";
import { Layout, Menu, Breadcrumb } from "antd";
import { FileOutlined, UserOutlined } from "@ant-design/icons";
import { NavLink } from "react-router-dom";
import _ from "lodash";
import { history } from "../../App";
import { TOKEN, USER_LOGIN } from "../../ultil/settings/config";

const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;

const AdminTemplate = (props) => {
  const { Component, ...restProps } = props;
  const { userLogin } = useSelector((state) => state.QuanLyNguoiDungReducer);

  const [collapsed, setCollapsed] = useState(false);

  const onCollapse = (collapsed) => {
    setCollapsed(collapsed);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  });

  if (!localStorage.getItem(USER_LOGIN)) {
    alert("Bạn không có quyền truy cập vào trang này !");
    return <Redirect to="/" />;
  }

  if (userLogin.maLoaiNguoiDung !== "QuanTri") {
    alert("Bạn không có quyền truy cập vào trang này !");
    return <Redirect to="/" />;
  }

  const operations = (
    <Fragment>
      {!_.isEmpty(userLogin) ? (
        <Fragment>
          {" "}
          <button
            onClick={() => {
              history.push("/profile");
            }}
          >
            {" "}
            <div
              style={{
                width: 50,
                height: 50,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
              className="text-2xl ml-5 rounded-full bg-red-200"
            >
              {userLogin.taiKhoan.substr(0, 1)}
            </div>
            {userLogin.taiKhoan}
          </button>{" "}
          <button
            onClick={() => {
              localStorage.removeItem(USER_LOGIN);
              localStorage.removeItem(TOKEN);
              history.push("/home");
              window.location.reload();
            }}
            className="text-blue-800"
          >
            Đăng xuất
          </button>{" "}
        </Fragment>
      ) : (
        ""
      )}
    </Fragment>
  );

  return (
    <Route
      {...restProps}
      render={(propsRoute) => {
        return (
          <Fragment>
            <Layout style={{ minHeight: "100vh" }}>
              <Sider collapsible collapsed={collapsed} onCollapse={onCollapse}>
                <div className="logo p-5">
                  <img
                    src="https://iphimmoi.net/wp-content/uploads/2021/08/logo.png"
                    alt="..."
                  />
                </div>
                <Menu theme="dark" defaultSelectedKeys={["1"]} mode="inline">
                  <SubMenu
                    key="sub1"
                    icon={<FileOutlined />}
                    title="Người Dùng"
                  >
                    <Menu.Item key="10" icon={<FileOutlined />}>
                      <NavLink to="/admin/users">Quản lý Users</NavLink>
                    </Menu.Item>
                    <Menu.Item key="20" icon={<FileOutlined />}>
                      <NavLink to="/admin/users/adduser">Thêm Users</NavLink>
                    </Menu.Item>
                  </SubMenu>
                  <SubMenu key="sub1" icon={<FileOutlined />} title="Films">
                    <Menu.Item key="30" icon={<FileOutlined />}>
                      <NavLink to="/admin/films">Quản lý Phim</NavLink>
                    </Menu.Item>
                    <Menu.Item key="40" icon={<FileOutlined />}>
                      <NavLink to="/admin/films/addnew">Thêm phim mới</NavLink>
                    </Menu.Item>
                  </SubMenu>
                </Menu>
              </Sider>
              <Layout className="site-layout">
                <Header
                  className="site-layout-background"
                  style={{ padding: 0 }}
                >
                  <div className="text-right pr-10 pt-1">{operations}</div>
                </Header>
                <Content style={{ margin: "0 16px" }}>
                  <Breadcrumb style={{ margin: "16px 0" }}></Breadcrumb>
                  <div
                    className="site-layout-background"
                    style={{ padding: 24, minHeight: "85vh" }}
                  >
                    <Component {...propsRoute} />
                  </div>
                </Content>
                <Footer style={{ textAlign: "center" }}>
                  Ant Design @2021
                </Footer>
              </Layout>
            </Layout>
          </Fragment>
        );
      }}
    />
  );
};

export default AdminTemplate;
