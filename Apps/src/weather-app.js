const weatherForm = document.querySelector(".weather-form");
const cityInput = document.querySelector(".city-input");
const cardWrapper = document.querySelector(".card-wrapper");
const cardWeather = document.getElementById("cardWeather");
const cityDisplay = document.getElementById("city-name");
const tempDisplay = document.getElementById("temp");
const humidityDisplay = document.getElementById("humidity");
const descDisplay = document.getElementById("descDisplay");
const weatherEmoji = document.getElementById("weatherEmoji");
const errorDisplay = document.getElementById("errorDisplay");
const apiKey = "13ee27609bb02ebeed5c65deadabd8f5";

weatherForm.addEventListener("submit", async (event) => {
  event.preventDefault();
  const city = cityInput.value.trim();
  if (city) {
    try {
      const weatherData = await getWeatherData(city);
      displayWeatherInfo(weatherData);
    } catch (error) {
      console.error(error);
      displayError("Could not fetch weather data");
    }
  } else {
    displayError("Please enter a city");
  }
});

async function getWeatherData(city) {
  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;
  const response = await fetch(apiUrl);
  if (!response.ok) {
    throw new Error("Failed to fetch weather data");
  }
  return await response.json();
}

function displayWeatherInfo(data) {
  const {
    name: city,
    main: { temp, humidity },
    weather: [{ description, id }],
  } = data;
  errorDisplay.textContent = "";
  cardWrapper.classList.remove("hidden");
  cardWrapper.classList.add("flex");
  cardWeather.classList.remove("hidden");
  cardWeather.classList.add("flex");
  cityDisplay.textContent = city;
  tempDisplay.textContent = `${Math.round(temp - 273.15)}°C`;
  humidityDisplay.textContent = `Humidity: ${humidity}%`;
  descDisplay.textContent = description;
  weatherEmoji.textContent = getWeatherEmoji(id);
}

function getWeatherEmoji(weatherid) {
  switch (true) {
    case weatherid >= 200 && weatherid < 300:
      return "🌩️";
    case weatherid >= 300 && weatherid < 400:
      return "🌧️";
    case weatherid >= 500 && weatherid < 600:
      return "🌧️";
    case weatherid >= 600 && weatherid < 700:
      return "❄️";
    case weatherid >= 700 && weatherid < 800:
      return "🌫️";
    case weatherid === 800:
      return "☀️";
    case weatherid >= 801 && weatherid < 810:
      return "☁️";
    default:
      return "❓";
  }
}

function displayError(message) {
  errorDisplay.textContent = message;
  cardWrapper.classList.add("flex");
  cardWrapper.classList.remove("hidden");
  cardWeather.classList.remove("flex");
  cardWeather.classList.add("hidden");
}
