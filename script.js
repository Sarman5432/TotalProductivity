//API Keys
const weatherKey = "33513f08e0c240ce0c03d54749e0a333"; //Dark Sky API

getLocation();

//Gets User Location
function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(weatherAPI);
    } else {
        alert('Geolocation is not supported by this browser');
    }
}
//weather api call
function weatherAPI(position) {
    //call API and store info - .getJSON is async operation
    $.getJSON(`https://cors-anywhere.herokuapp.com/https://api.darksky.net/forecast/${weatherKey}/${position.coords.latitude},${position.coords.longitude}`, function (forecast) {
        weatherUI(forecast);
    });
}


//add the weather to the UI
function weatherUI(weatherData){
    if((weatherData.currently.icon === 'cloudy') || (weatherData.currently.icon === 'wind') || (weatherData.currently.icon === 'fog')){
        $('.weatherVisual').append(
            '<i class="fas fa-cloud" id="weatherIcon"></i>'
        ).fitText(0.1);
    }else if((weatherData.currently.icon === 'partly-cloudy-day') || (weatherData.currently.icon === 'partly-cloudy-night')){
        $('.weatherVisual').append(
            '<i class="fas fa-cloud-sun" id="weatherIcon"></i>'
        ).fitText(0.1);
    }else if((weatherData.currently.icon === 'clear-day') || (weatherData.currently.icon === 'clear-night')){
        $('.weatherVisual').append(
            '<i class="fas fa-sun" id="weatherIcon"></i>'
        ).fitText(0.1);
    }else if(weatherData.currently.icon === 'rain'){
        $('.weatherVisual').append(
            '<i class="fas fa-cloud-showers-heavy" id="weatherIcon"></i>'
        ).fitText(0.1);
    }else if(weatherData.currently.icon === 'thunderstorm'){
        $('.weatherVisual').append(
            '<i class="fas fa-bolt" id="weatherIcon"></i>'
        ).fitText(0.1);
    }else if((weatherData.currently.icon === 'snow') || (weatherData.currently.icon === 'sleet') || (weatherData.currently.icon === 'hail')){
        $('.weatherVisual').append(
            '<i class="far fa-snowflake" id="weatherIcon"></i>'
        ).fitText(0.1);
    }else {
        $('.weatherVisual').append(
            '<i class="fas fa-cloud-sun" id="weatherIcon"></i>'
        ).fitText(0.1);
    }
}

//Expands the section on button click
function fullPage() {
    const section = document.getElementsByClassName('notes');
}
