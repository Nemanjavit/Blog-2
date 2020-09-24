import axios from "axios";

const http = axios.create({
	baseURL: "https://frontend-api-test-nultien.azurewebsites.net/api/",
});
export default http;
