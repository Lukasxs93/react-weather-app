import "./App.css";
import React, {  useState } from "react";
import Weather from "./components/Weather";
import UserInput from "./components/UserInput";
import { v4 as uuid } from "uuid";
import IconButton from "@mui/material/IconButton";
//import { IoTrashBin } from "react-icons/io5";
import DeleteIcon from "@mui/icons-material/Delete";
//import Button from "@mui/material/Button";

export default function App() {
	const [data, setData] = useState([]);

	const handleDelete=(id)=>{
			setData(data.filter(data=> data.id !== id));	
	}

	return (
		<div className="App">
			<div className="backGround">
				<div>
					<UserInput data={data} setData={setData} />
				</div>
				{data.length === 0 ? (
					<h2>search a city and find out it's weather </h2>
				) : (
					<div className="weather_container">
						{data.map((data) => (
							<div key={uuid()}>
								<IconButton
									className="delete-button"
									color="error"
									component="label"
									onClick={() => handleDelete(data.id)}
								>
									<DeleteIcon />
								</IconButton>
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
		</div>
	);
}
// }
