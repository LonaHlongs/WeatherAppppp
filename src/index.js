function searchCity(event) {
    event.preventDefault();
    let cityInputElement = document.querySelector("#city-input");
    let weatherCityElement = document.querySelector("#weather-city");
    weatherCityElement.innerHTML = cityInputElement.value;

}

let searchFormElement = document.querySelector("#search-form");
searchFormElement.addEventListener("submit", searchCity);