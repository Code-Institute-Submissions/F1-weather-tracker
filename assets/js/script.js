// enable strict mode
'use strict';

// track coordinates (latitude & longitude)
const bahrain__coordinates = `26.032,50.511`;
const imola__coordinates = `44.3435,11.707`;
const portimao__coordinates = `37.233,-8.629`;
const barcelona__coordinates = `41.57,2.26`;
const monaco__coordinates = `43.735,7.422`;
const baku__coordinates = `40.373,49.853`;
const montreal__coordinates = `45.504 -73.524`;
const castellet__coordinates = `43.251,5.794`;
const spielberg__coordinates = `47.22,14.762`;
const silverstone__coordinates = `52.073,-1.01`;
const budapest__coordinates = `47.582,19.251`;
const spa__coordinates = `50.442,5.972`;
const zandvoort__coordinates = `52.388,4.541`;
const monza__coordinates = `45.624,9.282`;
const sochi__coordinates = `43.407,39.952`;
const singapore__coordinates = `1.291,103.864`;
const suzuka__coordinates = `34.8439,136.5312`;
const austin__coordinates = `30.1302,-97.637`;
const mexico__coordinates = `19.406,-99.093`;
const interlagos__coordinates = `-23.706,-46.699`;
const melbourne__coordinates = `-37.851, 144.97`;
const jeddah__coordinates = `21.602,39.108`;
const UAE__coordinates = `24.467,54.603`;

// weather API
//const weather__API = `https://api.worldweatheronline.com/premium/v1/weather.ashx?key=c65cb80ad92046feba1133126210602&q=${bahrain__coordinates};${imola__coordinates};${portimao__coordinates};${barcelona__coordinates};${monaco__coordinates};${baku__coordinates};${montreal__coordinates};${castellet__coordinates};${spielberg__coordinates};${silverstone__coordinates};${budapest__coordinates};${spa__coordinates};${zandvoort__coordinates};${monza__coordinates};${sochi__coordinates};${singapore__coordinates};${suzuka__coordinates};${austin__coordinates};${mexico__coordinates};${interlagos__coordinates};${melbourne__coordinates};${jeddah__coordinates};${UAE__coordinates}&format=json&num_of_days=1&tp=1`;
//const weather__API = `https://api.worldweatheronline.com/premium/v1/weather.ashx?key=1f3f690721094e4397a130912211502&q=${bahrain__coordinates};${imola__coordinates};${portimao__coordinates};${barcelona__coordinates};${monaco__coordinates};${baku__coordinates};${montreal__coordinates};${castellet__coordinates};${spielberg__coordinates};${silverstone__coordinates};${budapest__coordinates};${spa__coordinates};${zandvoort__coordinates};${monza__coordinates};${sochi__coordinates};${singapore__coordinates};${suzuka__coordinates};${austin__coordinates};${mexico__coordinates};${interlagos__coordinates};${melbourne__coordinates};${jeddah__coordinates};${UAE__coordinates}&format=json&num_of_days=1&tp=1`;
//const weather__API = `https://api.worldweatheronline.com/premium/v1/weather.ashx?key=caac914d16a4477d9f6210111211502&q=${bahrain__coordinates};${imola__coordinates};${portimao__coordinates};${barcelona__coordinates};${monaco__coordinates};${baku__coordinates};${montreal__coordinates};${castellet__coordinates};${spielberg__coordinates};${silverstone__coordinates};${budapest__coordinates};${spa__coordinates};${zandvoort__coordinates};${monza__coordinates};${sochi__coordinates};${singapore__coordinates};${suzuka__coordinates};${austin__coordinates};${mexico__coordinates};${interlagos__coordinates};${melbourne__coordinates};${jeddah__coordinates};${UAE__coordinates}&format=json&num_of_days=1&tp=1`;
const weather__API = `https://api.worldweatheronline.com/premium/v1/weather.ashx?key=c65cb80ad92046feba1133126210602&q=${bahrain__coordinates};${imola__coordinates};${portimao__coordinates};${barcelona__coordinates};${monaco__coordinates};${baku__coordinates};${montreal__coordinates};${castellet__coordinates};${spielberg__coordinates};${silverstone__coordinates};${budapest__coordinates};${spa__coordinates};${zandvoort__coordinates};${monza__coordinates};${sochi__coordinates};${singapore__coordinates};${suzuka__coordinates};${austin__coordinates}&format=json&num_of_days=1&tp=1`;

// fetch weather data & store locally
const getWeatherData = async function() {
    const response = await fetch(weather__API);
    const weatherData = await response.json();
    // store weather data in local storage converted to a string
    /* credits #? */
    localStorage.setItem("weatherData", JSON.stringify(weatherData));
    console.log("added weatherdata to local storage");
    checkClosestRace();
    displayActiveEventData();
};

// races starting date & time
const bahrain__race__start = new Date(Date.UTC(2021, 2, 28, 15, 0, 0));
console.log(`${bahrain__race__start} bahrain race start`);
const imola__race__start = new Date(Date.UTC(2021, 3, 18, 11, 0, 0));
const portimao__race__start = new Date(Date.UTC(2021, 4, 2, 11, 0, 0));
const barcelona__race__start = new Date(Date.UTC(2021, 4, 9, 11, 0, 0));
const monaco__race__start = new Date(Date.UTC(2021, 4, 23, 11, 0, 0));
const baku__race__start = new Date(Date.UTC(2021, 5, 6, 10, 0, 0));
const montreal__race__start = new Date(Date.UTC(2021, 5, 13, 16, 0, 0));
const castellet__race__start = new Date(Date.UTC(2021, 5, 27, 11, 0, 0));
const spielberg__race__start = new Date(Date.UTC(2021, 6, 4, 11, 0, 0));
const silverstone__race__start = new Date(Date.UTC(2021, 6, 18, 12, 0, 0));
const budapest__race__start = new Date(Date.UTC(2021, 7, 1, 11, 0, 0));
const spa__race__start = new Date(Date.UTC(2021, 7, 29, 11, 0, 0));
const zandvoort__race__start = new Date(Date.UTC(2021, 8, 5, 11, 0, 0));
const monza__race__start = new Date(Date.UTC(2021, 8, 12, 11, 0, 0));
const sochi__race__start = new Date(Date.UTC(2021, 8, 26, 10, 0, 0));
const singapore__race__start = new Date(Date.UTC(2021, 9, 3, 10, 0, 0));
const suzuka__race__start = new Date(Date.UTC(2021, 9, 10, 3, 0, 0));
const austin__race__start = new Date(Date.UTC(2021, 9, 24, 17, 0, 0));
const mexico__race__start = new Date(Date.UTC(2021, 9, 31, 18, 0, 0));
const interlagos__race__start = new Date(Date.UTC(2021, 10, 7, 16, 0, 0));
const melbourne__race__start = new Date(Date.UTC(2021, 10, 21, 5, 0, 0));
const jeddah__race__start = new Date(Date.UTC(2021, 11, 5, 15, 0, 0));
const UAE__race__start = new Date(Date.UTC(2021, 11, 12, 12, 0, 0));

// races unix timestamp and days until race start calculation
let current__date = new Date(); // get current date
console.log(`${current__date} is the current date`);
let days__until__bahrain = Math.trunc((((((bahrain__race__start - current__date)/1000)/60)/60)/24));
let days__until__imola = Math.trunc((((((imola__race__start - current__date)/1000)/60)/60)/24));
let days__until__portimao = Math.trunc((((((portimao__race__start - current__date)/1000)/60)/60)/24));
let days__until__barcelona = Math.trunc((((((barcelona__race__start - current__date)/1000)/60)/60)/24));
let days__until__monaco = Math.trunc((((((monaco__race__start - current__date)/1000)/60)/60)/24));
let days__until__baku = Math.trunc((((((baku__race__start - current__date)/1000)/60)/60)/24));
let days__until__montreal = Math.trunc((((((montreal__race__start - current__date)/1000)/60)/60)/24));
let days__until__castellet = Math.trunc((((((castellet__race__start - current__date)/1000)/60)/60)/24));
let days__until__spielberg = Math.trunc((((((spielberg__race__start - current__date)/1000)/60)/60)/24));
let days__until__silverstone = Math.trunc((((((silverstone__race__start - current__date)/1000)/60)/60)/24));
let days__until__budapest = Math.trunc((((((budapest__race__start - current__date)/1000)/60)/60)/24));
let days__until__spa = Math.trunc((((((spa__race__start - current__date)/1000)/60)/60)/24));
let days__until__zandvoort = Math.trunc((((((zandvoort__race__start - current__date)/1000)/60)/60)/24));
let days__until__monza = Math.trunc((((((monza__race__start - current__date)/1000)/60)/60)/24));
let days__until__sochi = Math.trunc((((((sochi__race__start - current__date)/1000)/60)/60)/24));
let days__until__singapore = Math.trunc((((((singapore__race__start - current__date)/1000)/60)/60)/24));
let days__until__suzuka = Math.trunc((((((suzuka__race__start - current__date)/1000)/60)/60)/24));
let days__until__austin = Math.trunc((((((austin__race__start - current__date)/1000)/60)/60)/24));
let days__until__mexico = Math.trunc((((((mexico__race__start - current__date)/1000)/60)/60)/24));
let days__until__interlagos = Math.trunc((((((interlagos__race__start - current__date)/1000)/60)/60)/24));
let days__until__melbourne = Math.trunc((((((melbourne__race__start - current__date)/1000)/60)/60)/24));
let days__until__jeddah = Math.trunc((((((jeddah__race__start - current__date)/1000)/60)/60)/24));
let days__until__UAE = Math.trunc((((((UAE__race__start - current__date)/1000)/60)/60)/24));

// weather container elements selectors
const weather__1 = document.querySelector("#weather__info--1");
const weather__2 = document.querySelector("#weather__info--2");
const weather__3 = document.querySelector("#weather__info--3");
const weather__4 = document.querySelector("#weather__info--4");

// weather container 1 selectors
const weather__1__date = document.querySelector("#weather__info--1__date");
const weather__1__time = document.querySelector("#weather__info--1__time");
const weather__1__temp = document.querySelector("#weather__info--1__temp");
const weather__1__precip = document.querySelector("#weather__info--1__precip");
const weather__1__rain = document.querySelector("#weather__info--1__rain");
// weather container 2 selectors
const weather__2__date = document.querySelector("#weather__info--2__date");
const weather__2__time = document.querySelector("#weather__info--2__time");
const weather__2__temp = document.querySelector("#weather__info--2__temp");
const weather__2__precip = document.querySelector("#weather__info--2__precip");
const weather__2__rain = document.querySelector("#weather__info--2__rain");
// weather container 3 selectors
const weather__3__date = document.querySelector("#weather__info--3__date");
const weather__3__time = document.querySelector("#weather__info--3__time");
const weather__3__temp = document.querySelector("#weather__info--3__temp");
const weather__3__precip = document.querySelector("#weather__info--3__precip");
const weather__3__rain = document.querySelector("#weather__info--3__rain");
// weather container 4 selectors
const weather__4__date = document.querySelector("#weather__info--4__date");
const weather__4__time = document.querySelector("#weather__info--4__time");
const weather__4__temp = document.querySelector("#weather__info--4__temp");
const weather__4__precip = document.querySelector("#weather__info--4__precip");
const weather__4__rain = document.querySelector("#weather__info--4__rain");

// event div selectors
const bahrain__event = document.querySelector("#bahrain__event");
const imola__event = document.querySelector("#imola__event");
const portimao__event = document.querySelector("#portimao__event");
const barcelona__event = document.querySelector("#barcelona__event");
const monaco__event = document.querySelector("#monaco__event");
const baku__event = document.querySelector("#baku__event");
const montreal__event = document.querySelector("#montreal__event");
const castellet__event = document.querySelector("#castellet__event");
const spielberg__event = document.querySelector("#spielberg__event");
const silverstone__event = document.querySelector("#silverstone__event");
const budapest__event = document.querySelector("#budapest__event");
const spa__event = document.querySelector("#spa__event");
const zandvoort__event = document.querySelector("#zandvoort__event");
const monza__event = document.querySelector("#monza__event");
const sochi__event = document.querySelector("#sochi__event");
const singapore__event = document.querySelector("#singapore__event");
const suzuka__event = document.querySelector("#suzuka__event");
const austin__event = document.querySelector("#austin__event");
const mexico__event = document.querySelector("#mexico__event");
const interlagos__event = document.querySelector("#interlagos__event");
const melbourne__event = document.querySelector("#melbourne__event");
const jeddah__event = document.querySelector("#jeddah__event");
const emirates__event = document.querySelector("#emirates__event");

// dashboard button selectors
const weather__button = document.querySelector(".weather__button");
const track__button = document.querySelector(".track__button");
const schedule__button = document.querySelector(".schedule__button");
const temp__button = document.querySelector("#temp__button");

// track info selectors
const track__info__container = document.querySelector(".track__info__container");
// time info selectors  
const time__info__container = document.querySelector(".time__info__container");
// location info selectors
const location__info__container = document.querySelector(".location__info__container");

// set boolean value for celcius/fahrenheit switch
let tempUnitsCelsius = true;

