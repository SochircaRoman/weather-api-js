const input = document.querySelector(".form-control");
const btn = document.querySelector(".btn");

btn.addEventListener("click", () => {
    let City = input.value;

    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${City}&appid=6587ef0788721dcbcc61ec44fa9751df`)
        .then(function (resp) { return resp.json() })
        .then(function (data) {
            if (data.cod != 200) {
                document.querySelector('.card-title').innerHTML = "Oops! The requested city could not be found...";
                document.querySelector('.card-text').textContent = "";
                document.querySelector('.imagine').innerHTML = `<img src= "./img/img.png">`;
            } else {
                document.querySelector('.card-title').innerHTML = `${data.name} ${Math.round(data.main.temp - 273)}&deg;`;
                document.querySelector('.card-text').textContent = data.weather[0]['description'];
                document.querySelector('.imagine').innerHTML = `<img src= "https://openweathermap.org/img/wn/${data.weather[0]['icon']}@2x.png">`;
            }
        })
        .catch(function () {

    });
})