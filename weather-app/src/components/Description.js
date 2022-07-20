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
		if (weatherData.weather[0].description === "clear sky") {
			return <WiDaySunny style={{ fontSize: "100px", margin: "auto" }} />;
		} else if (weatherData.weather[0].description === "few clouds") {
			return <WiDayCloudyHigh style={{ fontSize: "100px", margin: "auto" }} />;
		} else if (
			weatherData.weather[0].description === "scattered clouds" ||
			"overcast clouds"
		) {
			return <WiCloudy style={{ fontSize: "100px", margin: "auto" }} />;
		} else if (weatherData.weather[0].description === "broken clouds") {
			return <WiCloudy style={{ fontSize: "100px", margin: "auto" }} />;
		} else if (weatherData.weather[0].description === "shower rain") {
			return <WiRain style={{ fontSize: "100px", margin: "auto" }} />;
		} else {
			return <WiAlien style={{ fontSize: "100px", margin: "auto" }} />;
		}
	};

	return handleDescription(weatherData);
};

export default Description;