// display active event data
const displayActiveEventData = function() { 
    // get data from local storage and convert back to JSON
    // I know this is kinda pointless because this project has no server, but I might convert this project into a real website and working with local storage can reduce the amount of API calls to stay under the limit
    /* credits #? */
    const weatherDataSet = JSON.parse(localStorage.getItem('weatherData'));
    console.log(`grabbed weatherdata from localstorage`);

    if (bahrain__event.classList.contains("active__event")) {
        console.log("bahrain has active class");
        track__info__container.innerHTML = 
        `<div class="track__info">
            <div class="track__name__container">
                <h3 class="track__name">Bahrain international circuit</h3>
            </div>
            <div class="track__map__stats__container">
                <div class="track__map"><img class="circuit-img" src="assets/img/trackmaps/bahrain-trackmap.png"></div>
                <div class="track__stats">
                    <div class="track__stats__content">Laps:
                        57
                    </div>
                    <div class="track__stats__content">Length:
                        5.412 km
                    </div>
                    <div class="track__stats__content">Track record:
                        1:31.447
                    </div>
                </div>
            </div>
        </div>`;
        time__info__container.innerHTML = 
        `<div id="schedule">
            <div id="schedule__title">Time schedule</div>
            <div id="schedule__subtitle">(local timezone)</div>
        </div>
        <div class="schedule__times">
            <div class="session__title">Practice 1:</div>
            <div class="time">12:30 - 13:30</div>
        </div>
        <div class="schedule__times">
            <div class="session__title">Practice 2:</div>
            <div class="time">16:00 - 17:00</div>
        </div>
        <div class="schedule__times">
            <div class="session__title"">Practice 3:</div>
            <div class="time">13:00 - 14:00</div>
        </div>
        <div class="schedule__times">
            <div class="session__title">Qualifying:</div>
            <div class="time">16:00 - 17:00</div>
        </div>
        <div class="schedule__times"  id="race__time">
            <div class="session__title">Race:</div>
            <div class="time">17:00 - 19:00</div>
        </div>`;
        location__info__container.innerHTML = 
        `<div class="location__time__container">
            <div id="location">Location: Bahrain</div>
            <div id="local__time">Local time: -</div>
        </div>
        <div class="start__time__container">Start time: 17:00 @ 28 March 2021</div>`;
        // change the date format for the weather elements
        const bahrain__weather__date = DateFormatter.formatDate(new Date(weatherDataSet.data.area[0].weather[0].date), 'DD MMMM YYYY');
        console.log("changed weather date format for bahrain");
        // change weather div 1 contents
        weather__1__date.textContent = bahrain__weather__date;
        weather__1__time.textContent = `16:00`;
        if (tempUnitsCelsius === true) {
            weather__1__temp.textContent = `${weatherDataSet.data.area[0].weather[0].hourly[16].tempC}°C`;
        } else if (tempUnitsCelsius === false) {
            weather__1__temp.textContent = `${weatherDataSet.data.area[0].weather[0].hourly[16].tempF}°F`;
        } else {
            return;
        };
        weather__1__precip.textContent = `${weatherDataSet.data.area[0].weather[0].hourly[16].precipMM}mm`;
        weather__1__rain .textContent = `${weatherDataSet.data.area[0].weather[0].hourly[16].chanceofrain}%`;
        // change weather div 2 contents
        weather__2__date.textContent = bahrain__weather__date;
        weather__2__time.textContent = `17:00`;
        if (tempUnitsCelsius === true) {
            weather__2__temp.textContent = `${weatherDataSet.data.area[0].weather[0].hourly[17].tempC}°C`;
        } else if (tempUnitsCelsius === false) {
            weather__2__temp.textContent = `${weatherDataSet.data.area[0].weather[0].hourly[17].tempF}°F`;
        } else {
            return;
        };
        weather__2__precip.textContent = `${weatherDataSet.data.area[0].weather[0].hourly[17].precipMM}mm`;
        weather__2__rain .textContent = `${weatherDataSet.data.area[0].weather[0].hourly[17].chanceofrain}%`;
        // change weather div 3 contents
        weather__3__date.textContent = bahrain__weather__date;
        weather__3__time.textContent = `18:00`;
        if (tempUnitsCelsius === true) {
            weather__3__temp.textContent = `${weatherDataSet.data.area[0].weather[0].hourly[18].tempC}°C`;
        } else if (tempUnitsCelsius === false) {
            weather__3__temp.textContent = `${weatherDataSet.data.area[0].weather[0].hourly[18].tempF}°F`;
        } else {
            return;
        };
        weather__3__precip.textContent = `${weatherDataSet.data.area[0].weather[0].hourly[18].precipMM}mm`;
        weather__3__rain .textContent = `${weatherDataSet.data.area[0].weather[0].hourly[18].chanceofrain}%`;
        // change weather div 4 contents
        weather__4__date.textContent = bahrain__weather__date;
        weather__4__time.textContent = `19:00`;
        if (tempUnitsCelsius === true) {
            weather__4__temp.textContent = `${weatherDataSet.data.area[0].weather[0].hourly[19].tempC}°C`;
        } else if (tempUnitsCelsius === false) {
            weather__4__temp.textContent = `${weatherDataSet.data.area[0].weather[0].hourly[19].tempF}°F`;
        } else {
            return;
        };
        weather__4__precip.textContent = `${weatherDataSet.data.area[0].weather[0].hourly[19].precipMM}mm`;
        weather__4__rain .textContent = `${weatherDataSet.data.area[0].weather[0].hourly[19].chanceofrain}%`;

    } else if (imola__event.classList.contains("active__event")) {
        console.log("imola has active class");
        track__info__container.innerHTML = 
        `<div class="track__info">
            <div class="track__name__container">
                <h3 class="track__name">Autodromo Enzo e Dino Ferrari</h3>
            </div>
            <div class="track__map__stats__container">
                <div class="track__map"><img class="circuit-img" src="assets/img/trackmaps/imola-trackmap.png"></div>
                <div class="track__stats">
                    <div class="track__stats__content">Laps:
                        63
                    </div>
                    <div class="track__stats__content">Length:
                        4.909 km
                    </div>
                    <div class="track__stats__content">Track record:
                        1:15.484
                    </div>
                </div>
            </div>
        </div>`;
        time__info__container.innerHTML = 
        `<div id="schedule">
            <div id="schedule__title">Time schedule</div>
            <div id="schedule__subtitle">(local timezone)</div>
        </div>
        <div class="schedule__times">
            <div class="session__title">Practice 1:</div>
            <div class="time">11:30 - 12:30</div>
        </div>
        <div class="schedule__times">
            <div class="session__title">Practice 2:</div>
            <div class="time">15:00 - 16:00</div>
        </div>
        <div class="schedule__times">
            <div class="session__title"">Practice 3:</div>
            <div class="time">12:00 - 13:00</div>
        </div>
        <div class="schedule__times">
            <div class="session__title">Qualifying:</div>
        <div class="time">15:00 - 16:00</div>
        </div>
        <div class="schedule__times"  id="race__time">
            <div class="session__title">Race:</div>
            <div class="time">15:00 - 17:00</div>
        </div>`;
        location__info__container.innerHTML = 
        `<div class="location__time__container">
            <div id="location">Location: Imola</div>
            <div id="local__time">Local time: -</div>
        </div>
        <div class="start__time__container">Start time: 15:00 @ 18 April 2021</div>`;
        // change the date format for the weather elements
        const imola__weather__date = DateFormatter.formatDate(new Date(weatherDataSet.data.area[1].weather[0].date), 'DD MMMM YYYY');
        console.log("changed weather date format for imola");
        // change weather div 1 contents
        weather__1__date.textContent = imola__weather__date;
        weather__1__time.textContent = `14:00`;
        if (tempUnitsCelsius === true) {
            weather__1__temp.textContent = `${weatherDataSet.data.area[1].weather[0].hourly[14].tempC}°C`;
        } else if (tempUnitsCelsius === false) {
            weather__1__temp.textContent = `${weatherDataSet.data.area[1].weather[0].hourly[14].tempF}°F`;
        } else {
            return;
        };
        weather__1__precip.textContent = `${weatherDataSet.data.area[1].weather[0].hourly[14].precipMM}mm`;
        weather__1__rain .textContent = `${weatherDataSet.data.area[1].weather[0].hourly[14].chanceofrain}%`;
        // change weather div 2 contents
        weather__2__date.textContent = imola__weather__date;
        weather__2__time.textContent = `15:00`;
        if (tempUnitsCelsius === true) {
            weather__2__temp.textContent = `${weatherDataSet.data.area[1].weather[0].hourly[15].tempC}°C`;
        } else if (tempUnitsCelsius === false) {
            weather__2__temp.textContent = `${weatherDataSet.data.area[1].weather[0].hourly[15].tempF}°F`;
        } else {
            return;
        };
        weather__2__precip.textContent = `${weatherDataSet.data.area[1].weather[0].hourly[15].precipMM}mm`;
        weather__2__rain .textContent = `${weatherDataSet.data.area[1].weather[0].hourly[15].chanceofrain}%`;
        // change weather div 3 contents
        weather__3__date.textContent = imola__weather__date;
        weather__3__time.textContent = `16:00`;
        if (tempUnitsCelsius === true) {
            weather__3__temp.textContent = `${weatherDataSet.data.area[1].weather[0].hourly[16].tempC}°C`;
        } else if (tempUnitsCelsius === false) {
            weather__3__temp.textContent = `${weatherDataSet.data.area[1].weather[0].hourly[16].tempF}°F`;
        } else {
            return;
        };
        weather__3__precip.textContent = `${weatherDataSet.data.area[1].weather[0].hourly[16].precipMM}mm`;
        weather__3__rain .textContent = `${weatherDataSet.data.area[1].weather[0].hourly[16].chanceofrain}%`;
        // change weather div 4 contents
        weather__4__date.textContent = imola__weather__date;
        weather__4__time.textContent = `17:00`;
        if (tempUnitsCelsius === true) {
            weather__4__temp.textContent = `${weatherDataSet.data.area[1].weather[0].hourly[17].tempC}°C`;
        } else if (tempUnitsCelsius === false) {
            weather__4__temp.textContent = `${weatherDataSet.data.area[1].weather[0].hourly[17].tempF}°F`;
        } else {
            return;
        };
        weather__4__precip.textContent = `${weatherDataSet.data.area[1].weather[0].hourly[17].precipMM}mm`;
        weather__4__rain .textContent = `${weatherDataSet.data.area[1].weather[0].hourly[17].chanceofrain}%`;

    } else if (portimao__event.classList.contains("active__event")) {
        console.log("portimao has active class");
        track__info__container.innerHTML = 
        `<div class="track__info">
            <div class="track__name__container">
                <h3 class="track__name">Autódromo Internacional do Algarve</h3>
            </div>
            <div class="track__map__stats__container">
                <div class="track__map"><img class="circuit-img" src="assets/img/trackmaps/portimao-trackmap.png"></div>
                <div class="track__stats">
                    <div class="track__stats__content">Laps:
                        66
                    </div>
                    <div class="track__stats__content">Length:
                        4.653 km
                    </div>
                    <div class="track__stats__content">Track record:
                        1:18.750
                    </div>
                </div>
            </div>
        </div>`;
        time__info__container.innerHTML = 
        `<div id="schedule">
            <div id="schedule__title">Time schedule</div>
            <div id="schedule__subtitle">(local timezone)</div>
        </div>
        <div class="schedule__times">
            <div class="session__title">Practice 1:</div>
            <div class="time">11:30 - 12:30</div>
        </div>
        <div class="schedule__times">
            <div class="session__title">Practice 2:</div>
            <div class="time">15:00 - 16:00</div>
        </div>
        <div class="schedule__times">
            <div class="session__title"">Practice 3:</div>
            <div class="time">12:00 - 13:00</div>
        </div>
        <div class="schedule__times">
            <div class="session__title">Qualifying:</div>
        <div class="time">15:00 - 16:00</div>
        </div>
        <div class="schedule__times"  id="race__time">
            <div class="session__title">Race:</div>
            <div class="time">15:00 - 17:00</div>
        </div>`;
        location__info__container.innerHTML = 
        `<div class="location__time__container">
            <div id="location">Location: Portimão</div>
            <div id="local__time">Local time: -</div>
        </div>
        <div class="start__time__container">Start time: 15:00 @ 2 May 2021</div>`;
        // change the date format for the weather elements
        const portimao__weather__date = DateFormatter.formatDate(new Date(weatherDataSet.data.area[2].weather[0].date), 'DD MMMM YYYY');
        console.log("changed weather date format for portimao");
        // change weather div 1 contents
        weather__1__date.textContent = portimao__weather__date;
        weather__1__time.textContent = `14:00`;
        if (tempUnitsCelsius === true) {
            weather__1__temp.textContent = `${weatherDataSet.data.area[2].weather[0].hourly[14].tempC}°C`;
        } else if (tempUnitsCelsius === false) {
            weather__1__temp.textContent = `${weatherDataSet.data.area[2].weather[0].hourly[14].tempF}°F`;
        } else {
            return;
        };
        weather__1__precip.textContent = `${weatherDataSet.data.area[2].weather[0].hourly[14].precipMM}mm`;
        weather__1__rain .textContent = `${weatherDataSet.data.area[2].weather[0].hourly[14].chanceofrain}%`;
        // change weather div 2 contents
        weather__2__date.textContent = portimao__weather__date;
        weather__2__time.textContent = `15:00`;
        if (tempUnitsCelsius === true) {
            weather__2__temp.textContent = `${weatherDataSet.data.area[2].weather[0].hourly[15].tempC}°C`;
        } else if (tempUnitsCelsius === false) {
            weather__2__temp.textContent = `${weatherDataSet.data.area[2].weather[0].hourly[15].tempF}°F`;
        } else {
            return;
        };
        weather__2__precip.textContent = `${weatherDataSet.data.area[2].weather[0].hourly[15].precipMM}mm`;
        weather__2__rain .textContent = `${weatherDataSet.data.area[2].weather[0].hourly[15].chanceofrain}%`;
        // change weather div 3 contents
        weather__3__date.textContent = portimao__weather__date;
        weather__3__time.textContent = `16:00`;
        if (tempUnitsCelsius === true) {
            weather__3__temp.textContent = `${weatherDataSet.data.area[2].weather[0].hourly[16].tempC}°C`;
        } else if (tempUnitsCelsius === false) {
            weather__3__temp.textContent = `${weatherDataSet.data.area[2].weather[0].hourly[16].tempF}°F`;
        } else {
            return;
        };
        weather__3__precip.textContent = `${weatherDataSet.data.area[2].weather[0].hourly[16].precipMM}mm`;
        weather__3__rain .textContent = `${weatherDataSet.data.area[2].weather[0].hourly[16].chanceofrain}%`;
        // change weather div 4 contents
        weather__4__date.textContent = portimao__weather__date;
        weather__4__time.textContent = `17:00`;
        if (tempUnitsCelsius === true) {
            weather__4__temp.textContent = `${weatherDataSet.data.area[2].weather[0].hourly[17].tempC}°C`;
        } else if (tempUnitsCelsius === false) {
            weather__4__temp.textContent = `${weatherDataSet.data.area[2].weather[0].hourly[17].tempF}°F`;
        } else {
            return;
        };
        weather__4__precip.textContent = `${weatherDataSet.data.area[2].weather[0].hourly[17].precipMM}mm`;
        weather__4__rain .textContent = `${weatherDataSet.data.area[2].weather[0].hourly[17].chanceofrain}%`;
    
    } else if (barcelona__event.classList.contains("active__event")) {
        console.log("barcelona has active class");
        track__info__container.innerHTML = 
        `<div class="track__info">
            <div class="track__name__container">
                <h3 class="track__name">Circuit de Barcelona-Catalunya</h3>
            </div>
            <div class="track__map__stats__container">
                <div class="track__map"><img class="circuit-img" src="assets/img/trackmaps/barcelona-trackmap.png"></div>
                <div class="track__stats">
                    <div class="track__stats__content">Laps:
                        66
                    </div>
                    <div class="track__stats__content">Length:
                        4.675 km
                    </div>
                    <div class="track__stats__content">Track record:
                        1:18.183
                    </div>
                </div>
            </div>
        </div>`;
        time__info__container.innerHTML = 
        `<div id="schedule">
            <div id="schedule__title">Time schedule</div>
            <div id="schedule__subtitle">(local timezone)</div>
        </div>
        <div class="schedule__times">
            <div class="session__title">Practice 1:</div>
            <div class="time">11:30 - 12:30</div>
        </div>
        <div class="schedule__times">
            <div class="session__title">Practice 2:</div>
            <div class="time">15:00 - 16:00</div>
        </div>
        <div class="schedule__times">
            <div class="session__title"">Practice 3:</div>
            <div class="time">12:00 - 13:00</div>
        </div>
        <div class="schedule__times">
            <div class="session__title">Qualifying:</div>
        <div class="time">15:00 - 16:00</div>
        </div>
        <div class="schedule__times"  id="race__time">
            <div class="session__title">Race:</div>
            <div class="time">15:00 - 17:00</div>
        </div>`;
        location__info__container.innerHTML = 
        `<div class="location__time__container">
            <div id="location">Location: Barcelona</div>
            <div id="local__time">Local time: -</div>
        </div>
        <div class="start__time__container">Start time: 15:00 @ 9 May 2021</div>`;
        // change the date format for the weather elements
        const barcelona__weather__date = DateFormatter.formatDate(new Date(weatherDataSet.data.area[3].weather[0].date), 'DD MMMM YYYY');
        console.log("changed weather date format for barcelona");
        // change weather div 1 contents
        weather__1__date.textContent = barcelona__weather__date;
        weather__1__time.textContent = `14:00`;
        if (tempUnitsCelsius === true) {
            weather__1__temp.textContent = `${weatherDataSet.data.area[3].weather[0].hourly[14].tempC}°C`;
        } else if (tempUnitsCelsius === false) {
            weather__1__temp.textContent = `${weatherDataSet.data.area[3].weather[0].hourly[14].tempF}°F`;
        } else {
            return;
        };
        weather__1__precip.textContent = `${weatherDataSet.data.area[3].weather[0].hourly[14].precipMM}mm`;
        weather__1__rain .textContent = `${weatherDataSet.data.area[3].weather[0].hourly[14].chanceofrain}%`;
        // change weather div 2 contents
        weather__2__date.textContent = barcelona__weather__date;
        weather__2__time.textContent = `15:00`;
        if (tempUnitsCelsius === true) {
            weather__2__temp.textContent = `${weatherDataSet.data.area[3].weather[0].hourly[15].tempC}°C`;
        } else if (tempUnitsCelsius === false) {
            weather__2__temp.textContent = `${weatherDataSet.data.area[3].weather[0].hourly[15].tempF}°F`;
        } else {
            return;
        };
        weather__2__precip.textContent = `${weatherDataSet.data.area[3].weather[0].hourly[15].precipMM}mm`;
        weather__2__rain .textContent = `${weatherDataSet.data.area[3].weather[0].hourly[15].chanceofrain}%`;
        // change weather div 3 contents
        weather__3__date.textContent = barcelona__weather__date;
        weather__3__time.textContent = `16:00`;
        if (tempUnitsCelsius === true) {
            weather__3__temp.textContent = `${weatherDataSet.data.area[3].weather[0].hourly[16].tempC}°C`;
        } else if (tempUnitsCelsius === false) {
            weather__3__temp.textContent = `${weatherDataSet.data.area[3].weather[0].hourly[16].tempF}°F`;
        } else {
            return;
        };
        weather__3__precip.textContent = `${weatherDataSet.data.area[3].weather[0].hourly[16].precipMM}mm`;
        weather__3__rain .textContent = `${weatherDataSet.data.area[3].weather[0].hourly[16].chanceofrain}%`;
        // change weather div 4 contents
        weather__4__date.textContent = barcelona__weather__date;
        weather__4__time.textContent = `17:00`;
        if (tempUnitsCelsius === true) {
            weather__4__temp.textContent = `${weatherDataSet.data.area[3].weather[0].hourly[17].tempC}°C`;
        } else if (tempUnitsCelsius === false) {
            weather__4__temp.textContent = `${weatherDataSet.data.area[3].weather[0].hourly[17].tempF}°F`;
        } else {
            return;
        };
        weather__4__precip.textContent = `${weatherDataSet.data.area[3].weather[0].hourly[17].precipMM}mm`;
        weather__4__rain .textContent = `${weatherDataSet.data.area[3].weather[0].hourly[17].chanceofrain}%`;
    
    } else if (monaco__event.classList.contains("active__event")) {
        console.log("monaco has active class");
        track__info__container.innerHTML = 
        `<div class="track__info">
            <div class="track__name__container">
                <h3 class="track__name">Circuit de Monaco</h3>
            </div>
            <div class="track__map__stats__container">
                <div class="track__map"><img class="circuit-img" src="assets/img/trackmaps/monaco-trackmap.png"></div>
                <div class="track__stats">
                    <div class="track__stats__content">Laps:
                        78
                    </div>
                    <div class="track__stats__content">Length:
                        3.337 km
                    </div>
                    <div class="track__stats__content">Track record:
                        1:14.260
                    </div>
                </div>
            </div>
        </div>`;
        time__info__container.innerHTML = 
        `<div id="schedule">
            <div id="schedule__title">Time schedule</div>
            <div id="schedule__subtitle">(local timezone)</div>
        </div>
        <div class="schedule__times">
            <div class="session__title">Practice 1:</div>
            <div class="time">11:30 - 12:30</div>
        </div>
        <div class="schedule__times">
            <div class="session__title">Practice 2:</div>
            <div class="time">15:00 - 16:00</div>
        </div>
        <div class="schedule__times">
            <div class="session__title"">Practice 3:</div>
            <div class="time">12:00 - 13:00</div>
        </div>
        <div class="schedule__times">
            <div class="session__title">Qualifying:</div>
        <div class="time">15:00 - 16:00</div>
        </div>
        <div class="schedule__times"  id="race__time">
            <div class="session__title">Race:</div>
            <div class="time">15:00 - 17:00</div>
        </div>`;
        location__info__container.innerHTML = 
        `<div class="location__time__container">
            <div id="location">Location: Monte Carlo</div>
            <div id="local__time">Local time: -</div>
        </div>
        <div class="start__time__container">Start time: 15:00 @ 23 May 2021</div>`;
        // change the date format for the weather elements
        const monaco__weather__date = DateFormatter.formatDate(new Date(weatherDataSet.data.area[4].weather[0].date), 'DD MMMM YYYY');
        console.log("changed weather date format for portimao");
        // change weather div 1 contents
        weather__1__date.textContent = monaco__weather__date;
        weather__1__time.textContent = `14:00`;
        if (tempUnitsCelsius === true) {
            weather__1__temp.textContent = `${weatherDataSet.data.area[4].weather[0].hourly[14].tempC}°C`;
        } else if (tempUnitsCelsius === false) {
            weather__1__temp.textContent = `${weatherDataSet.data.area[4].weather[0].hourly[14].tempF}°F`;
        } else {
            return;
        };
        weather__1__precip.textContent = `${weatherDataSet.data.area[4].weather[0].hourly[14].precipMM}mm`;
        weather__1__rain .textContent = `${weatherDataSet.data.area[4].weather[0].hourly[14].chanceofrain}%`;
        // change weather div 2 contents
        weather__2__date.textContent = monaco__weather__date;
        weather__2__time.textContent = `15:00`;
        if (tempUnitsCelsius === true) {
            weather__2__temp.textContent = `${weatherDataSet.data.area[4].weather[0].hourly[15].tempC}°C`;
        } else if (tempUnitsCelsius === false) {
            weather__2__temp.textContent = `${weatherDataSet.data.area[4].weather[0].hourly[15].tempF}°F`;
        } else {
            return;
        };
        weather__2__precip.textContent = `${weatherDataSet.data.area[4].weather[0].hourly[15].precipMM}mm`;
        weather__2__rain .textContent = `${weatherDataSet.data.area[4].weather[0].hourly[15].chanceofrain}%`;
        // change weather div 3 contents
        weather__3__date.textContent = monaco__weather__date;
        weather__3__time.textContent = `16:00`;
        if (tempUnitsCelsius === true) {
            weather__3__temp.textContent = `${weatherDataSet.data.area[4].weather[0].hourly[16].tempC}°C`;
        } else if (tempUnitsCelsius === false) {
            weather__3__temp.textContent = `${weatherDataSet.data.area[4].weather[0].hourly[16].tempF}°F`;
        } else {
            return;
        };
        weather__3__precip.textContent = `${weatherDataSet.data.area[4].weather[0].hourly[16].precipMM}mm`;
        weather__3__rain .textContent = `${weatherDataSet.data.area[4].weather[0].hourly[16].chanceofrain}%`;
        // change weather div 4 contents
        weather__4__date.textContent = monaco__weather__date;
        weather__4__time.textContent = `17:00`;
        if (tempUnitsCelsius === true) {
            weather__4__temp.textContent = `${weatherDataSet.data.area[4].weather[0].hourly[17].tempC}°C`;
        } else if (tempUnitsCelsius === false) {
            weather__4__temp.textContent = `${weatherDataSet.data.area[4].weather[0].hourly[17].tempF}°F`;
        } else {
            return;
        };
        weather__4__precip.textContent = `${weatherDataSet.data.area[4].weather[0].hourly[17].precipMM}mm`;
        weather__4__rain .textContent = `${weatherDataSet.data.area[4].weather[0].hourly[17].chanceofrain}%`;
    
    } else if (baku__event.classList.contains("active__event")) {
        console.log("baku has active class");
        track__info__container.innerHTML = 
        `<div class="track__info">
            <div class="track__name__container">
                <h3 class="track__name">Baku City Circuit</h3>
            </div>
            <div class="track__map__stats__container">
                <div class="track__map"><img class="circuit-img" src="assets/img/trackmaps/baku-trackmap.png"></div>
                <div class="track__stats">
                    <div class="track__stats__content">Laps:
                        51
                    </div>
                    <div class="track__stats__content">Length:
                        6.003 km
                    </div>
                    <div class="track__stats__content">Track record:
                        1:43.009
                    </div>
                </div>
            </div>
        </div>`;
        time__info__container.innerHTML = 
        `<div id="schedule">
            <div id="schedule__title">Time schedule</div>
            <div id="schedule__subtitle">(local timezone)</div>
        </div>
        <div class="schedule__times">
            <div class="session__title">Practice 1:</div>
            <div class="time">13:30 - 14:30</div>
        </div>
        <div class="schedule__times">
            <div class="session__title">Practice 2:</div>
            <div class="time">17:00 - 18:00</div>
        </div>
        <div class="schedule__times">
            <div class="session__title"">Practice 3:</div>
            <div class="time">14:00 - 15:00</div>
        </div>
        <div class="schedule__times">
            <div class="session__title">Qualifying:</div>
        <div class="time">17:00 - 18:00</div>
        </div>
        <div class="schedule__times"  id="race__time">
            <div class="session__title">Race:</div>
            <div class="time">16:00 - 18:00</div>
        </div>`;
        location__info__container.innerHTML = 
        `<div class="location__time__container">
            <div id="location">Location: Baku</div>
            <div id="local__time">Local time: -</div>
        </div>
        <div class="start__time__container">Start time: 16:00 @ 6 June 2021</div>`;
        // change the date format for the weather elements
        const baku__weather__date = DateFormatter.formatDate(new Date(weatherDataSet.data.area[5].weather[0].date), 'DD MMMM YYYY');
        console.log("changed weather date format for baku");
        // change weather div 1 contents
        weather__1__date.textContent = baku__weather__date;
        weather__1__time.textContent = `15:00`;
        if (tempUnitsCelsius === true) {
            weather__1__temp.textContent = `${weatherDataSet.data.area[5].weather[0].hourly[15].tempC}°C`;
        } else if (tempUnitsCelsius === false) {
            weather__1__temp.textContent = `${weatherDataSet.data.area[5].weather[0].hourly[15].tempF}°F`;
        } else {
            return;
        };
        weather__1__precip.textContent = `${weatherDataSet.data.area[5].weather[0].hourly[15].precipMM}mm`;
        weather__1__rain .textContent = `${weatherDataSet.data.area[5].weather[0].hourly[15].chanceofrain}%`;
        // change weather div 2 contents
        weather__2__date.textContent = baku__weather__date;
        weather__2__time.textContent = `16:00`;
        if (tempUnitsCelsius === true) {
            weather__2__temp.textContent = `${weatherDataSet.data.area[5].weather[0].hourly[16].tempC}°C`;
        } else if (tempUnitsCelsius === false) {
            weather__2__temp.textContent = `${weatherDataSet.data.area[5].weather[0].hourly[16].tempF}°F`;
        } else {
            return;
        };
        weather__2__precip.textContent = `${weatherDataSet.data.area[5].weather[0].hourly[16].precipMM}mm`;
        weather__2__rain .textContent = `${weatherDataSet.data.area[5].weather[0].hourly[16].chanceofrain}%`;
        // change weather div 3 contents
        weather__3__date.textContent = baku__weather__date;
        weather__3__time.textContent = `17:00`;
        if (tempUnitsCelsius === true) {
            weather__3__temp.textContent = `${weatherDataSet.data.area[5].weather[0].hourly[17].tempC}°C`;
        } else if (tempUnitsCelsius === false) {
            weather__3__temp.textContent = `${weatherDataSet.data.area[5].weather[0].hourly[17].tempF}°F`;
        } else {
            return;
        };
        weather__3__precip.textContent = `${weatherDataSet.data.area[5].weather[0].hourly[17].precipMM}mm`;
        weather__3__rain .textContent = `${weatherDataSet.data.area[5].weather[0].hourly[17].chanceofrain}%`;
        // change weather div 4 contents
        weather__4__date.textContent = baku__weather__date;
        weather__4__time.textContent = `18:00`;
        if (tempUnitsCelsius === true) {
            weather__4__temp.textContent = `${weatherDataSet.data.area[5].weather[0].hourly[18].tempC}°C`;
        } else if (tempUnitsCelsius === false) {
            weather__4__temp.textContent = `${weatherDataSet.data.area[5].weather[0].hourly[18].tempF}°F`;
        } else {
            return;
        };
        weather__4__precip.textContent = `${weatherDataSet.data.area[5].weather[0].hourly[18].precipMM}mm`;
        weather__4__rain .textContent = `${weatherDataSet.data.area[5].weather[0].hourly[18].chanceofrain}%`;
    
    } else if (montreal__event.classList.contains("active__event")) {
        console.log("montreal has active class");
        track__info__container.innerHTML = 
        `<div class="track__info">
            <div class="track__name__container">
                <h3 class="track__name">Circuit Gilles-Villeneuve</h3>
            </div>
            <div class="track__map__stats__container">
                <div class="track__map"><img class="circuit-img" src="assets/img/trackmaps/montreal-trackmap.png"></div>
                <div class="track__stats">
                    <div class="track__stats__content">Laps:
                        70
                    </div>
                    <div class="track__stats__content">Length:
                        4.361 km
                    </div>
                    <div class="track__stats__content">Track record:
                        1:13.078
                    </div>
                </div>
            </div>
        </div>`;
        time__info__container.innerHTML = 
        `<div id="schedule">
            <div id="schedule__title">Time schedule</div>
            <div id="schedule__subtitle">(local timezone)</div>
        </div>
        <div class="schedule__times">
            <div class="session__title">Practice 1:</div>
            <div class="time">11:30 - 12:30</div>
        </div>
        <div class="schedule__times">
            <div class="session__title">Practice 2:</div>
            <div class="time">15:00 - 16:00</div>
        </div>
        <div class="schedule__times">
            <div class="session__title"">Practice 3:</div>
            <div class="time">11:00 - 12:00</div>
        </div>
        <div class="schedule__times">
            <div class="session__title">Qualifying:</div>
        <div class="time">14:00 - 15:00</div>
        </div>
        <div class="schedule__times"  id="race__time">
            <div class="session__title">Race:</div>
            <div class="time">14:00 - 16:00</div>
        </div>`;
        location__info__container.innerHTML = 
        `<div class="location__time__container">
            <div id="location">Location: Montreal</div>
            <div id="local__time">Local time: -</div>
        </div>
        <div class="start__time__container">Start time: 14:00 @ 13 June 2021</div>`;
        // change the date format for the weather elements
        const montreal__weather__date = DateFormatter.formatDate(new Date(weatherDataSet.data.area[6].weather[0].date), 'DD MMMM YYYY');
        console.log("changed weather date format for portimao");
        // change weather div 1 contents
        weather__1__date.textContent = montreal__weather__date;
        weather__1__time.textContent = `13:00`;
        if (tempUnitsCelsius === true) {
            weather__1__temp.textContent = `${weatherDataSet.data.area[6].weather[0].hourly[13].tempC}°C`;
        } else if (tempUnitsCelsius === false) {
            weather__1__temp.textContent = `${weatherDataSet.data.area[6].weather[0].hourly[13].tempF}°F`;
        } else {
            return;
        };
        weather__1__precip.textContent = `${weatherDataSet.data.area[6].weather[0].hourly[13].precipMM}mm`;
        weather__1__rain .textContent = `${weatherDataSet.data.area[6].weather[0].hourly[13].chanceofrain}%`;
        // change weather div 2 contents
        weather__2__date.textContent = montreal__weather__date;
        weather__2__time.textContent = `14:00`;
        if (tempUnitsCelsius === true) {
            weather__2__temp.textContent = `${weatherDataSet.data.area[6].weather[0].hourly[14].tempC}°C`;
        } else if (tempUnitsCelsius === false) {
            weather__2__temp.textContent = `${weatherDataSet.data.area[6].weather[0].hourly[14].tempF}°F`;
        } else {
            return;
        };
        weather__2__precip.textContent = `${weatherDataSet.data.area[6].weather[0].hourly[14].precipMM}mm`;
        weather__2__rain .textContent = `${weatherDataSet.data.area[6].weather[0].hourly[14].chanceofrain}%`;
        // change weather div 3 contents
        weather__3__date.textContent = montreal__weather__date;
        weather__3__time.textContent = `15:00`;
        if (tempUnitsCelsius === true) {
            weather__3__temp.textContent = `${weatherDataSet.data.area[6].weather[0].hourly[15].tempC}°C`;
        } else if (tempUnitsCelsius === false) {
            weather__3__temp.textContent = `${weatherDataSet.data.area[6].weather[0].hourly[15].tempF}°F`;
        } else {
            return;
        };
        weather__3__precip.textContent = `${weatherDataSet.data.area[6].weather[0].hourly[15].precipMM}mm`;
        weather__3__rain .textContent = `${weatherDataSet.data.area[6].weather[0].hourly[15].chanceofrain}%`;
        // change weather div 4 contents
        weather__4__date.textContent = montreal__weather__date;
        weather__4__time.textContent = `16:00`;
        if (tempUnitsCelsius === true) {
            weather__4__temp.textContent = `${weatherDataSet.data.area[6].weather[0].hourly[16].tempC}°C`;
        } else if (tempUnitsCelsius === false) {
            weather__4__temp.textContent = `${weatherDataSet.data.area[6].weather[0].hourly[16].tempF}°F`;
        } else {
            return;
        };
        weather__4__precip.textContent = `${weatherDataSet.data.area[6].weather[0].hourly[16].precipMM}mm`;
        weather__4__rain .textContent = `${weatherDataSet.data.area[6].weather[0].hourly[16].chanceofrain}%`;
    
    } else if (castellet__event.classList.contains("active__event")) {
        console.log("castellet has active class");
        track__info__container.innerHTML = 
        `<div class="track__info">
            <div class="track__name__container">
                <h3 class="track__name">Circuit Paul Ricard</h3>
            </div>
            <div class="track__map__stats__container">
                <div class="track__map"><img class="circuit-img" src="assets/img/trackmaps/castellet-trackmap.png"></div>
                <div class="track__stats">
                    <div class="track__stats__content">Laps:
                        53
                    </div>
                    <div class="track__stats__content">Length:
                        5.842 km
                    </div>
                    <div class="track__stats__content">Track record:
                        1:32.740
                    </div>
                </div>
            </div>
        </div>`;
        time__info__container.innerHTML = 
        `<div id="schedule">
            <div id="schedule__title">Time schedule</div>
            <div id="schedule__subtitle">(local timezone)</div>
        </div>
        <div class="schedule__times">
            <div class="session__title">Practice 1:</div>
            <div class="time">11:30 - 12:30</div>
        </div>
        <div class="schedule__times">
            <div class="session__title">Practice 2:</div>
            <div class="time">15:00 - 16:00</div>
        </div>
        <div class="schedule__times">
            <div class="session__title"">Practice 3:</div>
            <div class="time">12:00 - 13:00</div>
        </div>
        <div class="schedule__times">
            <div class="session__title">Qualifying:</div>
        <div class="time">15:00 - 16:00</div>
        </div>
        <div class="schedule__times"  id="race__time">
            <div class="session__title">Race:</div>
            <div class="time">15:00 - 17:00</div>
        </div>`;
        location__info__container.innerHTML = 
        `<div class="location__time__container">
            <div id="location">Location: Le Castellet</div>
            <div id="local__time">Local time: -</div>
        </div>
        <div class="start__time__container">Start time: 15:00 @ 27 June 2021</div>`;
        // change the date format for the weather elements
        const castellet__weather__date = DateFormatter.formatDate(new Date(weatherDataSet.data.area[7].weather[0].date), 'DD MMMM YYYY');
        console.log("changed weather date format for castellet");
        // change weather div 1 contents
        weather__1__date.textContent = castellet__weather__date;
        weather__1__time.textContent = `14:00`;
        if (tempUnitsCelsius === true) {
            weather__1__temp.textContent = `${weatherDataSet.data.area[7].weather[0].hourly[14].tempC}°C`;
        } else if (tempUnitsCelsius === false) {
            weather__1__temp.textContent = `${weatherDataSet.data.area[7].weather[0].hourly[14].tempF}°F`;
        } else {
            return;
        };
        weather__1__precip.textContent = `${weatherDataSet.data.area[7].weather[0].hourly[14].precipMM}mm`;
        weather__1__rain .textContent = `${weatherDataSet.data.area[7].weather[0].hourly[14].chanceofrain}%`;
        // change weather div 2 contents
        weather__2__date.textContent = castellet__weather__date;
        weather__2__time.textContent = `15:00`;
        if (tempUnitsCelsius === true) {
            weather__2__temp.textContent = `${weatherDataSet.data.area[7].weather[0].hourly[15].tempC}°C`;
        } else if (tempUnitsCelsius === false) {
            weather__2__temp.textContent = `${weatherDataSet.data.area[7].weather[0].hourly[15].tempF}°F`;
        } else {
            return;
        };
        weather__2__precip.textContent = `${weatherDataSet.data.area[7].weather[0].hourly[15].precipMM}mm`;
        weather__2__rain .textContent = `${weatherDataSet.data.area[7].weather[0].hourly[15].chanceofrain}%`;
        // change weather div 3 contents
        weather__3__date.textContent = castellet__weather__date;
        weather__3__time.textContent = `16:00`;
        if (tempUnitsCelsius === true) {
            weather__3__temp.textContent = `${weatherDataSet.data.area[7].weather[0].hourly[16].tempC}°C`;
        } else if (tempUnitsCelsius === false) {
            weather__3__temp.textContent = `${weatherDataSet.data.area[7].weather[0].hourly[16].tempF}°F`;
        } else {
            return;
        };
        weather__3__precip.textContent = `${weatherDataSet.data.area[7].weather[0].hourly[16].precipMM}mm`;
        weather__3__rain .textContent = `${weatherDataSet.data.area[7].weather[0].hourly[16].chanceofrain}%`;
        // change weather div 4 contents
        weather__4__date.textContent = castellet__weather__date;
        weather__4__time.textContent = `17:00`;
        if (tempUnitsCelsius === true) {
            weather__4__temp.textContent = `${weatherDataSet.data.area[7].weather[0].hourly[17].tempC}°C`;
        } else if (tempUnitsCelsius === false) {
            weather__4__temp.textContent = `${weatherDataSet.data.area[7].weather[0].hourly[17].tempF}°F`;
        } else {
            return;
        };
        weather__4__precip.textContent = `${weatherDataSet.data.area[7].weather[0].hourly[17].precipMM}mm`;
        weather__4__rain .textContent = `${weatherDataSet.data.area[7].weather[0].hourly[17].chanceofrain}%`;
    
    } else if (spielberg__event.classList.contains("active__event")) {
        console.log("spielberg has active class");
        track__info__container.innerHTML = 
        `<div class="track__info">
            <div class="track__name__container">
                <h3 class="track__name">Red Bull Ring</h3>
            </div>
            <div class="track__map__stats__container">
                <div class="track__map"><img class="circuit-img" src="assets/img/trackmaps/spielberg-trackmap.png"></div>
                <div class="track__stats">
                    <div class="track__stats__content">Laps:
                        71
                    </div>
                    <div class="track__stats__content">Length:
                        4.318 km
                    </div>
                    <div class="track__stats__content">Track record:
                        1:05.619
                    </div>
                </div>
            </div>
        </div>`;
        time__info__container.innerHTML = 
        `<div id="schedule">
            <div id="schedule__title">Time schedule</div>
            <div id="schedule__subtitle">(local timezone)</div>
        </div>
        <div class="schedule__times">
            <div class="session__title">Practice 1:</div>
            <div class="time">11:30 - 12:30</div>
        </div>
        <div class="schedule__times">
            <div class="session__title">Practice 2:</div>
            <div class="time">15:00 - 16:00</div>
        </div>
        <div class="schedule__times">
            <div class="session__title"">Practice 3:</div>
            <div class="time">12:00 - 13:00</div>
        </div>
        <div class="schedule__times">
            <div class="session__title">Qualifying:</div>
        <div class="time">15:00 - 16:00</div>
        </div>
        <div class="schedule__times"  id="race__time">
            <div class="session__title">Race:</div>
            <div class="time">15:00 - 17:00</div>
        </div>`;
        location__info__container.innerHTML = 
        `<div class="location__time__container">
            <div id="location">Location: Spielberg</div>
            <div id="local__time">Local time: -</div>
        </div>
        <div class="start__time__container">Start time: 15:00 @ 4 July 2021</div>`;
        // change the date format for the weather elements
        const spielberg__weather__date = DateFormatter.formatDate(new Date(weatherDataSet.data.area[8].weather[0].date), 'DD MMMM YYYY');
        console.log("changed weather date format for spielberg");
        // change weather div 1 contents
        weather__1__date.textContent = spielberg__weather__date;
        weather__1__time.textContent = `14:00`;
        if (tempUnitsCelsius === true) {
            weather__1__temp.textContent = `${weatherDataSet.data.area[8].weather[0].hourly[14].tempC}°C`;
        } else if (tempUnitsCelsius === false) {
            weather__1__temp.textContent = `${weatherDataSet.data.area[8].weather[0].hourly[14].tempF}°F`;
        } else {
            return;
        };
        weather__1__precip.textContent = `${weatherDataSet.data.area[8].weather[0].hourly[14].precipMM}mm`;
        weather__1__rain .textContent = `${weatherDataSet.data.area[8].weather[0].hourly[14].chanceofrain}%`;
        // change weather div 2 contents
        weather__2__date.textContent = spielberg__weather__date;
        weather__2__time.textContent = `15:00`;
        if (tempUnitsCelsius === true) {
            weather__2__temp.textContent = `${weatherDataSet.data.area[8].weather[0].hourly[15].tempC}°C`;
        } else if (tempUnitsCelsius === false) {
            weather__2__temp.textContent = `${weatherDataSet.data.area[8].weather[0].hourly[15].tempF}°F`;
        } else {
            return;
        };
        weather__2__precip.textContent = `${weatherDataSet.data.area[8].weather[0].hourly[15].precipMM}mm`;
        weather__2__rain .textContent = `${weatherDataSet.data.area[8].weather[0].hourly[15].chanceofrain}%`;
        // change weather div 3 contents
        weather__3__date.textContent = spielberg__weather__date;
        weather__3__time.textContent = `16:00`;
        if (tempUnitsCelsius === true) {
            weather__3__temp.textContent = `${weatherDataSet.data.area[8].weather[0].hourly[16].tempC}°C`;
        } else if (tempUnitsCelsius === false) {
            weather__3__temp.textContent = `${weatherDataSet.data.area[8].weather[0].hourly[16].tempF}°F`;
        } else {
            return;
        };
        weather__3__precip.textContent = `${weatherDataSet.data.area[8].weather[0].hourly[16].precipMM}mm`;
        weather__3__rain .textContent = `${weatherDataSet.data.area[8].weather[0].hourly[16].chanceofrain}%`;
        // change weather div 4 contents
        weather__4__date.textContent = spielberg__weather__date;
        weather__4__time.textContent = `17:00`;
        if (tempUnitsCelsius === true) {
            weather__4__temp.textContent = `${weatherDataSet.data.area[8].weather[0].hourly[17].tempC}°C`;
        } else if (tempUnitsCelsius === false) {
            weather__4__temp.textContent = `${weatherDataSet.data.area[8].weather[0].hourly[17].tempF}°F`;
        } else {
            return;
        };
        weather__4__precip.textContent = `${weatherDataSet.data.area[8].weather[0].hourly[17].precipMM}mm`;
        weather__4__rain .textContent = `${weatherDataSet.data.area[8].weather[0].hourly[17].chanceofrain}%`;
    
    } else if (silverstone__event.classList.contains("active__event")) {
        console.log("silverstone has active class");
        track__info__container.innerHTML = 
        `<div class="track__info">
            <div class="track__name__container">
                <h3 class="track__name">Silverstone Circuit</h3>
            </div>
            <div class="track__map__stats__container">
                <div class="track__map"><img class="circuit-img" src="assets/img/trackmaps/silverstone-trackmap.png"></div>
                <div class="track__stats">
                    <div class="track__stats__content">Laps:
                        52
                    </div>
                    <div class="track__stats__content">Length:
                        5.891 km
                    </div>
                    <div class="track__stats__content">Track record:
                        1:27.097
                    </div>
                </div>
            </div>
        </div>`;
        time__info__container.innerHTML = 
        `<div id="schedule">
            <div id="schedule__title">Time schedule</div>
            <div id="schedule__subtitle">(local timezone)</div>
        </div>
        <div class="schedule__times">
            <div class="session__title">Practice 1:</div>
            <div class="time">11:30 - 12:30</div>
        </div>
        <div class="schedule__times">
            <div class="session__title">Practice 2:</div>
            <div class="time">15:00 - 16:00</div>
        </div>
        <div class="schedule__times">
            <div class="session__title"">Practice 3:</div>
            <div class="time">12:00 - 13:00</div>
        </div>
        <div class="schedule__times">
            <div class="session__title">Qualifying:</div>
        <div class="time">15:00 - 16:00</div>
        </div>
        <div class="schedule__times"  id="race__time">
            <div class="session__title">Race:</div>
            <div class="time">15:00 - 17:00</div>
        </div>`;
        location__info__container.innerHTML = 
        `<div class="location__time__container">
            <div id="location">Location: Silverstone</div>
            <div id="local__time">Local time: -</div>
        </div>
        <div class="start__time__container">Start time: 15:00 @ 18 July 2021</div>`;
        // change the date format for the weather elements
        const silverstone__weather__date = DateFormatter.formatDate(new Date(weatherDataSet.data.area[9].weather[0].date), 'DD MMMM YYYY');
        console.log("changed weather date format for silverstone");
        // change weather div 1 contents
        weather__1__date.textContent = silverstone__weather__date;
        weather__1__time.textContent = `14:00`;
        if (tempUnitsCelsius === true) {
            weather__1__temp.textContent = `${weatherDataSet.data.area[9].weather[0].hourly[14].tempC}°C`;
        } else if (tempUnitsCelsius === false) {
            weather__1__temp.textContent = `${weatherDataSet.data.area[9].weather[0].hourly[14].tempF}°F`;
        } else {
            return;
        };
        weather__1__precip.textContent = `${weatherDataSet.data.area[9].weather[0].hourly[14].precipMM}mm`;
        weather__1__rain .textContent = `${weatherDataSet.data.area[9].weather[0].hourly[14].chanceofrain}%`;
        // change weather div 2 contents
        weather__2__date.textContent = silverstone__weather__date;
        weather__2__time.textContent = `15:00`;
        if (tempUnitsCelsius === true) {
            weather__2__temp.textContent = `${weatherDataSet.data.area[9].weather[0].hourly[15].tempC}°C`;
        } else if (tempUnitsCelsius === false) {
            weather__2__temp.textContent = `${weatherDataSet.data.area[9].weather[0].hourly[15].tempF}°F`;
        } else {
            return;
        };
        weather__2__precip.textContent = `${weatherDataSet.data.area[9].weather[0].hourly[15].precipMM}mm`;
        weather__2__rain .textContent = `${weatherDataSet.data.area[9].weather[0].hourly[15].chanceofrain}%`;
        // change weather div 3 contents
        weather__3__date.textContent = silverstone__weather__date;
        weather__3__time.textContent = `16:00`;
        if (tempUnitsCelsius === true) {
            weather__3__temp.textContent = `${weatherDataSet.data.area[9].weather[0].hourly[16].tempC}°C`;
        } else if (tempUnitsCelsius === false) {
            weather__3__temp.textContent = `${weatherDataSet.data.area[9].weather[0].hourly[16].tempF}°F`;
        } else {
            return;
        };
        weather__3__precip.textContent = `${weatherDataSet.data.area[9].weather[0].hourly[16].precipMM}mm`;
        weather__3__rain .textContent = `${weatherDataSet.data.area[9].weather[0].hourly[16].chanceofrain}%`;
        // change weather div 4 contents
        weather__4__date.textContent = silverstone__weather__date;
        weather__4__time.textContent = `17:00`;
        if (tempUnitsCelsius === true) {
            weather__4__temp.textContent = `${weatherDataSet.data.area[9].weather[0].hourly[17].tempC}°C`;
        } else if (tempUnitsCelsius === false) {
            weather__4__temp.textContent = `${weatherDataSet.data.area[9].weather[0].hourly[17].tempF}°F`;
        } else {
            return;
        };
        weather__4__precip.textContent = `${weatherDataSet.data.area[9].weather[0].hourly[17].precipMM}mm`;
        weather__4__rain .textContent = `${weatherDataSet.data.area[9].weather[0].hourly[17].chanceofrain}%`;
    
    } else if (budapest__event.classList.contains("active__event")) {
        console.log("budapest has active class");
        track__info__container.innerHTML = 
        `<div class="track__info">
            <div class="track__name__container">
                <h3 class="track__name">Hungaroring</h3>
            </div>
            <div class="track__map__stats__container">
                <div class="track__map"><img class="circuit-img" src="assets/img/trackmaps/budapest-trackmap.png"></div>
                <div class="track__stats">
                    <div class="track__stats__content">Laps:
                        70
                    </div>
                    <div class="track__stats__content">Length:
                        4.381 km
                    </div>
                    <div class="track__stats__content">Track record:
                        1:16.627
                    </div>
                </div>
            </div>
        </div>`;
        time__info__container.innerHTML = 
        `<div id="schedule">
            <div id="schedule__title">Time schedule</div>
            <div id="schedule__subtitle">(local timezone)</div>
        </div>
        <div class="schedule__times">
            <div class="session__title">Practice 1:</div>
            <div class="time">11:30 - 12:30</div>
        </div>
        <div class="schedule__times">
            <div class="session__title">Practice 2:</div>
            <div class="time">15:00 - 16:00</div>
        </div>
        <div class="schedule__times">
            <div class="session__title"">Practice 3:</div>
            <div class="time">12:00 - 13:00</div>
        </div>
        <div class="schedule__times">
            <div class="session__title">Qualifying:</div>
        <div class="time">15:00 - 16:00</div>
        </div>
        <div class="schedule__times"  id="race__time">
            <div class="session__title">Race:</div>
            <div class="time">15:00 - 17:00</div>
        </div>`;
        location__info__container.innerHTML = 
        `<div class="location__time__container">
            <div id="location">Location: Budapest</div>
            <div id="local__time">Local time: -</div>
        </div>
        <div class="start__time__container">Start time: 15:00 @ 1 August 2021</div>`;
        // change the date format for the weather elements
        const budapest__weather__date = DateFormatter.formatDate(new Date(weatherDataSet.data.area[10].weather[0].date), 'DD MMMM YYYY');
        console.log("changed weather date format for budapest");
        // change weather div 1 contents
        weather__1__date.textContent = budapest__weather__date;
        weather__1__time.textContent = `14:00`;
        if (tempUnitsCelsius === true) {
            weather__1__temp.textContent = `${weatherDataSet.data.area[10].weather[0].hourly[14].tempC}°C`;
        } else if (tempUnitsCelsius === false) {
            weather__1__temp.textContent = `${weatherDataSet.data.area[10].weather[0].hourly[14].tempF}°F`;
        } else {
            return;
        };
        weather__1__precip.textContent = `${weatherDataSet.data.area[10].weather[0].hourly[14].precipMM}mm`;
        weather__1__rain .textContent = `${weatherDataSet.data.area[10].weather[0].hourly[14].chanceofrain}%`;
        // change weather div 2 contents
        weather__2__date.textContent = budapest__weather__date;
        weather__2__time.textContent = `15:00`;
        if (tempUnitsCelsius === true) {
            weather__2__temp.textContent = `${weatherDataSet.data.area[10].weather[0].hourly[15].tempC}°C`;
        } else if (tempUnitsCelsius === false) {
            weather__2__temp.textContent = `${weatherDataSet.data.area[10].weather[0].hourly[15].tempF}°F`;
        } else {
            return;
        };
        weather__2__precip.textContent = `${weatherDataSet.data.area[10].weather[0].hourly[15].precipMM}mm`;
        weather__2__rain .textContent = `${weatherDataSet.data.area[10].weather[0].hourly[15].chanceofrain}%`;
        // change weather div 3 contents
        weather__3__date.textContent = budapest__weather__date;
        weather__3__time.textContent = `16:00`;
        if (tempUnitsCelsius === true) {
            weather__3__temp.textContent = `${weatherDataSet.data.area[10].weather[0].hourly[16].tempC}°C`;
        } else if (tempUnitsCelsius === false) {
            weather__3__temp.textContent = `${weatherDataSet.data.area[10].weather[0].hourly[16].tempF}°F`;
        } else {
            return;
        };
        weather__3__precip.textContent = `${weatherDataSet.data.area[10].weather[0].hourly[16].precipMM}mm`;
        weather__3__rain .textContent = `${weatherDataSet.data.area[10].weather[0].hourly[16].chanceofrain}%`;
        // change weather div 4 contents
        weather__4__date.textContent = budapest__weather__date;
        weather__4__time.textContent = `17:00`;
        if (tempUnitsCelsius === true) {
            weather__4__temp.textContent = `${weatherDataSet.data.area[10].weather[0].hourly[17].tempC}°C`;
        } else if (tempUnitsCelsius === false) {
            weather__4__temp.textContent = `${weatherDataSet.data.area[10].weather[0].hourly[17].tempF}°F`;
        } else {
            return;
        };
        weather__4__precip.textContent = `${weatherDataSet.data.area[10].weather[0].hourly[17].precipMM}mm`;
        weather__4__rain .textContent = `${weatherDataSet.data.area[10].weather[0].hourly[17].chanceofrain}%`;
    
    } else if (spa__event.classList.contains("active__event")) {
        console.log("spa has active class");
        track__info__container.innerHTML = 
        `<div class="track__info">
            <div class="track__name__container">
                <h3 class="track__name">Circuit de Spa-Francorchamps</h3>
            </div>
            <div class="track__map__stats__container">
                <div class="track__map"><img class="circuit-img" src="assets/img/trackmaps/spa-trackmap.png"></div>
                <div class="track__stats">
                    <div class="track__stats__content">Laps:
                        44
                    </div>
                    <div class="track__stats__content">Length:
                        7.004 km
                    </div>
                    <div class="track__stats__content">Track record:
                        1:46.286
                    </div>
                </div>
            </div>
        </div>`;
        time__info__container.innerHTML = 
        `<div id="schedule">
            <div id="schedule__title">Time schedule</div>
            <div id="schedule__subtitle">(local timezone)</div>
        </div>
        <div class="schedule__times">
            <div class="session__title">Practice 1:</div>
            <div class="time">11:30 - 12:30</div>
        </div>
        <div class="schedule__times">
            <div class="session__title">Practice 2:</div>
            <div class="time">15:00 - 16:00</div>
        </div>
        <div class="schedule__times">
            <div class="session__title"">Practice 3:</div>
            <div class="time">12:00 - 13:00</div>
        </div>
        <div class="schedule__times">
            <div class="session__title">Qualifying:</div>
        <div class="time">15:00 - 16:00</div>
        </div>
        <div class="schedule__times"  id="race__time">
            <div class="session__title">Race:</div>
            <div class="time">15:00 - 17:00</div>
        </div>`;
        location__info__container.innerHTML = 
        `<div class="location__time__container">
            <div id="location">Location: Spa Francorchamps</div>
            <div id="local__time">Local time: -</div>
        </div>
        <div class="start__time__container">Start time: 15:00 @ 29 August 2021</div>`;
        // change the date format for the weather elements
        const spa__weather__date = DateFormatter.formatDate(new Date(weatherDataSet.data.area[11].weather[0].date), 'DD MMMM YYYY');
        console.log("changed weather date format for spa");
        // change weather div 1 contents
        weather__1__date.textContent = spa__weather__date;
        weather__1__time.textContent = `14:00`;
        if (tempUnitsCelsius === true) {
            weather__1__temp.textContent = `${weatherDataSet.data.area[11].weather[0].hourly[14].tempC}°C`;
        } else if (tempUnitsCelsius === false) {
            weather__1__temp.textContent = `${weatherDataSet.data.area[11].weather[0].hourly[14].tempF}°F`;
        } else {
            return;
        };
        weather__1__precip.textContent = `${weatherDataSet.data.area[11].weather[0].hourly[14].precipMM}mm`;
        weather__1__rain .textContent = `${weatherDataSet.data.area[11].weather[0].hourly[14].chanceofrain}%`;
        // change weather div 2 contents
        weather__2__date.textContent = spa__weather__date;
        weather__2__time.textContent = `15:00`;
        if (tempUnitsCelsius === true) {
            weather__2__temp.textContent = `${weatherDataSet.data.area[11].weather[0].hourly[15].tempC}°C`;
        } else if (tempUnitsCelsius === false) {
            weather__2__temp.textContent = `${weatherDataSet.data.area[11].weather[0].hourly[15].tempF}°F`;
        } else {
            return;
        };
        weather__2__precip.textContent = `${weatherDataSet.data.area[11].weather[0].hourly[15].precipMM}mm`;
        weather__2__rain .textContent = `${weatherDataSet.data.area[11].weather[0].hourly[15].chanceofrain}%`;
        // change weather div 3 contents
        weather__3__date.textContent = spa__weather__date;
        weather__3__time.textContent = `16:00`;
        if (tempUnitsCelsius === true) {
            weather__3__temp.textContent = `${weatherDataSet.data.area[11].weather[0].hourly[16].tempC}°C`;
        } else if (tempUnitsCelsius === false) {
            weather__3__temp.textContent = `${weatherDataSet.data.area[11].weather[0].hourly[16].tempF}°F`;
        } else {
            return;
        };
        weather__3__precip.textContent = `${weatherDataSet.data.area[11].weather[0].hourly[16].precipMM}mm`;
        weather__3__rain .textContent = `${weatherDataSet.data.area[11].weather[0].hourly[16].chanceofrain}%`;
        // change weather div 4 contents
        weather__4__date.textContent = spa__weather__date;
        weather__4__time.textContent = `17:00`;
        if (tempUnitsCelsius === true) {
            weather__4__temp.textContent = `${weatherDataSet.data.area[11].weather[0].hourly[17].tempC}°C`;
        } else if (tempUnitsCelsius === false) {
            weather__4__temp.textContent = `${weatherDataSet.data.area[11].weather[0].hourly[17].tempF}°F`;
        } else {
            return;
        };
        weather__4__precip.textContent = `${weatherDataSet.data.area[11].weather[0].hourly[17].precipMM}mm`;
        weather__4__rain .textContent = `${weatherDataSet.data.area[11].weather[0].hourly[17].chanceofrain}%`;
    
    } else if (zandvoort__event.classList.contains("active__event")) {
        console.log("zandvoort has active class");
        track__info__container.innerHTML = 
        `<div class="track__info">
            <div class="track__name__container">
                <h3 class="track__name">Circuit Zandvoort</h3>
            </div>
            <div class="track__map__stats__container">
                <div class="track__map"><img class="circuit-img" src="assets/img/trackmaps/zandvoort-trackmap.png"></div>
                <div class="track__stats">
                    <div class="track__stats__content">Laps:
                        72
                    </div>
                    <div class="track__stats__content">Length:
                        4.259 km
                    </div>
                    <div class="track__stats__content">Track record:
                        -
                    </div>
                </div>
            </div>
        </div>`;
        time__info__container.innerHTML = 
        `<div id="schedule">
            <div id="schedule__title">Time schedule</div>
            <div id="schedule__subtitle">(local timezone)</div>
        </div>
        <div class="schedule__times">
            <div class="session__title">Practice 1:</div>
            <div class="time">11:30 - 12:30</div>
        </div>
        <div class="schedule__times">
            <div class="session__title">Practice 2:</div>
            <div class="time">15:00 - 16:00</div>
        </div>
        <div class="schedule__times">
            <div class="session__title"">Practice 3:</div>
            <div class="time">12:00 - 13:00</div>
        </div>
        <div class="schedule__times">
            <div class="session__title">Qualifying:</div>
        <div class="time">15:00 - 16:00</div>
        </div>
        <div class="schedule__times"  id="race__time">
            <div class="session__title">Race:</div>
            <div class="time">15:00 - 17:00</div>
        </div>`;
        location__info__container.innerHTML = 
        `<div class="location__time__container">
            <div id="location">Location: Zandvoort</div>
            <div id="local__time">Local time: -</div>
        </div>
        <div class="start__time__container">Start time: 15:00 @ 5 September 2021</div>`;
        // change the date format for the weather elements
        const zandvoort__weather__date = DateFormatter.formatDate(new Date(weatherDataSet.data.area[12].weather[0].date), 'DD MMMM YYYY');
        console.log("changed weather date format for zandvoort");
        // change weather div 1 contents
        weather__1__date.textContent = zandvoort__weather__date;
        weather__1__time.textContent = `14:00`;
        if (tempUnitsCelsius === true) {
            weather__1__temp.textContent = `${weatherDataSet.data.area[12].weather[0].hourly[14].tempC}°C`;
        } else if (tempUnitsCelsius === false) {
            weather__1__temp.textContent = `${weatherDataSet.data.area[12].weather[0].hourly[14].tempF}°F`;
        } else {
            return;
        };
        weather__1__precip.textContent = `${weatherDataSet.data.area[12].weather[0].hourly[14].precipMM}mm`;
        weather__1__rain .textContent = `${weatherDataSet.data.area[12].weather[0].hourly[14].chanceofrain}%`;
        // change weather div 2 contents
        weather__2__date.textContent = zandvoort__weather__date;
        weather__2__time.textContent = `15:00`;
        if (tempUnitsCelsius === true) {
            weather__2__temp.textContent = `${weatherDataSet.data.area[12].weather[0].hourly[15].tempC}°C`;
        } else if (tempUnitsCelsius === false) {
            weather__2__temp.textContent = `${weatherDataSet.data.area[12].weather[0].hourly[15].tempF}°F`;
        } else {
            return;
        };
        weather__2__precip.textContent = `${weatherDataSet.data.area[12].weather[0].hourly[15].precipMM}mm`;
        weather__2__rain .textContent = `${weatherDataSet.data.area[12].weather[0].hourly[15].chanceofrain}%`;
        // change weather div 3 contents
        weather__3__date.textContent = zandvoort__weather__date;
        weather__3__time.textContent = `16:00`;
        if (tempUnitsCelsius === true) {
            weather__3__temp.textContent = `${weatherDataSet.data.area[12].weather[0].hourly[16].tempC}°C`;
        } else if (tempUnitsCelsius === false) {
            weather__3__temp.textContent = `${weatherDataSet.data.area[12].weather[0].hourly[16].tempF}°F`;
        } else {
            return;
        };
        weather__3__precip.textContent = `${weatherDataSet.data.area[12].weather[0].hourly[16].precipMM}mm`;
        weather__3__rain .textContent = `${weatherDataSet.data.area[12].weather[0].hourly[16].chanceofrain}%`;
        // change weather div 4 contents
        weather__4__date.textContent = zandvoort__weather__date;
        weather__4__time.textContent = `17:00`;
        if (tempUnitsCelsius === true) {
            weather__4__temp.textContent = `${weatherDataSet.data.area[12].weather[0].hourly[17].tempC}°C`;
        } else if (tempUnitsCelsius === false) {
            weather__4__temp.textContent = `${weatherDataSet.data.area[12].weather[0].hourly[17].tempF}°F`;
        } else {
            return;
        };
        weather__4__precip.textContent = `${weatherDataSet.data.area[12].weather[0].hourly[17].precipMM}mm`;
        weather__4__rain .textContent = `${weatherDataSet.data.area[12].weather[0].hourly[17].chanceofrain}%`;
    
    } else if (monza__event.classList.contains("active__event")) {
        console.log("monza has active class");
        track__info__container.innerHTML = 
        `<div class="track__info">
            <div class="track__name__container">
                <h3 class="track__name">Autodromo Nazionale Monza</h3>
            </div>
            <div class="track__map__stats__container">
                <div class="track__map"><img class="circuit-img" src="assets/img/trackmaps/monza-trackmap.png"></div>
                <div class="track__stats">
                    <div class="track__stats__content">Laps:
                        53
                    </div>
                    <div class="track__stats__content">Length:
                        5.793 km
                    </div>
                    <div class="track__stats__content">Track record:
                        1:21.046
                    </div>
                </div>
            </div>
        </div>`;
        time__info__container.innerHTML = 
        `<div id="schedule">
            <div id="schedule__title">Time schedule</div>
            <div id="schedule__subtitle">(local timezone)</div>
        </div>
        <div class="schedule__times">
            <div class="session__title">Practice 1:</div>
            <div class="time">11:30 - 12:30</div>
        </div>
        <div class="schedule__times">
            <div class="session__title">Practice 2:</div>
            <div class="time">15:00 - 16:00</div>
        </div>
        <div class="schedule__times">
            <div class="session__title"">Practice 3:</div>
            <div class="time">12:00 - 13:00</div>
        </div>
        <div class="schedule__times">
            <div class="session__title">Qualifying:</div>
        <div class="time">15:00 - 16:00</div>
        </div>
        <div class="schedule__times"  id="race__time">
            <div class="session__title">Race:</div>
            <div class="time">15:00 - 17:00</div>
        </div>`;
        location__info__container.innerHTML = 
        `<div class="location__time__container">
            <div id="location">Location: Monza</div>
            <div id="local__time">Local time: -</div>
        </div>
        <div class="start__time__container">Start time: 15:00 @ 12 September 2021</div>`;
        // change the date format for the weather elements
        const monza__weather__date = DateFormatter.formatDate(new Date(weatherDataSet.data.area[13].weather[0].date), 'DD MMMM YYYY');
        console.log("changed weather date format for monza");
        // change weather div 1 contents
        weather__1__date.textContent = monza__weather__date;
        weather__1__time.textContent = `14:00`;
        if (tempUnitsCelsius === true) {
            weather__1__temp.textContent = `${weatherDataSet.data.area[13].weather[0].hourly[14].tempC}°C`;
        } else if (tempUnitsCelsius === false) {
            weather__1__temp.textContent = `${weatherDataSet.data.area[13].weather[0].hourly[14].tempF}°F`;
        } else {
            return;
        };
        weather__1__precip.textContent = `${weatherDataSet.data.area[13].weather[0].hourly[14].precipMM}mm`;
        weather__1__rain .textContent = `${weatherDataSet.data.area[13].weather[0].hourly[14].chanceofrain}%`;
        // change weather div 2 contents
        weather__2__date.textContent = monza__weather__date;
        weather__2__time.textContent = `15:00`;
        if (tempUnitsCelsius === true) {
            weather__2__temp.textContent = `${weatherDataSet.data.area[13].weather[0].hourly[15].tempC}°C`;
        } else if (tempUnitsCelsius === false) {
            weather__2__temp.textContent = `${weatherDataSet.data.area[13].weather[0].hourly[15].tempF}°F`;
        } else {
            return;
        };
        weather__2__precip.textContent = `${weatherDataSet.data.area[13].weather[0].hourly[15].precipMM}mm`;
        weather__2__rain .textContent = `${weatherDataSet.data.area[13].weather[0].hourly[15].chanceofrain}%`;
        // change weather div 3 contents
        weather__3__date.textContent = monza__weather__date;
        weather__3__time.textContent = `16:00`;
        if (tempUnitsCelsius === true) {
            weather__3__temp.textContent = `${weatherDataSet.data.area[13].weather[0].hourly[16].tempC}°C`;
        } else if (tempUnitsCelsius === false) {
            weather__3__temp.textContent = `${weatherDataSet.data.area[13].weather[0].hourly[16].tempF}°F`;
        } else {
            return;
        };
        weather__3__precip.textContent = `${weatherDataSet.data.area[13].weather[0].hourly[16].precipMM}mm`;
        weather__3__rain .textContent = `${weatherDataSet.data.area[13].weather[0].hourly[16].chanceofrain}%`;
        // change weather div 4 contents
        weather__4__date.textContent = monza__weather__date;
        weather__4__time.textContent = `17:00`;
        if (tempUnitsCelsius === true) {
            weather__4__temp.textContent = `${weatherDataSet.data.area[13].weather[0].hourly[17].tempC}°C`;
        } else if (tempUnitsCelsius === false) {
            weather__4__temp.textContent = `${weatherDataSet.data.area[13].weather[0].hourly[17].tempF}°F`;
        } else {
            return;
        };
        weather__4__precip.textContent = `${weatherDataSet.data.area[13].weather[0].hourly[17].precipMM}mm`;
        weather__4__rain .textContent = `${weatherDataSet.data.area[13].weather[0].hourly[17].chanceofrain}%`;
    
    } else if (sochi__event.classList.contains("active__event")) {
        console.log("sochi has active class");
        track__info__container.innerHTML = 
        `<div class="track__info">
            <div class="track__name__container">
                <h3 class="track__name">Sochi Autodrom</h3>
            </div>
            <div class="track__map__stats__container">
                <div class="track__map"><img class="circuit-img" src="assets/img/trackmaps/sochi-trackmap.png"></div>
                <div class="track__stats">
                    <div class="track__stats__content">Laps:
                        53
                    </div>
                    <div class="track__stats__content">Length:
                        5.848 km
                    </div>
                    <div class="track__stats__content">Track record:
                        1:35.761
                    </div>
                </div>
            </div>
        </div>`;
        time__info__container.innerHTML = 
        `<div id="schedule">
            <div id="schedule__title">Time schedule</div>
            <div id="schedule__subtitle">(local timezone)</div>
        </div>
        <div class="schedule__times">
            <div class="session__title">Practice 1:</div>
            <div class="time">11:30 - 12:30</div>
        </div>
        <div class="schedule__times">
            <div class="session__title">Practice 2:</div>
            <div class="time">15:00 - 16:00</div>
        </div>
        <div class="schedule__times">
            <div class="session__title"">Practice 3:</div>
            <div class="time">12:00 - 13:00</div>
        </div>
        <div class="schedule__times">
            <div class="session__title">Qualifying:</div>
        <div class="time">15:00 - 16:00</div>
        </div>
        <div class="schedule__times"  id="race__time">
            <div class="session__title">Race:</div>
            <div class="time">15:00 - 17:00</div>
        </div>`;
        location__info__container.innerHTML = 
        `<div class="location__time__container">
            <div id="location">Location: Sochi</div>
            <div id="local__time">Local time: -</div>
        </div>
        <div class="start__time__container">Start time: 15:00 @ 26 September 2021</div>`;
        // change the date format for the weather elements
        const sochi__weather__date = DateFormatter.formatDate(new Date(weatherDataSet.data.area[14].weather[0].date), 'DD MMMM YYYY');
        console.log("changed weather date format for sochi");
        // change weather div 1 contents
        weather__1__date.textContent = sochi__weather__date;
        weather__1__time.textContent = `14:00`;
        if (tempUnitsCelsius === true) {
            weather__1__temp.textContent = `${weatherDataSet.data.area[14].weather[0].hourly[14].tempC}°C`;
        } else if (tempUnitsCelsius === false) {
            weather__1__temp.textContent = `${weatherDataSet.data.area[14].weather[0].hourly[14].tempF}°F`;
        } else {
            return;
        };
        weather__1__precip.textContent = `${weatherDataSet.data.area[14].weather[0].hourly[14].precipMM}mm`;
        weather__1__rain .textContent = `${weatherDataSet.data.area[14].weather[0].hourly[14].chanceofrain}%`;
        // change weather div 2 contents
        weather__2__date.textContent = sochi__weather__date;
        weather__2__time.textContent = `15:00`;
        if (tempUnitsCelsius === true) {
            weather__2__temp.textContent = `${weatherDataSet.data.area[14].weather[0].hourly[15].tempC}°C`;
        } else if (tempUnitsCelsius === false) {
            weather__2__temp.textContent = `${weatherDataSet.data.area[14].weather[0].hourly[15].tempF}°F`;
        } else {
            return;
        };
        weather__2__precip.textContent = `${weatherDataSet.data.area[14].weather[0].hourly[15].precipMM}mm`;
        weather__2__rain .textContent = `${weatherDataSet.data.area[14].weather[0].hourly[15].chanceofrain}%`;
        // change weather div 3 contents
        weather__3__date.textContent = sochi__weather__date;
        weather__3__time.textContent = `16:00`;
        if (tempUnitsCelsius === true) {
            weather__3__temp.textContent = `${weatherDataSet.data.area[14].weather[0].hourly[16].tempC}°C`;
        } else if (tempUnitsCelsius === false) {
            weather__3__temp.textContent = `${weatherDataSet.data.area[14].weather[0].hourly[16].tempF}°F`;
        } else {
            return;
        };
        weather__3__precip.textContent = `${weatherDataSet.data.area[14].weather[0].hourly[16].precipMM}mm`;
        weather__3__rain .textContent = `${weatherDataSet.data.area[14].weather[0].hourly[16].chanceofrain}%`;
        // change weather div 4 contents
        weather__4__date.textContent = sochi__weather__date;
        weather__4__time.textContent = `17:00`;
        if (tempUnitsCelsius === true) {
            weather__4__temp.textContent = `${weatherDataSet.data.area[14].weather[0].hourly[17].tempC}°C`;
        } else if (tempUnitsCelsius === false) {
            weather__4__temp.textContent = `${weatherDataSet.data.area[14].weather[0].hourly[17].tempF}°F`;
        } else {
            return;
        };
        weather__4__precip.textContent = `${weatherDataSet.data.area[14].weather[0].hourly[17].precipMM}mm`;
        weather__4__rain .textContent = `${weatherDataSet.data.area[14].weather[0].hourly[17].chanceofrain}%`;
    
    } else if (singapore__event.classList.contains("active__event")) {
        console.log("singapore has active class");
        track__info__container.innerHTML = 
        `<div class="track__info">
            <div class="track__name__container">
                <h3 class="track__name">Marina Bay Street Circuit</h3>
            </div>
            <div class="track__map__stats__container">
                <div class="track__map"><img class="circuit-img" src="assets/img/trackmaps/singapore-trackmap.png"></div>
                <div class="track__stats">
                    <div class="track__stats__content">Laps:
                        61
                    </div>
                    <div class="track__stats__content">Length:
                        5.063 km
                    </div>
                    <div class="track__stats__content">Track record:
                        1:41.905
                    </div>
                </div>
            </div>
        </div>`;
        time__info__container.innerHTML = 
        `<div id="schedule">
            <div id="schedule__title">Time schedule</div>
            <div id="schedule__subtitle">(local timezone)</div>
        </div>
        <div class="schedule__times">
            <div class="session__title">Practice 1:</div>
            <div class="time">17:00 - 18:00</div>
        </div>
        <div class="schedule__times">
            <div class="session__title">Practice 2:</div>
            <div class="time">20:30 - 21:30</div>
        </div>
        <div class="schedule__times">
            <div class="session__title"">Practice 3:</div>
            <div class="time">18:00 - 19:00</div>
        </div>
        <div class="schedule__times">
            <div class="session__title">Qualifying:</div>
        <div class="time">21:00 - 22:00</div>
        </div>
        <div class="schedule__times"  id="race__time">
            <div class="session__title">Race:</div>
            <div class="time">20:00 - 22:00</div>
        </div>`;
        location__info__container.innerHTML = 
        `<div class="location__time__container">
            <div id="location">Location: Singapore</div>
            <div id="local__time">Local time: -</div>
        </div>
        <div class="start__time__container">Start time: 20:00 @ 3 October 2021</div>`;
        // change the date format for the weather elements
        const singapore__weather__date = DateFormatter.formatDate(new Date(weatherDataSet.data.area[15].weather[0].date), 'DD MMMM YYYY');
        console.log("changed weather date format for portimao");
        // change weather div 1 contents
        weather__1__date.textContent = singapore__weather__date;
        weather__1__time.textContent = `19:00`;
        if (tempUnitsCelsius === true) {
            weather__1__temp.textContent = `${weatherDataSet.data.area[15].weather[0].hourly[19].tempC}°C`;
        } else if (tempUnitsCelsius === false) {
            weather__1__temp.textContent = `${weatherDataSet.data.area[15].weather[0].hourly[19].tempF}°F`;
        } else {
            return;
        };
        weather__1__precip.textContent = `${weatherDataSet.data.area[15].weather[0].hourly[19].precipMM}mm`;
        weather__1__rain .textContent = `${weatherDataSet.data.area[15].weather[0].hourly[19].chanceofrain}%`;
        // change weather div 2 contents
        weather__2__date.textContent = singapore__weather__date;
        weather__2__time.textContent = `20:00`;
        if (tempUnitsCelsius === true) {
            weather__2__temp.textContent = `${weatherDataSet.data.area[15].weather[0].hourly[20].tempC}°C`;
        } else if (tempUnitsCelsius === false) {
            weather__2__temp.textContent = `${weatherDataSet.data.area[15].weather[0].hourly[20].tempF}°F`;
        } else {
            return;
        };
        weather__2__precip.textContent = `${weatherDataSet.data.area[15].weather[0].hourly[20].precipMM}mm`;
        weather__2__rain .textContent = `${weatherDataSet.data.area[15].weather[0].hourly[20].chanceofrain}%`;
        // change weather div 3 contents
        weather__3__date.textContent = singapore__weather__date;
        weather__3__time.textContent = `21:00`;
        if (tempUnitsCelsius === true) {
            weather__3__temp.textContent = `${weatherDataSet.data.area[15].weather[0].hourly[21].tempC}°C`;
        } else if (tempUnitsCelsius === false) {
            weather__3__temp.textContent = `${weatherDataSet.data.area[15].weather[0].hourly[21].tempF}°F`;
        } else {
            return;
        };
        weather__3__precip.textContent = `${weatherDataSet.data.area[15].weather[0].hourly[21].precipMM}mm`;
        weather__3__rain .textContent = `${weatherDataSet.data.area[15].weather[0].hourly[21].chanceofrain}%`;
        // change weather div 4 contents
        weather__4__date.textContent = singapore__weather__date;
        weather__4__time.textContent = `22:00`;
        if (tempUnitsCelsius === true) {
            weather__4__temp.textContent = `${weatherDataSet.data.area[15].weather[0].hourly[22].tempC}°C`;
        } else if (tempUnitsCelsius === false) {
            weather__4__temp.textContent = `${weatherDataSet.data.area[15].weather[0].hourly[22].tempF}°F`;
        } else {
            return;
        };
        weather__4__precip.textContent = `${weatherDataSet.data.area[15].weather[0].hourly[22].precipMM}mm`;
        weather__4__rain .textContent = `${weatherDataSet.data.area[15].weather[0].hourly[22].chanceofrain}%`;
    
    } else if (suzuka__event.classList.contains("active__event")) {
        console.log("suzuka has active class");
        track__info__container.innerHTML = 
        `<div class="track__info">
            <div class="track__name__container">
                <h3 class="track__name">Suzuka International Racing Course</h3>
            </div>
            <div class="track__map__stats__container">
                <div class="track__map"><img class="circuit-img" src="assets/img/trackmaps/suzuka-trackmap.png"></div>
                <div class="track__stats">
                    <div class="track__stats__content">Laps:
                        53
                    </div>
                    <div class="track__stats__content">Length:
                        5.807 km
                    </div>
                    <div class="track__stats__content">Track record:
                        1:30.983
                    </div>
                </div>
            </div>
        </div>`;
        time__info__container.innerHTML = 
        `<div id="schedule">
            <div id="schedule__title">Time schedule</div>
            <div id="schedule__subtitle">(local timezone)</div>
        </div>
        <div class="schedule__times">
            <div class="session__title">Practice 1:</div>
            <div class="time">11:30 - 12:30</div>
        </div>
        <div class="schedule__times">
            <div class="session__title">Practice 2:</div>
            <div class="time">15:00 - 16:00</div>
        </div>
        <div class="schedule__times">
            <div class="session__title"">Practice 3:</div>
            <div class="time">12:00 - 13:00</div>
        </div>
        <div class="schedule__times">
            <div class="session__title">Qualifying:</div>
        <div class="time">15:00 - 16:00</div>
        </div>
        <div class="schedule__times"  id="race__time">
            <div class="session__title">Race:</div>
            <div class="time">14:00 - 16:00</div>
        </div>`;
        location__info__container.innerHTML = 
        `<div class="location__time__container">
            <div id="location">Location: Suzuka</div>
            <div id="local__time">Local time: -</div>
        </div>
        <div class="start__time__container">Start time: 14:00 @ 10 October 2021</div>`;
        // change the date format for the weather elements
        const suzuka__weather__date = DateFormatter.formatDate(new Date(weatherDataSet.data.area[16].weather[0].date), 'DD MMMM YYYY');
        console.log("changed weather date format for suzuka");
        // change weather div 1 contents
        weather__1__date.textContent = suzuka__weather__date;
        weather__1__time.textContent = `13:00`;
        if (tempUnitsCelsius === true) {
            weather__1__temp.textContent = `${weatherDataSet.data.area[16].weather[0].hourly[13].tempC}°C`;
        } else if (tempUnitsCelsius === false) {
            weather__1__temp.textContent = `${weatherDataSet.data.area[16].weather[0].hourly[13].tempF}°F`;
        } else {
            return;
        };
        weather__1__precip.textContent = `${weatherDataSet.data.area[16].weather[0].hourly[13].precipMM}mm`;
        weather__1__rain .textContent = `${weatherDataSet.data.area[16].weather[0].hourly[13].chanceofrain}%`;
        // change weather div 2 contents
        weather__2__date.textContent = suzuka__weather__date;
        weather__2__time.textContent = `14:00`;
        if (tempUnitsCelsius === true) {
            weather__2__temp.textContent = `${weatherDataSet.data.area[16].weather[0].hourly[14].tempC}°C`;
        } else if (tempUnitsCelsius === false) {
            weather__2__temp.textContent = `${weatherDataSet.data.area[16].weather[0].hourly[14].tempF}°F`;
        } else {
            return;
        };
        weather__2__precip.textContent = `${weatherDataSet.data.area[16].weather[0].hourly[14].precipMM}mm`;
        weather__2__rain .textContent = `${weatherDataSet.data.area[16].weather[0].hourly[14].chanceofrain}%`;
        // change weather div 3 contents
        weather__3__date.textContent = suzuka__weather__date;
        weather__3__time.textContent = `15:00`;
        if (tempUnitsCelsius === true) {
            weather__3__temp.textContent = `${weatherDataSet.data.area[16].weather[0].hourly[15].tempC}°C`;
        } else if (tempUnitsCelsius === false) {
            weather__3__temp.textContent = `${weatherDataSet.data.area[16].weather[0].hourly[15].tempF}°F`;
        } else {
            return;
        };
        weather__3__precip.textContent = `${weatherDataSet.data.area[16].weather[0].hourly[15].precipMM}mm`;
        weather__3__rain .textContent = `${weatherDataSet.data.area[16].weather[0].hourly[15].chanceofrain}%`;
        // change weather div 4 contents
        weather__4__date.textContent = suzuka__weather__date;
        weather__4__time.textContent = `16:00`;
        if (tempUnitsCelsius === true) {
            weather__4__temp.textContent = `${weatherDataSet.data.area[16].weather[0].hourly[16].tempC}°C`;
        } else if (tempUnitsCelsius === false) {
            weather__4__temp.textContent = `${weatherDataSet.data.area[16].weather[0].hourly[16].tempF}°F`;
        } else {
            return;
        };
        weather__4__precip.textContent = `${weatherDataSet.data.area[16].weather[0].hourly[16].precipMM}mm`;
        weather__4__rain .textContent = `${weatherDataSet.data.area[16].weather[0].hourly[16].chanceofrain}%`;
    
    } else if (austin__event.classList.contains("active__event")) {
        console.log("austin has active class");
        track__info__container.innerHTML = 
        `<div class="track__info">
            <div class="track__name__container">
                <h3 class="track__name">Circuit of The Americas</h3>
            </div>
            <div class="track__map__stats__container">
                <div class="track__map"><img class="circuit-img" src="assets/img/trackmaps/austin-trackmap.png"></div>
                <div class="track__stats">
                    <div class="track__stats__content">Laps:
                        56
                    </div>
                    <div class="track__stats__content">Length:
                        5.513 km
                    </div>
                    <div class="track__stats__content">Track record:
                        1:36.169
                    </div>
                </div>
            </div>
        </div>`;
        time__info__container.innerHTML = 
        `<div id="schedule">
            <div id="schedule__title">Time schedule</div>
            <div id="schedule__subtitle">(local timezone)</div>
        </div>
        <div class="schedule__times">
            <div class="session__title">Practice 1:</div>
            <div class="time">11:30 - 12:30</div>
        </div>
        <div class="schedule__times">
            <div class="session__title">Practice 2:</div>
            <div class="time">15:00 - 16:00</div>
        </div>
        <div class="schedule__times">
            <div class="session__title"">Practice 3:</div>
            <div class="time">13:00 - 14:00</div>
        </div>
        <div class="schedule__times">
            <div class="session__title">Qualifying:</div>
        <div class="time">16:00 - 17:00</div>
        </div>
        <div class="schedule__times"  id="race__time">
            <div class="session__title">Race:</div>
            <div class="time">14:00 - 16:00</div>
        </div>`;
        location__info__container.innerHTML = 
        `<div class="location__time__container">
            <div id="location">Location: Austin</div>
            <div id="local__time">Local time: -</div>
        </div>
        <div class="start__time__container">Start time: 14:00 @ 24 October 2021</div>`;
        // change the date format for the weather elements
        const austin__weather__date = DateFormatter.formatDate(new Date(weatherDataSet.data.area[17].weather[0].date), 'DD MMMM YYYY');
        console.log("changed weather date format for austin");
        // change weather div 1 contents
        weather__1__date.textContent = austin__weather__date;
        weather__1__time.textContent = `13:00`;
        if (tempUnitsCelsius === true) {
            weather__1__temp.textContent = `${weatherDataSet.data.area[17].weather[0].hourly[13].tempC}°C`;
        } else if (tempUnitsCelsius === false) {
            weather__1__temp.textContent = `${weatherDataSet.data.area[17].weather[0].hourly[13].tempF}°F`;
        } else {
            return;
        };
        weather__1__precip.textContent = `${weatherDataSet.data.area[17].weather[0].hourly[13].precipMM}mm`;
        weather__1__rain .textContent = `${weatherDataSet.data.area[17].weather[0].hourly[13].chanceofrain}%`;
        // change weather div 2 contents
        weather__2__date.textContent = austin__weather__date;
        weather__2__time.textContent = `14:00`;
        if (tempUnitsCelsius === true) {
            weather__2__temp.textContent = `${weatherDataSet.data.area[17].weather[0].hourly[14].tempC}°C`;
        } else if (tempUnitsCelsius === false) {
            weather__2__temp.textContent = `${weatherDataSet.data.area[17].weather[0].hourly[14].tempF}°F`;
        } else {
            return;
        };
        weather__2__precip.textContent = `${weatherDataSet.data.area[17].weather[0].hourly[14].precipMM}mm`;
        weather__2__rain .textContent = `${weatherDataSet.data.area[17].weather[0].hourly[14].chanceofrain}%`;
        // change weather div 3 contents
        weather__3__date.textContent = austin__weather__date;
        weather__3__time.textContent = `15:00`;
        if (tempUnitsCelsius === true) {
            weather__3__temp.textContent = `${weatherDataSet.data.area[17].weather[0].hourly[15].tempC}°C`;
        } else if (tempUnitsCelsius === false) {
            weather__3__temp.textContent = `${weatherDataSet.data.area[17].weather[0].hourly[15].tempF}°F`;
        } else {
            return;
        };
        weather__3__precip.textContent = `${weatherDataSet.data.area[17].weather[0].hourly[15].precipMM}mm`;
        weather__3__rain .textContent = `${weatherDataSet.data.area[17].weather[0].hourly[15].chanceofrain}%`;
        // change weather div 4 contents
        weather__4__date.textContent = austin__weather__date;
        weather__4__time.textContent = `16:00`;
        if (tempUnitsCelsius === true) {
            weather__4__temp.textContent = `${weatherDataSet.data.area[17].weather[0].hourly[16].tempC}°C`;
        } else if (tempUnitsCelsius === false) {
            weather__4__temp.textContent = `${weatherDataSet.data.area[17].weather[0].hourly[16].tempF}°F`;
        } else {
            return;
        };
        weather__4__precip.textContent = `${weatherDataSet.data.area[17].weather[0].hourly[16].precipMM}mm`;
        weather__4__rain .textContent = `${weatherDataSet.data.area[17].weather[0].hourly[16].chanceofrain}%`;
    
    } else {
        console.log("error: no active event");
    }
};

