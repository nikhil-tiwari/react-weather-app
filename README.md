# Weather App

## Overview

The Weather App is a React-based application that provides current weather conditions and a 5-day weather forecast for any city in the world. The application fetches data from multiple APIs to deliver accurate and up-to-date weather information. The user can search for cities with a population of over 1 million and get detailed weather data, including temperature, humidity, wind speed, and more.

## Features

- **City Search**: Users can search for cities with a population of over 1 million using an auto-complete search bar.
- **Current Weather**: Displays current weather conditions including temperature, weather description, humidity, wind speed, and pressure.
- **5-Day Forecast**: Provides a detailed 5-day weather forecast, showing daily averages for temperature, humidity, wind speed, and other key metrics.
- **Responsive Design**: The application is designed to be responsive and user-friendly on various devices.

## Technologies Used

- **React**: The core library used for building the user interface.
- **Axios**: For making HTTP requests to the weather and geolocation APIs.
- **React-Select-Async-Paginate**: For the asynchronous search bar with pagination.
- **React-Accessible-Accordion**: For the expandable forecast details.
- **CSS**: Custom styling for the app components.

## Components

### App.js

The main component that maintains the state of the current weather and forecast data. It includes the following key functionalities:
- Manages state for current weather and forecast data.
- Handles search input changes and fetches weather data from the APIs.
- Renders the `Search`, `CurrentWeather`, and `Forecast` components based on the state.

### Search.js

A search component that allows users to search for cities. It includes:
- An input field for city search with auto-complete functionality.
- Fetches city data based on user input and passes the selected city data back to the `App` component.

### CurrentWeather.js

Displays the current weather conditions for the selected city, including:
- City name
- Weather description
- Temperature
- Feels like temperature
- Wind speed
- Humidity
- Pressure

### Forecast.js

Provides a detailed 5-day weather forecast, displaying:
- Day of the week
- Weather description
- Min and max temperatures
- Average pressure, humidity, cloud cover, and wind speed
- Uses an accordion layout to show additional details for each day

## API Integration

### GeoDB Cities API

Used to fetch city data for the search functionality. It returns cities with a minimum population of 1 million based on the search query.

### OpenWeather API

Used to fetch current weather and 5-day forecast data based on the selected city's coordinates (latitude and longitude).

## How to Run the Project

1. **Clone the repository:**
   ```bash
   git clone <repository_url>
   cd weather-app

2. **Install dependencies:**
   ```bash
   npm install

3. **Set up environment variables:**
   Create a .env file in the root directory and add your API keys:
   ```plaintext
   REACT_APP_GEO_API_KEY=your_geodb_api_key
   REACT_APP_WEATHER_API_KEY=your_openweather_api_key

4. **Start the development server:**
   ```bash
   npm start


5. **Open the application:**
   Open your browser and navigate to http://localhost:3000

## Folder Structure

```plaintext
    weather-app/
    │
    ├── public/
    │   ├── icons/               # Weather icons
    │   └── index.html
    │
    ├── src/
    │   ├── components/
    │   │   ├── search/          # Search component
    │   │   ├── current-weather/ # Current weather component
    │   │   └── forecast/        # Forecast component
    │   │
    │   ├── api/                 # API functions
    │   │   └── api.js
    │   │
    │   ├── App.js
    │   ├── App.css
    │   ├── index.js
    │   └── index.css
    │
    ├── .env
    ├── package.json
    └── README.md

## Future Enhancements

- Add more detailed error handling and user feedback.
- Include more weather metrics and visualizations.
- Implement user preferences for units (metric/imperial).
- Optimize the search functionality for better performance.

## Contributing

Contributions are welcome! Please feel free to submit a pull request or open an issue for any suggestions or improvements.

## License

This project is licensed under the MIT License. See the LICENSE file for more details.
