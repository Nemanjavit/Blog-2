import React, { useEffect } from "react";
import PostApi from "../http/PostApi";
import BlogPost from "./BlogPost";
import BlogSidebar from "./BlogSidebar";

const BlogPage = () => {
	useEffect(() => {
		// get posts
		const getPosts = async () => {
			const result = await PostApi.getPosts();
			console.log(result.data);
		};
		getPosts();
	}, []);

	return (
		<div>
			<h1 className="text-center">Blog Page</h1>
			<div className="row">
				<BlogSidebar />
				<BlogPost />
			</div>
		</div>
	);
};

export default BlogPage;