// check the closest race to give active class and grey out past races
const checkClosestRace = function() {
    if (days__until__bahrain > -1) {
        bahrain__event.classList.add("active__event");
    } else if (days__until__imola > -1) {
        imola__event.classList.add("active__event");
        bahrain__event.style.color = "#b3b3b3";
        bahrain__event.style.backgroundColor = "#4e4e4e";
    } else if (days__until__portimao > -1) {
        portimao__event.classList.add("active__event");
        bahrain__event.style.color = "#b3b3b3";
        bahrain__event.style.backgroundColor = "#4e4e4e";
        imola__event.style.color = "#b3b3b3";
        imola__event.style.backgroundColor = "#4e4e4e";
    } else if (days__until__barcelona > -1) {
        barcelona__event.classList.add("active__event");
        bahrain__event.style.color = "#b3b3b3";
        bahrain__event.style.backgroundColor = "#4e4e4e";
        imola__event.style.color = "#b3b3b3";
        imola__event.style.backgroundColor = "#4e4e4e";
        portimao__event.style.color = "#b3b3b3";
        portimao__event.style.backgroundColor = "#4e4e4e";
    } else if (days__until__monaco > -1) {
        monaco__event.classList.add("active__event");
        bahrain__event.style.color = "#b3b3b3";
        bahrain__event.style.backgroundColor = "#4e4e4e";
        imola__event.style.color = "#b3b3b3";
        imola__event.style.backgroundColor = "#4e4e4e";
        portimao__event.style.color = "#b3b3b3";
        portimao__event.style.backgroundColor = "#4e4e4e";
        barcelona__event.style.color = "#b3b3b3";
        barcelona__event.style.backgroundColor = "#4e4e4e";
    } else if (days__until__baku > -1) {
        baku__event.classList.add("active__event");
        bahrain__event.style.color = "#b3b3b3";
        bahrain__event.style.backgroundColor = "#4e4e4e";
        imola__event.style.color = "#b3b3b3";
        imola__event.style.backgroundColor = "#4e4e4e";
        portimao__event.style.color = "#b3b3b3";
        portimao__event.style.backgroundColor = "#4e4e4e";
        barcelona__event.style.color = "#b3b3b3";
        barcelona__event.style.backgroundColor = "#4e4e4e";
        monaco__event.style.color = "#b3b3b3";
        monaco__event.style.backgroundColor = "#4e4e4e";
    } else if (days__until__montreal > -1) {
        montreal__event.classList.add("active__event");
        bahrain__event.style.color = "#b3b3b3";
        bahrain__event.style.backgroundColor = "#4e4e4e";
        imola__event.style.color = "#b3b3b3";
        imola__event.style.backgroundColor = "#4e4e4e";
        portimao__event.style.color = "#b3b3b3";
        portimao__event.style.backgroundColor = "#4e4e4e";
        barcelona__event.style.color = "#b3b3b3";
        barcelona__event.style.backgroundColor = "#4e4e4e";
        monaco__event.style.color = "#b3b3b3";
        monaco__event.style.backgroundColor = "#4e4e4e";
        baku__event.style.color = "#b3b3b3";
        baku__event.style.backgroundColor = "#4e4e4e";
    } else if (days__until__castellet > -1) {
        castellet__event.classList.add("active__event");
        bahrain__event.style.color = "#b3b3b3";
        bahrain__event.style.backgroundColor = "#4e4e4e";
        imola__event.style.color = "#b3b3b3";
        imola__event.style.backgroundColor = "#4e4e4e";
        portimao__event.style.color = "#b3b3b3";
        portimao__event.style.backgroundColor = "#4e4e4e";
        barcelona__event.style.color = "#b3b3b3";
        barcelona__event.style.backgroundColor = "#4e4e4e";
        monaco__event.style.color = "#b3b3b3";
        monaco__event.style.backgroundColor = "#4e4e4e";
        baku__event.style.color = "#b3b3b3";
        baku__event.style.backgroundColor = "#4e4e4e";
        montreal__event.style.color = "#b3b3b3";
        montreal__event.style.backgroundColor = "#4e4e4e";
    } else if (days__until__spielberg > -1) {
        spielberg__event.classList.add("active__event");
        bahrain__event.style.color = "#b3b3b3";
        bahrain__event.style.backgroundColor = "#4e4e4e";
        imola__event.style.color = "#b3b3b3";
        imola__event.style.backgroundColor = "#4e4e4e";
        portimao__event.style.color = "#b3b3b3";
        portimao__event.style.backgroundColor = "#4e4e4e";
        barcelona__event.style.color = "#b3b3b3";
        barcelona__event.style.backgroundColor = "#4e4e4e";
        monaco__event.style.color = "#b3b3b3";
        monaco__event.style.backgroundColor = "#4e4e4e";
        baku__event.style.color = "#b3b3b3";
        baku__event.style.backgroundColor = "#4e4e4e";
        montreal__event.style.color = "#b3b3b3";
        montreal__event.style.backgroundColor = "#4e4e4e";
        castellet__event.style.color = "#b3b3b3";
        castellet__event.style.backgroundColor = "#4e4e4e";
    } else if (days__until__silverstone > -1) {
        silverstone__event.classList.add("active__event");
        bahrain__event.style.color = "#b3b3b3";
        bahrain__event.style.backgroundColor = "#4e4e4e";
        imola__event.style.color = "#b3b3b3";
        imola__event.style.backgroundColor = "#4e4e4e";
        portimao__event.style.color = "#b3b3b3";
        portimao__event.style.backgroundColor = "#4e4e4e";
        barcelona__event.style.color = "#b3b3b3";
        barcelona__event.style.backgroundColor = "#4e4e4e";
        monaco__event.style.color = "#b3b3b3";
        monaco__event.style.backgroundColor = "#4e4e4e";
        baku__event.style.color = "#b3b3b3";
        baku__event.style.backgroundColor = "#4e4e4e";
        montreal__event.style.color = "#b3b3b3";
        montreal__event.style.backgroundColor = "#4e4e4e";
        castellet__event.style.color = "#b3b3b3";
        castellet__event.style.backgroundColor = "#4e4e4e";
        spielberg__event.style.color = "#b3b3b3";
        spielberg__event.style.backgroundColor = "#4e4e4e";
    } else if (days__until__budapest > -1) {
        budapest__event.classList.add("active__event");
        bahrain__event.style.color = "#b3b3b3";
        bahrain__event.style.backgroundColor = "#4e4e4e";
        imola__event.style.color = "#b3b3b3";
        imola__event.style.backgroundColor = "#4e4e4e";
        portimao__event.style.color = "#b3b3b3";
        portimao__event.style.backgroundColor = "#4e4e4e";
        barcelona__event.style.color = "#b3b3b3";
        barcelona__event.style.backgroundColor = "#4e4e4e";
        monaco__event.style.color = "#b3b3b3";
        monaco__event.style.backgroundColor = "#4e4e4e";
        baku__event.style.color = "#b3b3b3";
        baku__event.style.backgroundColor = "#4e4e4e";
        montreal__event.style.color = "#b3b3b3";
        montreal__event.style.backgroundColor = "#4e4e4e";
        castellet__event.style.color = "#b3b3b3";
        castellet__event.style.backgroundColor = "#4e4e4e";
        spielberg__event.style.color = "#b3b3b3";
        spielberg__event.style.backgroundColor = "#4e4e4e";
        silverstone__event.style.color = "#b3b3b3";
        silverstone__event.style.backgroundColor = "#4e4e4e";
    } else if (days__until__spa > -1) {
        spa__event.classList.add("active__event");
        bahrain__event.style.color = "#b3b3b3";
        bahrain__event.style.backgroundColor = "#4e4e4e";
        imola__event.style.color = "#b3b3b3";
        imola__event.style.backgroundColor = "#4e4e4e";
        portimao__event.style.color = "#b3b3b3";
        portimao__event.style.backgroundColor = "#4e4e4e";
        barcelona__event.style.color = "#b3b3b3";
        barcelona__event.style.backgroundColor = "#4e4e4e";
        monaco__event.style.color = "#b3b3b3";
        monaco__event.style.backgroundColor = "#4e4e4e";
        baku__event.style.color = "#b3b3b3";
        baku__event.style.backgroundColor = "#4e4e4e";
        montreal__event.style.color = "#b3b3b3";
        montreal__event.style.backgroundColor = "#4e4e4e";
        castellet__event.style.color = "#b3b3b3";
        castellet__event.style.backgroundColor = "#4e4e4e";
        spielberg__event.style.color = "#b3b3b3";
        spielberg__event.style.backgroundColor = "#4e4e4e";
        silverstone__event.style.color = "#b3b3b3";
        silverstone__event.style.backgroundColor = "#4e4e4e";
        budapest__event.style.color = "#b3b3b3";
        budapest__event.style.backgroundColor = "#4e4e4e";
    } else if (days__until__zandvoort > -1) {
        zandvoort__event.classList.add("active__event");
        bahrain__event.style.color = "#b3b3b3";
        bahrain__event.style.backgroundColor = "#4e4e4e";
        imola__event.style.color = "#b3b3b3";
        imola__event.style.backgroundColor = "#4e4e4e";
        portimao__event.style.color = "#b3b3b3";
        portimao__event.style.backgroundColor = "#4e4e4e";
        barcelona__event.style.color = "#b3b3b3";
        barcelona__event.style.backgroundColor = "#4e4e4e";
        monaco__event.style.color = "#b3b3b3";
        monaco__event.style.backgroundColor = "#4e4e4e";
        baku__event.style.color = "#b3b3b3";
        baku__event.style.backgroundColor = "#4e4e4e";
        montreal__event.style.color = "#b3b3b3";
        montreal__event.style.backgroundColor = "#4e4e4e";
        castellet__event.style.color = "#b3b3b3";
        castellet__event.style.backgroundColor = "#4e4e4e";
        spielberg__event.style.color = "#b3b3b3";
        spielberg__event.style.backgroundColor = "#4e4e4e";
        silverstone__event.style.color = "#b3b3b3";
        silverstone__event.style.backgroundColor = "#4e4e4e";
        budapest__event.style.color = "#b3b3b3";
        budapest__event.style.backgroundColor = "#4e4e4e";
        spa__event.style.color = "#b3b3b3";
        spa__event.style.backgroundColor = "#4e4e4e";
    } else if (days__until__monza > -1) {
        monza__event.classList.add("active__event");
        bahrain__event.style.color = "#b3b3b3";
        bahrain__event.style.backgroundColor = "#4e4e4e";
        imola__event.style.color = "#b3b3b3";
        imola__event.style.backgroundColor = "#4e4e4e";
        portimao__event.style.color = "#b3b3b3";
        portimao__event.style.backgroundColor = "#4e4e4e";
        barcelona__event.style.color = "#b3b3b3";
        barcelona__event.style.backgroundColor = "#4e4e4e";
        monaco__event.style.color = "#b3b3b3";
        monaco__event.style.backgroundColor = "#4e4e4e";
        baku__event.style.color = "#b3b3b3";
        baku__event.style.backgroundColor = "#4e4e4e";
        montreal__event.style.color = "#b3b3b3";
        montreal__event.style.backgroundColor = "#4e4e4e";
        castellet__event.style.color = "#b3b3b3";
        castellet__event.style.backgroundColor = "#4e4e4e";
        spielberg__event.style.color = "#b3b3b3";
        spielberg__event.style.backgroundColor = "#4e4e4e";
        silverstone__event.style.color = "#b3b3b3";
        silverstone__event.style.backgroundColor = "#4e4e4e";
        budapest__event.style.color = "#b3b3b3";
        budapest__event.style.backgroundColor = "#4e4e4e";
        spa__event.style.color = "#b3b3b3";
        spa__event.style.backgroundColor = "#4e4e4e";
        zandvoort__event.style.color = "#b3b3b3";
        zandvoort__event.style.backgroundColor = "#4e4e4e";
    } else if (days__until__sochi > -1) {
        sochi__event.classList.add("active__event");
        bahrain__event.style.color = "#b3b3b3";
        bahrain__event.style.backgroundColor = "#4e4e4e";
        imola__event.style.color = "#b3b3b3";
        imola__event.style.backgroundColor = "#4e4e4e";
        portimao__event.style.color = "#b3b3b3";
        portimao__event.style.backgroundColor = "#4e4e4e";
        barcelona__event.style.color = "#b3b3b3";
        barcelona__event.style.backgroundColor = "#4e4e4e";
        monaco__event.style.color = "#b3b3b3";
        monaco__event.style.backgroundColor = "#4e4e4e";
        baku__event.style.color = "#b3b3b3";
        baku__event.style.backgroundColor = "#4e4e4e";
        montreal__event.style.color = "#b3b3b3";
        montreal__event.style.backgroundColor = "#4e4e4e";
        castellet__event.style.color = "#b3b3b3";
        castellet__event.style.backgroundColor = "#4e4e4e";
        spielberg__event.style.color = "#b3b3b3";
        spielberg__event.style.backgroundColor = "#4e4e4e";
        silverstone__event.style.color = "#b3b3b3";
        silverstone__event.style.backgroundColor = "#4e4e4e";
        budapest__event.style.color = "#b3b3b3";
        budapest__event.style.backgroundColor = "#4e4e4e";
        spa__event.style.color = "#b3b3b3";
        spa__event.style.backgroundColor = "#4e4e4e";
        zandvoort__event.style.color = "#b3b3b3";
        zandvoort__event.style.backgroundColor = "#4e4e4e";
        monza__event.style.color = "#b3b3b3";
        monza__event.style.backgroundColor = "#4e4e4e";
    } else if (days__until__singapore > -1) {
        singapore__event.classList.add("active__event");
        bahrain__event.style.color = "#b3b3b3";
        bahrain__event.style.backgroundColor = "#4e4e4e";
        imola__event.style.color = "#b3b3b3";
        imola__event.style.backgroundColor = "#4e4e4e";
        portimao__event.style.color = "#b3b3b3";
        portimao__event.style.backgroundColor = "#4e4e4e";
        barcelona__event.style.color = "#b3b3b3";
        barcelona__event.style.backgroundColor = "#4e4e4e";
        monaco__event.style.color = "#b3b3b3";
        monaco__event.style.backgroundColor = "#4e4e4e";
        baku__event.style.color = "#b3b3b3";
        baku__event.style.backgroundColor = "#4e4e4e";
        montreal__event.style.color = "#b3b3b3";
        montreal__event.style.backgroundColor = "#4e4e4e";
        castellet__event.style.color = "#b3b3b3";
        castellet__event.style.backgroundColor = "#4e4e4e";
        spielberg__event.style.color = "#b3b3b3";
        spielberg__event.style.backgroundColor = "#4e4e4e";
        silverstone__event.style.color = "#b3b3b3";
        silverstone__event.style.backgroundColor = "#4e4e4e";
        budapest__event.style.color = "#b3b3b3";
        budapest__event.style.backgroundColor = "#4e4e4e";
        spa__event.style.color = "#b3b3b3";
        spa__event.style.backgroundColor = "#4e4e4e";
        zandvoort__event.style.color = "#b3b3b3";
        zandvoort__event.style.backgroundColor = "#4e4e4e";
        monza__event.style.color = "#b3b3b3";
        monza__event.style.backgroundColor = "#4e4e4e";
        sochi__event.style.color = "#b3b3b3";
        sochi__event.style.backgroundColor = "#4e4e4e";
    } else if (days__until__suzuka > -1) {
        suzuka__event.classList.add("active__event");
        bahrain__event.style.color = "#b3b3b3";
        bahrain__event.style.backgroundColor = "#4e4e4e";
        imola__event.style.color = "#b3b3b3";
        imola__event.style.backgroundColor = "#4e4e4e";
        portimao__event.style.color = "#b3b3b3";
        portimao__event.style.backgroundColor = "#4e4e4e";
        barcelona__event.style.color = "#b3b3b3";
        barcelona__event.style.backgroundColor = "#4e4e4e";
        monaco__event.style.color = "#b3b3b3";
        monaco__event.style.backgroundColor = "#4e4e4e";
        baku__event.style.color = "#b3b3b3";
        baku__event.style.backgroundColor = "#4e4e4e";
        montreal__event.style.color = "#b3b3b3";
        montreal__event.style.backgroundColor = "#4e4e4e";
        castellet__event.style.color = "#b3b3b3";
        castellet__event.style.backgroundColor = "#4e4e4e";
        spielberg__event.style.color = "#b3b3b3";
        spielberg__event.style.backgroundColor = "#4e4e4e";
        silverstone__event.style.color = "#b3b3b3";
        silverstone__event.style.backgroundColor = "#4e4e4e";
        budapest__event.style.color = "#b3b3b3";
        budapest__event.style.backgroundColor = "#4e4e4e";
        spa__event.style.color = "#b3b3b3";
        spa__event.style.backgroundColor = "#4e4e4e";
        zandvoort__event.style.color = "#b3b3b3";
        zandvoort__event.style.backgroundColor = "#4e4e4e";
        monza__event.style.color = "#b3b3b3";
        monza__event.style.backgroundColor = "#4e4e4e";
        sochi__event.style.color = "#b3b3b3";
        sochi__event.style.backgroundColor = "#4e4e4e";
        singapore__event.style.color = "#b3b3b3";
        singapore__event.style.backgroundColor = "#4e4e4e";
    } else if (days__until__austin > -1) {
        austin__event.classList.add("active__event");
        bahrain__event.style.color = "#b3b3b3";
        bahrain__event.style.backgroundColor = "#4e4e4e";
        imola__event.style.color = "#b3b3b3";
        imola__event.style.backgroundColor = "#4e4e4e";
        portimao__event.style.color = "#b3b3b3";
        portimao__event.style.backgroundColor = "#4e4e4e";
        barcelona__event.style.color = "#b3b3b3";
        barcelona__event.style.backgroundColor = "#4e4e4e";
        monaco__event.style.color = "#b3b3b3";
        monaco__event.style.backgroundColor = "#4e4e4e";
        baku__event.style.color = "#b3b3b3";
        baku__event.style.backgroundColor = "#4e4e4e";
        montreal__event.style.color = "#b3b3b3";
        montreal__event.style.backgroundColor = "#4e4e4e";
        castellet__event.style.color = "#b3b3b3";
        castellet__event.style.backgroundColor = "#4e4e4e";
        spielberg__event.style.color = "#b3b3b3";
        spielberg__event.style.backgroundColor = "#4e4e4e";
        silverstone__event.style.color = "#b3b3b3";
        silverstone__event.style.backgroundColor = "#4e4e4e";
        budapest__event.style.color = "#b3b3b3";
        budapest__event.style.backgroundColor = "#4e4e4e";
        spa__event.style.color = "#b3b3b3";
        spa__event.style.backgroundColor = "#4e4e4e";
        zandvoort__event.style.color = "#b3b3b3";
        zandvoort__event.style.backgroundColor = "#4e4e4e";
        monza__event.style.color = "#b3b3b3";
        monza__event.style.backgroundColor = "#4e4e4e";
        sochi__event.style.color = "#b3b3b3";
        sochi__event.style.backgroundColor = "#4e4e4e";
        singapore__event.style.color = "#b3b3b3";
        singapore__event.style.backgroundColor = "#4e4e4e";
        suzuka__event.style.color = "#b3b3b3";
        suzuka__event.style.backgroundColor = "#4e4e4e";
    } else if (days__until__mexico > -1) {
        mexico__event.classList.add("active__event");
        bahrain__event.style.color = "#b3b3b3";
        bahrain__event.style.backgroundColor = "#4e4e4e";
        imola__event.style.color = "#b3b3b3";
        imola__event.style.backgroundColor = "#4e4e4e";
        portimao__event.style.color = "#b3b3b3";
        portimao__event.style.backgroundColor = "#4e4e4e";
        barcelona__event.style.color = "#b3b3b3";
        barcelona__event.style.backgroundColor = "#4e4e4e";
        monaco__event.style.color = "#b3b3b3";
        monaco__event.style.backgroundColor = "#4e4e4e";
        baku__event.style.color = "#b3b3b3";
        baku__event.style.backgroundColor = "#4e4e4e";
        montreal__event.style.color = "#b3b3b3";
        montreal__event.style.backgroundColor = "#4e4e4e";
        castellet__event.style.color = "#b3b3b3";
        castellet__event.style.backgroundColor = "#4e4e4e";
        spielberg__event.style.color = "#b3b3b3";
        spielberg__event.style.backgroundColor = "#4e4e4e";
        silverstone__event.style.color = "#b3b3b3";
        silverstone__event.style.backgroundColor = "#4e4e4e";
        budapest__event.style.color = "#b3b3b3";
        budapest__event.style.backgroundColor = "#4e4e4e";
        spa__event.style.color = "#b3b3b3";
        spa__event.style.backgroundColor = "#4e4e4e";
        zandvoort__event.style.color = "#b3b3b3";
        zandvoort__event.style.backgroundColor = "#4e4e4e";
        monza__event.style.color = "#b3b3b3";
        monza__event.style.backgroundColor = "#4e4e4e";
        sochi__event.style.color = "#b3b3b3";
        sochi__event.style.backgroundColor = "#4e4e4e";
        singapore__event.style.color = "#b3b3b3";
        singapore__event.style.backgroundColor = "#4e4e4e";
        suzuka__event.style.color = "#b3b3b3";
        suzuka__event.style.backgroundColor = "#4e4e4e";
        austin__event.style.color = "#b3b3b3";
        austin__event.style.backgroundColor = "#4e4e4e";
    } else if (days__until__interlagos > -1) {
        interlagos__event.classList.add("active__event");
        bahrain__event.style.color = "#b3b3b3";
        bahrain__event.style.backgroundColor = "#4e4e4e";
        imola__event.style.color = "#b3b3b3";
        imola__event.style.backgroundColor = "#4e4e4e";
        portimao__event.style.color = "#b3b3b3";
        portimao__event.style.backgroundColor = "#4e4e4e";
        barcelona__event.style.color = "#b3b3b3";
        barcelona__event.style.backgroundColor = "#4e4e4e";
        monaco__event.style.color = "#b3b3b3";
        monaco__event.style.backgroundColor = "#4e4e4e";
        baku__event.style.color = "#b3b3b3";
        baku__event.style.backgroundColor = "#4e4e4e";
        montreal__event.style.color = "#b3b3b3";
        montreal__event.style.backgroundColor = "#4e4e4e";
        castellet__event.style.color = "#b3b3b3";
        castellet__event.style.backgroundColor = "#4e4e4e";
        spielberg__event.style.color = "#b3b3b3";
        spielberg__event.style.backgroundColor = "#4e4e4e";
        silverstone__event.style.color = "#b3b3b3";
        silverstone__event.style.backgroundColor = "#4e4e4e";
        budapest__event.style.color = "#b3b3b3";
        budapest__event.style.backgroundColor = "#4e4e4e";
        spa__event.style.color = "#b3b3b3";
        spa__event.style.backgroundColor = "#4e4e4e";
        zandvoort__event.style.color = "#b3b3b3";
        zandvoort__event.style.backgroundColor = "#4e4e4e";
        monza__event.style.color = "#b3b3b3";
        monza__event.style.backgroundColor = "#4e4e4e";
        sochi__event.style.color = "#b3b3b3";
        sochi__event.style.backgroundColor = "#4e4e4e";
        singapore__event.style.color = "#b3b3b3";
        singapore__event.style.backgroundColor = "#4e4e4e";
        suzuka__event.style.color = "#b3b3b3";
        suzuka__event.style.backgroundColor = "#4e4e4e";
        austin__event.style.color = "#b3b3b3";
        austin__event.style.backgroundColor = "#4e4e4e";
        mexico__event.style.color = "#b3b3b3";
        mexico__event.style.backgroundColor = "#4e4e4e";
    } else if (days__until__melbourne > -1) {
        melbourne__event.classList.add("active__event");
        bahrain__event.style.color = "#b3b3b3";
        bahrain__event.style.backgroundColor = "#4e4e4e";
        imola__event.style.color = "#b3b3b3";
        imola__event.style.backgroundColor = "#4e4e4e";
        portimao__event.style.color = "#b3b3b3";
        portimao__event.style.backgroundColor = "#4e4e4e";
        barcelona__event.style.color = "#b3b3b3";
        barcelona__event.style.backgroundColor = "#4e4e4e";
        monaco__event.style.color = "#b3b3b3";
        monaco__event.style.backgroundColor = "#4e4e4e";
        baku__event.style.color = "#b3b3b3";
        baku__event.style.backgroundColor = "#4e4e4e";
        montreal__event.style.color = "#b3b3b3";
        montreal__event.style.backgroundColor = "#4e4e4e";
        castellet__event.style.color = "#b3b3b3";
        castellet__event.style.backgroundColor = "#4e4e4e";
        spielberg__event.style.color = "#b3b3b3";
        spielberg__event.style.backgroundColor = "#4e4e4e";
        silverstone__event.style.color = "#b3b3b3";
        silverstone__event.style.backgroundColor = "#4e4e4e";
        budapest__event.style.color = "#b3b3b3";
        budapest__event.style.backgroundColor = "#4e4e4e";
        spa__event.style.color = "#b3b3b3";
        spa__event.style.backgroundColor = "#4e4e4e";
        zandvoort__event.style.color = "#b3b3b3";
        zandvoort__event.style.backgroundColor = "#4e4e4e";
        monza__event.style.color = "#b3b3b3";
        monza__event.style.backgroundColor = "#4e4e4e";
        sochi__event.style.color = "#b3b3b3";
        sochi__event.style.backgroundColor = "#4e4e4e";
        singapore__event.style.color = "#b3b3b3";
        singapore__event.style.backgroundColor = "#4e4e4e";
        suzuka__event.style.color = "#b3b3b3";
        suzuka__event.style.backgroundColor = "#4e4e4e";
        austin__event.style.color = "#b3b3b3";
        austin__event.style.backgroundColor = "#4e4e4e";
        mexico__event.style.color = "#b3b3b3";
        mexico__event.style.backgroundColor = "#4e4e4e";
        interlagos__event.style.color = "#b3b3b3";
        interlagos__event.style.backgroundColor = "#4e4e4e";
    } else if (days__until__jeddah > -1) {
        jeddah__event.classList.add("active__event");
        bahrain__event.style.color = "#b3b3b3";
        bahrain__event.style.backgroundColor = "#4e4e4e";
        imola__event.style.color = "#b3b3b3";
        imola__event.style.backgroundColor = "#4e4e4e";
        portimao__event.style.color = "#b3b3b3";
        portimao__event.style.backgroundColor = "#4e4e4e";
        barcelona__event.style.color = "#b3b3b3";
        barcelona__event.style.backgroundColor = "#4e4e4e";
        monaco__event.style.color = "#b3b3b3";
        monaco__event.style.backgroundColor = "#4e4e4e";
        baku__event.style.color = "#b3b3b3";
        baku__event.style.backgroundColor = "#4e4e4e";
        montreal__event.style.color = "#b3b3b3";
        montreal__event.style.backgroundColor = "#4e4e4e";
        castellet__event.style.color = "#b3b3b3";
        castellet__event.style.backgroundColor = "#4e4e4e";
        spielberg__event.style.color = "#b3b3b3";
        spielberg__event.style.backgroundColor = "#4e4e4e";
        silverstone__event.style.color = "#b3b3b3";
        silverstone__event.style.backgroundColor = "#4e4e4e";
        budapest__event.style.color = "#b3b3b3";
        budapest__event.style.backgroundColor = "#4e4e4e";
        spa__event.style.color = "#b3b3b3";
        spa__event.style.backgroundColor = "#4e4e4e";
        zandvoort__event.style.color = "#b3b3b3";
        zandvoort__event.style.backgroundColor = "#4e4e4e";
        monza__event.style.color = "#b3b3b3";
        monza__event.style.backgroundColor = "#4e4e4e";
        sochi__event.style.color = "#b3b3b3";
        sochi__event.style.backgroundColor = "#4e4e4e";
        singapore__event.style.color = "#b3b3b3";
        singapore__event.style.backgroundColor = "#4e4e4e";
        suzuka__event.style.color = "#b3b3b3";
        suzuka__event.style.backgroundColor = "#4e4e4e";
        austin__event.style.color = "#b3b3b3";
        austin__event.style.backgroundColor = "#4e4e4e";
        mexico__event.style.color = "#b3b3b3";
        mexico__event.style.backgroundColor = "#4e4e4e";
        interlagos__event.style.color = "#b3b3b3";
        interlagos__event.style.backgroundColor = "#4e4e4e";
        melbourne__event.style.color = "#b3b3b3";
        melbourne__event.style.backgroundColor = "#4e4e4e";
    } else if (days__until__UAE > -1) {
        emirates__event.classList.add("active__event");
        bahrain__event.style.color = "#b3b3b3";
        bahrain__event.style.backgroundColor = "#4e4e4e";
        imola__event.style.color = "#b3b3b3";
        imola__event.style.backgroundColor = "#4e4e4e";
        portimao__event.style.color = "#b3b3b3";
        portimao__event.style.backgroundColor = "#4e4e4e";
        barcelona__event.style.color = "#b3b3b3";
        barcelona__event.style.backgroundColor = "#4e4e4e";
        monaco__event.style.color = "#b3b3b3";
        monaco__event.style.backgroundColor = "#4e4e4e";
        baku__event.style.color = "#b3b3b3";
        baku__event.style.backgroundColor = "#4e4e4e";
        montreal__event.style.color = "#b3b3b3";
        montreal__event.style.backgroundColor = "#4e4e4e";
        castellet__event.style.color = "#b3b3b3";
        castellet__event.style.backgroundColor = "#4e4e4e";
        spielberg__event.style.color = "#b3b3b3";
        spielberg__event.style.backgroundColor = "#4e4e4e";
        silverstone__event.style.color = "#b3b3b3";
        silverstone__event.style.backgroundColor = "#4e4e4e";
        budapest__event.style.color = "#b3b3b3";
        budapest__event.style.backgroundColor = "#4e4e4e";
        spa__event.style.color = "#b3b3b3";
        spa__event.style.backgroundColor = "#4e4e4e";
        zandvoort__event.style.color = "#b3b3b3";
        zandvoort__event.style.backgroundColor = "#4e4e4e";
        monza__event.style.color = "#b3b3b3";
        monza__event.style.backgroundColor = "#4e4e4e";
        sochi__event.style.color = "#b3b3b3";
        sochi__event.style.backgroundColor = "#4e4e4e";
        singapore__event.style.color = "#b3b3b3";
        singapore__event.style.backgroundColor = "#4e4e4e";
        suzuka__event.style.color = "#b3b3b3";
        suzuka__event.style.backgroundColor = "#4e4e4e";
        austin__event.style.color = "#b3b3b3";
        austin__event.style.backgroundColor = "#4e4e4e";
        mexico__event.style.color = "#b3b3b3";
        mexico__event.style.backgroundColor = "#4e4e4e";
        interlagos__event.style.color = "#b3b3b3";
        interlagos__event.style.backgroundColor = "#4e4e4e";
        melbourne__event.style.color = "#b3b3b3";
        melbourne__event.style.backgroundColor = "#4e4e4e";
        jeddah__event.style.color = "#b3b3b3";
        jeddah__event.style.backgroundColor = "#4e4e4e";
    } else {
        bahrain__event.style.color = "#b3b3b3";
        bahrain__event.style.backgroundColor = "#4e4e4e";
        imola__event.style.color = "#b3b3b3";
        imola__event.style.backgroundColor = "#4e4e4e";
        portimao__event.style.color = "#b3b3b3";
        portimao__event.style.backgroundColor = "#4e4e4e";
        barcelona__event.style.color = "#b3b3b3";
        barcelona__event.style.backgroundColor = "#4e4e4e";
        monaco__event.style.color = "#b3b3b3";
        monaco__event.style.backgroundColor = "#4e4e4e";
        baku__event.style.color = "#b3b3b3";
        baku__event.style.backgroundColor = "#4e4e4e";
        montreal__event.style.color = "#b3b3b3";
        montreal__event.style.backgroundColor = "#4e4e4e";
        castellet__event.style.color = "#b3b3b3";
        castellet__event.style.backgroundColor = "#4e4e4e";
        spielberg__event.style.color = "#b3b3b3";
        spielberg__event.style.backgroundColor = "#4e4e4e";
        silverstone__event.style.color = "#b3b3b3";
        silverstone__event.style.backgroundColor = "#4e4e4e";
        budapest__event.style.color = "#b3b3b3";
        budapest__event.style.backgroundColor = "#4e4e4e";
        spa__event.style.color = "#b3b3b3";
        spa__event.style.backgroundColor = "#4e4e4e";
        zandvoort__event.style.color = "#b3b3b3";
        zandvoort__event.style.backgroundColor = "#4e4e4e";
        monza__event.style.color = "#b3b3b3";
        monza__event.style.backgroundColor = "#4e4e4e";
        sochi__event.style.color = "#b3b3b3";
        sochi__event.style.backgroundColor = "#4e4e4e";
        singapore__event.style.color = "#b3b3b3";
        singapore__event.style.backgroundColor = "#4e4e4e";
        suzuka__event.style.color = "#b3b3b3";
        suzuka__event.style.backgroundColor = "#4e4e4e";
        austin__event.style.color = "#b3b3b3";
        austin__event.style.backgroundColor = "#4e4e4e";
        mexico__event.style.color = "#b3b3b3";
        mexico__event.style.backgroundColor = "#4e4e4e";
        interlagos__event.style.color = "#b3b3b3";
        interlagos__event.style.backgroundColor = "#4e4e4e";
        melbourne__event.style.color = "#b3b3b3";
        melbourne__event.style.backgroundColor = "#4e4e4e";
        jeddah__event.style.color = "#b3b3b3";
        jeddah__event.style.backgroundColor = "#4e4e4e";
        emirates__event.style.color = "#b3b3b3";
        emirates__event.style.backgroundColor = "#4e4e4e";
        bahrain__event.classList.add("active__event");
    }
};

