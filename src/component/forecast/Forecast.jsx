import {
    Accordion,
    AccordionItem,
    AccordionItemButton,
    AccordionItemHeading,
    AccordionItemPanel,
  } from "react-accessible-accordion";
  import "./Forecast.css"
  
  const Forecast = ({ data }) => {
    // Function to get the day of the week from a date string
    const getDayOfWeek = (dateString) => {
      const days = [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
      ];
      const date = new Date(dateString);
      return days[date.getUTCDay()];
    };
  
    const groupByDate = (arr) => {
      return arr.reduce((acc, obj) => {
        // Extract the date part (YYYY-MM-DD) from the dt_txt string
        const dateKey = obj.dt_txt.split(" ")[0];
  
        // If the dateKey doesn't exist in the accumulator, create it
        if (!acc[dateKey]) {
          acc[dateKey] = [];
        }
  
        // Push the current object into the array for the dateKey
        acc[dateKey].push(obj);
  
        return acc;
      }, {});
    };
  
    // Function to calculate averages and most frequent weather info
    const calculateAveragesAndWeatherInfo = (groupedData) => {
      const result = [];
  
      for (const date in groupedData) {
        const entries = groupedData[date];
        const total = {
          temp: 0,
          feels_like: 0,
          temp_min: 0,
          temp_max: 0,
          pressure: 0,
          humidity: 0,
          clouds_all: 0,
          wind_speed: 0,
        };
        const weatherInfo = {};
        const count = entries.length;
  
        entries.forEach((entry) => {
          total.temp += entry.main.temp;
          total.feels_like += entry.main.feels_like;
          total.temp_min += entry.main.temp_min;
          total.temp_max += entry.main.temp_max;
          total.pressure += entry.main.pressure;
          total.humidity += entry.main.humidity;
          total.clouds_all += entry.clouds.all;
          total.wind_speed += entry.wind.speed;
  
          // Access the weather description and icon directly
          const weather = entry.weather[0];
          const key = `${weather.description}|${weather.icon}`;
          if (!weatherInfo[key]) {
            weatherInfo[key] = 0;
          }
          weatherInfo[key] += 1;
        });
  
        // Get the most frequent weather description and icon
        const mostFrequentWeather = Object.keys(weatherInfo).reduce((a, b) =>
          weatherInfo[a] > weatherInfo[b] ? a : b
        );
        const [description, icon] = mostFrequentWeather.split("|");
  
        result.push({
          date: date,
          day: getDayOfWeek(date),
          average_temp: total.temp / count,
          average_feels_like: total.feels_like / count,
          average_temp_min: total.temp_min / count,
          average_temp_max: total.temp_max / count,
          average_pressure: total.pressure / count,
          average_humidity: total.humidity / count,
          average_clouds_all: total.clouds_all / count,
          average_wind_speed: total.wind_speed / count,
          description,
          icon,
        });
      }
  
      return result;
    };
  
    // Grouped by date
    const groupedData = groupByDate(data.list);
  
    // Calculate averages and weather info
    const averagesAndWeatherInfo = calculateAveragesAndWeatherInfo(groupedData);
  
    console.log(averagesAndWeatherInfo);
    // console.log(typeof averagesAndWeatherInfo[0].average_temp_max)
  
    return (
      <>
        <label className="title">Daily Temperature</label>
        <Accordion allowZeroExpanded>
          {averagesAndWeatherInfo.map((item, idx) => (
            <AccordionItem key={idx}>
              <AccordionItemHeading>
                  <AccordionItemButton>
                  <div className="daily-item">
                    <img src={`icons/${item.icon}.png`} className="icon-small" alt="weather" />
                    <label className="day">{item.day}</label>
                    <label className="description">{item.description}</label>
                    <label className="min-max">{Math.round(item.average_temp_max)}°C /{Math.round(item.average_temp_min)}°C</label>
                  </div>
                  </AccordionItemButton>
              </AccordionItemHeading>
              <AccordionItemPanel>
              <div className="daily-details-grid">
                  <div className="daily-details-grid-item">
                    <label>Pressure:</label>
                    <label>{Math.round(item.average_pressure)} hPa</label>
                  </div>
                  <div className="daily-details-grid-item">
                    <label>Humidity:</label>
                    <label>{Math.round(item.average_humidity)}%</label>
                  </div>
                  <div className="daily-details-grid-item">
                    <label>Clouds:</label>
                    <label>{Math.round(item.average_clouds_all)}%</label>
                  </div>
                  <div className="daily-details-grid-item">
                    <label>Wind speed:</label>
                    <label>{Math.round(item.average_wind_speed)} m/s</label>
                  </div>
                  <div className="daily-details-grid-item">
                    <label>Feels like:</label>
                    <label>{Math.round(item.average_feels_like)}°C</label>
                  </div>
                </div>
              </AccordionItemPanel>
            </AccordionItem>
          ))}
        </Accordion>
      </>
    );
  };
  
  export default Forecast;
  