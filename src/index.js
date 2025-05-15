function updateWeather(response) {
  let temperatureElement = document.querySelector("#temperature");
  let temperature = response.data.temperature.current;
  let weatherCityElement = document.querySelector("#weather-city");
  let weatherDescriptionElement = document.querySelector(
    "#weather-description"
  );
  let humidityElement = document.querySelector("#humidity");
  let windSpeedElement = document.querySelector("#wind-speed");
  let weatherDateElement = document.querySelector("#weather-date");
  let date = new Date(response.data.time * 1000);
  let iconElement = document.querySelector("#icon");

  weatherCityElement.innerHTML = response.data.city;
  weatherDescriptionElement.innerHTML = response.data.condition.description;
  humidityElement.innerHTML = `${response.data.temperature.humidity}%`;
  windSpeedElement.innerHTML = `${response.data.wind.speed}km/h`;
  weatherDateElement.innerHTML = formatDate(date);
  temperatureElement.innerHTML = Math.round(temperature);
  iconElement.innerHTML = `<img src="${response.data.condition.icon_url}" class="weather-icon"/>`;

  getForecast(response.data.city);
}
function formatDate(date) {
  let hours = date.getHours();
  let minutes = date.getMinutes();
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let day = days[date.getDay()];

  if (hours < 10) {
    hours = `0${hours}`;
  }
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }

  return `${day} ${hours}:${minutes}`;
}

function searchCity(city) {
  let apiKey = "od57b07td52499abaaad3f35534b700e";
  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
  axios.get(apiUrl).then(updateWeather);
}

function handleSearchSubmit(event) {
  event.preventDefault();
  let cityInput = document.querySelector("#city-input");

  searchCity(cityInput.value);
}

function getForecast(city) {
let apiKey = "od57b07td52499abaaad3f35534b700e";
let apiUrl =
  `https://api.shecodes.io/weather/v1/forecast?query=${city}&key=${apiKey}&units=metric`;
  axios.get(apiUrl).then(displayForecast);
}

function displayForecast(response) {
console.log(response.data)
;

let forecastElement = document.querySelector("#forecast");

let days = ["Tue", "Wed", "Thu", "Fri", "Sat"];
let forecastHtml = "";


days.forEach(function (day) {
forecastHtml = 
  forecastHtml +

`
   <div class="weather-forecast-day">
    <div class="weather-forecast-date">${day}</div>
    <div class="weather-forecast-icon">☀️</div>
    <div class="weather-forecast-temperatures">
    <div class="weather-forecast-temperature">
        17°
    </div>
    <div class="weather-forecast-temperature">
        <strong>9°</strong>
    </div>
</div>
</div>
`;
});

forecastElement.innerHTML = forecastHtml;
}



let searchFormElement = document.querySelector("#search-form");
searchFormElement.addEventListener("submit", handleSearchSubmit);

searchCity("Johannesburg");


