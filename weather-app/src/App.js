import "./App.css";
import React, {  useState } from "react";
import Weather from "./components/Weather";
import UserInput from "./components/UserInput";
import { v4 as uuid } from "uuid";
import { IoTrashBin } from "react-icons/io5";
export default function App() {
	const [data, setData] = useState([]);

	const handleDelete=(id)=>{
			setData(data.filter(data=> data.id !== id));	
	}

	return (
		<div className="App">
			<div>
				<UserInput data={data} setData={setData} />
			</div>
			{data === [] ? (
				<h2>search a city to find out the weather </h2>
			) : (
				<div className="weather_container">
					{data.map((data) => (
						<div key={uuid()}>
							<button
								onClick={() => handleDelete(data.id)}
								style={{
									position: "relative",
									left: "120px",
									top: "50px",
									zIndex: "1",							
								}}
							><IoTrashBin />
							</button>
							<Weather
								weatherData={data}
								id={data.id}
								setData={setData}
								key={uuid()}
							/>
						</div>
					))}
				</div>
			)}
		</div>
	);
}
// }
