import axios from "axios";

const clientAxios = axios.create({
  baseURL: "http://104.198.182.133/",
});

export default clientAxios;