// function that removes the active class from all event elements
const removeActiveEventClass = function() { 
    bahrain__event.classList.remove("active__event");
    imola__event.classList.remove("active__event");
    portimao__event.classList.remove("active__event");
    barcelona__event.classList.remove("active__event");
    monaco__event.classList.remove("active__event");
    baku__event.classList.remove("active__event");
    montreal__event.classList.remove("active__event");
    castellet__event.classList.remove("active__event");
    spielberg__event.classList.remove("active__event");
    silverstone__event.classList.remove("active__event");
    budapest__event.classList.remove("active__event");
    spa__event.classList.remove("active__event");
    zandvoort__event.classList.remove("active__event");
    monza__event.classList.remove("active__event");
    sochi__event.classList.remove("active__event");
    singapore__event.classList.remove("active__event");
    suzuka__event.classList.remove("active__event");
    austin__event.classList.remove("active__event");
    mexico__event.classList.remove("active__event");
    interlagos__event.classList.remove("active__event");
    melbourne__event.classList.remove("active__event");
    jeddah__event.classList.remove("active__event");
    emirates__event.classList.remove("active__event");
};

// event listener that performs functions when the page loads
window.addEventListener("load", () => {
    getWeatherData();
});

// event listener that makes bahrain the active event and displays its data on click
bahrain__event.addEventListener("click", function(){
    if (bahrain__event.classList.contains("active__event")) {
        console.log("bahrain already is the active event");
        return;
    } else {
        removeActiveEventClass();
        console.log("removed all active event classses");
        bahrain__event.classList.add("active__event");
        console.log("added active class to bahrain event");
        displayActiveEventData();
    }
});

