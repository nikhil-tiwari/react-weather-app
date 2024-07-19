import Search from "./component/search/Search";
import "./App.css";
import CurrentWeather from "./component/current-weather/CurrentWeather";
import { fetchWeatherData, fetchForecastData } from "./api/api";
import { useState } from "react";
import Forecast from "./component/forecast/Forecast";

function App() {
  const [currentWeather, setCurrentWeather] = useState(null);
  const [forecast, setForecast] = useState(null);

  const handleOnSearchChange = async (searchData) => {
    const [lat, long] = searchData.value.split(" ");

    try {
      const [weatherData, forecastData] = await Promise.all([
        fetchWeatherData(lat, long),
        fetchForecastData(lat, long),
      ]);
      setCurrentWeather({ city: searchData.label, ...weatherData });
      setForecast({ city: searchData.label, ...forecastData });
    } catch (error) {
      console.error("Error fetching weather data:", error);
    }
  };
                      
  // console.log(currentWeather);
  // console.log(forecast);

  return (
    <div className="container">
      <Search onSearchChange={handleOnSearchChange} />
      {currentWeather && <CurrentWeather data={currentWeather}/>}
      {forecast && <Forecast data={forecast}/>}
    </div>
  );
}

export default App;
