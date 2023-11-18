import { cinemaApi, userApi } from "./fakeApi";

export const cinemaService = {
  getData: () => {
    return cinemaApi.get("/cinema");
  },
};

export const userService = {
  requestLogin: (value) => {
    return userApi.post("/api/QuanLyNguoiDung/DangNhap", value);
  },
};
