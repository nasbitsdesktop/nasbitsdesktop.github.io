const encodedApiKey = 'ZDJhZGY2ZTM0ZjNlMmJhM2Y0MTEzZGZlOTg4OTc1N2Y=';
const apiKey = atob(encodedApiKey);
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
    weatherIcon.style.backgroundImage = `url(https://openweathermap.org/img/wn/${iconCode}@2x.png)`;
}

function updateClock() {
    const options = {
        timeZone: 'America/Chicago',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false // Use 24-hour format
    };
    
    const now = new Date();
    const timeString = new Intl.DateTimeFormat('en-US', options).format(now);

    document.getElementById('clock').textContent = timeString;
}

// Update the clock immediately and then every second
updateClock();
setInterval(updateClock, 1000);

// Fetch weather data on page load
fetchWeather();
