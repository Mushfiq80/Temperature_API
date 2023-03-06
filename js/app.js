const API_KEY = `23680610312621da78b89ef5a1b18622`;

const loadTemperature = (city) => {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;
    fetch(url)
        .then(res => res.json())
        .then (data => displayTemperature(data)) 
        
};


const displayTemperature = data => {
    const temperature = document.getElementById(`temperature`);
    console.log(data.main.temp);
    temperature.innerText = data.main.temp;

    const weather = document.getElementById('weather');
    weather.innerText = data.weather[0].main;
    const icon = document.getElementById('icon-img');
    icon.innerHTML = `<img src="https://openweathermap.org/img/wn/${data.weather[0].icon}.png">`;

    
}

document.getElementById('btn-search').addEventListener('click', function(){
    const searchField = document.getElementById(`search-field`);
    const city = searchField.value;
    loadTemperature(city);
    const cityName = document.getElementById(`city-name`);
    cityName.innerText = city;
    
    

});


loadTemperature(`Dhaka`);