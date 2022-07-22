import React from "react";

import {
	WiDayCloudyHigh,
	WiCloudy,
	WiDaySunny,
	WiRain,
	WiAlien,
} from "react-icons/wi";

const Description = ({ weatherData }) => {

 


	const handleDescription = (weatherData) => {
		
		if (weatherData.current.condition.text === "clear sky") {
			return <WiDaySunny style={{ fontSize: "100px", margin: "auto" }} />;
		} else if (weatherData.current.condition.text === "few clouds") {
			return <WiDayCloudyHigh style={{ fontSize: "100px", margin: "auto" }} />;
		} else if (
			weatherData.current.condition.text === "scattered clouds" ||
			"overcast clouds"
		) {
			return <WiCloudy style={{ fontSize: "100px", margin: "auto" }} />;
		} else if (weatherData.current.condition.text === "broken clouds") {
			return <WiCloudy style={{ fontSize: "100px", margin: "auto" }} />;
		} else if (weatherData.current.condition.text === "shower rain") {
			return <WiRain style={{ fontSize: "100px", margin: "auto" }} />;
		} else {
			return <WiAlien style={{ fontSize: "100px", margin: "auto" }} />;
		}
	};

	return handleDescription(weatherData);
};

export default Description;
