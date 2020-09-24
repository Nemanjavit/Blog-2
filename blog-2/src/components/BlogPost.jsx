import React from "react";
import ReactPlaceholder from "react-placeholder";
import RectShape from "react-placeholder";
import "react-placeholder/lib/reactPlaceholder.css";

const BlogPost = () => {
	return (
		<>
			<div className="my-3 blog-post">
				<div className="w-100 d-flex post-header">
					<ReactPlaceholder
						type="rect"
						ready={false}
						color="#E0E0E0"
						style={{ width: 80, height: 80 }}
					></ReactPlaceholder>
					<span className="text-left">Blog Post 1</span>
					<button className="ml-auto">Edit</button>
					<button className=" ml-2">Delete</button>
				</div>
				<div className="post-body">
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor totam
						blanditiis, adipisci autem explicabo vero aliquid hic voluptates et!
						Hic cupiditate esse neque architecto, repellendus repellat delectus
						sed earum impedit.Lorem ipsum dolor sit amet consectetur adipisicing
						elit. Dolor totam blanditiis, adipisci autem explicabo vero aliquid
						hic voluptates et! Hic cupiditate esse neque architecto, repellendus
						repellat delectus sed earum impedit.
					</p>
				</div>
				<div className="post-footer d-flex">
					<RectShape
						className="ml-auto"
						color="#E0E0E0"
						type="rect"
						style={{ width: 100, height: 100 }}
					/>
					<RectShape
						color="#E0E0E0"
						type="rect"
						style={{ width: 100, height: 100 }}
					/>
					<RectShape
						color="#E0E0E0"
						type="rect"
						style={{ width: 100, height: 100 }}
						className="mr-auto"
					/>
				</div>
			</div>
		</>
	);
};

export default BlogPost;
