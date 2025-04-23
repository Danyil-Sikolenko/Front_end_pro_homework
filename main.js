const API_KEY = 'b549f704b8c97622c28d09504d125463';
const weather = document.querySelector('#weather');
const restart = document.querySelector('#restart');
const cityLocation = document.querySelector('#Location');
const search = document.querySelector('#search')

function getWeather(city = 'Kharkiv') {
    if (!city || city.trim() === '') {
        weather.innerHTML = 'Будь ласка, введіть місце розташування!';
        return;
    }

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric&lang=uk`;

    fetch(url)
        .then((response) => {
            if (response.status === 404) {
                throw new Error('Місто не знайдено! Перевірте назву міста!');
            }

            return response.json();
        })
        .then((data) => {
            const weatherDescription = data.weather[0].description;
            const temp = data.main.temp;
            const tempRound = Math.round(temp)
            weather.innerHTML = `Місто: ${data.name}<br>Температура: ${tempRound}°C<br>Опис: ${weatherDescription}`;
        })
        .catch((error) => {
            weather.innerHTML = error.message;
        });
}

search.addEventListener('click', (e) => {
    e.preventDefault();
    const city = cityLocation.value.trim();
    getWeather(city);
    cityLocation.value = ''
});

restart.addEventListener('click', () => {
    getWeather();
});

getWeather();