import axios from "axios";

export const axiosInstance = axios.create({
	baseURL: "https://mern-opencloset.herokuapp.com/api/",
});
