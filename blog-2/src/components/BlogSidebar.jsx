import React, { useState, useEffect } from "react";
import CategoryApi from "../http/CategoryApi";

const BlogSidebar = ({ categoryAdded, postByCategory }) => {
	const [categories, setCategories] = useState([]);

	// get categories
	useEffect(() => {
		const getCategories = async () => {
			const result = await CategoryApi.getCategory();
			setCategories(result.data.resultData);
		};
		getCategories();
	}, [categoryAdded]);

	return (
		<aside className="col-2 text-center d-flex align-items-center flex-column">
			{categories.map((category) => {
				return (
					<button
						className="d-block w-75 border-0 my-2"
						onClick={(e) => postByCategory(category.id)}
						key={category.id}
					>
						{category.name}
					</button>
				);
			})}
		</aside>
	);
};

export default BlogSidebar;
