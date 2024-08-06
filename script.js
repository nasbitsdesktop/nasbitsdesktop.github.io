const _0x2a3df3=_0x6748;function _0x3a0d(){const _0x31753f=['3962235aqMIcA','3kOvsls','d2adf6e34f3e2ba3f4113dfe9889757f','890zalTTT','1799248WGpzRP','46838kKWEdM','3444544kCLLWt','21915OwxxJU','2311820rVFXwg','279972xhDjdj','29ZMppBl'];_0x3a0d=function(){return _0x31753f;};return _0x3a0d();}function _0x6748(_0x144055,_0x4acc7c){const _0x3a0d4d=_0x3a0d();return _0x6748=function(_0x6748d7,_0x3dcf7c){_0x6748d7=_0x6748d7-0xb2;let _0x4da1d5=_0x3a0d4d[_0x6748d7];return _0x4da1d5;},_0x6748(_0x144055,_0x4acc7c);}(function(_0x265394,_0x31cc3b){const _0x196e49=_0x6748,_0xd6f7db=_0x265394();while(!![]){try{const _0x5e4fde=parseInt(_0x196e49(0xb7))/0x1*(parseInt(_0x196e49(0xb2))/0x2)+parseInt(_0x196e49(0xb9))/0x3*(parseInt(_0x196e49(0xbc))/0x4)+-parseInt(_0x196e49(0xb8))/0x5+-parseInt(_0x196e49(0xb6))/0x6+parseInt(_0x196e49(0xb5))/0x7+-parseInt(_0x196e49(0xb3))/0x8+parseInt(_0x196e49(0xb4))/0x9*(parseInt(_0x196e49(0xbb))/0xa);if(_0x5e4fde===_0x31cc3b)break;else _0xd6f7db['push'](_0xd6f7db['shift']());}catch(_0x115cbd){_0xd6f7db['push'](_0xd6f7db['shift']());}}}(_0x3a0d,0x632f5));const apiKey=_0x2a3df3(0xba);
const city = 'Friendswood'; // Replace with your city name

const weatherInfo = document.getElementById('weather-info');
const weatherIcon = document.getElementById('weather-icon');
const temperature = document.getElementById('temperature');
const description = document.getElementById('description');

const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=imperial`;

async function fetchWeather() {
    try {
        const response = await fetch(apiUrl);
        const data = await response.json();
        console.log('Weather Data:', data);
        if (data.weather && data.weather.length > 0) {
            const weather = data.weather[0];
            const temp = data.main.temp;
            const weatherDescription = weather.description;
            temperature.textContent = `${Math.round(temp)}°F`;
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
