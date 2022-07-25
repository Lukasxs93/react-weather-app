
import { Card} from "semantic-ui-react";
import { BsDropletHalf, BsDroplet, BsDropletFill } from "react-icons/bs";
import GaugeChart from "react-gauge-chart";
const Humidity = ({ weatherData }) => {
	
	const handleHumidity=(weatherData)=>{
		if(weatherData.current.humidity<=10){
        return <BsDroplet/>
		}else if(weatherData.current.humidity<= 50){
        return<BsDropletHalf/>
		}else{
		return <BsDropletFill/>
		}
		
	}
	return (
		<Card.Meta
			style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
		>
			<GaugeChart
				nrOfLevels={25}
				percent={weatherData.current.humidity / 100}
				style={{ width: "60%" }}
				hideText={true}
				colors={["rgba(232, 249, 252,0.5)", "rgba(3, 4, 94, 0.5)"]}
			/>
			<label style={{ color: "rgba(3, 4, 94, 0.5)" }}>
				{handleHumidity(weatherData)}
				{weatherData.current.humidity} %{" "}
			</label>
		</Card.Meta>
	);
};

export default Humidity;
