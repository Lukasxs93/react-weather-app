import React, { useState } from 'react';
import { v4 as uuid } from "uuid";



const UserInput=({data, setData,})=>{
    const[searched,setSearched]=useState('')


    const getData = (address) => {
			fetch(
				`https://api.weatherapi.com/v1/forecast.json?key=48d25501c94c4d9ca0f72200222606&q=${address}&days=1&aqi=yes&alerts=no`
			)
				.then((response) => response.json())
				.then((weather) => {					
					setData([{ ...weather, id: uuid() }, ...data]);
					console.log(typeof data);
				});
		};
   
    const handleChange = (e) => {
			setSearched(e.target.value);
            
		};
    const handleSubmit=(e)=>{
        e.preventDefault();       
        getData(searched);
        setSearched('');
       let  isArr = Object.prototype.toString.call(data) === "[object Array]";
       console.log(isArr);
    }
    return(
        <form onSubmit={handleSubmit}>
            <input type={'text'} onChange={handleChange} value={searched} required></input>
            <input type={'submit'} value={'Search'} style={{marginLeft:'10px'}}></input>
        </form>
    )
}

export default UserInput;