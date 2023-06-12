import React from "react";
import { useState } from "react";


const WeatherApi = () => {

	const [city, setCity] = useState()
	const [weather, setWeather] = useState([])
	
	
	  const getWeather = async ()=>{
	
	  let res = await fetch(`https://goweather.herokuapp.com/weather/${city}`,)
	
		let response = await res.json()
		console.log(response)
		setWeather(response)
        
	  }
	 
	  const handleChange = (e) =>{
		if(e.target.name === "city") {
		  setCity(e.target.value)
		}
	  }

	  return (
		<div class="background" src="https://www.jornalterrasdesico.pt/wp-content/uploads/2018/10/frio.jpg">
		
			<h5 class="body">{city}</h5>
			
			<div className="weather-items">
                <p className="weather">{weather.temperature}</p>
                <p className="weather">Wind: {weather.wind}</p>
                <p className="weather">{weather.humidity}</p>
                <p className="weather">{weather.description}</p>
            </div>
			  <input 
			  type="text"
			  onChange={handleChange}
			  placeholder="Put your word here"
			  name="city"
			  />			
		 
		  <button type="button" onClick={getWeather} >Get the wheather of your city</button>
		
		</div>
	  )
	}

    export default WeatherApi;