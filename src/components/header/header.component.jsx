import React from "react";
import { Link } from "react-router-dom";

import "./header.styles.scss";

const Header = () => (
	<div className="header">
		<Link className="logo-container" to="/">
			Logo
		</Link>

		<div className="options">
			<Link className="option" to="/shop">
				Shop
			</Link>
			<Link className="option" to="/shop">
				Contact
			</Link>
		</div>
	</div>
);

export default Header;
