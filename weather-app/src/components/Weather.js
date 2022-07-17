import React from 'react';
import moment from 'moment';
import { Card,Icon } from 'semantic-ui-react'
import Clock from './Clock';

const CardExampleCard = ({weatherData}) => (
  <Card centered>
      <p className='weatherDescription'>Description: {weatherData.weather[0].main}</p>
    <Card.Content>
        <Card.Header className="header">{weatherData.name}</Card.Header>
        <p className='dayData'>{moment().format('dddd')}, {moment().format('LL')}</p>
       <Card.Meta><label><Icon name='thermometer three quarters'/>{weatherData.main.temp} &deg;C</label></Card.Meta>
       <Card.Meta><label><Icon name='theme'/>{weatherData.main.humidity} % </label></Card.Meta>
        
        
        
        
        <Clock/>
        </Card.Content>
        <Card.Content extra>
        <p><Icon name='sun'/> {new Date(weatherData.sys.sunrise * 1000).toLocaleTimeString('en-IN')}</p>
        <p><Icon name='moon'/>{new Date(weatherData.sys.sunset * 1000).toLocaleTimeString('en-IN')}</p> 
       </Card.Content>

    
  </Card>
)

export default CardExampleCard;