// event listener that makes imola the active event and displays its data on click
imola__event.addEventListener("click", function(){
    if (imola__event.classList.contains("active__event")) {
        console.log("imola already is the active event");
        return;
    } else {
        removeActiveEventClass();
        console.log("removed all active event classses");
        imola__event.classList.add("active__event");
        console.log("added active class to imola event");
        displayActiveEventData();
    }
});

// event listener that makes portimao the active event and displays its data on click
portimao__event.addEventListener("click", function(){
    if (portimao__event.classList.contains("active__event")) {
        console.log("portimao already is the active event");
        return;
    } else {
        removeActiveEventClass();
        console.log("removed all active event classses");
        portimao__event.classList.add("active__event");
        console.log("added active class to portimao event");
        displayActiveEventData();
    }
});

// event listener that makes barcelona the active event and displays its data on click
barcelona__event.addEventListener("click", function(){
    if (barcelona__event.classList.contains("active__event")) {
        console.log("barcelona already is the active event");
        return;
    } else {
        removeActiveEventClass();
        console.log("removed all active event classses");
        barcelona__event.classList.add("active__event");
        console.log("added active class to barcelona event");
        displayActiveEventData();
    }
});

// event listener that makes monaco the active event and displays its data on click
monaco__event.addEventListener("click", function(){
    if (monaco__event.classList.contains("active__event")) {
        console.log("monaco already is the active event");
        return;
    } else {
        removeActiveEventClass();
        console.log("removed all active event classses");
        monaco__event.classList.add("active__event");
        console.log("added active class to monaco event");
        displayActiveEventData();
    }
});

