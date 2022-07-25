import React, { useState, useEffect } from "react";
import { Card, Icon } from "semantic-ui-react";
import GaugeChart from "react-gauge-chart";
const Themperature = ({ weatherData }) => {
	const [thermometer, setThermometer] = useState("");
	useEffect(() => {
		const handleThermometer = (weatherData) => {
			if (weatherData.current.temp_c <= 5) {
				setThermometer("thermometer empty");
			} else if (weatherData.current.temp_c <= 18) {
				setThermometer("thermometer half");
			} else if (weatherData.current.temp_c <= 30) {
				setThermometer("thermometer three quarters");
			} else {
				setThermometer("thermometer full");
			}
		};
		handleThermometer(weatherData);
	});
	return (
		<Card.Meta
			style={{ display: "flex", flexDirection: "column", textAlign:'center' }}
		>
			<GaugeChart
				nrOfLevels={10}
				percent={weatherData.current.temp_c/ 50}
				style={{ width: "60%" }}
				hideText={true}
			/>
			<label style={{ color: "rgba(3, 4, 94, 0.5)" }}>
				<Icon name={thermometer} />
				{weatherData.current.temp_c} &deg;C
			</label>
		</Card.Meta>
	);
};
export default Themperature;
