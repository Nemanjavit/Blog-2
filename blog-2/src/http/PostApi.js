import http from "./Api";

class PostApi {
	static getPosts() {
		return http.get(`BlogPosts`);
	}
	static addPost(data) {
		return http.post(`BlogPosts`, data);
	}
	static getPostsByCategory(id) {
		return http.get(`BlogPosts/GetPostByCategory?categoryId=${id}`);
	}
}
export default PostApi;
