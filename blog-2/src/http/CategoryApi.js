import http from "./Api";

class CategoryApi {
	static addCategory(data) {
		return http.post("Category", data);
	}
	static getCategory() {
		return http.get("Category");
	}
}

export default CategoryApi;
