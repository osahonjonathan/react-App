import React from "react";
import "./home.css";
import NavbarComponent from "../../components/navbar/navbar";

const HomePageComponent = () => {
	return (
		<>
			<NavbarComponent showLogo={false} />
			<main>
				<section>
					<img alt="logo" src="/assets/images/logo-expanzo-black.svg" />
					<ul>
						<li>
							<strong>All</strong>
						</li>
						<li>
							<strong>Companies</strong>
						</li>
						<li>
							<strong>Phones</strong>
						</li>
					</ul>
				</section>
			</main>
		</>
	);
};

export default HomePageComponent;
