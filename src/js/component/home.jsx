import React from "react";
import WeatherApi from "./weatherApi.jsx";

//create your first component
const Home = () => {
	return (
		<div className="text-center">
			<WeatherApi />
		</div>
	);
};

export default Home;
