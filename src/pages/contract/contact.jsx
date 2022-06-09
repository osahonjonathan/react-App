import React from "react";
import "./contact.css";
import NavbarComponent from "../../components/navbar/navbar";

const ContactPageComponent = () => {
	return (
		<>
			<NavbarComponent showLogo={true}/>
			<main>
				<section>
					<h6>
						<strong>Contact</strong>
					</h6>
					<div class="adress-container">
						<div class="address">
							<div class="head">
								<i class="fa-solid fa-location-dot"></i>
								<p>Headquarters</p>
							</div>
							<p>DHO s.r.o.</p>
							<p>Borivojova 878/35</p>
							<p>130 00 Praha 3</p>
						</div>

						<div class="mail">
							<i class="fa-solid fa-envelope"></i>
							<p>info@expanzo.com</p>
						</div>
					</div>
				</section>
			</main>
		</>
	);
};

export default ContactPageComponent;
