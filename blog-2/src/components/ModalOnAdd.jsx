import React, { useEffect, useState } from "react";
import Modal from "react-modal";
import { useFormik } from "formik";
import { GoDiffAdded } from "react-icons/go";
import CategoryApi from "../http/CategoryApi";
import PostApi from "../http/PostApi";

const ModalOnAdd = ({
	modalIsOpen,
	closeModal,
	categoryAddSuccess,
	categoryAdded,
}) => {
	const [categories, setCategories] = useState([]);
	const [addCategoryOpen, setaddCategoryOpen] = useState(false);
	const openAddCategory = () => setaddCategoryOpen(true);
	Modal.setAppElement("#root");

	// get categories
	useEffect(() => {
		const getCategories = async () => {
			const result = await CategoryApi.getCategory();
			let res = result.data.resultData;
			setCategories(res);
		};
		getCategories();
	}, [categoryAdded]);

	// add blog post
	const formik = useFormik({
		initialValues: {
			title: "",
			text: "",
			categoryId: "",
		},
		onSubmit: async (values) => {
			try {
				const result = await PostApi.addPost(values);
				setTimeout(() => {
					closeModal();
				}, 300);
				console.log(result.data);
			} catch (error) {}
		},
	});
	// add new category
	const categoryForm = useFormik({
		initialValues: {
			name: "",
		},
		onSubmit: async (values) => {
			const result = await CategoryApi.addCategory(values);
			categoryAddSuccess();
		},
	});

	const customStyles = {
		content: {
			top: "30%",
			left: "50%",
			right: "50%",
			bottom: "25%",
			marginRight: "-50%",
			transform: "translate(-50%, -50%)",
		},
	};
	return (
		<div>
			<Modal
				style={customStyles}
				isOpen={modalIsOpen}
				onRequestClose={closeModal}
			>
				<form className="h-100" onSubmit={formik.handleSubmit}>
					<div className="form-row  my-1">
						<label className="col-2" htmlFor="title">
							Title
						</label>
						<input
							id="title"
							name="title"
							onChange={formik.handleChange}
							value={formik.values.title}
							className="col-9"
							type="text"
						/>
					</div>
					<div className="form-row my-1">
						<label className="col-2" htmlFor="category">
							Category
						</label>
						<select
							value={formik.values.categoryId}
							onChange={formik.handleChange}
							className="col-8"
							id="categoryId"
						>
							{/* making list out of categories that we made  */}
							{categories.map((category) => {
								return (
									<option key={category.id} value={category.id}>
										{category.name}
									</option>
								);
							})}
						</select>
						<GoDiffAdded onClick={openAddCategory} />
					</div>

					<div className={`form-row ${addCategoryOpen ? "d-block" : "d-none"}`}>
						<input
							type="text"
							id="name"
							name="name"
							value={categoryForm.values.name}
							onChange={categoryForm.handleChange}
							className="col-6 offset-2"
						/>
						<button
							onClick={categoryForm.handleSubmit}
							className="ml-1 border-0 w-25"
						>
							Add Category
						</button>
					</div>

					<div className="form-row h-50 my-2">
						<label className="col-2" htmlFor="postText">
							Text
						</label>
						<textarea
							name="text"
							id="text"
							onChange={formik.handleChange}
							value={formik.values.text}
							className="col-9  text-area"
						></textarea>
					</div>
					<div className="modal-footer border-0 justify-content-around">
						<button className="my-3 w-25 bg-dark text-white " type="submit">
							Post
						</button>
						<button className="w-25  bg-dark text-white">Cancel</button>
					</div>
				</form>
			</Modal>
		</div>
	);
};

export default ModalOnAdd;
