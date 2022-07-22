import "./App.css";
import React, {  useState } from "react";
import Weather from "./components/Weather";

import UserInput from "./components/UserInput";

export default function App() {
	const [data, setData] = useState([]);
	
    

	
	 
  
			
		
		

	return (
		<div className="App">
			<div>
				<UserInput data={data} setData={setData} />
			</div>
			{data =='' ? (
				<p>search a city to find out the weather </p>
			) : (
				<div className="weather_container">
					{data.map((data) => (
						<Weather weatherData={data} key={data.id} />
					))}
				</div>
			)}
		</div>
	);
}
// }
