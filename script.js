const _0x2a3df3=_0x6748;function _0x3a0d(){const _0x31753f=['3962235aqMIcA','3kOvsls','d2adf6e34f3e2ba3f4113dfe9889757f','890zalTTT','1799248WGpzRP','46838kKWEdM','3444544kCLLWt','21915OwxxJU','2311820rVFXwg','279972xhDjdj','29ZMppBl'];_0x3a0d=function(){return _0x31753f;};return _0x3a0d();}function _0x6748(_0x144055,_0x4acc7c){const _0x3a0d4d=_0x3a0d();return _0x6748=function(_0x6748d7,_0x3dcf7c){_0x6748d7=_0x6748d7-0xb2;let _0x4da1d5=_0x3a0d4d[_0x6748d7];return _0x4da1d5;},_0x6748(_0x144055,_0x4acc7c);}(function(_0x265394,_0x31cc3b){const _0x196e49=_0x6748,_0xd6f7db=_0x265394();while(!![]){try{const _0x5e4fde=parseInt(_0x196e49(0xb7))/0x1*(parseInt(_0x196e49(0xb2))/0x2)+parseInt(_0x196e49(0xb9))/0x3*(parseInt(_0x196e49(0xbc))/0x4)+-parseInt(_0x196e49(0xb8))/0x5+-parseInt(_0x196e49(0xb6))/0x6+parseInt(_0x196e49(0xb5))/0x7+-parseInt(_0x196e49(0xb3))/0x8+parseInt(_0x196e49(0xb4))/0x9*(parseInt(_0x196e49(0xbb))/0xa);if(_0x5e4fde===_0x31cc3b)break;else _0xd6f7db['push'](_0xd6f7db['shift']());}catch(_0x115cbd){_0xd6f7db['push'](_0xd6f7db['shift']());}}}(_0x3a0d,0x632f5));const apiKey=_0x2a3df3(0xba);
const city = 'Friendswood'; // Replace with your city name

const weatherInfo = document.getElementById('weather-info');
const weatherIcon = document.getElementById('weather-icon');
const temperature = document.getElementById('temperature');
const description = document.getElementById('description');

const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=imperial`;
function _0x3201(_0x45cb61,_0x535f76){const _0x26f505=_0x26f5();return _0x3201=function(_0x3201f5,_0x3fadba){_0x3201f5=_0x3201f5-0x181;let _0x1cb525=_0x26f505[_0x3201f5];return _0x1cb525;},_0x3201(_0x45cb61,_0x535f76);}const _0x246b96=_0x3201;(function(_0x47c73c,_0x2fa297){const _0x339411=_0x3201,_0x27bb3e=_0x47c73c();while(!![]){try{const _0x1e991c=-parseInt(_0x339411(0x186))/0x1+parseInt(_0x339411(0x187))/0x2*(parseInt(_0x339411(0x185))/0x3)+parseInt(_0x339411(0x184))/0x4*(parseInt(_0x339411(0x188))/0x5)+-parseInt(_0x339411(0x181))/0x6+parseInt(_0x339411(0x189))/0x7+-parseInt(_0x339411(0x183))/0x8+parseInt(_0x339411(0x182))/0x9;if(_0x1e991c===_0x2fa297)break;else _0x27bb3e['push'](_0x27bb3e['shift']());}catch(_0xa9388e){_0x27bb3e['push'](_0x27bb3e['shift']());}}}(_0x26f5,0x54d33));const newsApiKey=_0x246b96(0x18a);function _0x26f5(){const _0x5bf312=['1961160WtulmS','9510705Nlpepv','2473912ovCTYd','268nAFrWx','21jyeHoi','559505mdyvjS','28826cGQxGz','9730fFcFZS','1785203TZyUkk','8c6257ab8b7b497cba570c4c08d0edb1'];_0x26f5=function(){return _0x5bf312;};return _0x26f5();}
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
document.addEventListener('DOMContentLoaded', () => {
    fetchWeather();
});

document.addEventListener('DOMContentLoaded', () => {
    getHeadlines();
});

document.addEventListener('DOMContentLoaded', () => {
    getHeadlines();
});

async function getHeadlines() {
    function _0x18ab(_0x5e4f4a,_0x1e67b0){const _0x2bbde4=_0x2bbd();return _0x18ab=function(_0x18abfb,_0x5c6118){_0x18abfb=_0x18abfb-0x14c;let _0x3ea68f=_0x2bbde4[_0x18abfb];return _0x3ea68f;},_0x18ab(_0x5e4f4a,_0x1e67b0);}const _0x2e15dc=_0x18ab;(function(_0x6c3a53,_0x59ab91){const _0x5eb093=_0x18ab,_0x30005f=_0x6c3a53();while(!![]){try{const _0x56741d=parseInt(_0x5eb093(0x152))/0x1+-parseInt(_0x5eb093(0x153))/0x2*(parseInt(_0x5eb093(0x154))/0x3)+parseInt(_0x5eb093(0x150))/0x4+-parseInt(_0x5eb093(0x14f))/0x5+-parseInt(_0x5eb093(0x14d))/0x6+parseInt(_0x5eb093(0x14e))/0x7+parseInt(_0x5eb093(0x151))/0x8;if(_0x56741d===_0x59ab91)break;else _0x30005f['push'](_0x30005f['shift']());}catch(_0x3ba473){_0x30005f['push'](_0x30005f['shift']());}}}(_0x2bbd,0x6737f));const apiKey=_0x2e15dc(0x14c);function _0x2bbd(){const _0x4c2d60=['671324XorwZd','5509344neUrMN','807792PRkVqs','56558XmNiwl','39tzihSp','pub_505080c28a00e6c478ce7a392e72eb1474b73','1147590UCELjr','14784DlvVai','3423640GDSAoz'];_0x2bbd=function(){return _0x4c2d60;};return _0x2bbd();}
    const apiUrl = `https://newsdata.io/api/1/news?apikey=${apiKey}&country=us`;

    try {
        const response = await fetch(apiUrl);
        
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();
        console.log('Headlines Data:', data);

        if (data.results) {
            const headlines = data.results.map(article => `
                <li>
                    <a href="${article.link}" target="_blank">${article.title}</a>
                </li>
            `).join('');
            document.getElementById('headline-list').innerHTML = headlines;
        } else {
            console.error('No articles found in the response');
        }
    } catch (error) {
        console.error('Error fetching headlines:', error);
        document.getElementById('headline-list').innerHTML = '<li>Error fetching headlines.</li>';
    }
}
