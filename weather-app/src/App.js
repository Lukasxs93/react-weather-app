import "./App.css";
import React, { useEffect, useState } from "react";
import Weather from "./components/Weather";

export default function App() {
	const [data, setData] = useState([]);
	const [isLoading, setIsLoading] = useState(false);
	const [background, setBackground] = useState("");

	const handleBackground = (weatherData) => {
		setBackground(() => {
			switch (weatherData.weather[0].description) {
				case "clear sky":
					return "https://images.unsplash.com/photo-1570483358100-6d222cdea6ff?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2265&q=80";
				case "few clouds":
				case "scattered clouds":
				case "broken clouds":
					return "https://images.unsplash.com/photo-1594156596782-656c93e4d504?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80";
				case "shower rain":
				case "rain":
					return "https://images.unsplash.com/photo-1534274988757-a28bf1a57c17?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80";
				default:
					return "https://images.unsplash.com/photo-1527708676371-14f9a9503c95?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80";
			}
		});
	};

	const getPosition = (data) => {
		fetch(
			`https://api.openweathermap.org/data/2.5/weather/?lat=${data.coords.latitude}2&lon=${data.coords.longitude}&units=metric&APPID=a08f490845af6cd0b663507b035695ec`
		)
			.then((res) => res.json())
			.then((result) => {
				setData(result);
				handleBackground(result);
			})
			.then(setIsLoading(false));
	};

	useEffect(() => {
		navigator.geolocation.getCurrentPosition(getPosition);
		setIsLoading(true);
	}, []);

	return (
		<div className="App">
			{isLoading && <p>loading....</p>}

			{typeof data.main != "undefined" ? (
				<Weather weatherData={data} background={background} />
			) : (
				<div></div>
			)}
		</div>
	);
}
// }
