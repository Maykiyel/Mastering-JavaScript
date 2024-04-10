const weatherForm = document.querySelector(".weather-form");
const cityInput = document.querySelector(".city-input");
const card = document.querySelector(".card");
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
      displayError(error);
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
  card.textContent = "";
  card.style.display = "flex";

  const cityDisplay = document.createElement("h1");
  const tempDisplay = document.createElement("p");
  const humidityDisplay = document.createElement("p");
  const descDisplay = document.createElement("p");
  const WeatherEmoji = document.createElement("p");

  cityDisplay.textContent = city;
  cityDisplay.classList.add("text-3xl", "underline", "underline-offset-4");

  tempDisplay.textContent = `${Math.round(temp - 273.15)}°C`;
  tempDisplay.classList.add("text-6xl", "font-bold");
  humidityDisplay.textContent = `Humidity: ${humidity}%`;
  humidityDisplay.classList.add("text-2xl");
  descDisplay.textContent = description;
  descDisplay.classList.add("text-2xl", "italic");
  WeatherEmoji.textContent = getWeatherEmoji(id);
  WeatherEmoji.classList.add("text-6xl");

  card.appendChild(cityDisplay);
  card.appendChild(tempDisplay);
  card.appendChild(humidityDisplay);
  card.appendChild(descDisplay);
  card.appendChild(WeatherEmoji);
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
  const errorDisplay = document.createElement("p");
  errorDisplay.textContent = message;
  errorDisplay.classList.add("text-2xl", "font-bold", "text-zinc-100/60");

  card.textContent = "";
  card.classList.remove("hidden");
  card.classList.add("flex");
  card.appendChild(errorDisplay);
}

getWeatherData("New York").then((data) => displayWeatherInfo(data));
