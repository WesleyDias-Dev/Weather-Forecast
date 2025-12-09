$(document).ready(function () {
  $('#getWeatherBtn').on('click', function () {
    var city = $('#cityInput').val();
    if (city.trim() !== '') {
      getWeather(city);
      $('#cityInput').val('');
    }
  });

  function getWeather(city) {
    var apiKey = '4821aa342f76fafa6fc2c2caf05d30ef';
    var apiUrl = 'https://api.openweathermap.org/data/2.5/weather';

    $.ajax({
      url: apiUrl,
      type: 'GET',
      data: {
        q: city,
        appid: apiKey,
        units: 'metric',
      },
      success: function (data) {
        displayWeather(data);
      },
      error: function (error) {
        showError();
      }
    });
  }

  function displayWeather(data) {
    
    var weatherInfo = `
    
      <h2>${data.name}, ${data.sys.country}</h2>
      <p>Temperature: ${data.main.temp} °C</p>
      <p>Condition: ${data.weather[0].description}</p>
      <p>Humidity: ${data.main.humidity} %</p>
    `;
    $('#weatherInfo').html(weatherInfo);
  }

  function showError() {
    $('#weatherInfo').html('<p>Error retrieving weather forecast. Please try again.</p>');
  }
});