import moment from "moment";
import { Card, Icon } from "semantic-ui-react";
import Clock from "./Clock";
import Themperature from "./Themperature";
import Description from "./Description";

const CardExampleCard = ({ weatherData }) => {
	return (
		<Card centered>
			<Description weatherData={weatherData} />
			<Card.Content>
				<Card.Header className="header">{weatherData.name}</Card.Header>
				<p className="dayData">
					{moment().format("dddd")}, {moment().format("LL")}
				</p>

				<Themperature weatherData={weatherData} />

				<Card.Meta>
					<label>
						<Icon name="theme" />
						{weatherData.main.humidity} %{" "}
					</label>
				</Card.Meta>

				<Clock />
			</Card.Content>
			<Card.Content extra>
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