// event listener that makes baku the active event and displays its data on click
baku__event.addEventListener("click", function(){
    if (baku__event.classList.contains("active__event")) {
        console.log("baku already is the active event");
        return;
    } else {
        removeActiveEventClass();
        console.log("removed all active event classses");
        baku__event.classList.add("active__event");
        console.log("added active class to baku event");
        displayActiveEventData();
    }
});

// event listener that makes montreal the active event and displays its data on click
montreal__event.addEventListener("click", function(){
    if (montreal__event.classList.contains("active__event")) {
        console.log("montreal already is the active event");
        return;
    } else {
        removeActiveEventClass();
        console.log("removed all active event classses");
        montreal__event.classList.add("active__event");
        console.log("added active class to montreal event");
        displayActiveEventData();
    }
});

// event listener that makes castellet the active event and displays its data on click
castellet__event.addEventListener("click", function(){
    if (castellet__event.classList.contains("active__event")) {
        console.log("castellet already is the active event");
        return;
    } else {
        removeActiveEventClass();
        console.log("removed all active event classses");
        castellet__event.classList.add("active__event");
        console.log("added active class to castellet event");
        displayActiveEventData();
    }
});

// event listener that makes spielberg the active event and displays its data on click
spielberg__event.addEventListener("click", function(){
    if (spielberg__event.classList.contains("active__event")) {
        console.log("spielberg already is the active event");
        return;
    } else {
        removeActiveEventClass();
        console.log("removed all active event classses");
        spielberg__event.classList.add("active__event");
        console.log("added active class to spielberg event");
        displayActiveEventData();
    }
});

