let city = document.getElementById("input");
let submit = document.getElementById("search");
let aqi = document.getElementById("AQI");
let temp = document.getElementById("Temp");
let box = document.getElementById("box");
let pm2_5 = document.getElementById("pm2.5");
let pm10 = document.getElementById("pm10");
let dew = document.getElementById("dew");
let o3 = document.getElementById("o3");

// let maps = document.getElementById("map");

submit.addEventListener("click", (e) => {
    async function checkAQI(city) {
        const apiurl = `https://api.waqi.info/feed/${city}/?token=6eae994fb07508aa530967d2a2acc75b12bba96d`;
        const response = await fetch(apiurl);
        var data = await response.json();
        console.log(data.data);
        box.style.display = "block";
        aqi.innerHTML = `${data.data.aqi}`;
        temp.innerHTML = parseFloat(`${data.data.iaqi.t.v}`).toFixed(2);
        pm2_5.innerHTML = `${data.data.forecast.daily.pm25[2].avg}`;
        pm10.innerHTML = `${data.data.forecast.daily.pm10[2].avg}`;
        o3.innerHTML = `${data.data.forecast.daily.o3[2].avg}`;
        dew.innerHTML = `${data.data.iaqi.dew.v}`;

    }
    checkAQI(city.value);
    async function Address(city) {
        const addressURL = "https://nominatim.openstreetmap.org/search?format=json&limit=3&q=" + city.value;
        const response = await fetch(addressURL);
        var addressData = await response.json();
        console.log(addressData[0].lat, addressData[0].lon);
    }
   
});
