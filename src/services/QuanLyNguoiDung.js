import { baseService } from "./baseService";

export class QuanLyNguoiDungService extends baseService {
  constructor() {
    super();
  }
  dangNhap = (thongTinDangNhap) => {
    return this.post(`/api/QuanLyNguoiDung/DangNhap`, thongTinDangNhap);
  };
  dangKy = (thongTinDangKy) => {
    return this.post(`/api/QuanLyNguoiDung/DangKy`, thongTinDangKy);
  };
  layThongTinNguoiDung = () => {
    return this.post("/api/QuanLyNguoiDung/ThongTinTaiKhoan");
  };
  layDanhSachNguoiDung = () => {
    return this.get("/api/QuanLyNguoiDung/LayDanhSachNguoiDung?MaNhom=GP15");
  };
  themNguoiDung = (formData) => {
    return this.post(`api/QuanLyNguoiDung/ThemNguoiDung`, formData);
  };
}

export const quanLyNguoiDungService = new QuanLyNguoiDungService();
