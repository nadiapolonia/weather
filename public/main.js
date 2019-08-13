//variable to be used to represent the city input in search textbox.
let city = document.querySelector(".text");

//Create a search function for the api project.
const createProperSearch = () => {
  //Break apart the API URL into segments and attach variables to them.
  let typedName = city.value;
  const url = "http://api.openweathermap.org/data/2.5/weather";
  let search = typedName;
  const apiKey = "0fff47daf68ef5c328e0005a1cc99780";
  //Combine the urls together, adding the city name typed into the search box to be included into the URL along with original API URL and key.
  const newUrl = url + "?" + "q=" + search + "&appid=" + apiKey;
  return newUrl;
};

//Create action button to be clicked and retrieve all of the information from the API array.
const getWeatherInfo = () => {
  //Call the API upon the API (use function made previously createProperSearch)
  fetch(createProperSearch())
    .then(response => {
      return response.json();
    })
    //Call for data in the API to be displayed onto two seperate P tags. It will override the text there and display weather and temperature.
    .then(city => {
      console.log(city);
      document.querySelector(".display-weather").textContent =
        city.weather[0].main;
      document.querySelector(".display-temp").textContent = city.main.temp;
    });
};

//Create an action function that will call upon the API and display it onto the webpage.
document.querySelector(".button").addEventListener("click", getWeatherInfo);

// document.addEventListener("DOMContentLoaded", main);

// const main = () => {

// fetch('http://api.openweathermap.org/data/2.5/weather?q=tampa&appid=0fff47daf68ef5c328e0005a1cc99780')
//     .then(response => {
//       console.log(response)
//       return response.json()
//     })
//     .then(weather => {
//       console.log(weather)
//       document.querySelector('.setup').textContent = weather.setup
//     }
//   }
