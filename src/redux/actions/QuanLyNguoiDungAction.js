import { quanLyNguoiDungService } from "../../services/QuanLyNguoiDung";
import {
  DANG_KY_ACTION,
  DANG_NHAP_ACTION,
  SET_DANH_SACH_LOAI_NGUOI_DUNG,
  SET_DANH_SACH_NGUOI_DUNG,
  SET_THONG_TIN_NGUOI_DUNG,
} from "../types/QuanlyNguoiDungType";
import { history } from "../../App";

export const dangNhapAction = (thongTinDangNhap) => {
  return async (dispatch) => {
    try {
      const result = await quanLyNguoiDungService.dangNhap(thongTinDangNhap);

      if (result.data.statusCode === 200) {
        dispatch({
          type: DANG_NHAP_ACTION,
          thongTinDangNhap: result.data.content,
        });
        history.goBack();
      }

      console.log(result);
    } catch (error) {
      console.log(error.response.data);
    }
  };
};

export const dangKyAction = (thongTinDangKy) => {
  return async (dispatch) => {
    try {
      const result = await quanLyNguoiDungService.dangKy(thongTinDangKy);

      if (result.data.statusCode === 200) {
        dispatch({
          type: DANG_KY_ACTION,
          thongTinDangKy: result.data.content,
        });
        history.goBack();
      }

      console.log(result);
    } catch (error) {
      console.log(error.response.data);
    }
  };
};

export const layThongTinNguoiDungAction = (thongTinDangNhap) => {
  return async (dispatch) => {
    try {
      const result = await quanLyNguoiDungService.layThongTinNguoiDung();

      if (result.data.statusCode === 200) {
        dispatch({
          type: SET_THONG_TIN_NGUOI_DUNG,
          thongTinNguoiDung: result.data.content,
        });
      }

      console.log("result", result);
    } catch (error) {
      console.log("error", error.response.data);
    }
  };
};

export const layDanhSachNguoiDungAction = () => {
  return async (dispatch) => {
    try {
      const result = await quanLyNguoiDungService.layDanhSachNguoiDung();

      dispatch({
        type: SET_DANH_SACH_NGUOI_DUNG,
        arrUser: result.data.content,
      });
    } catch (errors) {
      console.log(errors);
    }
  };
};

export const themNguoiDungAction = (formData) => {
  return async (dispatch) => {
    try {
      let result = await quanLyNguoiDungService.themNguoiDung(formData);
      alert("Thêm người dùng thành công");
      console.log("result", result.data.content);
    } catch (errors) {
      console.log(errors.response?.data);
    }
  };
};
