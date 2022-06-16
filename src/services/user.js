import axios from "axios";
import authHeader from "../helper";
import { API_URL } from "../constants";

const getPublicContent = () => {
  return axios.get(API_URL + "user");
};

const userService = {
  getPublicContent,
};

export default userService