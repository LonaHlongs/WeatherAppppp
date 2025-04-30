function updateWeather(response) {
let temperatureElement = document.querySelector("#temperature");
let temperature = response.data.temperature.current;
temperatureElement.innerHTML =Math.round(temperature);
 let weatherCityElement = document.querySelector("#weather-city");

 weatherCityElement.innerHTML = response.data.city;
}


function searchCity(city) {
let apiKey = "od57b07td52499abaaad3f35534b700e";
let apiUrl =
  `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
  axios.get(apiUrl).then(updateWeather);
}



function handleSearchSubmit(event) {
    event.preventDefault();
    let cityInput = document.querySelector("#city-input");
   
    searchCity(cityInput.value);
}


let searchFormElement = document.querySelector("#search-form");
searchFormElement.addEventListener("submit", handleSearchSubmit);

searchCity("Johannesburg");