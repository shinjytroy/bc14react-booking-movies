import { TOKEN, USER_LOGIN } from "../../ultil/settings/config";
import {
  DANG_NHAP_ACTION,
  SET_DANH_SACH_LOAI_NGUOI_DUNG,
  SET_DANH_SACH_NGUOI_DUNG,
  SET_THONG_TIN_NGUOI_DUNG,
} from "../types/QuanlyNguoiDungType";

let user = {};

if (localStorage.getItem(USER_LOGIN)) {
  user = JSON.parse(localStorage.getItem(USER_LOGIN));
}

const stateDefault = {
  userLogin: user,
  thongTinNguoiDung: {},
  danhSachNguoiDung: {},
  arrUserDefault: [],
  arrUser: [
    {
      taiKhoan: "Administrator ",
      hoTen: "Quản Trị",
      email: "Admin@gmail.com",
      soDt: "1234567",
      matKhau: "Adminaabbcc",
      maLoaiNguoiDung: "KhachHang",
    },
  ],
};

export const QuanLyNguoiDungReducer = (state = stateDefault, action) => {
  switch (action.type) {
    case DANG_NHAP_ACTION: {
      const { thongTinDangNhap } = action;
      localStorage.setItem(USER_LOGIN, JSON.stringify(thongTinDangNhap));
      localStorage.setItem(TOKEN, thongTinDangNhap.accessToken);

      return { ...state, userLogin: thongTinDangNhap };
    }
    case SET_THONG_TIN_NGUOI_DUNG: {
      state.thongTinNguoiDung = action.thongTinNguoiDung;
      return { ...state };
    }
    case SET_DANH_SACH_NGUOI_DUNG: {
      state.arrUser = action.arrUser;
      state.arrUserDefault = state.arrUser;
      return { ...state };
    }

    default:
      return { ...state };
      break;
  }
};
