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
		if (weatherData.weather[0].main === "clear sky") {
			return <WiDaySunny style={{ fontSize: "100px", margin: "auto" }} />;
		} else if (weatherData.weather[0].main === "Clouds") {
			return <WiDayCloudyHigh style={{ fontSize: "100px", margin: "auto" }} />;
		} else if (weatherData.weather[0].main === "scattered clouds") {
			return <WiCloudy style={{ fontSize: "100px", margin: "auto" }} />;
		} else if (weatherData.weather[0].main === "broken clouds") {
			return <WiCloudy style={{ fontSize: "100px", margin: "auto" }} />;
		} else if (weatherData.weather[0].main === "shower rain") {
			return <WiRain style={{ fontSize: "100px", margin: "auto" }} />;
		} else {
			return <WiAlien style={{ fontSize: "100px", margin: "auto" }} />;
		}
	};

	return handleDescription(weatherData);
};

export default Description;
