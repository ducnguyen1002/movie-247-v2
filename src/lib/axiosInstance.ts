import axios from "axios";

export const axiosInstance = axios.create({
	baseURL: "https://phimapi.com/",
	timeout: 10000,
	headers: {
		"Content-Type": "application/json",
	},
});

// Type the interceptor to return data directly
axiosInstance.interceptors.response.use(
	function (response): any {
		return response.data;
	},
	function (error) {
		console.error("API Error:", error.message);
		return Promise.reject(error);
	},
);
