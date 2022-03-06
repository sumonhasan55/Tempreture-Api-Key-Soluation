
const API_Key =`8f1220c06d234b346c9b2ea27115d6d4`;
const searchTempture = () => {

    const city = document.getElementById('city-name').value;
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_Key}`;
    //console.log(url)
    fetch(url)
    .then(res => res.json())
    .then(data =>displayTempture(data));
}

const setInnerText = (id, text) => {
    document.getElementById(id).innerText = text;
}

const displayTempture = temputure => {
    setInnerText('city', temputure.name);
    setInnerText('tempture',temputure.main.temp);
    setInnerText('condition',temputure.weather[0].main);
    console.log(temputure);
    //set Weather icon

    const url = `http://openweathermap.org/img/wn/${temputure.weather[0].icon}@2x.png`;
    const imageIcon = document.getElementById('weather-icon');
    imageIcon.setAttribute('src', url);
     
}