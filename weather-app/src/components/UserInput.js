import React, { useState } from 'react';
import { v4 as uuid } from "uuid";
import {  Input } from "semantic-ui-react";
import IconButton from "@mui/material/IconButton";
import { ImSearch } from "react-icons/im";




const UserInput=({data, setData,alert, cityList, setCityList})=>{
    const[searched,setSearched]=useState('');
    
   

    const getData = (address) => {
			fetch(
				`https://api.weatherapi.com/v1/forecast.json?key=48d25501c94c4d9ca0f72200222606&q=${address}&days=1&aqi=yes&alerts=no`
			).catch((e)=>{
					console.error(e);
					setData(...data);
					
				})
				.then((response) => response.json())
				.then((weather) => {
					if(weather.error){
					
						alert.show(`${searched} is not a valid city`);
						
						return 
					}else{				
					setData([{ ...weather, id: uuid() }, ...data]);
					console.log(weather);
					setCityList([{ name: weather.location.name, id: uuid() }, ...cityList]);	
					}				
				})
		};
   
    const handleChange = (e) => {
			setSearched(e.target.value);
            
		};
    const handleSubmit=(e)=>{
        e.preventDefault();       
        getData(searched);		
        setSearched('');       
    }
    return (
			<form onSubmit={handleSubmit}>
				<Input
					icon
					placeholder="Search..."
					style={{ border: "2px solid #03045e", borderRadius: "5px" }}
				>
					<input onChange={handleChange} value={searched} required />
				</Input>
				<IconButton color="primary" component="label">
					<input hidden type="submit" />
					<ImSearch style={{ color: "#03045e"}} />
				</IconButton>
			</form>
		);
}

export default UserInput;