import React, { useState, useEffect } from "react";
import { Card, Icon } from "semantic-ui-react";

const Themperature = ({ weatherData }) => {
	const [thermometer, setThermometer] = useState("");
	useEffect(() => {
		const handleThermometer = (weatherData) => {
			if (weatherData.main.temp <= 10) {
				setThermometer("thermometer empty");
			} else if (weatherData.main.temp <= 20) {
				setThermometer("thermometer half");
			} else if (weatherData.main.temp <= 35) {
				setThermometer("thermometer three quarters");
			} else {
				setThermometer("thermometer full");
			}
		};
		handleThermometer(weatherData);
	});
	return (
		<Card.Meta>
			<label>
				<Icon name={thermometer} />
				{weatherData.main.temp} &deg;C
			</label>
		</Card.Meta>
	);
};
export default Themperature;
