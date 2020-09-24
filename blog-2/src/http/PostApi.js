import http from "./Api";

class PostApi {
	static getPosts() {
		return http.get(`BlogPosts`);
	}
}
export default PostApi;
