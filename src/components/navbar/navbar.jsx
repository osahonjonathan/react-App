import React from "react";
import { Link } from "react-router-dom";
import "./navbar.css";

const NavbarComponent = ({ showLogo }) => {
	return (
		<nav>
			<div class="dash-board">
				<i class="fa-solid fa-bars"></i>
				<Link to="/">
					<h6>DASHBOARD</h6>
				</Link>
				<Link to="/contact">
					<h6>CONTACTS</h6>
				</Link>
			</div>

			{showLogo && <img src="/assets/images/logo-expanzo-white.svg" height="35px" alt="logo" />}


			<div class="container">
				<div class="log">
					<div class="icon-container">
						<i class="fa-solid fa-pen"></i>
					</div>
					<Link to="#">
						{" "}
						<p>LOGIN</p>
					</Link>
				</div>

				<div class="reg">
					<div class="icon-container">
						<i class="fa-solid fa-user"></i>
					</div>
					<Link to="#">
						{" "}
						<p>REGISTRATION</p>
					</Link>
				</div>
			</div>
		</nav>
	);
};

export default NavbarComponent;
