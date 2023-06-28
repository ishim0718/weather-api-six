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
    var weatherUrl = `http://api.openweathermap.org/data/2.5/forecast?lat=${citylat}&lon=${citylon}&units=imperial&appid=${api}`
    
    console.log(weatherUrl);

    fetch(weatherUrl)
        .then(function (response) {
            return response.json();
        })
        //Grab necessary date from api call 
        .then(function (weatherData) {
            console.log(weatherData);
            // let temp = weatherData.list[0].main.temp;
            // let wind = weatherData.list[0].wind.speed;
            // let humidity = weatherData.list[0].main.humidity;
            // console.log(Math.round(temp));
            // console.log(wind);
            // console.log(humidity);
            $('#0-city').html(weatherData.city.name)
            $('#0-date').html(dayjs().add(0,'day').format('MM/DD/YYYY'))
            $('#0-temp').html(weatherData.list[0].main.temp)
            $('#0-wind').html(weatherData.list[0].wind.speed)
            $('#0-humid').html(weatherData.list[0].main.humidity)

            $('#1-date').html(dayjs().add(1,'day').format('MM/DD/YYYY'))
            $('#1-temp').html(weatherData.list[5].main.temp)
            $('#1-wind').html(weatherData.list[5].wind.speed)
            $('#1-humid').html(weatherData.list[5].main.humidity)

            $('#2-date').html(dayjs().add(2,'day').format('MM/DD/YYYY'))
            $('#2-temp').html(weatherData.list[13].main.temp)
            $('#2-wind').html(weatherData.list[13].wind.speed)
            $('#2-humid').html(weatherData.list[13].main.humidity)

            $('#3-date').html(dayjs().add(3,'day').format('MM/DD/YYYY'))
            $('#3-temp').html(weatherData.list[21].main.temp)
            $('#3-wind').html(weatherData.list[21].wind.speed)
            $('#3-humid').html(weatherData.list[21].main.humidity)

            $('#4-date').html(dayjs().add(4,'day').format('MM/DD/YYYY'))
            $('#4-temp').html(weatherData.list[29].main.temp)
            $('#4-wind').html(weatherData.list[29].wind.speed)
            $('#4-humid').html(weatherData.list[29].main.humidity)

            $('#5-date').html(dayjs().add(5,'day').format('MM/DD/YYYY'))
            $('#5-temp').html(weatherData.list[37].main.temp)
            $('#5-wind').html(weatherData.list[37].wind.speed)
            $('#5-humid').html(weatherData.list[37].main.humidity)
        }); 
})

//var weatherapicall = "api.openweathermap.org/data/2.5/forecast?lat={lat}&lon={lon}&appid={API key}""
//var geoapicall = "http://api.openweathermap.org/geo/1.0/direct?q=atlanta,us&limit=1&appid=339911761f464aefd97177f16c15c048"