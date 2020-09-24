import http from "./Api";

class PostApi {
	static getPosts() {
		return http.get(`BlogPosts`);
	}
	static addPost(data) {
		return http.post(`BlogPosts`, data);
	}
}
export default PostApi;
