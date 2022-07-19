import { Card, Icon } from "semantic-ui-react";

const Humidity = ({ weatherData }) => {
	return (
		<Card.Meta>
			<label>
				<Icon name="theme" />
				{weatherData.main.humidity} %{" "}
			</label>
		</Card.Meta>
	);
};

export default Humidity;
