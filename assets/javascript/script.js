// function buildQueryURL() {
// var queryURL=" https://api.openweathermap.org/data/2.5/forecast/daily?q={city name},{country code}&cnt={cnt}";
// var queryParams = { "api-key": "31f4dd752a3e8b29f840df4abf0996cc" };



// api.openweathermap.org/data/2.5/forecast?q=London,us&mode=json&APPID=31f4dd752a3e8b29f840df4abf0996cc


function getWeather(city="San Francisco"){
    var city = city.replace(" ", "+");
    city = city.replace("-", "+");
    var queryURL = "https://api.openweathermap.org/data/2.5/forecast?q=" + city + ",us&mode=json&units=imperial&APPID=31f4dd752a3e8b29f840df4abf0996cc";
    console.log(queryURL);
    var data = $.ajax({
                    url: queryURL,
                    method: "GET",
                    // async: false
                });
    return data.responseJSON;
}

var button_arr = ["#Austin", "#Chicago", "#New-York" ,"#San-Francisco", "#Seattle", "#Denver", "#Atlanta"];

for (var i=0; i < button_arr.length; i++){
    $(button_arr[i]).click(function() {
        console.log("in " + button_arr[i]);
        var data = getWeather(this.id);
        console.log(data);
        $("#city").text(data.city.name + " (" 
                        + data.list[0].dt_txt.substring(0,10) 
                        + ")");
        $("#temperature").text("Temperature: " 
                        + data.list[0].main.temp.toString() 
                        + " F");
        $("#humidity").text("Humidity: " 
                        + data.list[0].main.humidity.toString() 
                        + "%");
        $("#wind").text("Wind Speed: " 
                        + data.list[0].wind.speed.toString() 
                        + " MPH");     
        $("#uv").text("UV: " 
                        + data.list[0].wind.speed.toString() 
                        + " MPH");                              
    });
}




// document.getElementById("Austin").addEventListener("click", function() {
//         console.log("in Austin");
//     });

