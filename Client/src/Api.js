import axios from "axios";

const api = axios.create({
  baseURL: "https://password-api-exis.herokuapp.com/api",
});
// https://password-api-exis.herokuapp.com/api
export default api;
