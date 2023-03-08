var location = document.querySelector("#location");
var icon = document.querySelector("#icon");
var date = document.querySelector("#date");
var temperature = document.querySelector("#temp");
var wind = document.querySelector("#wind");
var humidity = document.querySelector("#humidity");
var searchBtn = document.querySelector("#search-btn");

searchBtn.addEventListener("click", function(event) {
    event.preventDefault();

    var searchInput = document.querySelector("#search-bar").value;
    console.log(searchInput);
})
//search = cityname
//fetch(newGeoUrl)
//  .then(function (response) {
//    return response.json();
//  })
//  .then(function (data) {
//    for (var i = 0; i < data.length; i++) {
//      console.log(data[i].name);
//      console.log(data[i].lat);
//      console.log(data[i].lon);
//    }
//  });
//})

//var weatherapicall = "api.openweathermap.org/data/2.5/forecast?lat={lat}&lon={lon}&appid={API key}""
//var geoapicall = "http://api.openweathermap.org/geo/1.0/direct?q=atlanta,us&limit=1&appid=339911761f464aefd97177f16c15c048"