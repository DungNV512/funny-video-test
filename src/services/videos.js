import axios from "axios";

const API_URL = "https://my-json-server.typicode.com/DungNV512/demo-API/";

const getPublicContent = () => {
  return axios.get(API_URL + "videos");
};

const videoService = {
  getPublicContent,
};

export default videoService;
