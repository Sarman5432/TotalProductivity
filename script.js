//API Keys
const weatherKey = "33513f08e0c240ce0c03d54749e0a333"; //Dark Sky API

//variables
var longitude;
var latitude;

getLocation();

//Gets User Location
function getLocation(){
    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition(storePosition);
    }else{
        alert('Geolocation is not supported by this browser');
    }
    loadWeatherData(weatherKey, 43.589046, -79.644119);
}

function storePosition(position) {
    latitude = position.coords.latitude;
    longitude = position.coords.longitude;
}

//Load weather
function loadWeatherData(weatherKey, latitude, longitude){
    var request = new XMLHttpRequest();
    request.open('GET', `https://api.darksky.net/forecast/${weatherKey}/${latitude},${longitude}`, true)
    request.onload = function(){
        if(request.status>=200 && request.status<400){
            var data = JSON.parse(this.response)
            console.log(data);
        }else{
            console.log("Error")
        }
    }
    request.send();
}




/*//practice getting json from var
var data = '[ { "name": "Aragorn", "race": "Human" }, { "name": "Gimli", "race": "Dwarf" } ]'
data = JSON.parse(data);
console.log(data[0].name)
*/

/*//practice getting json from json file/
var request = new XMLHttpRequest();
request.open('GET', 'practice.json', true);

request.onload = function(){
    var data = JSON.parse(this.response);
    for(var i=0; i<data.length;i++){
        console.log(data[i].name);
    }
}
request.send();
*/