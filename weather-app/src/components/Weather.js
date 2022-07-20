import moment from "moment";
import { Card, Icon } from "semantic-ui-react";
import Clock from "./Clock";
import Themperature from "./Themperature";
import Description from "./Description";

import Humidity from "./Humidity";

const CardExampleCard = ({ weatherData, background }) => {
	return (
		<Card
			centered
			style={{
				padding: "10px",
				backgroundImage: `url(${background})`,
				backgroundSize: "cover",
				borderRadius: "12px",
			}}
		>
			<Description weatherData={weatherData} />
			<h3>{weatherData.weather[0].description}</h3>
			<Card.Content
				style={{
					backdropFilter: "blur(6px) saturate(100%)",
					WebkitBackdropFilter: "blur(6px) saturate(100%)",
					backgroundColor: "rgba(255, 255, 255, 0.05)",
					borderRadius: "12px 12px 0 0",
					border: " 1px solid rgba(209, 213, 219, 0.3)",
				}}
			>
				<Card.Header className="header">{weatherData.name}</Card.Header>
				<p className="dayData">
					{moment().format("dddd")}, {moment().format("LL")}
				</p>
				<Clock />
				<Themperature weatherData={weatherData} />

				<Humidity weatherData={weatherData} />
			</Card.Content>
			<Card.Content
				extra
				style={{
					backdropFilter: "blur(6px) saturate(100%)",
					WebkitBackdropFilter: "blur(6px) saturate(100%)",
					backgroundColor: "rgba(255, 255, 255, 0.05)",
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
