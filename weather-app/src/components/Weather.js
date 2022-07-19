import moment from "moment";
import { Card, Icon } from "semantic-ui-react";
import Clock from "./Clock";
import Themperature from "./Themperature";
import Description from "./Description";
import { useState, useEffect } from "react";
import Humidity from "./Humidity";

const CardExampleCard = ({ weatherData }) => {
	const [background, setBackground] = useState("");
	useEffect(() => {
		const handleBackground = (weatherData) => {
			setBackground(() => {
				switch (weatherData.weather[0].description) {
					case "clear sky":
						return "https://images.unsplash.com/photo-1570483358100-6d222cdea6ff?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2265&q=80";
					case "few clouds":
					case "scattered clouds":
					case "broken clouds":
						return "https://images.unsplash.com/photo-1594156596782-656c93e4d504?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80";
					case "shower rain":
					case "rain":
						return "https://images.unsplash.com/photo-1534274988757-a28bf1a57c17?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80";
					default:
						return "https://images.unsplash.com/photo-1527708676371-14f9a9503c95?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80";
				}
			});
		};
		handleBackground(weatherData);
	});
	return (
		<Card
			centered
			style={{
				backgroundImage: `url(${background})`,
				color: "white",
				backgroundPosition: "fixed",
				backgroundRepeat: "no-repeat",
				borderRadius: "12px",
			}}
		>
			<Description weatherData={weatherData} />
			<Card.Content
				style={{
					backdropFilter: "blur(6px) saturate(100%)",
					WebkitBackdropFilter: "blur(6px) saturate(100%)",
					backgroundColor: "rgba(255, 255, 255, 0.50)",
					borderRadius: "12px 12px 0 0",
					border: " 1px solid rgba(209, 213, 219, 0.3)",
				}}
			>
				<Card.Header className="header">{weatherData.name}</Card.Header>
				<p className="dayData">
					{moment().format("dddd")}, {moment().format("LL")}
				</p>

				<Themperature weatherData={weatherData} />

				<Humidity weatherData={weatherData} />

				<Clock />
			</Card.Content>
			<Card.Content
				extra
				style={{
					backdropFilter: "blur(6px) saturate(100%)",
					WebkitBackdropFilter: "blur(6px) saturate(100%)",
					backgroundColor: "rgba(255, 255, 255, 0.50)",
					borderRadius: "0 0 12px 12px",
					border: " 1px solid rgba(209, 213, 219, 0.3)",
				}}
			>
				<p>
					<Icon name="sun" />{" "}
					{new Date(weatherData.sys.sunrise * 1000).toLocaleTimeString("en-IN")}
				</p>
				<p>
					<Icon name="moon" />
					{new Date(weatherData.sys.sunset * 1000).toLocaleTimeString("en-IN")}
				</p>
			</Card.Content>
		</Card>
	);
};

export default CardExampleCard;
