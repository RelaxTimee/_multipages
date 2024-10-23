
import { useState } from "react";

import Variable from "../Variable/Variable";
import "./Temperatures.css";

function Temperatures() {
    const [celsius, setCelsius] = useState(25);
    const [fahrenheit, setFahrenheit] = useState(77);
    const [kelvin, setKelvin] = useState(295.15);

    const convertCtoF = (celsius) => {
        return (celsius * 9 / 5) + 32;
    };

    const convertCtoK = (celsius) => {
        return celsius + 273.15;
    };

    const convertFtoC = (fahrenheit) => {
        return (fahrenheit - 32) * 5 / 9;
    };

    const convertFtoK = (fahrenheit) => {
        return convertCtoK(convertFtoC(fahrenheit));
    };

    const convertKtoC = (kelvin) => {
        return kelvin - 273.15;
    };

    const convertKtoF = (kelvin) => {
        return convertFtoF(convertKtoC(kelvin));
    };

    const handleCelsiusChange = (newCelsius) => {
        setCelsius(newCelsius);
        setFahrenheit(convertCtoF(newCelsius));
        setKelvin(convertCtoK(newCelsius));
    };

    const handleFahrenheitChange = (newFahrenheit) => {
        setFahrenheit(newFahrenheit);
        setCelsius(convertFtoC(newFahrenheit));
        setKelvin(convertFtoK(newFahrenheit));
    };

    const handleKelvinChange = (newKelvin) => {
        setKelvin(newKelvin);
        setCelsius(convertKtoC(newKelvin));
        setFahrenheit(convertKtoF(newKelvin));
    };

  return (
    <div className="temperatures-container">
      <h3 className="temperatures-title">Tempertures</h3>
      <h3 className="temperatures-span">
        <span className="badge bg-primary">{celsius}C</span>
        <span className="badge bg-primary">{fahrenheit}F </span> 
        <span className="badge bg-primary">{kelvin}K</span>
        </h3>
      <div className="temperatures-variables">
        <Variable name={'Celsius'} value={celsius} setValue={handleCelsiusChange} />
        <Variable name={'Fahrenheit'} value={fahrenheit} setValue={handleFahrenheitChange} />
        <Variable name={'Kelvin'} value={kelvin} setValue={handleKelvinChange} />
      </div>
    </div>
  )
}

export default Temperatures;

