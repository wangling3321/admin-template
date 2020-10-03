let baseURL;
switch (process.env.NODE_ENV) {
  case "development":
    baseURL = "http://localhost:8080/api";
    break;
  case "production":
    baseURL = "http://localhost:8080/api";
    break;
  case "test":
    baseURL = "http://localhost:8080/api";
    break;
  default:
    baseURL = "http://localhost:8080/api";
    break;
}
export default {
  baseURL,
};
