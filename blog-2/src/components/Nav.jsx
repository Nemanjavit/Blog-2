import React from "react";

const Nav = () => {
	return (
		<header className="bg-primary">
			<nav className="navbar navbar-expand-lg navbar-dark container">
				<a className="navbar-brand" href="">
					My Blog
				</a>
				<button
					className="navbar-toggler"
					type="button"
					data-toggle="collapse"
					data-target="#navbarNav"
					aria-controls="navbarNav"
					aria-expanded="false"
					aria-label="Toggle navigation"
				>
					<span className="navbar-toggler-icon"></span>
				</button>
				<div className="collapse navbar-collapse" id="navbarNav">
					<ul className="navbar-nav ml-auto">
						<li className="nav-item active">
							<a className="nav-link">
								Link 1 <span className="sr-only">(current)</span>
							</a>
						</li>
						<li className="nav-item">
							<a className="nav-link">Link 2</a>
						</li>
						<li className="nav-item">
							<a className="nav-link">Link 3</a>
						</li>
					</ul>
				</div>
			</nav>
		</header>
	);
};

export default Nav;
