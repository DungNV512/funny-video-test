import axios from 'axios';
import { ENDPOINT_URL } from "../constants";

const getPublicContent = () => {
  return axios.get(ENDPOINT_URL + "videos");
};

const shareVideo = () => {};

const videoService = {
  getPublicContent,
  shareVideo,
};

export default videoService;
