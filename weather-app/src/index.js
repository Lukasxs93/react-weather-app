import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { transitions, positions , Provider as AlertProvider } from "react-alert";
import AlertTemplate from "react-alert-template-mui";

const options = {
	// you can also just use 'bottom center'
	position: positions.MIDDLE,
	timeout: 5000,
	offset: "30px",
	// you can also just use 'scale'
	transition: transitions.SCALE,
	type:'error',

};

const styleLink = document.createElement("link");
styleLink.rel = "stylesheet";
styleLink.href = "https://cdn.jsdelivr.net/npm/semantic-ui/dist/semantic.min.css";
document.head.appendChild(styleLink);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	
		<AlertProvider template={AlertTemplate} {...options}>
			<App />
		</AlertProvider>

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

