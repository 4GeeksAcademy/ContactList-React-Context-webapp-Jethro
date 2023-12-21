import React, {useState, useContext} from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";


export const Navbar = () => {
	const [click, setClick] = React.useState(false);
	const {store, actions} = useContext(Context);
	
	return (
		<nav className="navbar navbar-light bg-light mb-3">
			<Link to="/">
				<span className="navbar-brand mb-0 h1"></span>
			</Link>
			<div className="ml-auto">
				<Link to="/contact">
					<button className="btn btn-success">Add a new user</button>
				</Link>
			</div>
		</nav>
	);
};
