//API Keys
const weatherKey = "33513f08e0c240ce0c03d54749e0a333"; //Dark Sky API

document.addEventListener('DOMContentLoaded', function(){
    //getLocation
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(weatherAPI);
    } else {
        alert('Geolocation is not supported by this browser');
    }
});

//weather api call
function weatherAPI(position) {
    //call API and store info - .getJSON is async operation
    $.getJSON(`https://cors-anywhere.herokuapp.com/https://api.darksky.net/forecast/${weatherKey}/${position.coords.latitude},${position.coords.longitude}`, function (forecast) {
        weatherUI(forecast);
    });
}


//add the weather to the UI
function weatherUI(weatherData){
    console.log('hi');
    //add the icon based on current condition
    if((weatherData.currently.icon === 'cloudy') || (weatherData.currently.icon === 'wind') || (weatherData.currently.icon === 'fog')){
        $('.weatherVisual').append(
            '<i class="fas fa-cloud" id="weatherIcon" style="font-size:80px"></i>'
        )
    }else if((weatherData.currently.icon === 'partly-cloudy-day') || (weatherData.currently.icon === 'partly-cloudy-night')){
        $('.weatherVisual').append(
            '<i class="fas fa-cloud-sun" id="weatherIcon" style="font-size:80px"></i>'
        )
    }else if((weatherData.currently.icon === 'clear-day') || (weatherData.currently.icon === 'clear-night')){
        $('.weatherVisual').append(
            '<i class="fas fa-sun" id="weatherIcon"></i>'
        )
    }else if(weatherData.currently.icon === 'rain'){
        $('.weatherVisual').append(
            '<i class="fas fa-cloud-showers-heavy" id="weatherIcon"></i>'
        )
    }else if(weatherData.currently.icon === 'thunderstorm'){
        $('.weatherVisual').append(
            '<i class="fas fa-bolt" id="weatherIcon"></i>'
        )
    }else if((weatherData.currently.icon === 'snow') || (weatherData.currently.icon === 'sleet') || (weatherData.currently.icon === 'hail')){
        $('.weatherVisual').append(
            '<i class="far fa-snowflake" id="weatherIcon"></i>'
        )
    }else {
        $('.weatherVisual').append(
            '<i class="fas fa-cloud-sun" id="weatherIcon" style="font-size:80px"></i>'
        )
    }

    //add the weather information
    $('.weatherInfo').append(
        '<div class="weatherData">'
            +'<p><b>' + weatherData.timezone + '</b></p>'
            +'<h2>' + fahrenheitToCelsius(weatherData.currently.temperature) + '&#8451</h2>'
            +'<p>Humidity: ' + weatherData.currently.humidity + '</p>'
            +'<p>' + fahrenheitToCelsius(weatherData.currently.apparentTemperature) + '&#8451</p>'
            +'<p>Precip: ' + decimalToPercent(weatherData.currently.precipProbability) + '%</p>'
        +'</div>'
    )

    if(weatherData.currently.precipProbability != 0){
        $('.weatherData').append('<p>Type: ' + weatherData.currently.precipType + '</p>')
    }
}

//returns percentage (no decimal points)
function decimalToPercent(dec){
    return Math.trunc(dec*100)
}

//converts Fahrenheit to celsius
function fahrenheitToCelsius(fahr){
    return Math.trunc((fahr-32)*(5/9)
)
}

//Expands the section on button click
function fullPage() {
    const section = document.getElementsByClassName('notes');
}