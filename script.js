//API Keys
const weatherKey = "33513f08e0c240ce0c03d54749e0a333"; //Dark Sky API

getLocation(); //TODO: make it on load

var weatherData; //data from Dark Sky Api as parsed json

//add the weather to the UI
function weatherUI(position) {
    weatherData = loadWeatherData(weatherKey, position.coords.latitude, position.coords.longitude);
    
    //adding icon to grid 1
    const weatherVisual = document.getElementsByClassName('weatherVisual');
    const weatherImage = document.createElement('img');
    const weatherLocation = document.createElement('p');
    weatherImage.src = data.currently.icon;
    weatherLocation.innerText = data.timezone;
    weatherVisual.append(weatherImage);
    weatherVisual.append(weatherLocation);
}

//Gets User Location
function getLocation(){
    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition(weatherUI);
    }else{
        alert('Geolocation is not supported by this browser');
    }
}

//Expands the section on button click
function fullPage(){
    const section = document.getElementsByClassName('notes');
    
}

//Load weather
function loadWeatherData(weatherKey, latitude, longitude){
    var request = new XMLHttpRequest();
    request.open('GET', `https://api.darksky.net/forecast/${weatherKey}/${latitude},${longitude}`, true)
    
    var data = JSON.parse(this.response)

    request.onload = function(){
        if(request.status>=200 && request.status<400){
            console.log(data);
        }else{
            console.log("Error")
        }
    }
    request.send();
    return data
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