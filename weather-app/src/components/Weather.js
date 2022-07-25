
import { Card} from "semantic-ui-react";
import Clock from "./Clock";
import Themperature from "./Themperature";
import Humidity from "./Humidity";
import { WiSunrise, WiSunset } from "react-icons/wi";


const CardExampleCard = ({ weatherData}) => {
	 
 const dateTime = weatherData.location.localtime.split(' ');
 const dateSplit = dateTime[0].split('-');
 

	
	return (
		<Card className="card-container">
			<div>
				<h2 style={{ margin: "0px" }}>{weatherData.location.name}</h2>
				<h3 style={{ margin: "0px" }}>{weatherData.location.country}</h3>
			</div>

			<img
				className="descriptive-icon"
				alt="descriptive icon"
				src={weatherData.forecast.forecastday[0].day.condition.icon}
			/>

			<h4>{weatherData.forecast.forecastday[0].day.condition.text}</h4>
			<Card.Content className="card-content">
				<Card.Header className="header"></Card.Header>
				<span className="dayData">
					{dateSplit[2]}/{dateSplit[1]}/{dateSplit[0]}
				</span>
				<Clock weatherData={weatherData} />
			</Card.Content>
			<Card.Content style={{ display: "flex", justifyContent: "space-around" }}>
				<Themperature weatherData={weatherData} className="side-data" />
				<Humidity weatherData={weatherData} className="side-data" />
			</Card.Content>
			
			<Card.Content extra>
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
