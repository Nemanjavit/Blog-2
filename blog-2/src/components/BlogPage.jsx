import React, { useEffect, useState } from "react";
import PostApi from "../http/PostApi";
import BlogPost from "./BlogPost";
import BlogSidebar from "./BlogSidebar";
import ModalOnAdd from "./ModalOnAdd";

const BlogPage = () => {
	const [modalIsOpen, setmodalIsOpen] = useState(false);
	const [categoryAdded, setCategoryAdded] = useState(false);
	const [allPosts, setAllPosts] = useState([]);
	const [selectedCategory, setSelectedCategory] = useState([]);
	// open modal
	const openModal = () => setmodalIsOpen(true);
	// close modal
	const closeModal = () => setmodalIsOpen(false);

	const categoryAddSuccess = () => setCategoryAdded(!categoryAdded);
	// get posts
	useEffect(() => {
		const getPosts = async () => {
			try {
				const result = await PostApi.getPosts();
				setAllPosts(result.data.resultData);
			} catch (error) {
				console.log(error);
			}
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

	// delete post
	const onDelete = async (id) => {
		try {
			const result = await PostApi.deletePost(id);
			console.log(result.data);
		} catch (error) {
			console.log(error);
		}
	};

	return (
		<>
			<div className="row">
				<div className="col-12">
					<h1 className="py-1 text-center">Welcome to my blog</h1>
				</div>
				<div className="col-8 offset-2">
					<p className="border border-dark py-3 px-3">
						Container for showing application messages
					</p>
				</div>
				<div className="col-10">
					<button
						onClick={openModal}
						className="ml-auto  d-block button button-wide"
					>
						Add post
					</button>
				</div>
			</div>
			<div className="row">
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

					{allPosts.map((post) => {
						return (
							<BlogPost
								key={post.id}
								post={post}
								onDelete={(e) => onDelete(post.id)}
							/>
						);
					})}
				</div>
			</div>
		</>
	);
};

export default BlogPage;
