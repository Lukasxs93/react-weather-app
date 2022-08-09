import React, { useState } from 'react';
import { v4 as uuid } from "uuid";



const UserInput=({data, setData,})=>{
    const[searched,setSearched]=useState('');
    const[cities, setCities] = useState([]);

    const getData = (address) => {
			fetch(
				`https://api.weatherapi.com/v1/forecast.json?key=48d25501c94c4d9ca0f72200222606&q=${address}&days=1&aqi=yes&alerts=no`
			)
				.then((response) => response.json())
				.then((weather) => {
					console.log(weather);
					setData([...data, { ...weather, id: uuid() }]);
					
				});
		};
   
    const handleChange = (e) => {
			setSearched(e.target.value);
            
		};
    const handleSubmit=(e)=>{
        e.preventDefault(); 
        setCities([searched, ...cities]);
        getData(searched);
        setSearched('');
        
    }
    return(
        <form onSubmit={handleSubmit}>
            <input type={'text'} onChange={handleChange} value={searched}></input>
            <input type={'submit'} value={'Search'}></input>
        </form>
    )
}

export default UserInput;