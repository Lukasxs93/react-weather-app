import moment from "moment";
import { Card} from "semantic-ui-react";
import Clock from "./Clock";
import Themperature from "./Themperature";
import Humidity from "./Humidity";

const CardExampleCard = ({ weatherData, background,}) => {
	
	return (
		<Card
			style={{
				padding: "10px",
				backgroundImage: `url(${background})`,
				backgroundSize: "cover",
				borderRadius: "12px",
			}}
		>    
			<h2 style={{ margin: "0px" }}>{weatherData.location.name}</h2>
			<h3 style={{ margin: "0px" }}>{weatherData.location.country}</h3>
			<img
			    alt="descriptive icon"
				src={weatherData.forecast.forecastday[0].day.condition.icon}
				style={{ width: "80px", margin: "auto" }}
			/>

			<h4>{weatherData.forecast.forecastday[0].day.condition.text}</h4>
			<Card.Content
				style={{
					backdropFilter: "blur(6px) saturate(100%)",
					WebkitBackdropFilter: "blur(6px) saturate(100%)",
					backgroundColor: "rgba(255, 255, 255, 0.05)",
					borderRadius: "12px 12px 0 0",
					border: " 1px solid rgba(209, 213, 219, 0.3)",
				}}
			>
				<Card.Header className="header"></Card.Header>

				<p className="dayData">
					{moment().format("dddd")}, {moment().format("LL")}
				</p>
				<Clock weatherData={weatherData} />
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
				<p>{weatherData.forecast.forecastday[0].astro.sunrise}</p>
				<p>{weatherData.forecast.forecastday[0].astro.sunset}</p>
			</Card.Content>
		</Card>
	);
};

export default CardExampleCard;
