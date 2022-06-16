import axios from "axios";
import { ENDPOINT_URL } from "../constants";

const getUsers = () => {
  return axios.get(ENDPOINT_URL + "user");
};

const userService = {
  getUsers,
};

export default userService;
