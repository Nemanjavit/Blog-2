import React, { useEffect, useState } from "react";
import PostApi from "../http/PostApi";
import BlogPost from "./BlogPost";
import BlogSidebar from "./BlogSidebar";
import ModalOnAdd from "./ModalOnAdd";

const BlogPage = () => {
	const [modalIsOpen, setmodalIsOpen] = useState(false);
	const [categoryAdded, setCategoryAdded] = useState(false);
	const [selectedCategory, setSelectedCategory] = useState([]);
	// open modal
	const openModal = () => setmodalIsOpen(true);
	// close modal
	const closeModal = () => setmodalIsOpen(false);

	const categoryAddSuccess = () => setCategoryAdded(!categoryAdded);
	// get posts
	useEffect(() => {
		const getPosts = async () => {
			const result = await PostApi.getPosts();
		};
		getPosts();
	}, []);

	// get posts by category
	const getPostsByCategory = async (id) => {
		try {
			const result = await PostApi.getPostsByCategory(id);
			setSelectedCategory(result.data.resultData);
		} catch (error) {
			console.log(error);
		}
	};
	const postByCategory = (id) => {
		getPostsByCategory(id);
	};

	return (
		<div className="row">
			<div className="col-12">
				<h1 className="py-1 text-center">Welcome to my blog</h1>
			</div>
			<BlogSidebar
				postByCategory={postByCategory}
				categoryAdded={categoryAdded}
			/>
			<div className="col-8">
				<ModalOnAdd
					categoryAddSuccess={categoryAddSuccess}
					categoryAdded={categoryAdded}
					modalIsOpen={modalIsOpen}
					closeModal={closeModal}
				/>
				<button onClick={openModal} className="ml-auto  d-block">
					Add post
				</button>
				<BlogPost />
			</div>
		</div>
	);
};

export default BlogPage;
