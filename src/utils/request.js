import axios from "axios";

const request = function () {
  return axios.create({
    baseURL: "http://192.168.31.209:6500",
    headers: {"Access-Control-Allow-Origin": "*"},
  });
};

export default request;
