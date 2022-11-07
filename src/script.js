fetch('https://api.openweathermap.org/data/2.5/weather?q=London,uk&appid=6587ef0788721dcbcc61ec44fa9751df')
    .then(function (resp) { return resp.json() })
    .then(function (data) {
        console.log(data);
        document.querySelector('.card-title').innerHTML = `${data.name} ${Math.round(data.main.temp - 273)}&deg;`;
        document.querySelector('.card-text').textContent = data.weather[0]['description'];
        document.querySelector('.imagine').innerHTML = `<img src= "https://openweathermap.org/img/wn/${data.weather[0]['icon']}@2x.png">`;
    })
    .catch(function () {

    });