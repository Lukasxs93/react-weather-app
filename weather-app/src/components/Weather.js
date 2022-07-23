
import { Card} from "semantic-ui-react";
import Clock from "./Clock";
import Themperature from "./Themperature";
import Humidity from "./Humidity";
import { WiSunrise, WiSunset } from "react-icons/wi";

const CardExampleCard = ({ weatherData, background,}) => {
	 
 const dateTime = weatherData.location.localtime.split(' ');
 const dateSplit = dateTime[0].split('-');
 

	
	return (
		<Card
			style={{
				padding: "10px",
				backgroundImage: `url(${background})`,
				backgroundSize: "cover",
				borderRadius: "12px",
				margin: "auto",
				
				
			}}
		>
			<h2 style={{ margin: "0px" }}>{weatherData.location.name}</h2>
			<h3 style={{ margin: "0px" }}>{weatherData.location.country}</h3>
			<img
				alt="descriptive icon"
				src={weatherData.forecast.forecastday[0].day.condition.icon}
				style={{ width: "80px", margin:'auto'}}
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

				<span className="dayData">
					{dateSplit[2]}/{dateSplit[1]}/{dateSplit[0]}
				</span>
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
				<div
					style={{
						display: "flex",
						alignItems: "center",
						justifyContent: "center",
					}}
				>
					<WiSunrise style={{ fontSize: "20px" }} />
					<span>{weatherData.forecast.forecastday[0].astro.sunrise}</span>
				</div>
				<div
					style={{
						display: "flex",
						alignItems: "center",
						justifyContent: "center",
					}}
				>
					<WiSunset style={{ fontSize: "20px" }} />
					<span>{weatherData.forecast.forecastday[0].astro.sunset}</span>
				</div>
			</Card.Content>
		</Card>
	);
};

export default CardExampleCard;
