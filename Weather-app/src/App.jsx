import React, { useState, useEffect } from 'react';

function App() {
  const [city, setCity] = useState("Mumbai"); // State for the city
  const [weatherData, setWeatherData] = useState(null); // State for the weather data
  const currentDate = new Date();
  const month = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

  // Function to fetch weather data from wttr.in
  const fetchData = () => {
    fetch(`https://wttr.in/${city}?format=j1`)
      .then(response => response.json())
      .then(data => setWeatherData(data)) // Set the weather data
      .catch(error => console.error('Error fetching weather data:', error));
  };

  // Fetch weather data for the default city when the component mounts
  useEffect(() => {
    fetchData();
  }, []); // Empty dependency array ensures this runs only once when the component mounts

  // Handle city input change
  const handleCityChange = (e) => {
    setCity(e.target.value);
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    fetchData(); // Fetch data for the new city only on button click
  };

  const getWeatherIcon = (value) => {
    switch (value) {
      case "Haze":
        return "/sun.webp";
      case "Partly cloudy":
        return "/thunder.webp";
      case "Mist":
        return "/rain.webp";
      case "Light rain shower":
        return "/Tornado.webp";
      default:
        return null;
    }
  };

  return (
    <>
      <div className="card">
        <h2>{`${currentDate.getDate()} ${month[currentDate.getMonth()]}, ${currentDate.getFullYear()}`}</h2>
        <div className="weather-details">
          <div className="city">{city}</div>
          <img
            src={weatherData ? getWeatherIcon(weatherData.current_condition[0].weatherDesc[0].value) : null}
            alt={weatherData ? weatherData.current_condition[0].weatherDesc[0].value : ""}
          />
          <div className="weather-degree">
            {weatherData ? (
              <>
                {weatherData.current_condition[0].temp_C}°C
              </>
            ) : (
              "No Data"
            )}
          </div>
          <div className="weather-details">
            {weatherData ? weatherData.current_condition[0].weatherDesc[0].value : "No Data"}
          </div>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Input City"
              onChange={handleCityChange}
            />
            <button type="submit">Get</button>
          </form>
        </div>
      </div>
    </>
  );
}

export default App;
