const apiKey = 'd2adf6e34f3e2ba3f4113dfe9889757f'; // Replace with your OpenWeatherMap API key
const city = 'Houston'; // Replace with your city name

const weatherInfo = document.getElementById('weather-info');
const weatherIcon = document.getElementById('weather-icon');
const temperature = document.getElementById('temperature');
const description = document.getElementById('description');

const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

async function fetchWeather() {
    try {
        const response = await fetch(apiUrl);
        const data = await response.json();

        console.log('Weather Data:', data);

        if (data.weather && data.weather.length > 0) {
            const weather = data.weather[0];
            const temp = data.main.temp;
            const weatherDescription = weather.description;

            temperature.textContent = `${Math.round(temp)}°C`;
            description.textContent = weatherDescription;

            updateWeatherIcon(weather.icon);
        } else {
            console.error('Weather data is not available');
        }
    } catch (error) {
        console.error('Error fetching weather data:', error);
    }
}

function updateWeatherIcon(iconCode) {
    weatherIcon.style.backgroundImage = `url(http://openweathermap.org/img/wn/${iconCode}@2x.png)`;
}

// Fetch weather data on page load
fetchWeather();
