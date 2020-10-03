import Mock from "mockjs";
Mock.mock("/api/login", {
  status: 0,
  data: [
    {
      username: "mock1",
      password: "123123",
      accesslevel: 4,
    },
    {
      username: "mock2",
      password: "123123",
      accesslevel: 4,
    },
    {
      username: "mock3",
      password: "123123",
      accesslevel: 4,
    },
  ],
});
