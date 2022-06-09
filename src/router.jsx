import React, { Fragment } from "react";
import { Route, Routes } from "react-router-dom";
import ContactPageComponent from "./pages/contract/contact";
import HomePageComponent from "./pages/home/home";
import NavbarComponent from "./components/navbar/navbar";
import FooterComponent from "./components/footer/footer"

const AppRouter = () => {
	return (
		<Fragment>
			<Routes>
				<Route exact path="/" element={<HomePageComponent />} />
				<Route path="/contact" element={<ContactPageComponent />} />
			</Routes>
			<FooterComponent/>
		</Fragment>
	);
};

export default AppRouter;
