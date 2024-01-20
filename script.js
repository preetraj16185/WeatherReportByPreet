

const apiKey = "ec4566680e584ba9ad345c477df532e7";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?&units=metric&q=";

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weathericon = document.querySelector(".weather-icon");

async function checkWeather(citys="patna") {
    const response = await fetch(apiUrl + citys+`&appid=${apiKey}`);
    if(response.status==404){
        document.querySelector(".error").style.display="block";
        document.querySelector(".weather").style.display="none";

    }else{
    var data = await response.json();
    }

    document.querySelector(".city").innerHTML =data.name;
    document.querySelector(".temp").innerHTML =Math.round(data.main.temp) +"°C";
    document.querySelector(".humidity").innerHTML =data.main.humidity + "%";
    document.querySelector(".wind").innerHTML =data.wind.speed+"km/h";


    if(data.weather[0].main =="Clouds"){
          weathericon.src="assets/clouds.png";
    }
    else if(data.weather[0].main =="Clear"){
          weathericon.src="assets/clear.png";
    }
    else if(data.weather[0].main =="Rain"){
          weathericon.src="assets/rain.png";
    }
    else if(data.weather[0].main =="Drizzle"){
          weathericon.src="assets/drizzle.png";
    }
    else if(data.weather[0].main =="Mist"){
          weathericon.src="assets/mist.png";
    }

    document.querySelector(".weather").style.display="block";
    document.querySelector(".error").style.display="none";
}  

searchBtn.addEventListener("click", ()=>{
    checkWeather(searchBox.value);
})


