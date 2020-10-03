import Mock from "mockjs";
//登录账号密码
const sign = {
  status: 0,
  data: [
    {
      username: "admin123456",
      password: "admin123456",
      accesslevel: 1,
    },
    {
      username: "user123456",
      password: "user123456",
      accesslevel: 2,
    },
  ],
};
//待注册用户数据
const waitLoginUserData = {
  status: 0,
  userData: [
    {
      username: "admin123456",
      password: "admin123456",
      accesslevel: 1,
    },
    {
      username: "user123456",
      password: "user123456",
      accesslevel: 2,
    },
  ],
};
//已注册用户数据
const signUserData = {
  status: 0,
  userData: [
    {
      username: "admin123456",
      password: "admin123456",
      accesslevel: 1,
    },
    {
      username: "user123456",
      password: "user123456",
      accesslevel: 2,
    },
  ],
};
Mock.mock("/api/sign", sign);
Mock.mock("/api/login/getUser", "get", waitLoginUserData);
Mock.mock("/api/userdata", "get", signUserData);
