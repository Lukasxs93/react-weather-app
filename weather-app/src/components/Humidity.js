import { Card, Icon } from "semantic-ui-react";

const Humidity = ({ weatherData }) => {
	return (
		<Card.Meta>
			<label>
				<Icon name="theme" />
				{weatherData.current.humidity} %{" "}
			</label>
		</Card.Meta>
	);
};

export default Humidity;
