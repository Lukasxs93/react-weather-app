import React, {useState, useEffect} from 'react';

  const Clock =({weatherData})=>{
  const  [clockState, setClockState] = useState('');
  const localTimeString = weatherData.location.localtime;
  const parts = localTimeString.split(' ');
  const timeParts =parts[1].split(':');
  
  var dt = new Date();
	dt.setHours(parseInt(timeParts[0], 10));
	dt.setMinutes(parseInt(timeParts[1], 10));

  var diff = new Date().getTime() - dt.getTime();
  
  useEffect(()=>{
		setInterval(() => {
			var now = new Date(new Date().getTime() - diff);
			setClockState(now.toLocaleTimeString());
		}, 1000);
		// eslint-disable-next-line react-hooks/exhaustive-deps
	},[]);

  return (
		<div className='clock-container'>
			<div className="clock">Time: {clockState}</div>
		</div>
	);
}

export default Clock;