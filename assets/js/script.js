var searchBtn = document.querySelector("#search-btn");

searchBtn.addEventListener("click", function(event) {
    event.preventDefault();

    var searchInput = document.querySelector("#search-bar").value;
    console.log(searchInput);
    
//using GeoCode API to get city lat and lon based on search input
    var api = "339911761f464aefd97177f16c15c048"
    var geoUrl = `http://api.openweathermap.org/geo/1.0/direct?q=${searchInput},us&limit=1&appid=${api}`

    console.log(geoUrl);

    fetch(geoUrl)
        .then(function (response) {
            return response.json();
    })
        .then(function (data) {
            console.log(data);
            var lat = data[0].lat;
            var lon = data[0].lon;
//used localStorage to save desired api response data
      localStorage.setItem("lat", JSON.stringify(lat));
      localStorage.setItem("lon", JSON.stringify(lon));
    });

//using the Weather API to get data 
    var citylat = JSON.parse(localStorage.getItem("lat"));
    var citylon = JSON.parse(localStorage.getItem("lon"));
    var weatherUrl = `http://api.openweathermap.org/data/2.5/forecast?lat=${citylat}&lon=${citylon}&appid=${api}`
    
    console.log(weatherUrl);

    fetch(weatherUrl)
        .then(function (response) {
            return response.json();
        })
        //todo: grab necessary date from api call 
        .then(function (weatherData) {
            console.log(weatherData);
            let temp = weatherData.list[0].main.temp - 273.15;
            let wind = weatherData.list[0].wind.speed;
            let humidity = weatherData.list[0].main.humidity;
            console.log(temp);
            console.log(wind);
            console.log(humidity);
        }); 
})

//var weatherapicall = "api.openweathermap.org/data/2.5/forecast?lat={lat}&lon={lon}&appid={API key}""
//var geoapicall = "http://api.openweathermap.org/geo/1.0/direct?q=atlanta,us&limit=1&appid=339911761f464aefd97177f16c15c048"