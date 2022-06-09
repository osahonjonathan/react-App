import React from "react";
import "./home.css"

const HomePageComponent = () => {
	return (
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
	);
};

export default HomePageComponent;
