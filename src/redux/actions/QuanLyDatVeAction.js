import { quanLyDatVeService } from "../../services/QuanLyDatVeService";
import {
  CHUYEN_TAB,
  DAT_GHE,
  DAT_VE_HOAN_TAT,
  LAY_CHI_TIET_PHONG_VE,
} from "../types/QuanLyDatVeType";
import { ThongTinDatVe } from "../../_core/models/ThongTinDatVe";
import { DISPLAY_LOADING, HIDE_LOADING } from "../types/LoadingType";

export const layChiTietPhongVeAction = (maLichChieu) => {
  return async (dispatch) => {
    try {
      const result = await quanLyDatVeService.layChiTietPhongVe(maLichChieu);
      console.log("result", result);
      if (result.status === 200) {
        dispatch({
          type: LAY_CHI_TIET_PHONG_VE,
          chiTietPhongVe: result.data.content,
        });
      }
    } catch (error) {
      console.log("error", error.response?.data);
    }
  };
};

export const datVeAction = (thongTinDatVe = new ThongTinDatVe()) => {
  return async (dispatch) => {
    try {
      dispatch({
        type: DISPLAY_LOADING,
      });
      const result = await quanLyDatVeService.datVe(thongTinDatVe);
      console.log(result.data.content);

      await dispatch(layChiTietPhongVeAction(thongTinDatVe.maLichChieu));
      await dispatch({ type: DAT_VE_HOAN_TAT });

      await dispatch({
        type: HIDE_LOADING,
      });
      await dispatch({
        type: CHUYEN_TAB,
      });
    } catch (error) {
      console.log("error", error.response.data);
    }
  };
};

export const datGheAction = (ghe, maLichChieu) => {
  return async (dispatch, getState) => {
    await dispatch({
      type: DAT_GHE,
      gheDuocChon: ghe,
    });

    let danhSachGheDangDat = getState().QuanLyDatVeReducer.danhSachGheDangDat;
    let taiKhoan = getState().QuanLyNguoiDungReducer.userLogin.taiKhoan;
    console.log("danhSachGheDangDat", danhSachGheDangDat);
    console.log("taiKhoan", taiKhoan);
    console.log("maLichChieu", maLichChieu);
    danhSachGheDangDat = JSON.stringify(danhSachGheDangDat);
  };
};
