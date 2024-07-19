# Weather App

## Overview

The Weather App is a React-based application that provides current weather conditions and a 5-day weather forecast for any city in the world. Leveraging Vite for fast build times and a modern development experience, this application fetches data from multiple APIs to deliver accurate and up-to-date weather information. Users can search for cities with a population of over 1 million and get detailed weather data, including temperature, humidity, wind speed, and more.

You can view the live application here: [Weather App](https://react-weather-app-eight-rouge.vercel.app/). The app is deployed using Vercel.

## Features

- **City Search**: Search for cities with a population of over 1 million using an auto-complete search bar.
- **Current Weather**: Displays current weather conditions including temperature, weather description, humidity, wind speed, and pressure.
- **5-Day Forecast**: Provides a detailed 5-day weather forecast, showing daily averages for temperature, humidity, wind speed, and other key metrics.
- **Responsive Design**: Designed to be responsive and user-friendly across various devices.

## Technologies Used

- **React**: Core library for building the user interface.
- **Vite**: Build tool for fast development and optimized builds.
- **Axios**: For making HTTP requests to weather and geolocation APIs.
- **React-Select-Async-Paginate**: For asynchronous search with pagination.
- **React-Accessible-Accordion**: For expandable forecast details.
- **CSS**: Custom styling for app components.

## Components

### App.jsx

The main component that manages the state of current weather and forecast data. It includes:
- State management for current weather and forecast data.
- Handling of search input changes and API data fetching.
- Rendering of `Search`, `CurrentWeather`, and `Forecast` components based on state.

### Search.jsx

A search component for city lookup, featuring:
- Auto-complete search functionality.
- Fetching and passing selected city data to the `App` component.

### CurrentWeather.jsx

Displays current weather conditions for the selected city, including:
- City name
- Weather description
- Temperature
- Feels-like temperature
- Wind speed
- Humidity
- Pressure

### Forecast.jsx

Shows a detailed 5-day weather forecast with:
- Day of the week
- Weather description
- Min and max temperatures
- Average pressure, humidity, cloud cover, and wind speed
- Accordion layout for additional daily details

## API Integration

### GeoDB Cities API

Used to fetch city data for the search functionality. Returns cities with a minimum population of 1 million based on the search query.

### OpenWeather API

Provides current weather and 5-day forecast data based on the selected city's coordinates (latitude and longitude).

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
    VITE_REACT_APP_GEO_API_KEY=your_geodb_api_key
    VITE_REACT_APP_WEATHER_API_KEY=your_openweather_api_key
4. **Start the development server:**
   ```bash
   npm run dev
5. **Open the application:**
   Open your browser and navigate to http://localhost:5173

## Future Enhancements

- Add more detailed error handling and user feedback.
- Include more weather metrics and visualizations.
- Implement user preferences for units (metric/imperial).
- Optimize the search functionality for better performance.

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