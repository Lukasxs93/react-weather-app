
import { Card} from "semantic-ui-react";
import { BsDropletHalf, BsDroplet, BsDropletFill } from "react-icons/bs";

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
		<Card.Meta>
			<label>
				{handleHumidity(weatherData)}
				{weatherData.current.humidity} %{" "}
			</label>
		</Card.Meta>
	);
};

export default Humidity;
