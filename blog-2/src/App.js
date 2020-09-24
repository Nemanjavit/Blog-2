import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../src/App.scss";
import Nav from "./components/Nav";
import BlogPage from "./components/BlogPage";

function App() {
	return (
		<div className="App">
			<Nav />
			<BlogPage />
		</div>
	);
}

export default App;
