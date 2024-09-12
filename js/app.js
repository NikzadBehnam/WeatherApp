document.getElementById("search").addEventListener("click", function () {
  const city = document.getElementById("city").value;
  const apiKey = "a2de673a0858ecb2223e9b0232d8e082";
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      document.getElementById("weather").innerHTML = `
        <h2>${data.name}</h2>
        <p>${data.main.temp}°C, ${data.weather[0].description}</p>
        <img src="http://openweathermap.org/img/w/${data.weather[0].icon}.png">
      `;
    })
    .catch((error) => {
      document.getElementById("weather").innerHTML = "City not found";
    });
});
