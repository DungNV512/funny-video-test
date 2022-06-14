import axios from "axios";
import authHeader from "../helper";
import data from "../mockAPI";

const API_URL = "https://my-json-server.typicode.com/DungNV512/demo-API/";

const getPublicContent = () => {
  return axios.get(API_URL + "videos");
  // const data = JSON.parse(response);
  // console.log("response", data);
  // return data.videos;
};

const videoService = {
  getPublicContent,
};

export default videoService;
