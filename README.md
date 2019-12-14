# Weatherdashboard-Portfolio
# Introduction

In this assignment we were asked to build a weather dashboard application with search functionality to find current weather conditions and the future weather outlook for multiple cities.

I have used AJAX to hook into the API to retrieve data in JSON format. The app will run in the browser and feature dynamically updated HTML and CSS powered by jQuery.

It displays the following under current weather conditions:
* City
* Date
* Icon image (visual representation of weather conditions)
* Temperature
* Humidity
* Wind speed
* UV index

There are 3 files:

* `index.html`
* `style.css`
* `script.js`

## Website

![alt text](https://github.com/orenamema/Weatherdashboard/raw/master/assets/images/weather.gif)

## Requirements

* Functional, deployed application.
* GitHub repository with a unique name and a README describing the project.
* User can search for weather reports by city using the openweathermap API.
* After searching for a city, the following information is displayed:
* Current temperature
* Current humidity
* Windspeed
* Uv index
* 5 day forecast
* Application uses icons to represent weather conditions.
* Application stores previously searched for cities in localstorage and displays them to the user.
* Application loads last searched city forecast on page load.
Following is the code for the cards that display the 5 day forecast:

```javascript
function getWeather(city="San Francisco"){
    var city = city.replace(" ", "+");
    city = city.replace("-", "+");
    var queryURL = "https://api.openweathermap.org/data/2.5/forecast?q=" + city + ",us&mode=json&units=imperial&APPID=31f4dd752a3e8b29f840df4abf0996cc";
    console.log(queryURL);
    var data = $.ajax({
                    url: queryURL,
                    method: "GET",
                    async: false
                });
    return data.responseJSON;
}

var button_arr = ["#Austin", "#Chicago", "#New-York" ,"#San-Francisco", "#Seattle", "#Denver", "#Atlanta"];


function change_bottom(data){

    var the_lists = ["#fc5", "#fc4", "#fc3", "#fc2", "#fc1"];

    for(var i=0;i<data.list.length;i++){
        if ((data.list[i].dt_txt.indexOf("00:00:00")!=-1)
            & (data.list[i].dt_txt.indexOf(data.list[0].dt_txt.substring(0,10))== -1)){
            $(the_lists.pop()).append(
                `<h4>${data.list[i].dt_txt.substring(0,10)}</h4>
                <img src="http://openweathermap.org/img/w/${data.list[i].weather[0].icon}.png"/>
                <h5> Temp:${data.list[i].main.temp_max} °F </h5>
                <h5>Humidity:${data.list[i].main.humidity}% </h5>`
            );
        }
    }
}
```


Following is the code for the top card:
```
            <div id="top-card" class="card">
                    <div class="card-body" id="top-card-body">
                        <p id="city">City</p>
                        <p id="temperature">Temperature</p>
                        <p id="humidity">Humidity</p>
                        <p id="wind">Wind Speed</p>
                        <!-- <p id="uv">UV Index</p> -->
                    </div>     
            </div>
