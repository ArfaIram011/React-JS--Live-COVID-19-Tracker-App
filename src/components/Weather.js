import React,{useEffect} from "react";
import axios from "axios";
import './css/Style.css';



const getWeatherData=async ()=>{
    const res=await fetch(`https://api.openweathermap.org/data/2.5/weather`)
    const actualData=await res.json;
    console.log(actualData)
}


function Weather() {
    useEffect(() => {
      getWeatherData()
    }, [])
  return (
    <React.Fragment>
        
    </React.Fragment>
  )
}

export default Weather