// event listener that makes silverstone the active event and displays its data on click
silverstone__event.addEventListener("click", function(){
    if (silverstone__event.classList.contains("active__event")) {
        console.log("silverstone already is the active event");
        return;
    } else {
        removeActiveEventClass();
        console.log("removed all active event classses");
        silverstone__event.classList.add("active__event");
        console.log("added active class to silverstone event");
        displayActiveEventData();
    }
});

// event listener that makes budapest the active event and displays its data on click
budapest__event.addEventListener("click", function(){
    if (budapest__event.classList.contains("active__event")) {
        console.log("budapest already is the active event");
        return;
    } else {
        removeActiveEventClass();
        console.log("removed all active event classses");
        budapest__event.classList.add("active__event");
        console.log("added active class to budapest event");
        displayActiveEventData();
    }
});

// event listener that makes spa the active event and displays its data on click
spa__event.addEventListener("click", function(){
    if (spa__event.classList.contains("active__event")) {
        console.log("spa already is the active event");
        return;
    } else {
        removeActiveEventClass();
        console.log("removed all active event classses");
        spa__event.classList.add("active__event");
        console.log("added active class to spa event");
        displayActiveEventData();
    }
});

// event listener that makes zandvoort the active event and displays its data on click
zandvoort__event.addEventListener("click", function(){
    if (zandvoort__event.classList.contains("active__event")) {
        console.log("zandvoort already is the active event");
        return;
    } else {
        removeActiveEventClass();
        console.log("removed all active event classses");
        zandvoort__event.classList.add("active__event");
        console.log("added active class to zandvoort event");
        displayActiveEventData();
    }
});

