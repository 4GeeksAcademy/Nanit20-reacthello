import React from "react";
import {Navbar} from "./nav.jsx"
import {Jumbotron} from "./jumbotron.jsx"
import {Cards} from "./cards.jsx"
import Footer from "./footer.jsx"
import "../../styles/index.css"
//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	return (
		<div className="pb-5 position-relative"style={{height:"100vh",}}>
			<Navbar/>
			<Jumbotron/>

			<div className="container" style={{display:"flex", justifyContent: "space-around"}}>
				<Cards/> 
				<Cards/> 
				<Cards/> 
				<Cards/>
			</div>
			<Footer/>
		</div>
	);
};

export default Home;