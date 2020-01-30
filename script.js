//API Keys
const weatherKey = "33513f08e0c240ce0c03d54749e0a333"; //Dark Sky API

getLocation();

//Gets User Location
function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(weatherUI);
    } else {
        alert('Geolocation is not supported by this browser');
    }
}


//add the weather to the UI
function weatherUI(position) {
    var dataJSON;
    //call API and store info - .getJSON is async operation
    $.getJSON(`https://cors-anywhere.herokuapp.com/https://api.darksky.net/forecast/${weatherKey}/${position.coords.latitude},${position.coords.longitude}`, function (forecast) {
        dataJSON = forecast;
    });
    console.log(dataJSON);
}

//Expands the section on button click
function fullPage() {
    const section = document.getElementsByClassName('notes');

}




//How to call api without jquery
/*
var request = new XMLHttpRequest();
    request.open('GET', `https://cors-anywhere.herokuapp.com/https://api.darksky.net/forecast/${weatherKey}/${position.coords.latitude},${position.coords.longitude}`, true)
    request.onload = function(){
         var data = JSON.parse(this.response)
        if(request.status>=200 && request.status<400){
            console.log(data);
        }else{
            console.log("Error")
        }
    }
    request.send();
*/

//practice getting json from var
/*
var data = '[ { "name": "Aragorn", "race": "Human" }, { "name": "Gimli", "race": "Dwarf" } ]'
data = JSON.parse(data);
console.log(data[0].name)
*/

//practice getting json from json file
/*
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