
const apiurl = "https://api.openweathermap.org/data/2.5/weather?&units=metric&q=";
const apikey = "c9170b9827cf1c70f328d51a0b0112f6";

const searchbox = document.querySelector(".search input");
const searchbtn = document.querySelector(".search button");

async function fetchWeather(city){
    
              const response = await fetch(apiurl + city + `&appid=${apikey}`);
              if(response.status == 404){
                document.querySelector(".error").style.display = "block";
                document.querySelector(".weather").style.display = "none";
              }
              else{
              const data = await response.json();
              console.log(data);  
              
              document.querySelector(".city").innerHTML = data.name;
              document.querySelector(".tmp").innerHTML = Math.round(data.main.temp) + "°C";
              document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
              document.querySelector(".wind").innerHTML = data.wind.speed + "Km/h";
}
}
searchbox.addEventListener("keyup", (event) => {
    if (event.key === "Enter") {
      // If the Enter key is pressed, trigger the search
      fetchWeather(searchbox.value);
    }
  });

searchbtn.addEventListener("click", () =>{
    fetchWeather(searchbox.value);
});





// const apiurl = "https://api.openweathermap.org/data/2.5/weather?units=metric";
// const apikey = "c9170b9827cf1c70f328d51a0b0112f6";

// const searchbox = document.querySelector(".search input");
// const searchbtn = document.querySelector(".search button");

// async function fetchWeather(city) {
//   const response = await fetch(apiurl + city + `&appid=${apikey}`);
//   const data = await response.json();

//   console.log(data);

//   document.querySelector(".city").innerHTML = data.name;
//   document.querySelector(".tmp").innerHTML = Math.round(data.main.temp) + "°C";
//   document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
//   document.querySelector(".wind").innerHTML = data.wind.speed + "Km/h";
// }

// searchbtn.addEventListener("click", () =>{
//   fetchWeather(searchbox.value);
// });


