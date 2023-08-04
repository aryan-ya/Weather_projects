const inputBox = document.querySelector('.input-box');
const searchBtn = document.getElementById('searchBtn');
const weather_img = document.querySelector('.weather-img');
const temperature = document.querySelector('.temperature');
const description = document.querySelector('.description');
const humidity = document.getElementById('humidity');
const wind_speed = document.getElementById('wind-speed');

async function checkWeather(city) {
    const api_key = "b6359888dd626764e31679ae92c36660";
    const url = `https://api.openweathermap.org/data/2.5/weather?q= ${city}&appid=${api_key}`;

    const weather_data = await fetch(`${url}`).then(response => response.json());
    
    temperature.innerHTML = `${Math.round(weather_data.main.temp - 273.15)}°C`;
    description.innerHTML = `${weather_data.weather[0].description}`;
    humidity.innerHTML = `${weather_data.main.humidity} %`;
    wind_speed.innerHTML = `${weather_data.wind.speed}`

    switch(weather_data.weather[0].main){
        case 'Clouds':
            weather_img.src = "./project/cloud.png";
            break;
        case 'Clear':
            weather_img.src = "./project/clear.png";
            break;
        case 'Rain':
            weather_img.src = "./project/rain.png";
            break;
        case 'Mist':
            weather_img.src = "./project/mist.png";
            break;
        case 'Smoke':
            weather_img.src = "./project/snow.png";
            break;

    }

}


searchBtn.addEventListener('click', () => {
    checkWeather(inputBox.value);

})





