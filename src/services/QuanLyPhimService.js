import { GROUP } from "../ultil/settings/config";
import { baseService } from "./baseService";

export class QuanLyPhimService extends baseService {
  constructor() {
    super();
  }
  layDanhSachBanner = () => {
    return this.get(`api/QuanLyPhim/LayDanhSachBanner`);
  };

  layDanhSachPhim = (tenPhim = "") => {
    if (tenPhim.trim() != "") {
      return this.get(
        `api/QuanLyPhim/LayDanhSachPhim?maNhom=${GROUP}&tenPhim=${tenPhim}`
      );
    }
    return this.get(`api/QuanLyPhim/LayDanhSachPhim?maNhom=${GROUP}`);
  };

  themPhimUploadHinh = (formData) => {
    return this.post(`api/QuanLyPhim/ThemPhimUploadHinh`, formData);
  };

  layThongTinPhim = (maPhim) => {
    return this.get(`api/QuanLyPhim/LayThongTinPhim?MaPhim=${maPhim}`);
  };

  capNhatPhimUpload = (formData) => {
    return this.post(`api/QuanLyPhim/CapNhatPhimUpload`, formData);
  };

  xoaPhim = (maPhim) => {
    return this.delete(`api/QuanLyPhim/XoaPhim?MaPhim=${maPhim}`);
  };
}

export const quanlyPhimService = new QuanLyPhimService();