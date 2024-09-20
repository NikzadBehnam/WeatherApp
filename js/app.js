const apiKey = `79be0c4be56d2e7b011d7349f1c14ef4`;
const unit = `Imperial`;
const city = `kabul`;
const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&unit=${unit}&appid=${apiKey}`;

async function checkWeather() {
  const cityName = document.querySelector("#city-name");
  const tempratureValue = document.querySelector("#temp-value");

  const response = await fetch(apiUrl);
  const data = await response.json();

  console.log(data.main.temp);

  cityName.innerHTML = data.name;
  tempratureValue.innerHTML = data.main.temp;
}

checkWeather();
