import "./App.css";
import React, {  useEffect, useState } from "react";
import Weather from "./components/Weather";
import UserInput from "./components/UserInput";
import { v4 as uuid } from "uuid";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import { useAlert } from "react-alert";
//import Button from "@mui/material/Button";

export default function App() {
	const [data, setData] = useState([]);
	// 	()=>{
	// 	const storedData = window.localStorage.getItem('cityList');
	// 	return storedData !== null ? JSON.parse(storedData): 
	// 	[]
	// });
	const [cityList, setCityList] = useState(() =>{
		const storedData = window.localStorage.getItem('cities');
		return storedData !== null ? JSON.parse(storedData):[];
	});
    const alert = useAlert();
	
	useEffect(()=>{
		// localStorage.setItem("cityList", JSON.stringify(data));
		let cityNames = cityList.map(city=> city);
		localStorage.setItem("cities", JSON.stringify(cityNames))
		
	},[cityList])

	const handleDelete=(id)=>{
		    
			setData(data.filter(data=> data.id !== id));		
	        
	}
	const deleteSearch=(name)=>{
        setCityList(cityList.filter(city=> city.name !==name))
	}
	
const fetchData=async (arr)=>{
	const promises = await Promise.all(arr.map(a=> fetch(`https://api.weatherapi.com/v1/forecast.json?key=48d25501c94c4d9ca0f72200222606&q=${a.name}&days=1&aqi=yes&alerts=no`)))
	const promissesArray = await Promise.all(promises.map(p=>p.json()))
	const arrayId =promissesArray.map(p => ({...p, id:uuid()}))
	setData(arrayId);
	// console.log(promissesArray);
	return promissesArray;
	
}   
     
	
	useEffect( ()=>{
		const startData =  fetchData(cityList);
        console.log(startData);
		
		// eslint-disable-next-line react-hooks/exhaustive-deps
	},[])

	return (
		<div className="App">
			<div className="backGround">
				<div>
					<UserInput data={data} setData={setData} alert={alert} cityList={cityList} setCityList={setCityList}/>
				</div>
				{data.length === 0 ? (
					<h2>search a city and find out it's weather </h2>
				) : (
					<div className="weather_container">
						{data.map((data) => (
							<div key={uuid()}>
								<IconButton
								    
									className="delete-button"
									style={{ color: "rgba(3, 4, 94, 0.2)" }}
									component="label"
									onClick={() => {handleDelete(data.id);
										deleteSearch(data.location.name);
									}} 
									
								>
									<DeleteIcon />
								</IconButton >
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
