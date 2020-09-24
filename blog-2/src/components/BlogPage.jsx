import React, { useEffect, useState } from "react";
import PostApi from "../http/PostApi";
import BlogPost from "./BlogPost";
import BlogSidebar from "./BlogSidebar";
import ModalOnAdd from "./ModalOnAdd";

const BlogPage = () => {
	const [modalIsOpen, setmodalIsOpen] = useState(false);

	// open modal
	const openModal = () => setmodalIsOpen(true);
	// close modal
	const closeModal = () => setmodalIsOpen(false);

	useEffect(() => {
		// get posts
		const getPosts = async () => {
			const result = await PostApi.getPosts();
			console.log(result.data);
		};
		getPosts();
	}, []);

	return (
		<div className="row">
			<div className="col-12">
				<h1 className="py-1 text-center">Welcome to my blog</h1>
			</div>
			<BlogSidebar />
			<div className="col-8">
				<ModalOnAdd modalIsOpen={modalIsOpen} closeModal={closeModal} />
				<button onClick={openModal} className="ml-auto  d-block">
					Add post
				</button>
				<BlogPost />
			</div>
		</div>
	);
};

export default BlogPage;
