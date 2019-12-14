# Weatherdashboard-Portfolio
# Introduction

In this assignment we are asked to build a weather dashboard application with search functionality to find current weather conditions and the future weather outlook for multiple cities.

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

```
            <div id="top-card" class="card">
                    <div class="card-body" id="top-card-body">
                        <p id="city">City</p>
                        <p id="temperature">Temperature</p>
                        <p id="humidity">Humidity</p>
                        <p id="wind">Wind Speed</p>
                        <!-- <p id="uv">UV Index</p> -->
                    </div>     
            </div>```

