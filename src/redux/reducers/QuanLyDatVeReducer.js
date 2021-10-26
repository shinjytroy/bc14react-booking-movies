import { ThongTinLichChieu } from "../../_core/models/ThongTinPhongVe";
import {
  CHUYEN_TAB,
  DAT_GHE,
  DAT_VE_HOAN_TAT,
  LAY_CHI_TIET_PHONG_VE,
} from "../types/QuanLyDatVeType";

const stateDefault = {
  chiTietPhongVe: new ThongTinLichChieu(),
  danhSachGheDangDat: [],
  tabActive: "1",
};

export const QuanLyDatVeReducer = (state = stateDefault, action) => {
  switch (action.type) {
    case LAY_CHI_TIET_PHONG_VE: {
      state.chiTietPhongVe = action.chiTietPhongVe;
      return { ...state };
    }

    case DAT_GHE: {
      let danhSachGheCapNhat = [...state.danhSachGheDangDat];

      let index = danhSachGheCapNhat.findIndex(
        (gheDD) => gheDD.maGhe === action.gheDuocChon.maGhe
      );
      if (index != -1) {
        danhSachGheCapNhat.splice(index, 1);
      } else {
        danhSachGheCapNhat.push(action.gheDuocChon);
      }
      return { ...state, danhSachGheDangDat: danhSachGheCapNhat };
    }

    case DAT_VE_HOAN_TAT: {
      state.danhSachGheDangDat = [];
      return { ...state };
    }
    case CHUYEN_TAB: {
      console.log("action", action);
      state.tabActive = "2";
      return { ...state };
    }
    case "CHANGE_TAB_ACTIVE": {
      console.log("action", action);
      state.tabActive = action.number;
      return { ...state };
    }

    default:
      return { ...state };
  }
};
