import axios from 'axios';

const geoToken = import.meta.env.VITE_REACT_APP_GEO_API_KEY;
const weatherToken = import.meta.env.VITE_REACT_APP_WEATHER_API_KEY;

const geoApi = axios.create({
    baseURL: 'https://wft-geo-db.p.rapidapi.com/v1/geo',
    headers: {
        'X-RapidAPI-Key': geoToken,
        'X-RapidAPI-Host': 'wft-geo-db.p.rapidapi.com'
    }
});

export async function fetchCityData(inputValue) {
    const { data } = await geoApi.get(`/cities?minPopulation=1000000&namePrefix=${inputValue}`);
    return data;
}

const weatherApi = axios.create({
    baseURL: 'https://api.openweathermap.org/data/2.5',
});

export async function fetchWeatherData(lat, long) {
    const { data } = await weatherApi.get(`/weather?lat=${lat}&lon=${long}&appid=${weatherToken}&units=metric`);
    return data;
}

export async function fetchForecastData(lat, long) {
    const { data } = await weatherApi.get(`/forecast?lat=${lat}&lon=${long}&appid=${weatherToken}&units=metric`);
    return data;
}