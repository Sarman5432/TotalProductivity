//API Keys
const weatherKey = "33513f08e0c240ce0c03d54749e0a333"; //Dark Sky API

//variables
var longitude;
var latitude;

//Gets User Location
function getLocation(){
    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition(storePosition);
    }else{
        alert('Geolocation is not supported by this browser');
    }
    loadWeatherData(weatherKey, latitude, longitude);
}

function storePosition(position) {
    latitude = position.coords.latitude;
    longitude = position.coords.longitude;
}

//Load weather
async function loadWeatherData(weatherKey, latitude, longitude){
    
}