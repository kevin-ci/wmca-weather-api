const cityNameElement = document.getElementById("city-name");
const headlineElement = document.getElementById("headline");
const tempElement = document.getElementById("curr-temp");
const weatherImg = document.getElementById("today-img");
const inputElement = document.getElementById("input");
const buttonElement = document.getElementById("button");
const forecastElement = document.getElementById("forecast-area");

const apiKey = "7816d9f235c88adc096427a68ca872f2";

function handleButtonClick() {
    let city = inputElement.value;
    let url = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}&units=metric`;
    fetch(url)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      forecastElement.innerHTML = "";
      displayTodaysWeather(data);
      appendWeatherForecast(data.list[7], 1);
      appendWeatherForecast(data.list[15], 2);
      appendWeatherForecast(data.list[23], 3);
      appendWeatherForecast(data.list[31], 4);
    });
}
buttonElement.addEventListener('click', handleButtonClick);

function displayTodaysWeather(data) {
  cityNameElement.innerText = data.city.name;
  headlineElement.innerText = data.list[0].weather[0].main;
  let weatherIconId = data.list[0].weather[0].icon;
  weatherImg.innerHTML = `<img src="https://openweathermap.org/img/wn/${weatherIconId}@2x.png"></img>`;
  tempElement.innerText = `${data.list[0].main.temp}°C`;
}

function appendWeatherForecast(data, days) {
    let headline = data.weather[0].main;
    let weatherIconId = data.weather[0].icon;
    let temperature = data.main.temp;

    let htmlString = `
    <div class="col-3">
        <span>${days} day(s) from now</span>
        <h3>${headline}</h3>
        <img src="https://openweathermap.org/img/wn/${weatherIconId}@2x.png"></img>
        <p>${temperature}°C</p>
    </div>
    `;

    forecastElement.innerHTML += htmlString;
}