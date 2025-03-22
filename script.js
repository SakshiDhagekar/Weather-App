function getWeather() {
    let city = document.getElementById("cityInput").value.trim();
    if (city === "") {
        alert("Please enter a city name!");
        return;
    }

    let apiKey = "08a685587934717a250f797ed1c1d3a1"; // Replace with a valid OpenWeather API Key
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            if (data.cod == "200") {
                document.getElementById("weatherResult").innerHTML =
                    `🌍 City: ${data.name} <br>
                     🌡 Temperature: ${data.main.temp}°C <br>
                     ☁️ Weather: ${data.weather[0].description}`;
            } else {
                document.getElementById("weatherResult").innerHTML = "❌ City not found! Try again.";
            }
        })
        .catch(error => console.error("❌ Error fetching weather data:", error));
}