// event listener that makes monza the active event and displays its data on click
monza__event.addEventListener("click", function(){
    if (monza__event.classList.contains("active__event")) {
        console.log("monza already is the active event");
        return;
    } else {
        removeActiveEventClass();
        console.log("removed all active event classses");
        monza__event.classList.add("active__event");
        console.log("added active class to monza event");
        displayActiveEventData();
    }
});

// event listener that makes sochi the active event and displays its data on click
sochi__event.addEventListener("click", function(){
    if (sochi__event.classList.contains("active__event")) {
        console.log("sochi already is the active event");
        return;
    } else {
        removeActiveEventClass();
        console.log("removed all active event classses");
        sochi__event.classList.add("active__event");
        console.log("added active class to sochi event");
        displayActiveEventData();
    }
});

// event listener that makes singapore the active event and displays its data on click
singapore__event.addEventListener("click", function(){
    if (singapore__event.classList.contains("active__event")) {
        console.log("singapore already is the active event");
        return;
    } else {
        removeActiveEventClass();
        console.log("removed all active event classses");
        singapore__event.classList.add("active__event");
        console.log("added active class to singapore event");
        displayActiveEventData();
    }
});

// event listener that makes suzuka the active event and displays its data on click
suzuka__event.addEventListener("click", function(){
    if (suzuka__event.classList.contains("active__event")) {
        console.log("suzuka already is the active event");
        return;
    } else {
        removeActiveEventClass();
        console.log("removed all active event classses");
        suzuka__event.classList.add("active__event");
        console.log("added active class to suzuka event");
        displayActiveEventData();
    }
});

// event listener that makes austin the active event and displays its data on click
austin__event.addEventListener("click", function(){
    if (austin__event.classList.contains("active__event")) {
        console.log("austin already is the active event");
        return;
    } else {
        removeActiveEventClass();
        console.log("removed all active event classses");
        austin__event.classList.add("active__event");
        console.log("added active class to austin event");
        displayActiveEventData();
    }
});

// function that allows you to change a date to the prefered date format
/* credits #? */
const DateFormatter = {
  monthNames: [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ],
  dayNames: [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ],
  formatDate: function (date, format) {
    var self = this;
    format = self.getProperDigits(format, /d+/gi, date.getDate());
    format = self.getProperDigits(format, /M+/g, date.getMonth() + 1);
    format = format.replace(/y+/gi, function (y) {
      var len = y.length;
      var year = date.getFullYear();
      if (len == 2) return (year + "").slice(-2);
      else if (len == 4) return year;
      return y;
    });
    format = self.getProperDigits(format, /H+/g, date.getHours());
    format = self.getProperDigits(
      format,
      /h+/g,
      self.getHours12(date.getHours())
    );
    format = self.getProperDigits(format, /m+/g, date.getMinutes());
    format = self.getProperDigits(format, /s+/gi, date.getSeconds());
    format = format.replace(/a/gi, function (a) {
      var amPm = self.getAmPm(date.getHours());
      if (a === "A") return amPm.toUpperCase();
      return amPm;
    });
    format = self.getFullOr3Letters(
      format,
      /d+/gi,
      self.dayNames,
      date.getDay()
    );
    format = self.getFullOr3Letters(
      format,
      /M+/g,
      self.monthNames,
      date.getMonth()
    );
    return format;
  },
  getProperDigits: function (format, regex, value) {
    return format.replace(regex, function (m) {
      var length = m.length;
      if (length == 1) return value;
      else if (length == 2) return ("0" + value).slice(-2);
      return m;
    });
  },
  getHours12: function (hours) {
    // https://stackoverflow.com/questions/10556879/changing-the-1-24-hour-to-1-12-hour-for-the-gethours-method
    return (hours + 24) % 12 || 12;
  },
  getAmPm: function (hours) {
    // https://stackoverflow.com/questions/8888491/how-do-you-display-javascript-datetime-in-12-hour-am-pm-format
    return hours >= 12 ? "pm" : "am";
  },
  getFullOr3Letters: function (format, regex, nameArray, value) {
    return format.replace(regex, function (s) {
      var len = s.length;
      if (len == 3) return nameArray[value].substr(0, 3);
      else if (len == 4) return nameArray[value];
      return s;
    });
  },
};

// function that switches between temperature units Celcius and Fahrenheit
const switchTempUnits = function() { 
    if (tempUnitsCelsius === true) {
        // change to Fahrenheit
        tempUnitsCelsius = false;
        displayActiveEventData();
    } else if (tempUnitsCelsius === false) {
        // change to Celcius
        tempUnitsCelsius = true;
        displayActiveEventData();
    } else {
        return;
    };
};

// function that removes the active button ID
const removeActiveButton = function() { 
    weather__button.removeAttribute('id');
    track__button.removeAttribute('id');
    schedule__button.removeAttribute('id');
}

// event listeners that switch temperature units on click
weather__1.addEventListener("click", function(){
    switchTempUnits();
});
weather__2.addEventListener("click", function(){
    switchTempUnits();
});
weather__3.addEventListener("click", function(){
    switchTempUnits();
});
weather__4.addEventListener("click", function(){
    switchTempUnits();
});
temp__button.addEventListener("click", function(){
    switchTempUnits();
});

// event listeners for the dashboard buttons that switch display data on click
weather__button.addEventListener("click", function(){
    if (weather__button.hasAttribute('id')) {
        return;
    } else {
        removeActiveButton();
        weather__button.id = "active__button";
    }
});
track__button.addEventListener("click", function(){
    if (track__button.hasAttribute('id')) {
        return;
    } else {
        removeActiveButton();
        track__button.id = "active__button";
    }
});
schedule__button.addEventListener("click", function(){
    if (schedule__button.hasAttribute('id')) {
        return;
    } else {
        removeActiveButton();
        schedule__button.id = "active__button";
    }
});
