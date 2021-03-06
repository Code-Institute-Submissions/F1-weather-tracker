// enable strict mode
'use strict';

// track coordinates (latitude & longitude)
const bahrain__coordinates = `26.032,50.511`;
const imola__coordinates = `44.3435,11.707`;
const portimao__coordinates = `37.233,-8.629`;
const barcelona__coordinates = `41.57,2.26`;
const monaco__coordinates = `43.735,7.422`;
const baku__coordinates = `40.373,49.853`;
const montreal__coordinates = `45.504,-73.524`;
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
const melbourne__coordinates = `-37.851,144.97`;
const jeddah__coordinates = `21.602,39.108`;
const UAE__coordinates = `24.467,54.603`;

// weather API link
const weather__API = `https://api.worldweatheronline.com/premium/v1/weather.ashx?key=caac914d16a4477d9f6210111211502&q=${bahrain__coordinates};${imola__coordinates};${portimao__coordinates};${barcelona__coordinates};${monaco__coordinates};${baku__coordinates};${montreal__coordinates};${castellet__coordinates};${spielberg__coordinates};${silverstone__coordinates};${budapest__coordinates};${spa__coordinates};${zandvoort__coordinates};${monza__coordinates};${sochi__coordinates};${singapore__coordinates};${suzuka__coordinates};${austin__coordinates};${mexico__coordinates};${interlagos__coordinates};${melbourne__coordinates};${jeddah__coordinates};${UAE__coordinates}&format=json&num_of_days=1&tp=1`;

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

// race calendar elements selectors
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

// individual hamburger menu icon container selectors for each event
const HIC__bahrain = document.querySelector(".HIC__bahrain");
const HIC__imola = document.querySelector(".HIC__imola");
const HIC__portimao = document.querySelector(".HIC__portimao");
const HIC__barcelona = document.querySelector(".HIC__barcelona");
const HIC__monaco = document.querySelector(".HIC__monaco");
const HIC__baku = document.querySelector(".HIC__baku");
const HIC__montreal = document.querySelector(".HIC__montreal");
const HIC__castellet = document.querySelector(".HIC__castellet");
const HIC__spielberg = document.querySelector(".HIC__spielberg");
const HIC__silverstone = document.querySelector(".HIC__silverstone");
const HIC__budapest = document.querySelector(".HIC__budapest");
const HIC__spa = document.querySelector(".HIC__spa");
const HIC__zandvoort = document.querySelector(".HIC__zandvoort");
const HIC__monza = document.querySelector(".HIC__monza");
const HIC__sochi = document.querySelector(".HIC__sochi");
const HIC__singapore = document.querySelector(".HIC__singapore");
const HIC__suzuka = document.querySelector(".HIC__suzuka");
const HIC__austin = document.querySelector(".HIC__austin");
const HIC__mexico = document.querySelector(".HIC__mexico");
const HIC__interlagos = document.querySelector(".HIC__interlagos");
const HIC__melbourne = document.querySelector(".HIC__melbourne");
const HIC__jeddah = document.querySelector(".HIC__jeddah");
const HIC__emirates = document.querySelector(".HIC__emirates");

// individual track info selectors
const track__info__template = document.querySelector(".track__info__template");
const track__info__bahrain = document.querySelector(".track__info__bahrain");
const track__info__imola = document.querySelector(".track__info__imola");
const track__info__portimao = document.querySelector(".track__info__portimao");
const track__info__barcelona = document.querySelector(".track__info__barcelona");
const track__info__monaco = document.querySelector(".track__info__monaco");
const track__info__baku = document.querySelector(".track__info__baku");
const track__info__montreal = document.querySelector(".track__info__montreal");
const track__info__castellet = document.querySelector(".track__info__castellet");
const track__info__spielberg = document.querySelector(".track__info__spielberg");
const track__info__silverstone = document.querySelector(".track__info__silverstone");
const track__info__budapest = document.querySelector(".track__info__budapest");
const track__info__spa = document.querySelector(".track__info__spa");
const track__info__zandvoort = document.querySelector(".track__info__zandvoort");
const track__info__monza = document.querySelector(".track__info__monza");
const track__info__sochi = document.querySelector(".track__info__sochi");
const track__info__singapore = document.querySelector(".track__info__singapore");
const track__info__suzuka = document.querySelector(".track__info__suzuka");
const track__info__austin = document.querySelector(".track__info__austin");
const track__info__mexico = document.querySelector(".track__info__mexico");
const track__info__interlagos = document.querySelector(".track__info__interlagos");
const track__info__melbourne = document.querySelector(".track__info__melbourne");
const track__info__jeddah = document.querySelector(".track__info__jeddah");
const track__info__emirates = document.querySelector(".track__info__emirates");

// track session time selectors
const time__P1 = document.querySelector(".time__P1");
const time__P2 = document.querySelector(".time__P2");
const time__P3 = document.querySelector(".time__P3");
const time__Q = document.querySelector(".time__Q");
const time__R = document.querySelector(".time__R");

// location, local time and start time containers selectors
const race__location = document.querySelector("#location");
const local__time = document.querySelector("#local__time");
const start__time__container = document.querySelector(".start__time__container");

// dashboard buttons selectors
const weather__button = document.querySelector(".weather__button");
const track__button = document.querySelector(".track__button");
const schedule__button = document.querySelector(".schedule__button");
const temp__button = document.querySelector("#temp__button");

// website name selector
const website__name = document.querySelector(".website__name");
// main homepage container selector
const main__homepage__container = document.querySelector(".main__homepage__container");
// weather and location info container selector
const weather__location__info__container = document.querySelector(".weather__location__info__container");
// track info container selector
const track__info__container = document.querySelector(".track__info__container");
// time info container selector
const time__info__container = document.querySelector(".time__info__container");
// countdown timer container selector
const race__countdown__timer = document.querySelector(".race__countdown__timer__container");

// individual race start date and time (UNIX timestamps)
const bahrain__race__start = new Date(Date.UTC(2021, 2, 28, 16, 0, 0));
const imola__race__start = new Date(Date.UTC(2021, 3, 18, 14, 0, 0));
const portimao__race__start = new Date(Date.UTC(2021, 4, 2, 14, 0, 0));
const barcelona__race__start = new Date(Date.UTC(2021, 4, 9, 14, 0, 0));
const monaco__race__start = new Date(Date.UTC(2021, 4, 23, 14, 0, 0));
const baku__race__start = new Date(Date.UTC(2021, 5, 6, 13, 0, 0));
const montreal__race__start = new Date(Date.UTC(2021, 5, 13, 19, 0, 0));
const castellet__race__start = new Date(Date.UTC(2021, 5, 27, 14, 0, 0));
const spielberg__race__start = new Date(Date.UTC(2021, 6, 4, 14, 0, 0));
const silverstone__race__start = new Date(Date.UTC(2021, 6, 18, 15, 0, 0));
const budapest__race__start = new Date(Date.UTC(2021, 7, 1, 14, 0, 0));
const spa__race__start = new Date(Date.UTC(2021, 7, 29, 14, 0, 0));
const zandvoort__race__start = new Date(Date.UTC(2021, 8, 5, 14, 0, 0));
const monza__race__start = new Date(Date.UTC(2021, 8, 12, 14, 0, 0));
const sochi__race__start = new Date(Date.UTC(2021, 8, 26, 13, 0, 0));
const singapore__race__start = new Date(Date.UTC(2021, 9, 3, 13, 0, 0));
const suzuka__race__start = new Date(Date.UTC(2021, 9, 10, 6, 0, 0));
const austin__race__start = new Date(Date.UTC(2021, 9, 24, 20, 0, 0));
const mexico__race__start = new Date(Date.UTC(2021, 9, 31, 19, 0, 0));
const interlagos__race__start = new Date(Date.UTC(2021, 10, 7, 17, 0, 0));
const melbourne__race__start = new Date(Date.UTC(2021, 10, 21, 6, 0, 0));
const jeddah__race__start = new Date(Date.UTC(2021, 11, 5, 18, 0, 0));
const UAE__race__start = new Date(Date.UTC(2021, 11, 12, 15, 0, 0));

// register the current date as a UNIX timestamp and calculate the number of days until every individual race start
let current__date = new Date(); // get current date
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

// set boolean value for the celcius/fahrenheit switch
let tempUnitsCelsius = true;

// set boolean value that indicates if the race calendar is expanded or collapsed
let mobileCalendarExpanded = false;

// function that checks what the closest race on the calendar is, then gives active class to the closest race, then greys out past races
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

// execute checkClosestRace function
checkClosestRace();

// function that hides all hamburger menu icons
const hideAllHamburgerIcons = function() { 
    HIC__bahrain.style.display = "none";
    HIC__imola.style.display = "none";
    HIC__portimao.style.display = "none";
    HIC__barcelona.style.display = "none";
    HIC__monaco.style.display = "none";
    HIC__baku.style.display = "none";
    HIC__montreal.style.display = "none";
    HIC__castellet.style.display = "none";
    HIC__spielberg.style.display = "none";
    HIC__silverstone.style.display = "none";
    HIC__budapest.style.display = "none";
    HIC__spa.style.display = "none";
    HIC__zandvoort.style.display = "none";
    HIC__monza.style.display = "none";
    HIC__sochi.style.display = "none";
    HIC__singapore.style.display = "none";
    HIC__suzuka.style.display = "none";
    HIC__austin.style.display = "none";
    HIC__mexico.style.display = "none";
    HIC__interlagos.style.display = "none";
    HIC__melbourne.style.display = "none";
    HIC__jeddah.style.display = "none";
    HIC__emirates.style.display = "none";
};

// function that lets all the race events (the entire race calendar) be displayed
const showAllEvents = function() { 
    bahrain__event.style.display = "flex";
    imola__event.style.display = "flex";
    portimao__event.style.display = "flex";
    barcelona__event.style.display = "flex";
    monaco__event.style.display = "flex";
    baku__event.style.display = "flex";
    montreal__event.style.display = "flex";
    castellet__event.style.display = "flex";
    spielberg__event.style.display = "flex";
    silverstone__event.style.display = "flex";
    budapest__event.style.display = "flex";
    spa__event.style.display = "flex";
    zandvoort__event.style.display = "flex";
    monza__event.style.display = "flex";
    sochi__event.style.display = "flex";
    singapore__event.style.display = "flex";
    suzuka__event.style.display = "flex";
    austin__event.style.display = "flex";
    mexico__event.style.display = "flex";
    interlagos__event.style.display = "flex";
    melbourne__event.style.display = "flex";
    jeddah__event.style.display = "flex";
    emirates__event.style.display = "flex";
};

// function that lets all 3 data type containers (track, time and weather info) be displayed
const allDataContainersVisible = function() { 
    weather__location__info__container.style.display = "flex";
    track__info__container.style.display = "flex";
    time__info__container.style.display = "flex";
};

// function that only displays the hamburger menu icon on the actice race calendar event (by hiding all hamburger menu icons, then displaying the active event one)
const showActiveEventHamburgerIcon = function() { 
	if (bahrain__event.classList.contains("active__event")) {
        hideAllHamburgerIcons();
        HIC__bahrain.style.display = "flex";
    } else if (imola__event.classList.contains("active__event")) {
        hideAllHamburgerIcons();
        HIC__imola.style.display = "flex";
    } else if (portimao__event.classList.contains("active__event")) {
        hideAllHamburgerIcons();
        HIC__portimao.style.display = "flex";
    } else if (barcelona__event.classList.contains("active__event")) {
        hideAllHamburgerIcons();
        HIC__barcelona.style.display = "flex";
    } else if (monaco__event.classList.contains("active__event")) {
        hideAllHamburgerIcons();
        HIC__monaco.style.display = "flex";
    } else if (baku__event.classList.contains("active__event")) {
        hideAllHamburgerIcons();
        HIC__baku.style.display = "flex";
    } else if (montreal__event.classList.contains("active__event")) {
        hideAllHamburgerIcons();
        HIC__montreal.style.display = "flex";
    } else if (castellet__event.classList.contains("active__event")) {
        hideAllHamburgerIcons();
        HIC__castellet.style.display = "flex";
    } else if (spielberg__event.classList.contains("active__event")) {
        hideAllHamburgerIcons();
        HIC__spielberg.style.display = "flex";
    } else if (silverstone__event.classList.contains("active__event")) {
        hideAllHamburgerIcons();
        HIC__silverstone.style.display = "flex";
    } else if (budapest__event.classList.contains("active__event")) {
        hideAllHamburgerIcons();
        HIC__budapest.style.display = "flex";
    } else if (spa__event.classList.contains("active__event")) {
        hideAllHamburgerIcons();
        HIC__spa.style.display = "flex";
    } else if (zandvoort__event.classList.contains("active__event")) {
        hideAllHamburgerIcons();
        HIC__zandvoort.style.display = "flex";
    } else if (monza__event.classList.contains("active__event")) {
        hideAllHamburgerIcons();
        HIC__monza.style.display = "flex";
    } else if (sochi__event.classList.contains("active__event")) {
        hideAllHamburgerIcons();
        HIC__sochi.style.display = "flex";
    } else if (singapore__event.classList.contains("active__event")) {
        hideAllHamburgerIcons();
        HIC__singapore.style.display = "flex";
    } else if (suzuka__event.classList.contains("active__event")) {
        hideAllHamburgerIcons();
        HIC__suzuka.style.display = "flex";
    } else if (austin__event.classList.contains("active__event")) {
        hideAllHamburgerIcons();
        HIC__austin.style.display = "flex";
    } else if (mexico__event.classList.contains("active__event")) {
        hideAllHamburgerIcons();
        HIC__mexico.style.display = "flex";
    } else if (interlagos__event.classList.contains("active__event")) {
        hideAllHamburgerIcons();
        HIC__interlagos.style.display = "flex";
    } else if (melbourne__event.classList.contains("active__event")) {
        hideAllHamburgerIcons();
        HIC__melbourne.style.display = "flex";
    } else if (jeddah__event.classList.contains("active__event")) {
        hideAllHamburgerIcons();
        HIC__jeddah.style.display = "flex";
    } else if (emirates__event.classList.contains("active__event")) {
        hideAllHamburgerIcons();
        HIC__emirates.style.display = "flex";
    } else {
        return;
    }
};

// function that hides all race calendar events
const hideAllEvents = function() { 
    bahrain__event.style.display = "none";
    imola__event.style.display = "none";
    portimao__event.style.display = "none";
    barcelona__event.style.display = "none";
    monaco__event.style.display = "none";
    baku__event.style.display = "none";
    montreal__event.style.display = "none";
    castellet__event.style.display = "none";
    spielberg__event.style.display = "none";
    silverstone__event.style.display = "none";
    budapest__event.style.display = "none";
    spa__event.style.display = "none";
    zandvoort__event.style.display = "none";
    monza__event.style.display = "none";
    sochi__event.style.display = "none";
    singapore__event.style.display = "none";
    suzuka__event.style.display = "none";
    austin__event.style.display = "none";
    mexico__event.style.display = "none";
    interlagos__event.style.display = "none";
    melbourne__event.style.display = "none";
    jeddah__event.style.display = "none";
    emirates__event.style.display = "none";
};

// function that lets only one calendar event be displayed (by hiding all calendar events, then display the active event one)
const showActiveEventOnly = function() { 
	if (bahrain__event.classList.contains("active__event")) {
        hideAllEvents();
        bahrain__event.style.display = "flex";
    } else if (imola__event.classList.contains("active__event")) {
        hideAllEvents();
        imola__event.style.display = "flex";
    } else if (portimao__event.classList.contains("active__event")) {
        hideAllEvents();
        portimao__event.style.display = "flex";
    } else if (barcelona__event.classList.contains("active__event")) {
        hideAllEvents();
        barcelona__event.style.display = "flex";
    } else if (monaco__event.classList.contains("active__event")) {
        hideAllEvents();
        monaco__event.style.display = "flex";
    } else if (baku__event.classList.contains("active__event")) {
        hideAllEvents();
        baku__event.style.display = "flex";
    } else if (montreal__event.classList.contains("active__event")) {
        hideAllEvents();
        montreal__event.style.display = "flex";
    } else if (castellet__event.classList.contains("active__event")) {
        hideAllEvents();
        castellet__event.style.display = "flex";
    } else if (spielberg__event.classList.contains("active__event")) {
        hideAllEvents();
        spielberg__event.style.display = "flex";
    } else if (silverstone__event.classList.contains("active__event")) {
        hideAllEvents();
        silverstone__event.style.display = "flex";
    } else if (budapest__event.classList.contains("active__event")) {
        hideAllEvents();
        budapest__event.style.display = "flex";
    } else if (spa__event.classList.contains("active__event")) {
        hideAllEvents();
        spa__event.style.display = "flex";
    } else if (zandvoort__event.classList.contains("active__event")) {
        hideAllEvents();
        zandvoort__event.style.display = "flex";
    } else if (monza__event.classList.contains("active__event")) {
        hideAllEvents();
        monza__event.style.display = "flex";
    } else if (sochi__event.classList.contains("active__event")) {
        hideAllEvents();
        sochi__event.style.display = "flex";
    } else if (singapore__event.classList.contains("active__event")) {
        hideAllEvents();
        singapore__event.style.display = "flex";
    } else if (suzuka__event.classList.contains("active__event")) {
        hideAllEvents();
        suzuka__event.style.display = "flex";
    } else if (austin__event.classList.contains("active__event")) {
        hideAllEvents();
        austin__event.style.display = "flex";
    } else if (mexico__event.classList.contains("active__event")) {
        hideAllEvents();
        mexico__event.style.display = "flex";
    } else if (interlagos__event.classList.contains("active__event")) {
        hideAllEvents();
        interlagos__event.style.display = "flex";
    } else if (melbourne__event.classList.contains("active__event")) {
        hideAllEvents();
        melbourne__event.style.display = "flex";
    } else if (jeddah__event.classList.contains("active__event")) {
        hideAllEvents();
        jeddah__event.style.display = "flex";
    } else if (emirates__event.classList.contains("active__event")) {
        hideAllEvents();
        emirates__event.style.display = "flex";
    } else {
        return;
    }
};

// function that lets only one of the track, time or weather data containers be displayed
const displayActiveEventDataMobile = function() { 
    if (weather__location__info__container.classList.contains("weather__data__active")) {
        track__info__container.style.display = "none";
        time__info__container.style.display = "none";
        weather__location__info__container.style.display = "flex";
    } else if (track__info__container.classList.contains("track__data__active")) {
        time__info__container.style.display = "none";
        weather__location__info__container.style.display = "none";
        track__info__container.style.display = "flex";
    } else if (time__info__container.classList.contains("schedule__data__active")) {
        track__info__container.style.display = "none";
        weather__location__info__container.style.display = "none";
        time__info__container.style.display = "flex";
    } else {
        return;
    }
};

// function that checks whether to display the whole race calendar or just a single event
/* credits #5 (see README.md credits section) */
const checkMainFlexDirection = function() { 
    if (window.getComputedStyle(main__homepage__container, null).getPropertyValue("flex-direction") === "row") {
        hideAllHamburgerIcons();
        showAllEvents();
        allDataContainersVisible();
    } else if (window.getComputedStyle(main__homepage__container, null).getPropertyValue("flex-direction") === "column" && mobileCalendarExpanded === false) {
        showActiveEventHamburgerIcon();
        showActiveEventOnly();
        displayActiveEventDataMobile();
    } else if (window.getComputedStyle(main__homepage__container, null).getPropertyValue("flex-direction") === "column" && mobileCalendarExpanded === true) {
        hideAllHamburgerIcons();
        HIC__bahrain.style.display = "flex";
        showAllEvents();
        displayActiveEventDataMobile();
    }  else {
        return;
    }
};

// execute function to set initial hamburger menu icons and displayed event data
checkMainFlexDirection();

// function that calculates the days, hours and minutes until the race start of the active event based on the race start time data, then places the results into the countdown timer container text contents
/* credits #7 (see README.md credits section) */
const calculateCountdown = function (raceStart, raceLocation) {

    // Get today's date and time
    let current__date__time = new Date();

    // calculate time between now and the race start
    let distance = raceStart - current__date__time;

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));

    /* credits #5 (see README.md credits section) */
    if (window.getComputedStyle(website__name, null).getPropertyValue("color") === "rgb(255, 201, 40)") {
        race__countdown__timer.textContent = `${raceLocation} race start countdown: ${days}d -- ${hours}h -- ${minutes}m`;
    } else {
        race__countdown__timer.textContent = `${raceLocation} race start countdown: ${days} days -- ${hours} hours -- ${minutes} minutes`;
    }

    if (distance < 0) {
        race__countdown__timer.textContent = "Countdown has expired.";
    }
};

// function that executes the calculateCountdown function with parameters based on the active race event
const setInitialCountdown = function() {
    if (bahrain__event.classList.contains("active__event")) {
        calculateCountdown(bahrain__race__start, "Bahrain");
    } else if (imola__event.classList.contains("active__event")) {
        calculateCountdown(imola__race__start, "Imola");
    } else if (portimao__event.classList.contains("active__event")) {
        calculateCountdown(portimao__race__start, "Portimão");
    } else if (barcelona__event.classList.contains("active__event")) {
        calculateCountdown(barcelona__race__start, "Barcelona");
    } else if (monaco__event.classList.contains("active__event")) {
        calculateCountdown(monaco__race__start, "Monaco");
    } else if (baku__event.classList.contains("active__event")) {
        calculateCountdown(baku__race__start, "Baku");
    } else if (montreal__event.classList.contains("active__event")) {
        calculateCountdown(montreal__race__start, "Montreal");
    } else if (castellet__event.classList.contains("active__event")) {
        calculateCountdown(castellet__race__start, "Castellet");
    } else if (spielberg__event.classList.contains("active__event")) {
        calculateCountdown(spielberg__race__start, "Spielberg");
    } else if (silverstone__event.classList.contains("active__event")) {
        calculateCountdown(silverstone__race__start, "Silverstone");
    } else if (budapest__event.classList.contains("active__event")) {
        calculateCountdown(budapest__race__start, "Budapest");
    } else if (spa__event.classList.contains("active__event")) {
        calculateCountdown(spa__race__start, "Spa");
    } else if (zandvoort__event.classList.contains("active__event")) {
        calculateCountdown(zandvoort__race__start, "Zandvoort");
    } else if (monza__event.classList.contains("active__event")) {
        calculateCountdown(monza__race__start, "Monza");
    } else if (sochi__event.classList.contains("active__event")) {
        calculateCountdown(sochi__race__start, "Sochi");
    } else if (singapore__event.classList.contains("active__event")) {
        calculateCountdown(singapore__race__start, "Singapore");
    } else if (suzuka__event.classList.contains("active__event")) {
        calculateCountdown(suzuka__race__start, "Suzuka");
    } else if (austin__event.classList.contains("active__event")) {
        calculateCountdown(austin__race__start, "Austin");
    } else if (mexico__event.classList.contains("active__event")) {
        calculateCountdown(mexico__race__start, "Mexico");
    } else if (interlagos__event.classList.contains("active__event")) {
        calculateCountdown(interlagos__race__start, "Interlagos");
    } else if (melbourne__event.classList.contains("active__event")) {
        calculateCountdown(melbourne__race__start, "Melbourne");
    } else if (jeddah__event.classList.contains("active__event")) {
        calculateCountdown(jeddah__race__start, "Jeddah");
    } else if (emirates__event.classList.contains("active__event")) {
        calculateCountdown(UAE__race__start, "Abu Dhabi");
    } else {
        race__countdown__timer.textContent = `Error: could not start a countdown timer.`;
    }
};

// function that hides all the track info data containers
const hideAllTrackInfo = function() {
    track__info__template.style.display = "none";
    track__info__bahrain.style.display = "none";
    track__info__imola.style.display = "none";
    track__info__portimao.style.display = "none";
    track__info__barcelona.style.display = "none";
    track__info__monaco.style.display = "none";
    track__info__baku.style.display = "none";
    track__info__montreal.style.display = "none";
    track__info__castellet.style.display = "none";
    track__info__spielberg.style.display = "none";
    track__info__silverstone.style.display = "none";
    track__info__budapest.style.display = "none";
    track__info__spa.style.display = "none";
    track__info__zandvoort.style.display = "none";
    track__info__monza.style.display = "none";
    track__info__sochi.style.display = "none";
    track__info__singapore.style.display = "none";
    track__info__suzuka.style.display = "none";
    track__info__austin.style.display = "none";
    track__info__mexico.style.display = "none";
    track__info__interlagos.style.display = "none";
    track__info__melbourne.style.display = "none";
    track__info__jeddah.style.display = "none";
    track__info__emirates.style.display = "none";
};

// function that sets the track session times text contents in the time schedule container to the most common ones
const setCommonSessionTimes = function() {
    time__P1.textContent = "11:30 - 12:30";
    time__P2.textContent = "15:00 - 16:00";
    time__P3.textContent = "12:00 - 13:00";
    time__Q.textContent = "15:00 - 16:00";
    time__R.textContent = "15:00 - 17:00";
};

// function that allows you to change a date to a different prefered date format
/* credits #4 (see README.md credits section) */
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

const setEmptyWeatherData = function() {
    weather__1__date.textContent = "Date";
    weather__1__time.textContent = "Time";
    weather__1__temp.textContent = "Temperature";
    weather__1__precip.textContent = "Precipitation";
    weather__1__rain.textContent = "Rain";
    weather__2__date.textContent = "Date";
    weather__2__time.textContent = "Time";
    weather__2__temp.textContent = "Temperature";
    weather__2__precip.textContent = "Precipitation";
    weather__2__rain.textContent = "Rain";
    weather__3__date.textContent = "Date";
    weather__3__time.textContent = "Time";
    weather__3__temp.textContent = "Temperature";
    weather__3__precip.textContent = "Precipitation";
    weather__3__rain.textContent = "Rain";
    weather__4__date.textContent = "Date";
    weather__4__time.textContent = "Time";
    weather__4__temp.textContent = "Temperature";
    weather__4__precip.textContent = "Precipitation";
    weather__4__rain.textContent = "Rain";
};

// function that executes other functions and if-statements that display track, time and weather data based on the active race event
const displayActiveEventData = function() { 
    // get data from local storage and convert back to JSON
    // I know this is kinda pointless because this project has no server, but I might convert this project into a real website and working with local storage can reduce the amount of API calls to stay under the limit
    /* credits #3 (see README.md credits section) */
    const weatherDataSet = JSON.parse(localStorage.getItem('weatherData'));

    setInitialCountdown();

    if (bahrain__event.classList.contains("active__event")) {

        hideAllTrackInfo();
        track__info__bahrain.style.display = "flex";

        time__P1.textContent = "12:30 - 13:30";
        time__P2.textContent = "16:00 - 17:00";
        time__P3.textContent = "13:00 - 14:00";
        time__Q.textContent = "16:00 - 17:00";
        time__R.textContent = "17:00 - 19:00";

        race__location.textContent = "Location: Bahrain";
        local__time.textContent = "Local time: -";
        start__time__container.textContent = "Start time: 17:00 @ 28 March 2021";

        // change the text contents of the weather container elements
        try {
        // change the date format for the weather elements
        /* credits #4 (see README.md credits section) */
        const bahrain__weather__date = DateFormatter.formatDate(new Date(weatherDataSet.data.area[0].weather[0].date), 'DD MMMM YYYY');

        // change weather div 1 contents
        weather__1__date.textContent = bahrain__weather__date;
        weather__1__time.textContent = `16:00`;
        if (tempUnitsCelsius === true) {
            weather__1__temp.textContent = `${weatherDataSet.data.area[0].weather[0].hourly[16].tempC}°C`;
        } else if (tempUnitsCelsius === false) {
            weather__1__temp.textContent = `${weatherDataSet.data.area[0].weather[0].hourly[16].tempF}°F`;
        } else {
            return;
        }
        weather__1__precip.textContent = `${weatherDataSet.data.area[0].weather[0].hourly[16].precipMM}mm`;
        weather__1__rain.textContent = `${weatherDataSet.data.area[0].weather[0].hourly[16].chanceofrain}%`;
        // change weather div 2 contents
        weather__2__date.textContent = bahrain__weather__date;
        weather__2__time.textContent = `17:00`;
        if (tempUnitsCelsius === true) {
            weather__2__temp.textContent = `${weatherDataSet.data.area[0].weather[0].hourly[17].tempC}°C`;
        } else if (tempUnitsCelsius === false) {
            weather__2__temp.textContent = `${weatherDataSet.data.area[0].weather[0].hourly[17].tempF}°F`;
        } else {
            return;
        }
        weather__2__precip.textContent = `${weatherDataSet.data.area[0].weather[0].hourly[17].precipMM}mm`;
        weather__2__rain.textContent = `${weatherDataSet.data.area[0].weather[0].hourly[17].chanceofrain}%`;
        // change weather div 3 contents
        weather__3__date.textContent = bahrain__weather__date;
        weather__3__time.textContent = `18:00`;
        if (tempUnitsCelsius === true) {
            weather__3__temp.textContent = `${weatherDataSet.data.area[0].weather[0].hourly[18].tempC}°C`;
        } else if (tempUnitsCelsius === false) {
            weather__3__temp.textContent = `${weatherDataSet.data.area[0].weather[0].hourly[18].tempF}°F`;
        } else {
            return;
        }
        weather__3__precip.textContent = `${weatherDataSet.data.area[0].weather[0].hourly[18].precipMM}mm`;
        weather__3__rain.textContent = `${weatherDataSet.data.area[0].weather[0].hourly[18].chanceofrain}%`;
        // change weather div 4 contents
        weather__4__date.textContent = bahrain__weather__date;
        weather__4__time.textContent = `19:00`;
        if (tempUnitsCelsius === true) {
            weather__4__temp.textContent = `${weatherDataSet.data.area[0].weather[0].hourly[19].tempC}°C`;
        } else if (tempUnitsCelsius === false) {
            weather__4__temp.textContent = `${weatherDataSet.data.area[0].weather[0].hourly[19].tempF}°F`;
        } else {
            return;
        }
        weather__4__precip.textContent = `${weatherDataSet.data.area[0].weather[0].hourly[19].precipMM}mm`;
        weather__4__rain.textContent = `${weatherDataSet.data.area[0].weather[0].hourly[19].chanceofrain}%`;
    } catch(err) { 
        alert("Error: could not get Bahrain weather data!");
        setEmptyWeatherData();
    }
    } else if (imola__event.classList.contains("active__event")) {

        hideAllTrackInfo();
        track__info__imola.style.display = "flex";

        setCommonSessionTimes();

        race__location.textContent = "Location: Imola";
        local__time.textContent = "Local time: -";
        start__time__container.textContent = "Start time: 15:00 @ 18 April 2021";

        // change the text contents of the weather container elements
        try {
        // change the date format for the weather elements
        /* credits #4 (see README.md credits section) */
        const imola__weather__date = DateFormatter.formatDate(new Date(weatherDataSet.data.area[1].weather[0].date), 'DD MMMM YYYY');

        // change weather div 1 contents
        weather__1__date.textContent = imola__weather__date;
        weather__1__time.textContent = `14:00`;
        if (tempUnitsCelsius === true) {
            weather__1__temp.textContent = `${weatherDataSet.data.area[1].weather[0].hourly[14].tempC}°C`;
        } else if (tempUnitsCelsius === false) {
            weather__1__temp.textContent = `${weatherDataSet.data.area[1].weather[0].hourly[14].tempF}°F`;
        } else {
            return;
        }
        weather__1__precip.textContent = `${weatherDataSet.data.area[1].weather[0].hourly[14].precipMM}mm`;
        weather__1__rain.textContent = `${weatherDataSet.data.area[1].weather[0].hourly[14].chanceofrain}%`;
        // change weather div 2 contents
        weather__2__date.textContent = imola__weather__date;
        weather__2__time.textContent = `15:00`;
        if (tempUnitsCelsius === true) {
            weather__2__temp.textContent = `${weatherDataSet.data.area[1].weather[0].hourly[15].tempC}°C`;
        } else if (tempUnitsCelsius === false) {
            weather__2__temp.textContent = `${weatherDataSet.data.area[1].weather[0].hourly[15].tempF}°F`;
        } else {
            return;
        }
        weather__2__precip.textContent = `${weatherDataSet.data.area[1].weather[0].hourly[15].precipMM}mm`;
        weather__2__rain.textContent = `${weatherDataSet.data.area[1].weather[0].hourly[15].chanceofrain}%`;
        // change weather div 3 contents
        weather__3__date.textContent = imola__weather__date;
        weather__3__time.textContent = `16:00`;
        if (tempUnitsCelsius === true) {
            weather__3__temp.textContent = `${weatherDataSet.data.area[1].weather[0].hourly[16].tempC}°C`;
        } else if (tempUnitsCelsius === false) {
            weather__3__temp.textContent = `${weatherDataSet.data.area[1].weather[0].hourly[16].tempF}°F`;
        } else {
            return;
        }
        weather__3__precip.textContent = `${weatherDataSet.data.area[1].weather[0].hourly[16].precipMM}mm`;
        weather__3__rain.textContent = `${weatherDataSet.data.area[1].weather[0].hourly[16].chanceofrain}%`;
        // change weather div 4 contents
        weather__4__date.textContent = imola__weather__date;
        weather__4__time.textContent = `17:00`;
        if (tempUnitsCelsius === true) {
            weather__4__temp.textContent = `${weatherDataSet.data.area[1].weather[0].hourly[17].tempC}°C`;
        } else if (tempUnitsCelsius === false) {
            weather__4__temp.textContent = `${weatherDataSet.data.area[1].weather[0].hourly[17].tempF}°F`;
        } else {
            return;
        }
        weather__4__precip.textContent = `${weatherDataSet.data.area[1].weather[0].hourly[17].precipMM}mm`;
        weather__4__rain.textContent = `${weatherDataSet.data.area[1].weather[0].hourly[17].chanceofrain}%`;
    } catch(err) { 
        alert("Error: could not get Imola weather data!");
        setEmptyWeatherData();
    }
    } else if (portimao__event.classList.contains("active__event")) {

        hideAllTrackInfo();
        track__info__portimao.style.display = "flex";

        setCommonSessionTimes();

        race__location.textContent = "Location: Portimão";
        local__time.textContent = "Local time: -";
        start__time__container.textContent = "Start time: 15:00 @ 2 May 2021";

        // change the text contents of the weather container elements
        try {
        // change the date format for the weather elements
        /* credits #4 (see README.md credits section) */
        const portimao__weather__date = DateFormatter.formatDate(new Date(weatherDataSet.data.area[2].weather[0].date), 'DD MMMM YYYY');

        // change weather div 1 contents
        weather__1__date.textContent = portimao__weather__date;
        weather__1__time.textContent = `14:00`;
        if (tempUnitsCelsius === true) {
            weather__1__temp.textContent = `${weatherDataSet.data.area[2].weather[0].hourly[14].tempC}°C`;
        } else if (tempUnitsCelsius === false) {
            weather__1__temp.textContent = `${weatherDataSet.data.area[2].weather[0].hourly[14].tempF}°F`;
        } else {
            return;
        }
        weather__1__precip.textContent = `${weatherDataSet.data.area[2].weather[0].hourly[14].precipMM}mm`;
        weather__1__rain.textContent = `${weatherDataSet.data.area[2].weather[0].hourly[14].chanceofrain}%`;
        // change weather div 2 contents
        weather__2__date.textContent = portimao__weather__date;
        weather__2__time.textContent = `15:00`;
        if (tempUnitsCelsius === true) {
            weather__2__temp.textContent = `${weatherDataSet.data.area[2].weather[0].hourly[15].tempC}°C`;
        } else if (tempUnitsCelsius === false) {
            weather__2__temp.textContent = `${weatherDataSet.data.area[2].weather[0].hourly[15].tempF}°F`;
        } else {
            return;
        }
        weather__2__precip.textContent = `${weatherDataSet.data.area[2].weather[0].hourly[15].precipMM}mm`;
        weather__2__rain.textContent = `${weatherDataSet.data.area[2].weather[0].hourly[15].chanceofrain}%`;
        // change weather div 3 contents
        weather__3__date.textContent = portimao__weather__date;
        weather__3__time.textContent = `16:00`;
        if (tempUnitsCelsius === true) {
            weather__3__temp.textContent = `${weatherDataSet.data.area[2].weather[0].hourly[16].tempC}°C`;
        } else if (tempUnitsCelsius === false) {
            weather__3__temp.textContent = `${weatherDataSet.data.area[2].weather[0].hourly[16].tempF}°F`;
        } else {
            return;
        }
        weather__3__precip.textContent = `${weatherDataSet.data.area[2].weather[0].hourly[16].precipMM}mm`;
        weather__3__rain.textContent = `${weatherDataSet.data.area[2].weather[0].hourly[16].chanceofrain}%`;
        // change weather div 4 contents
        weather__4__date.textContent = portimao__weather__date;
        weather__4__time.textContent = `17:00`;
        if (tempUnitsCelsius === true) {
            weather__4__temp.textContent = `${weatherDataSet.data.area[2].weather[0].hourly[17].tempC}°C`;
        } else if (tempUnitsCelsius === false) {
            weather__4__temp.textContent = `${weatherDataSet.data.area[2].weather[0].hourly[17].tempF}°F`;
        } else {
            return;
        }
        weather__4__precip.textContent = `${weatherDataSet.data.area[2].weather[0].hourly[17].precipMM}mm`;
        weather__4__rain.textContent = `${weatherDataSet.data.area[2].weather[0].hourly[17].chanceofrain}%`;
    } catch(err) { 
        alert("Error: could not get Portimão weather data!");
        setEmptyWeatherData();
    }
    } else if (barcelona__event.classList.contains("active__event")) {

        hideAllTrackInfo();
        track__info__barcelona.style.display = "flex";

        setCommonSessionTimes();

        race__location.textContent = "Location: Barcelona";
        local__time.textContent = "Local time: -";
        start__time__container.textContent = "Start time: 15:00 @ 9 May 2021";

        // change the text contents of the weather container elements
        try {
        // change the date format for the weather elements
        /* credits #4 (see README.md credits section) */
        const barcelona__weather__date = DateFormatter.formatDate(new Date(weatherDataSet.data.area[3].weather[0].date), 'DD MMMM YYYY');

        // change weather div 1 contents
        weather__1__date.textContent = barcelona__weather__date;
        weather__1__time.textContent = `14:00`;
        if (tempUnitsCelsius === true) {
            weather__1__temp.textContent = `${weatherDataSet.data.area[3].weather[0].hourly[14].tempC}°C`;
        } else if (tempUnitsCelsius === false) {
            weather__1__temp.textContent = `${weatherDataSet.data.area[3].weather[0].hourly[14].tempF}°F`;
        } else {
            return;
        }
        weather__1__precip.textContent = `${weatherDataSet.data.area[3].weather[0].hourly[14].precipMM}mm`;
        weather__1__rain.textContent = `${weatherDataSet.data.area[3].weather[0].hourly[14].chanceofrain}%`;
        // change weather div 2 contents
        weather__2__date.textContent = barcelona__weather__date;
        weather__2__time.textContent = `15:00`;
        if (tempUnitsCelsius === true) {
            weather__2__temp.textContent = `${weatherDataSet.data.area[3].weather[0].hourly[15].tempC}°C`;
        } else if (tempUnitsCelsius === false) {
            weather__2__temp.textContent = `${weatherDataSet.data.area[3].weather[0].hourly[15].tempF}°F`;
        } else {
            return;
        }
        weather__2__precip.textContent = `${weatherDataSet.data.area[3].weather[0].hourly[15].precipMM}mm`;
        weather__2__rain.textContent = `${weatherDataSet.data.area[3].weather[0].hourly[15].chanceofrain}%`;
        // change weather div 3 contents
        weather__3__date.textContent = barcelona__weather__date;
        weather__3__time.textContent = `16:00`;
        if (tempUnitsCelsius === true) {
            weather__3__temp.textContent = `${weatherDataSet.data.area[3].weather[0].hourly[16].tempC}°C`;
        } else if (tempUnitsCelsius === false) {
            weather__3__temp.textContent = `${weatherDataSet.data.area[3].weather[0].hourly[16].tempF}°F`;
        } else {
            return;
        }
        weather__3__precip.textContent = `${weatherDataSet.data.area[3].weather[0].hourly[16].precipMM}mm`;
        weather__3__rain.textContent = `${weatherDataSet.data.area[3].weather[0].hourly[16].chanceofrain}%`;
        // change weather div 4 contents
        weather__4__date.textContent = barcelona__weather__date;
        weather__4__time.textContent = `17:00`;
        if (tempUnitsCelsius === true) {
            weather__4__temp.textContent = `${weatherDataSet.data.area[3].weather[0].hourly[17].tempC}°C`;
        } else if (tempUnitsCelsius === false) {
            weather__4__temp.textContent = `${weatherDataSet.data.area[3].weather[0].hourly[17].tempF}°F`;
        } else {
            return;
        }
        weather__4__precip.textContent = `${weatherDataSet.data.area[3].weather[0].hourly[17].precipMM}mm`;
        weather__4__rain.textContent = `${weatherDataSet.data.area[3].weather[0].hourly[17].chanceofrain}%`;
    } catch(err) { 
        alert("Error: could not get Barcelona weather data!");
        setEmptyWeatherData();
    }
    } else if (monaco__event.classList.contains("active__event")) {

        hideAllTrackInfo();
        track__info__monaco.style.display = "flex";

        setCommonSessionTimes();

        race__location.textContent = "Location: Monte Carlo";
        local__time.textContent = "Local time: -";
        start__time__container.textContent = "Start time: 15:00 @ 23 May 2021";

        // change the text contents of the weather container elements
        try {
        // change the date format for the weather elements
        /* credits #4 (see README.md credits section) */
        const monaco__weather__date = DateFormatter.formatDate(new Date(weatherDataSet.data.area[4].weather[0].date), 'DD MMMM YYYY');

        // change weather div 1 contents
        weather__1__date.textContent = monaco__weather__date;
        weather__1__time.textContent = `14:00`;
        if (tempUnitsCelsius === true) {
            weather__1__temp.textContent = `${weatherDataSet.data.area[4].weather[0].hourly[14].tempC}°C`;
        } else if (tempUnitsCelsius === false) {
            weather__1__temp.textContent = `${weatherDataSet.data.area[4].weather[0].hourly[14].tempF}°F`;
        } else {
            return;
        }
        weather__1__precip.textContent = `${weatherDataSet.data.area[4].weather[0].hourly[14].precipMM}mm`;
        weather__1__rain.textContent = `${weatherDataSet.data.area[4].weather[0].hourly[14].chanceofrain}%`;
        // change weather div 2 contents
        weather__2__date.textContent = monaco__weather__date;
        weather__2__time.textContent = `15:00`;
        if (tempUnitsCelsius === true) {
            weather__2__temp.textContent = `${weatherDataSet.data.area[4].weather[0].hourly[15].tempC}°C`;
        } else if (tempUnitsCelsius === false) {
            weather__2__temp.textContent = `${weatherDataSet.data.area[4].weather[0].hourly[15].tempF}°F`;
        } else {
            return;
        }
        weather__2__precip.textContent = `${weatherDataSet.data.area[4].weather[0].hourly[15].precipMM}mm`;
        weather__2__rain.textContent = `${weatherDataSet.data.area[4].weather[0].hourly[15].chanceofrain}%`;
        // change weather div 3 contents
        weather__3__date.textContent = monaco__weather__date;
        weather__3__time.textContent = `16:00`;
        if (tempUnitsCelsius === true) {
            weather__3__temp.textContent = `${weatherDataSet.data.area[4].weather[0].hourly[16].tempC}°C`;
        } else if (tempUnitsCelsius === false) {
            weather__3__temp.textContent = `${weatherDataSet.data.area[4].weather[0].hourly[16].tempF}°F`;
        } else {
            return;
        }
        weather__3__precip.textContent = `${weatherDataSet.data.area[4].weather[0].hourly[16].precipMM}mm`;
        weather__3__rain.textContent = `${weatherDataSet.data.area[4].weather[0].hourly[16].chanceofrain}%`;
        // change weather div 4 contents
        weather__4__date.textContent = monaco__weather__date;
        weather__4__time.textContent = `17:00`;
        if (tempUnitsCelsius === true) {
            weather__4__temp.textContent = `${weatherDataSet.data.area[4].weather[0].hourly[17].tempC}°C`;
        } else if (tempUnitsCelsius === false) {
            weather__4__temp.textContent = `${weatherDataSet.data.area[4].weather[0].hourly[17].tempF}°F`;
        } else {
            return;
        }
        weather__4__precip.textContent = `${weatherDataSet.data.area[4].weather[0].hourly[17].precipMM}mm`;
        weather__4__rain.textContent = `${weatherDataSet.data.area[4].weather[0].hourly[17].chanceofrain}%`;
    } catch(err) { 
        alert("Error: could not get Monaco weather data!");
        setEmptyWeatherData();
    }
    } else if (baku__event.classList.contains("active__event")) {

        hideAllTrackInfo();
        track__info__baku.style.display = "flex";

        time__P1.textContent = "13:30 - 14:30";
        time__P2.textContent = "17:00 - 18:00";
        time__P3.textContent = "14:00 - 15:00";
        time__Q.textContent = "17:00 - 18:00";
        time__R.textContent = "16:00 - 18:00";

        race__location.textContent = "Location: Baku";
        local__time.textContent = "Local time: -";
        start__time__container.textContent = "Start time: 16:00 @ 6 June 2021";

        // change the text contents of the weather container elements
        try {
        // change the date format for the weather elements
        /* credits #4 (see README.md credits section) */
        const baku__weather__date = DateFormatter.formatDate(new Date(weatherDataSet.data.area[5].weather[0].date), 'DD MMMM YYYY');

        // change weather div 1 contents
        weather__1__date.textContent = baku__weather__date;
        weather__1__time.textContent = `15:00`;
        if (tempUnitsCelsius === true) {
            weather__1__temp.textContent = `${weatherDataSet.data.area[5].weather[0].hourly[15].tempC}°C`;
        } else if (tempUnitsCelsius === false) {
            weather__1__temp.textContent = `${weatherDataSet.data.area[5].weather[0].hourly[15].tempF}°F`;
        } else {
            return;
        }
        weather__1__precip.textContent = `${weatherDataSet.data.area[5].weather[0].hourly[15].precipMM}mm`;
        weather__1__rain.textContent = `${weatherDataSet.data.area[5].weather[0].hourly[15].chanceofrain}%`;
        // change weather div 2 contents
        weather__2__date.textContent = baku__weather__date;
        weather__2__time.textContent = `16:00`;
        if (tempUnitsCelsius === true) {
            weather__2__temp.textContent = `${weatherDataSet.data.area[5].weather[0].hourly[16].tempC}°C`;
        } else if (tempUnitsCelsius === false) {
            weather__2__temp.textContent = `${weatherDataSet.data.area[5].weather[0].hourly[16].tempF}°F`;
        } else {
            return;
        }
        weather__2__precip.textContent = `${weatherDataSet.data.area[5].weather[0].hourly[16].precipMM}mm`;
        weather__2__rain.textContent = `${weatherDataSet.data.area[5].weather[0].hourly[16].chanceofrain}%`;
        // change weather div 3 contents
        weather__3__date.textContent = baku__weather__date;
        weather__3__time.textContent = `17:00`;
        if (tempUnitsCelsius === true) {
            weather__3__temp.textContent = `${weatherDataSet.data.area[5].weather[0].hourly[17].tempC}°C`;
        } else if (tempUnitsCelsius === false) {
            weather__3__temp.textContent = `${weatherDataSet.data.area[5].weather[0].hourly[17].tempF}°F`;
        } else {
            return;
        }
        weather__3__precip.textContent = `${weatherDataSet.data.area[5].weather[0].hourly[17].precipMM}mm`;
        weather__3__rain.textContent = `${weatherDataSet.data.area[5].weather[0].hourly[17].chanceofrain}%`;
        // change weather div 4 contents
        weather__4__date.textContent = baku__weather__date;
        weather__4__time.textContent = `18:00`;
        if (tempUnitsCelsius === true) {
            weather__4__temp.textContent = `${weatherDataSet.data.area[5].weather[0].hourly[18].tempC}°C`;
        } else if (tempUnitsCelsius === false) {
            weather__4__temp.textContent = `${weatherDataSet.data.area[5].weather[0].hourly[18].tempF}°F`;
        } else {
            return;
        }
        weather__4__precip.textContent = `${weatherDataSet.data.area[5].weather[0].hourly[18].precipMM}mm`;
        weather__4__rain.textContent = `${weatherDataSet.data.area[5].weather[0].hourly[18].chanceofrain}%`;
    } catch(err) { 
        alert("Error: could not get Baku weather data!");
        setEmptyWeatherData();
    }
    } else if (montreal__event.classList.contains("active__event")) {

        hideAllTrackInfo();
        track__info__montreal.style.display = "flex";

        time__P1.textContent = "11:30 - 12:30";
        time__P2.textContent = "15:00 - 16:00";
        time__P3.textContent = "11:00 - 12:00";
        time__Q.textContent = "14:00 - 15:00";
        time__R.textContent = "14:00 - 16:00";

        race__location.textContent = "Location: Montreal";
        local__time.textContent = "Local time: -";
        start__time__container.textContent = "Start time: 14:00 @ 13 June 2021";

        // change the text contents of the weather container elements
        try {
        // change the date format for the weather elements
        /* credits #4 (see README.md credits section) */
        const montreal__weather__date = DateFormatter.formatDate(new Date(weatherDataSet.data.area[6].weather[0].date), 'DD MMMM YYYY');

        // change weather div 1 contents
        weather__1__date.textContent = montreal__weather__date;
        weather__1__time.textContent = `13:00`;
        if (tempUnitsCelsius === true) {
            weather__1__temp.textContent = `${weatherDataSet.data.area[6].weather[0].hourly[13].tempC}°C`;
        } else if (tempUnitsCelsius === false) {
            weather__1__temp.textContent = `${weatherDataSet.data.area[6].weather[0].hourly[13].tempF}°F`;
        } else {
            return;
        }
        weather__1__precip.textContent = `${weatherDataSet.data.area[6].weather[0].hourly[13].precipMM}mm`;
        weather__1__rain.textContent = `${weatherDataSet.data.area[6].weather[0].hourly[13].chanceofrain}%`;
        // change weather div 2 contents
        weather__2__date.textContent = montreal__weather__date;
        weather__2__time.textContent = `14:00`;
        if (tempUnitsCelsius === true) {
            weather__2__temp.textContent = `${weatherDataSet.data.area[6].weather[0].hourly[14].tempC}°C`;
        } else if (tempUnitsCelsius === false) {
            weather__2__temp.textContent = `${weatherDataSet.data.area[6].weather[0].hourly[14].tempF}°F`;
        } else {
            return;
        }
        weather__2__precip.textContent = `${weatherDataSet.data.area[6].weather[0].hourly[14].precipMM}mm`;
        weather__2__rain.textContent = `${weatherDataSet.data.area[6].weather[0].hourly[14].chanceofrain}%`;
        // change weather div 3 contents
        weather__3__date.textContent = montreal__weather__date;
        weather__3__time.textContent = `15:00`;
        if (tempUnitsCelsius === true) {
            weather__3__temp.textContent = `${weatherDataSet.data.area[6].weather[0].hourly[15].tempC}°C`;
        } else if (tempUnitsCelsius === false) {
            weather__3__temp.textContent = `${weatherDataSet.data.area[6].weather[0].hourly[15].tempF}°F`;
        } else {
            return;
        }
        weather__3__precip.textContent = `${weatherDataSet.data.area[6].weather[0].hourly[15].precipMM}mm`;
        weather__3__rain.textContent = `${weatherDataSet.data.area[6].weather[0].hourly[15].chanceofrain}%`;
        // change weather div 4 contents
        weather__4__date.textContent = montreal__weather__date;
        weather__4__time.textContent = `16:00`;
        if (tempUnitsCelsius === true) {
            weather__4__temp.textContent = `${weatherDataSet.data.area[6].weather[0].hourly[16].tempC}°C`;
        } else if (tempUnitsCelsius === false) {
            weather__4__temp.textContent = `${weatherDataSet.data.area[6].weather[0].hourly[16].tempF}°F`;
        } else {
            return;
        }
        weather__4__precip.textContent = `${weatherDataSet.data.area[6].weather[0].hourly[16].precipMM}mm`;
        weather__4__rain.textContent = `${weatherDataSet.data.area[6].weather[0].hourly[16].chanceofrain}%`;
        } catch(err) { 
            alert("Error: could not get Montreal weather data!");
            setEmptyWeatherData();
        }
    } else if (castellet__event.classList.contains("active__event")) {

        hideAllTrackInfo();
        track__info__castellet.style.display = "flex";

        setCommonSessionTimes();

        race__location.textContent = "Location: Le Castellet";
        local__time.textContent = "Local time: -";
        start__time__container.textContent = "Start time: 15:00 @ 27 June 2021";

        // change the text contents of the weather container elements
        try {
        // change the date format for the weather elements
        /* credits #4 (see README.md credits section) */
        const castellet__weather__date = DateFormatter.formatDate(new Date(weatherDataSet.data.area[7].weather[0].date), 'DD MMMM YYYY');

        // change weather div 1 contents
        weather__1__date.textContent = castellet__weather__date;
        weather__1__time.textContent = `14:00`;
        if (tempUnitsCelsius === true) {
            weather__1__temp.textContent = `${weatherDataSet.data.area[7].weather[0].hourly[14].tempC}°C`;
        } else if (tempUnitsCelsius === false) {
            weather__1__temp.textContent = `${weatherDataSet.data.area[7].weather[0].hourly[14].tempF}°F`;
        } else {
            return;
        }
        weather__1__precip.textContent = `${weatherDataSet.data.area[7].weather[0].hourly[14].precipMM}mm`;
        weather__1__rain.textContent = `${weatherDataSet.data.area[7].weather[0].hourly[14].chanceofrain}%`;
        // change weather div 2 contents
        weather__2__date.textContent = castellet__weather__date;
        weather__2__time.textContent = `15:00`;
        if (tempUnitsCelsius === true) {
            weather__2__temp.textContent = `${weatherDataSet.data.area[7].weather[0].hourly[15].tempC}°C`;
        } else if (tempUnitsCelsius === false) {
            weather__2__temp.textContent = `${weatherDataSet.data.area[7].weather[0].hourly[15].tempF}°F`;
        } else {
            return;
        }
        weather__2__precip.textContent = `${weatherDataSet.data.area[7].weather[0].hourly[15].precipMM}mm`;
        weather__2__rain.textContent = `${weatherDataSet.data.area[7].weather[0].hourly[15].chanceofrain}%`;
        // change weather div 3 contents
        weather__3__date.textContent = castellet__weather__date;
        weather__3__time.textContent = `16:00`;
        if (tempUnitsCelsius === true) {
            weather__3__temp.textContent = `${weatherDataSet.data.area[7].weather[0].hourly[16].tempC}°C`;
        } else if (tempUnitsCelsius === false) {
            weather__3__temp.textContent = `${weatherDataSet.data.area[7].weather[0].hourly[16].tempF}°F`;
        } else {
            return;
        }
        weather__3__precip.textContent = `${weatherDataSet.data.area[7].weather[0].hourly[16].precipMM}mm`;
        weather__3__rain.textContent = `${weatherDataSet.data.area[7].weather[0].hourly[16].chanceofrain}%`;
        // change weather div 4 contents
        weather__4__date.textContent = castellet__weather__date;
        weather__4__time.textContent = `17:00`;
        if (tempUnitsCelsius === true) {
            weather__4__temp.textContent = `${weatherDataSet.data.area[7].weather[0].hourly[17].tempC}°C`;
        } else if (tempUnitsCelsius === false) {
            weather__4__temp.textContent = `${weatherDataSet.data.area[7].weather[0].hourly[17].tempF}°F`;
        } else {
            return;
        }
        weather__4__precip.textContent = `${weatherDataSet.data.area[7].weather[0].hourly[17].precipMM}mm`;
        weather__4__rain.textContent = `${weatherDataSet.data.area[7].weather[0].hourly[17].chanceofrain}%`;
    } catch(err) { 
        alert("Error: could not get Castellet weather data!");
        setEmptyWeatherData();
    }
    } else if (spielberg__event.classList.contains("active__event")) {

        hideAllTrackInfo();
        track__info__spielberg.style.display = "flex";

        setCommonSessionTimes();

        race__location.textContent = "Location: Spielberg";
        local__time.textContent = "Local time: -";
        start__time__container.textContent = "Start time: 15:00 @ 4 July 2021";

        // change the text contents of the weather container elements
        try {
        // change the date format for the weather elements
        /* credits #4 (see README.md credits section) */
        const spielberg__weather__date = DateFormatter.formatDate(new Date(weatherDataSet.data.area[8].weather[0].date), 'DD MMMM YYYY');

        // change weather div 1 contents
        weather__1__date.textContent = spielberg__weather__date;
        weather__1__time.textContent = `14:00`;
        if (tempUnitsCelsius === true) {
            weather__1__temp.textContent = `${weatherDataSet.data.area[8].weather[0].hourly[14].tempC}°C`;
        } else if (tempUnitsCelsius === false) {
            weather__1__temp.textContent = `${weatherDataSet.data.area[8].weather[0].hourly[14].tempF}°F`;
        } else {
            return;
        }
        weather__1__precip.textContent = `${weatherDataSet.data.area[8].weather[0].hourly[14].precipMM}mm`;
        weather__1__rain.textContent = `${weatherDataSet.data.area[8].weather[0].hourly[14].chanceofrain}%`;
        // change weather div 2 contents
        weather__2__date.textContent = spielberg__weather__date;
        weather__2__time.textContent = `15:00`;
        if (tempUnitsCelsius === true) {
            weather__2__temp.textContent = `${weatherDataSet.data.area[8].weather[0].hourly[15].tempC}°C`;
        } else if (tempUnitsCelsius === false) {
            weather__2__temp.textContent = `${weatherDataSet.data.area[8].weather[0].hourly[15].tempF}°F`;
        } else {
            return;
        }
        weather__2__precip.textContent = `${weatherDataSet.data.area[8].weather[0].hourly[15].precipMM}mm`;
        weather__2__rain.textContent = `${weatherDataSet.data.area[8].weather[0].hourly[15].chanceofrain}%`;
        // change weather div 3 contents
        weather__3__date.textContent = spielberg__weather__date;
        weather__3__time.textContent = `16:00`;
        if (tempUnitsCelsius === true) {
            weather__3__temp.textContent = `${weatherDataSet.data.area[8].weather[0].hourly[16].tempC}°C`;
        } else if (tempUnitsCelsius === false) {
            weather__3__temp.textContent = `${weatherDataSet.data.area[8].weather[0].hourly[16].tempF}°F`;
        } else {
            return;
        }
        weather__3__precip.textContent = `${weatherDataSet.data.area[8].weather[0].hourly[16].precipMM}mm`;
        weather__3__rain.textContent = `${weatherDataSet.data.area[8].weather[0].hourly[16].chanceofrain}%`;
        // change weather div 4 contents
        weather__4__date.textContent = spielberg__weather__date;
        weather__4__time.textContent = `17:00`;
        if (tempUnitsCelsius === true) {
            weather__4__temp.textContent = `${weatherDataSet.data.area[8].weather[0].hourly[17].tempC}°C`;
        } else if (tempUnitsCelsius === false) {
            weather__4__temp.textContent = `${weatherDataSet.data.area[8].weather[0].hourly[17].tempF}°F`;
        } else {
            return;
        }
        weather__4__precip.textContent = `${weatherDataSet.data.area[8].weather[0].hourly[17].precipMM}mm`;
        weather__4__rain.textContent = `${weatherDataSet.data.area[8].weather[0].hourly[17].chanceofrain}%`;
    } catch(err) { 
        alert("Error: could not get Spielberg weather data!");
        setEmptyWeatherData();
    }
    } else if (silverstone__event.classList.contains("active__event")) {

        hideAllTrackInfo();
        track__info__silverstone.style.display = "flex";

        setCommonSessionTimes();

        race__location.textContent = "Location: Silverstone";
        local__time.textContent = "Local time: -";
        start__time__container.textContent = "Start time: 15:00 @ 18 July 2021";

        // change the text contents of the weather container elements
        try {
        // change the date format for the weather elements
        /* credits #4 (see README.md credits section) */
        const silverstone__weather__date = DateFormatter.formatDate(new Date(weatherDataSet.data.area[9].weather[0].date), 'DD MMMM YYYY');

        // change weather div 1 contents
        weather__1__date.textContent = silverstone__weather__date;
        weather__1__time.textContent = `14:00`;
        if (tempUnitsCelsius === true) {
            weather__1__temp.textContent = `${weatherDataSet.data.area[9].weather[0].hourly[14].tempC}°C`;
        } else if (tempUnitsCelsius === false) {
            weather__1__temp.textContent = `${weatherDataSet.data.area[9].weather[0].hourly[14].tempF}°F`;
        } else {
            return;
        }
        weather__1__precip.textContent = `${weatherDataSet.data.area[9].weather[0].hourly[14].precipMM}mm`;
        weather__1__rain.textContent = `${weatherDataSet.data.area[9].weather[0].hourly[14].chanceofrain}%`;
        // change weather div 2 contents
        weather__2__date.textContent = silverstone__weather__date;
        weather__2__time.textContent = `15:00`;
        if (tempUnitsCelsius === true) {
            weather__2__temp.textContent = `${weatherDataSet.data.area[9].weather[0].hourly[15].tempC}°C`;
        } else if (tempUnitsCelsius === false) {
            weather__2__temp.textContent = `${weatherDataSet.data.area[9].weather[0].hourly[15].tempF}°F`;
        } else {
            return;
        }
        weather__2__precip.textContent = `${weatherDataSet.data.area[9].weather[0].hourly[15].precipMM}mm`;
        weather__2__rain.textContent = `${weatherDataSet.data.area[9].weather[0].hourly[15].chanceofrain}%`;
        // change weather div 3 contents
        weather__3__date.textContent = silverstone__weather__date;
        weather__3__time.textContent = `16:00`;
        if (tempUnitsCelsius === true) {
            weather__3__temp.textContent = `${weatherDataSet.data.area[9].weather[0].hourly[16].tempC}°C`;
        } else if (tempUnitsCelsius === false) {
            weather__3__temp.textContent = `${weatherDataSet.data.area[9].weather[0].hourly[16].tempF}°F`;
        } else {
            return;
        }
        weather__3__precip.textContent = `${weatherDataSet.data.area[9].weather[0].hourly[16].precipMM}mm`;
        weather__3__rain.textContent = `${weatherDataSet.data.area[9].weather[0].hourly[16].chanceofrain}%`;
        // change weather div 4 contents
        weather__4__date.textContent = silverstone__weather__date;
        weather__4__time.textContent = `17:00`;
        if (tempUnitsCelsius === true) {
            weather__4__temp.textContent = `${weatherDataSet.data.area[9].weather[0].hourly[17].tempC}°C`;
        } else if (tempUnitsCelsius === false) {
            weather__4__temp.textContent = `${weatherDataSet.data.area[9].weather[0].hourly[17].tempF}°F`;
        } else {
            return;
        }
        weather__4__precip.textContent = `${weatherDataSet.data.area[9].weather[0].hourly[17].precipMM}mm`;
        weather__4__rain.textContent = `${weatherDataSet.data.area[9].weather[0].hourly[17].chanceofrain}%`;
    } catch(err) { 
        alert("Error: could not get Silverstone weather data!");
        setEmptyWeatherData();
    }
    } else if (budapest__event.classList.contains("active__event")) {

        hideAllTrackInfo();
        track__info__budapest.style.display = "flex";

        setCommonSessionTimes();

        race__location.textContent = "Location: Budapest";
        local__time.textContent = "Local time: -";
        start__time__container.textContent = "Start time: 15:00 @ 1 August 2021";

        // change the text contents of the weather container elements
        try {
        // change the date format for the weather elements
        /* credits #4 (see README.md credits section) */
        const budapest__weather__date = DateFormatter.formatDate(new Date(weatherDataSet.data.area[10].weather[0].date), 'DD MMMM YYYY');

        // change weather div 1 contents
        weather__1__date.textContent = budapest__weather__date;
        weather__1__time.textContent = `14:00`;
        if (tempUnitsCelsius === true) {
            weather__1__temp.textContent = `${weatherDataSet.data.area[10].weather[0].hourly[14].tempC}°C`;
        } else if (tempUnitsCelsius === false) {
            weather__1__temp.textContent = `${weatherDataSet.data.area[10].weather[0].hourly[14].tempF}°F`;
        } else {
            return;
        }
        weather__1__precip.textContent = `${weatherDataSet.data.area[10].weather[0].hourly[14].precipMM}mm`;
        weather__1__rain.textContent = `${weatherDataSet.data.area[10].weather[0].hourly[14].chanceofrain}%`;
        // change weather div 2 contents
        weather__2__date.textContent = budapest__weather__date;
        weather__2__time.textContent = `15:00`;
        if (tempUnitsCelsius === true) {
            weather__2__temp.textContent = `${weatherDataSet.data.area[10].weather[0].hourly[15].tempC}°C`;
        } else if (tempUnitsCelsius === false) {
            weather__2__temp.textContent = `${weatherDataSet.data.area[10].weather[0].hourly[15].tempF}°F`;
        } else {
            return;
        }
        weather__2__precip.textContent = `${weatherDataSet.data.area[10].weather[0].hourly[15].precipMM}mm`;
        weather__2__rain.textContent = `${weatherDataSet.data.area[10].weather[0].hourly[15].chanceofrain}%`;
        // change weather div 3 contents
        weather__3__date.textContent = budapest__weather__date;
        weather__3__time.textContent = `16:00`;
        if (tempUnitsCelsius === true) {
            weather__3__temp.textContent = `${weatherDataSet.data.area[10].weather[0].hourly[16].tempC}°C`;
        } else if (tempUnitsCelsius === false) {
            weather__3__temp.textContent = `${weatherDataSet.data.area[10].weather[0].hourly[16].tempF}°F`;
        } else {
            return;
        }
        weather__3__precip.textContent = `${weatherDataSet.data.area[10].weather[0].hourly[16].precipMM}mm`;
        weather__3__rain.textContent = `${weatherDataSet.data.area[10].weather[0].hourly[16].chanceofrain}%`;
        // change weather div 4 contents
        weather__4__date.textContent = budapest__weather__date;
        weather__4__time.textContent = `17:00`;
        if (tempUnitsCelsius === true) {
            weather__4__temp.textContent = `${weatherDataSet.data.area[10].weather[0].hourly[17].tempC}°C`;
        } else if (tempUnitsCelsius === false) {
            weather__4__temp.textContent = `${weatherDataSet.data.area[10].weather[0].hourly[17].tempF}°F`;
        } else {
            return;
        }
        weather__4__precip.textContent = `${weatherDataSet.data.area[10].weather[0].hourly[17].precipMM}mm`;
        weather__4__rain.textContent = `${weatherDataSet.data.area[10].weather[0].hourly[17].chanceofrain}%`;
    } catch(err) { 
        alert("Error: could not get Budapest weather data!");
        setEmptyWeatherData();
    }
    } else if (spa__event.classList.contains("active__event")) {

        hideAllTrackInfo();
        track__info__spa.style.display = "flex";

        setCommonSessionTimes();

        race__location.textContent = "Location: Spa Francorchamps";
        local__time.textContent = "Local time: -";
        start__time__container.textContent = "Start time: 15:00 @ 29 August 2021";

        // change the text contents of the weather container elements
        try {
        // change the date format for the weather elements
        /* credits #4 (see README.md credits section) */
        const spa__weather__date = DateFormatter.formatDate(new Date(weatherDataSet.data.area[11].weather[0].date), 'DD MMMM YYYY');

        // change weather div 1 contents
        weather__1__date.textContent = spa__weather__date;
        weather__1__time.textContent = `14:00`;
        if (tempUnitsCelsius === true) {
            weather__1__temp.textContent = `${weatherDataSet.data.area[11].weather[0].hourly[14].tempC}°C`;
        } else if (tempUnitsCelsius === false) {
            weather__1__temp.textContent = `${weatherDataSet.data.area[11].weather[0].hourly[14].tempF}°F`;
        } else {
            return;
        }
        weather__1__precip.textContent = `${weatherDataSet.data.area[11].weather[0].hourly[14].precipMM}mm`;
        weather__1__rain.textContent = `${weatherDataSet.data.area[11].weather[0].hourly[14].chanceofrain}%`;
        // change weather div 2 contents
        weather__2__date.textContent = spa__weather__date;
        weather__2__time.textContent = `15:00`;
        if (tempUnitsCelsius === true) {
            weather__2__temp.textContent = `${weatherDataSet.data.area[11].weather[0].hourly[15].tempC}°C`;
        } else if (tempUnitsCelsius === false) {
            weather__2__temp.textContent = `${weatherDataSet.data.area[11].weather[0].hourly[15].tempF}°F`;
        } else {
            return;
        }
        weather__2__precip.textContent = `${weatherDataSet.data.area[11].weather[0].hourly[15].precipMM}mm`;
        weather__2__rain.textContent = `${weatherDataSet.data.area[11].weather[0].hourly[15].chanceofrain}%`;
        // change weather div 3 contents
        weather__3__date.textContent = spa__weather__date;
        weather__3__time.textContent = `16:00`;
        if (tempUnitsCelsius === true) {
            weather__3__temp.textContent = `${weatherDataSet.data.area[11].weather[0].hourly[16].tempC}°C`;
        } else if (tempUnitsCelsius === false) {
            weather__3__temp.textContent = `${weatherDataSet.data.area[11].weather[0].hourly[16].tempF}°F`;
        } else {
            return;
        }
        weather__3__precip.textContent = `${weatherDataSet.data.area[11].weather[0].hourly[16].precipMM}mm`;
        weather__3__rain.textContent = `${weatherDataSet.data.area[11].weather[0].hourly[16].chanceofrain}%`;
        // change weather div 4 contents
        weather__4__date.textContent = spa__weather__date;
        weather__4__time.textContent = `17:00`;
        if (tempUnitsCelsius === true) {
            weather__4__temp.textContent = `${weatherDataSet.data.area[11].weather[0].hourly[17].tempC}°C`;
        } else if (tempUnitsCelsius === false) {
            weather__4__temp.textContent = `${weatherDataSet.data.area[11].weather[0].hourly[17].tempF}°F`;
        } else {
            return;
        }
        weather__4__precip.textContent = `${weatherDataSet.data.area[11].weather[0].hourly[17].precipMM}mm`;
        weather__4__rain.textContent = `${weatherDataSet.data.area[11].weather[0].hourly[17].chanceofrain}%`;
    } catch(err) { 
        alert("Error: could not get Spa weather data!");
        setEmptyWeatherData();
    }
    } else if (zandvoort__event.classList.contains("active__event")) {

        hideAllTrackInfo();
        track__info__zandvoort.style.display = "flex";

        setCommonSessionTimes();

        race__location.textContent = "Location: Zandvoort";
        local__time.textContent = "Local time: -";
        start__time__container.textContent = "Start time: 15:00 @ 5 September 2021";

        // change the text contents of the weather container elements
        try {
        // change the date format for the weather elements
        /* credits #4 (see README.md credits section) */
        const zandvoort__weather__date = DateFormatter.formatDate(new Date(weatherDataSet.data.area[12].weather[0].date), 'DD MMMM YYYY');

        // change weather div 1 contents
        weather__1__date.textContent = zandvoort__weather__date;
        weather__1__time.textContent = `14:00`;
        if (tempUnitsCelsius === true) {
            weather__1__temp.textContent = `${weatherDataSet.data.area[12].weather[0].hourly[14].tempC}°C`;
        } else if (tempUnitsCelsius === false) {
            weather__1__temp.textContent = `${weatherDataSet.data.area[12].weather[0].hourly[14].tempF}°F`;
        } else {
            return;
        }
        weather__1__precip.textContent = `${weatherDataSet.data.area[12].weather[0].hourly[14].precipMM}mm`;
        weather__1__rain.textContent = `${weatherDataSet.data.area[12].weather[0].hourly[14].chanceofrain}%`;
        // change weather div 2 contents
        weather__2__date.textContent = zandvoort__weather__date;
        weather__2__time.textContent = `15:00`;
        if (tempUnitsCelsius === true) {
            weather__2__temp.textContent = `${weatherDataSet.data.area[12].weather[0].hourly[15].tempC}°C`;
        } else if (tempUnitsCelsius === false) {
            weather__2__temp.textContent = `${weatherDataSet.data.area[12].weather[0].hourly[15].tempF}°F`;
        } else {
            return;
        }
        weather__2__precip.textContent = `${weatherDataSet.data.area[12].weather[0].hourly[15].precipMM}mm`;
        weather__2__rain.textContent = `${weatherDataSet.data.area[12].weather[0].hourly[15].chanceofrain}%`;
        // change weather div 3 contents
        weather__3__date.textContent = zandvoort__weather__date;
        weather__3__time.textContent = `16:00`;
        if (tempUnitsCelsius === true) {
            weather__3__temp.textContent = `${weatherDataSet.data.area[12].weather[0].hourly[16].tempC}°C`;
        } else if (tempUnitsCelsius === false) {
            weather__3__temp.textContent = `${weatherDataSet.data.area[12].weather[0].hourly[16].tempF}°F`;
        } else {
            return;
        }
        weather__3__precip.textContent = `${weatherDataSet.data.area[12].weather[0].hourly[16].precipMM}mm`;
        weather__3__rain.textContent = `${weatherDataSet.data.area[12].weather[0].hourly[16].chanceofrain}%`;
        // change weather div 4 contents
        weather__4__date.textContent = zandvoort__weather__date;
        weather__4__time.textContent = `17:00`;
        if (tempUnitsCelsius === true) {
            weather__4__temp.textContent = `${weatherDataSet.data.area[12].weather[0].hourly[17].tempC}°C`;
        } else if (tempUnitsCelsius === false) {
            weather__4__temp.textContent = `${weatherDataSet.data.area[12].weather[0].hourly[17].tempF}°F`;
        } else {
            return;
        }
        weather__4__precip.textContent = `${weatherDataSet.data.area[12].weather[0].hourly[17].precipMM}mm`;
        weather__4__rain.textContent = `${weatherDataSet.data.area[12].weather[0].hourly[17].chanceofrain}%`;
    } catch(err) { 
        alert("Error: could not get Zandvoort weather data!");
        setEmptyWeatherData();
    }
    } else if (monza__event.classList.contains("active__event")) {

        hideAllTrackInfo();
        track__info__monza.style.display = "flex";

        setCommonSessionTimes();

        race__location.textContent = "Location: Monza";
        local__time.textContent = "Local time: -";
        start__time__container.textContent = "Start time: 15:00 @ 12 September 2021";

        // change the text contents of the weather container elements
        try {
        // change the date format for the weather elements
        /* credits #4 (see README.md credits section) */
        const monza__weather__date = DateFormatter.formatDate(new Date(weatherDataSet.data.area[13].weather[0].date), 'DD MMMM YYYY');

        // change weather div 1 contents
        weather__1__date.textContent = monza__weather__date;
        weather__1__time.textContent = `14:00`;
        if (tempUnitsCelsius === true) {
            weather__1__temp.textContent = `${weatherDataSet.data.area[13].weather[0].hourly[14].tempC}°C`;
        } else if (tempUnitsCelsius === false) {
            weather__1__temp.textContent = `${weatherDataSet.data.area[13].weather[0].hourly[14].tempF}°F`;
        } else {
            return;
        }
        weather__1__precip.textContent = `${weatherDataSet.data.area[13].weather[0].hourly[14].precipMM}mm`;
        weather__1__rain.textContent = `${weatherDataSet.data.area[13].weather[0].hourly[14].chanceofrain}%`;
        // change weather div 2 contents
        weather__2__date.textContent = monza__weather__date;
        weather__2__time.textContent = `15:00`;
        if (tempUnitsCelsius === true) {
            weather__2__temp.textContent = `${weatherDataSet.data.area[13].weather[0].hourly[15].tempC}°C`;
        } else if (tempUnitsCelsius === false) {
            weather__2__temp.textContent = `${weatherDataSet.data.area[13].weather[0].hourly[15].tempF}°F`;
        } else {
            return;
        }
        weather__2__precip.textContent = `${weatherDataSet.data.area[13].weather[0].hourly[15].precipMM}mm`;
        weather__2__rain.textContent = `${weatherDataSet.data.area[13].weather[0].hourly[15].chanceofrain}%`;
        // change weather div 3 contents
        weather__3__date.textContent = monza__weather__date;
        weather__3__time.textContent = `16:00`;
        if (tempUnitsCelsius === true) {
            weather__3__temp.textContent = `${weatherDataSet.data.area[13].weather[0].hourly[16].tempC}°C`;
        } else if (tempUnitsCelsius === false) {
            weather__3__temp.textContent = `${weatherDataSet.data.area[13].weather[0].hourly[16].tempF}°F`;
        } else {
            return;
        }
        weather__3__precip.textContent = `${weatherDataSet.data.area[13].weather[0].hourly[16].precipMM}mm`;
        weather__3__rain.textContent = `${weatherDataSet.data.area[13].weather[0].hourly[16].chanceofrain}%`;
        // change weather div 4 contents
        weather__4__date.textContent = monza__weather__date;
        weather__4__time.textContent = `17:00`;
        if (tempUnitsCelsius === true) {
            weather__4__temp.textContent = `${weatherDataSet.data.area[13].weather[0].hourly[17].tempC}°C`;
        } else if (tempUnitsCelsius === false) {
            weather__4__temp.textContent = `${weatherDataSet.data.area[13].weather[0].hourly[17].tempF}°F`;
        } else {
            return;
        }
        weather__4__precip.textContent = `${weatherDataSet.data.area[13].weather[0].hourly[17].precipMM}mm`;
        weather__4__rain.textContent = `${weatherDataSet.data.area[13].weather[0].hourly[17].chanceofrain}%`;
    } catch(err) { 
        alert("Error: could not get Monza weather data!");
        setEmptyWeatherData();
    }
    } else if (sochi__event.classList.contains("active__event")) {

        hideAllTrackInfo();
        track__info__sochi.style.display = "flex";

        setCommonSessionTimes();

        race__location.textContent = "Location: Sochi";
        local__time.textContent = "Local time: -";
        start__time__container.textContent = "Start time: 15:00 @ 26 September 2021";

        // change the text contents of the weather container elements
        try {
        // change the date format for the weather elements
        /* credits #4 (see README.md credits section) */
        const sochi__weather__date = DateFormatter.formatDate(new Date(weatherDataSet.data.area[14].weather[0].date), 'DD MMMM YYYY');

        // change weather div 1 contents
        weather__1__date.textContent = sochi__weather__date;
        weather__1__time.textContent = `14:00`;
        if (tempUnitsCelsius === true) {
            weather__1__temp.textContent = `${weatherDataSet.data.area[14].weather[0].hourly[14].tempC}°C`;
        } else if (tempUnitsCelsius === false) {
            weather__1__temp.textContent = `${weatherDataSet.data.area[14].weather[0].hourly[14].tempF}°F`;
        } else {
            return;
        }
        weather__1__precip.textContent = `${weatherDataSet.data.area[14].weather[0].hourly[14].precipMM}mm`;
        weather__1__rain.textContent = `${weatherDataSet.data.area[14].weather[0].hourly[14].chanceofrain}%`;
        // change weather div 2 contents
        weather__2__date.textContent = sochi__weather__date;
        weather__2__time.textContent = `15:00`;
        if (tempUnitsCelsius === true) {
            weather__2__temp.textContent = `${weatherDataSet.data.area[14].weather[0].hourly[15].tempC}°C`;
        } else if (tempUnitsCelsius === false) {
            weather__2__temp.textContent = `${weatherDataSet.data.area[14].weather[0].hourly[15].tempF}°F`;
        } else {
            return;
        }
        weather__2__precip.textContent = `${weatherDataSet.data.area[14].weather[0].hourly[15].precipMM}mm`;
        weather__2__rain.textContent = `${weatherDataSet.data.area[14].weather[0].hourly[15].chanceofrain}%`;
        // change weather div 3 contents
        weather__3__date.textContent = sochi__weather__date;
        weather__3__time.textContent = `16:00`;
        if (tempUnitsCelsius === true) {
            weather__3__temp.textContent = `${weatherDataSet.data.area[14].weather[0].hourly[16].tempC}°C`;
        } else if (tempUnitsCelsius === false) {
            weather__3__temp.textContent = `${weatherDataSet.data.area[14].weather[0].hourly[16].tempF}°F`;
        } else {
            return;
        }
        weather__3__precip.textContent = `${weatherDataSet.data.area[14].weather[0].hourly[16].precipMM}mm`;
        weather__3__rain.textContent = `${weatherDataSet.data.area[14].weather[0].hourly[16].chanceofrain}%`;
        // change weather div 4 contents
        weather__4__date.textContent = sochi__weather__date;
        weather__4__time.textContent = `17:00`;
        if (tempUnitsCelsius === true) {
            weather__4__temp.textContent = `${weatherDataSet.data.area[14].weather[0].hourly[17].tempC}°C`;
        } else if (tempUnitsCelsius === false) {
            weather__4__temp.textContent = `${weatherDataSet.data.area[14].weather[0].hourly[17].tempF}°F`;
        } else {
            return;
        }
        weather__4__precip.textContent = `${weatherDataSet.data.area[14].weather[0].hourly[17].precipMM}mm`;
        weather__4__rain.textContent = `${weatherDataSet.data.area[14].weather[0].hourly[17].chanceofrain}%`;
    } catch(err) { 
        alert("Error: could not get Sochi weather data!");
        setEmptyWeatherData();
    }
    } else if (singapore__event.classList.contains("active__event")) {

        hideAllTrackInfo();
        track__info__singapore.style.display = "flex";

        time__P1.textContent = "17:00 - 18:00";
        time__P2.textContent = "20:30 - 21:30";
        time__P3.textContent = "18:00 - 19:00";
        time__Q.textContent = "21:00 - 22:00";
        time__R.textContent = "20:00 - 22:00";

        race__location.textContent = "Location: Singapore";
        local__time.textContent = "Local time: -";
        start__time__container.textContent = "Start time: 20:00 @ 3 October 2021";

        // change the text contents of the weather container elements
        try {
        // change the date format for the weather elements
        /* credits #4 (see README.md credits section) */
        const singapore__weather__date = DateFormatter.formatDate(new Date(weatherDataSet.data.area[15].weather[0].date), 'DD MMMM YYYY');

        // change weather div 1 contents
        weather__1__date.textContent = singapore__weather__date;
        weather__1__time.textContent = `19:00`;
        if (tempUnitsCelsius === true) {
            weather__1__temp.textContent = `${weatherDataSet.data.area[15].weather[0].hourly[19].tempC}°C`;
        } else if (tempUnitsCelsius === false) {
            weather__1__temp.textContent = `${weatherDataSet.data.area[15].weather[0].hourly[19].tempF}°F`;
        } else {
            return;
        }
        weather__1__precip.textContent = `${weatherDataSet.data.area[15].weather[0].hourly[19].precipMM}mm`;
        weather__1__rain.textContent = `${weatherDataSet.data.area[15].weather[0].hourly[19].chanceofrain}%`;
        // change weather div 2 contents
        weather__2__date.textContent = singapore__weather__date;
        weather__2__time.textContent = `20:00`;
        if (tempUnitsCelsius === true) {
            weather__2__temp.textContent = `${weatherDataSet.data.area[15].weather[0].hourly[20].tempC}°C`;
        } else if (tempUnitsCelsius === false) {
            weather__2__temp.textContent = `${weatherDataSet.data.area[15].weather[0].hourly[20].tempF}°F`;
        } else {
            return;
        }
        weather__2__precip.textContent = `${weatherDataSet.data.area[15].weather[0].hourly[20].precipMM}mm`;
        weather__2__rain.textContent = `${weatherDataSet.data.area[15].weather[0].hourly[20].chanceofrain}%`;
        // change weather div 3 contents
        weather__3__date.textContent = singapore__weather__date;
        weather__3__time.textContent = `21:00`;
        if (tempUnitsCelsius === true) {
            weather__3__temp.textContent = `${weatherDataSet.data.area[15].weather[0].hourly[21].tempC}°C`;
        } else if (tempUnitsCelsius === false) {
            weather__3__temp.textContent = `${weatherDataSet.data.area[15].weather[0].hourly[21].tempF}°F`;
        } else {
            return;
        }
        weather__3__precip.textContent = `${weatherDataSet.data.area[15].weather[0].hourly[21].precipMM}mm`;
        weather__3__rain.textContent = `${weatherDataSet.data.area[15].weather[0].hourly[21].chanceofrain}%`;
        // change weather div 4 contents
        weather__4__date.textContent = singapore__weather__date;
        weather__4__time.textContent = `22:00`;
        if (tempUnitsCelsius === true) {
            weather__4__temp.textContent = `${weatherDataSet.data.area[15].weather[0].hourly[22].tempC}°C`;
        } else if (tempUnitsCelsius === false) {
            weather__4__temp.textContent = `${weatherDataSet.data.area[15].weather[0].hourly[22].tempF}°F`;
        } else {
            return;
        }
        weather__4__precip.textContent = `${weatherDataSet.data.area[15].weather[0].hourly[22].precipMM}mm`;
        weather__4__rain.textContent = `${weatherDataSet.data.area[15].weather[0].hourly[22].chanceofrain}%`;
    } catch(err) { 
        alert("Error: could not get Singapore weather data!");
        setEmptyWeatherData();
    }
    } else if (suzuka__event.classList.contains("active__event")) {

        hideAllTrackInfo();
        track__info__suzuka.style.display = "flex";

        time__P1.textContent = "11:30 - 12:30";
        time__P2.textContent = "15:00 - 16:00";
        time__P3.textContent = "12:00 - 13:00";
        time__Q.textContent = "15:00 - 16:00";
        time__R.textContent = "14:00 - 16:00";

        race__location.textContent = "Location: Suzuka";
        local__time.textContent = "Local time: -";
        start__time__container.textContent = "Start time: 14:00 @ 10 October 2021";

        // change the text contents of the weather container elements
        try {
        // change the date format for the weather elements
        /* credits #4 (see README.md credits section) */
        const suzuka__weather__date = DateFormatter.formatDate(new Date(weatherDataSet.data.area[16].weather[0].date), 'DD MMMM YYYY');

        // change weather div 1 contents
        weather__1__date.textContent = suzuka__weather__date;
        weather__1__time.textContent = `13:00`;
        if (tempUnitsCelsius === true) {
            weather__1__temp.textContent = `${weatherDataSet.data.area[16].weather[0].hourly[13].tempC}°C`;
        } else if (tempUnitsCelsius === false) {
            weather__1__temp.textContent = `${weatherDataSet.data.area[16].weather[0].hourly[13].tempF}°F`;
        } else {
            return;
        }
        weather__1__precip.textContent = `${weatherDataSet.data.area[16].weather[0].hourly[13].precipMM}mm`;
        weather__1__rain.textContent = `${weatherDataSet.data.area[16].weather[0].hourly[13].chanceofrain}%`;
        // change weather div 2 contents
        weather__2__date.textContent = suzuka__weather__date;
        weather__2__time.textContent = `14:00`;
        if (tempUnitsCelsius === true) {
            weather__2__temp.textContent = `${weatherDataSet.data.area[16].weather[0].hourly[14].tempC}°C`;
        } else if (tempUnitsCelsius === false) {
            weather__2__temp.textContent = `${weatherDataSet.data.area[16].weather[0].hourly[14].tempF}°F`;
        } else {
            return;
        }
        weather__2__precip.textContent = `${weatherDataSet.data.area[16].weather[0].hourly[14].precipMM}mm`;
        weather__2__rain.textContent = `${weatherDataSet.data.area[16].weather[0].hourly[14].chanceofrain}%`;
        // change weather div 3 contents
        weather__3__date.textContent = suzuka__weather__date;
        weather__3__time.textContent = `15:00`;
        if (tempUnitsCelsius === true) {
            weather__3__temp.textContent = `${weatherDataSet.data.area[16].weather[0].hourly[15].tempC}°C`;
        } else if (tempUnitsCelsius === false) {
            weather__3__temp.textContent = `${weatherDataSet.data.area[16].weather[0].hourly[15].tempF}°F`;
        } else {
            return;
        }
        weather__3__precip.textContent = `${weatherDataSet.data.area[16].weather[0].hourly[15].precipMM}mm`;
        weather__3__rain.textContent = `${weatherDataSet.data.area[16].weather[0].hourly[15].chanceofrain}%`;
        // change weather div 4 contents
        weather__4__date.textContent = suzuka__weather__date;
        weather__4__time.textContent = `16:00`;
        if (tempUnitsCelsius === true) {
            weather__4__temp.textContent = `${weatherDataSet.data.area[16].weather[0].hourly[16].tempC}°C`;
        } else if (tempUnitsCelsius === false) {
            weather__4__temp.textContent = `${weatherDataSet.data.area[16].weather[0].hourly[16].tempF}°F`;
        } else {
            return;
        }
        weather__4__precip.textContent = `${weatherDataSet.data.area[16].weather[0].hourly[16].precipMM}mm`;
        weather__4__rain.textContent = `${weatherDataSet.data.area[16].weather[0].hourly[16].chanceofrain}%`;
    } catch(err) { 
        alert("Error: could not get Suzuka weather data!");
        setEmptyWeatherData();
    }
    } else if (austin__event.classList.contains("active__event")) {

        hideAllTrackInfo();
        track__info__austin.style.display = "flex";

        time__P1.textContent = "11:30 - 12:30";
        time__P2.textContent = "15:00 - 16:00";
        time__P3.textContent = "13:00 - 14:00";
        time__Q.textContent = "16:00 - 17:00";
        time__R.textContent = "14:00 - 16:00";

        race__location.textContent = "Location: Austin";
        local__time.textContent = "Local time: -";
        start__time__container.textContent = "Start time: 14:00 @ 24 October 2021";

        // change the text contents of the weather container elements
        try {
        // change the date format for the weather elements
        /* credits #4 (see README.md credits section) */
        const austin__weather__date = DateFormatter.formatDate(new Date(weatherDataSet.data.area[17].weather[0].date), 'DD MMMM YYYY');

        // change weather div 1 contents
        weather__1__date.textContent = austin__weather__date;
        weather__1__time.textContent = `13:00`;
        if (tempUnitsCelsius === true) {
            weather__1__temp.textContent = `${weatherDataSet.data.area[17].weather[0].hourly[13].tempC}°C`;
        } else if (tempUnitsCelsius === false) {
            weather__1__temp.textContent = `${weatherDataSet.data.area[17].weather[0].hourly[13].tempF}°F`;
        } else {
            return;
        }
        weather__1__precip.textContent = `${weatherDataSet.data.area[17].weather[0].hourly[13].precipMM}mm`;
        weather__1__rain.textContent = `${weatherDataSet.data.area[17].weather[0].hourly[13].chanceofrain}%`;
        // change weather div 2 contents
        weather__2__date.textContent = austin__weather__date;
        weather__2__time.textContent = `14:00`;
        if (tempUnitsCelsius === true) {
            weather__2__temp.textContent = `${weatherDataSet.data.area[17].weather[0].hourly[14].tempC}°C`;
        } else if (tempUnitsCelsius === false) {
            weather__2__temp.textContent = `${weatherDataSet.data.area[17].weather[0].hourly[14].tempF}°F`;
        } else {
            return;
        }
        weather__2__precip.textContent = `${weatherDataSet.data.area[17].weather[0].hourly[14].precipMM}mm`;
        weather__2__rain.textContent = `${weatherDataSet.data.area[17].weather[0].hourly[14].chanceofrain}%`;
        // change weather div 3 contents
        weather__3__date.textContent = austin__weather__date;
        weather__3__time.textContent = `15:00`;
        if (tempUnitsCelsius === true) {
            weather__3__temp.textContent = `${weatherDataSet.data.area[17].weather[0].hourly[15].tempC}°C`;
        } else if (tempUnitsCelsius === false) {
            weather__3__temp.textContent = `${weatherDataSet.data.area[17].weather[0].hourly[15].tempF}°F`;
        } else {
            return;
        }
        weather__3__precip.textContent = `${weatherDataSet.data.area[17].weather[0].hourly[15].precipMM}mm`;
        weather__3__rain.textContent = `${weatherDataSet.data.area[17].weather[0].hourly[15].chanceofrain}%`;
        // change weather div 4 contents
        weather__4__date.textContent = austin__weather__date;
        weather__4__time.textContent = `16:00`;
        if (tempUnitsCelsius === true) {
            weather__4__temp.textContent = `${weatherDataSet.data.area[17].weather[0].hourly[16].tempC}°C`;
        } else if (tempUnitsCelsius === false) {
            weather__4__temp.textContent = `${weatherDataSet.data.area[17].weather[0].hourly[16].tempF}°F`;
        } else {
            return;
        }
        weather__4__precip.textContent = `${weatherDataSet.data.area[17].weather[0].hourly[16].precipMM}mm`;
        weather__4__rain.textContent = `${weatherDataSet.data.area[17].weather[0].hourly[16].chanceofrain}%`;
    } catch(err) { 
        alert("Error: could not get Austin weather data!");
        setEmptyWeatherData();
    }
    } else if (mexico__event.classList.contains("active__event")) {

        hideAllTrackInfo();
        track__info__mexico.style.display = "flex";

        time__P1.textContent = "11:30 - 12:30";
        time__P2.textContent = "15:00 - 16:00";
        time__P3.textContent = "11:00 - 12:00";
        time__Q.textContent = "14:00 - 15:00";
        time__R.textContent = "13:00 - 15:00";

        race__location.textContent = "Location: Mexico City";
        local__time.textContent = "Local time: -";
        start__time__container.textContent = "Start time: 13:00 @ 31 October 2021";

        // change the text contents of the weather container elements
        try {
        // change the date format for the weather elements
        /* credits #4 (see README.md credits section) */
        const mexico__weather__date = DateFormatter.formatDate(new Date(weatherDataSet.data.area[18].weather[0].date), 'DD MMMM YYYY');

        // change weather div 1 contents
        weather__1__date.textContent = mexico__weather__date;
        weather__1__time.textContent = `12:00`;
        if (tempUnitsCelsius === true) {
            weather__1__temp.textContent = `${weatherDataSet.data.area[18].weather[0].hourly[12].tempC}°C`;
        } else if (tempUnitsCelsius === false) {
            weather__1__temp.textContent = `${weatherDataSet.data.area[18].weather[0].hourly[12].tempF}°F`;
        } else {
            return;
        }
        weather__1__precip.textContent = `${weatherDataSet.data.area[18].weather[0].hourly[12].precipMM}mm`;
        weather__1__rain.textContent = `${weatherDataSet.data.area[18].weather[0].hourly[12].chanceofrain}%`;
        // change weather div 2 contents
        weather__2__date.textContent = mexico__weather__date;
        weather__2__time.textContent = `13:00`;
        if (tempUnitsCelsius === true) {
            weather__2__temp.textContent = `${weatherDataSet.data.area[18].weather[0].hourly[13].tempC}°C`;
        } else if (tempUnitsCelsius === false) {
            weather__2__temp.textContent = `${weatherDataSet.data.area[18].weather[0].hourly[13].tempF}°F`;
        } else {
            return;
        }
        weather__2__precip.textContent = `${weatherDataSet.data.area[18].weather[0].hourly[13].precipMM}mm`;
        weather__2__rain.textContent = `${weatherDataSet.data.area[18].weather[0].hourly[13].chanceofrain}%`;
        // change weather div 3 contents
        weather__3__date.textContent = mexico__weather__date;
        weather__3__time.textContent = `14:00`;
        if (tempUnitsCelsius === true) {
            weather__3__temp.textContent = `${weatherDataSet.data.area[18].weather[0].hourly[14].tempC}°C`;
        } else if (tempUnitsCelsius === false) {
            weather__3__temp.textContent = `${weatherDataSet.data.area[18].weather[0].hourly[14].tempF}°F`;
        } else {
            return;
        }
        weather__3__precip.textContent = `${weatherDataSet.data.area[18].weather[0].hourly[14].precipMM}mm`;
        weather__3__rain.textContent = `${weatherDataSet.data.area[18].weather[0].hourly[14].chanceofrain}%`;
        // change weather div 4 contents
        weather__4__date.textContent = mexico__weather__date;
        weather__4__time.textContent = `15:00`;
        if (tempUnitsCelsius === true) {
            weather__4__temp.textContent = `${weatherDataSet.data.area[18].weather[0].hourly[15].tempC}°C`;
        } else if (tempUnitsCelsius === false) {
            weather__4__temp.textContent = `${weatherDataSet.data.area[18].weather[0].hourly[15].tempF}°F`;
        } else {
            return;
        }
        weather__4__precip.textContent = `${weatherDataSet.data.area[18].weather[0].hourly[15].precipMM}mm`;
        weather__4__rain.textContent = `${weatherDataSet.data.area[18].weather[0].hourly[15].chanceofrain}%`;
    } catch(err) { 
        alert("Error: could not get Mexico City weather data!");
        setEmptyWeatherData();
    }
    } else if (interlagos__event.classList.contains("active__event")) {

        hideAllTrackInfo();
        track__info__interlagos.style.display = "flex";

        time__P1.textContent = "11:30 - 12:30";
        time__P2.textContent = "15:00 - 16:00";
        time__P3.textContent = "12:00 - 13:00";
        time__Q.textContent = "15:00 - 16:00";
        time__R.textContent = "14:00 - 16:00";

        race__location.textContent = "Location: São Paulo";
        local__time.textContent = "Local time: -";
        start__time__container.textContent = "Start time: 14:00 @ 7 November 2021";

        // change the text contents of the weather container elements
        try {
        // change the date format for the weather elements
        /* credits #4 (see README.md credits section) */
        const interlagos__weather__date = DateFormatter.formatDate(new Date(weatherDataSet.data.area[19].weather[0].date), 'DD MMMM YYYY');

        // change weather div 1 contents
        weather__1__date.textContent = interlagos__weather__date;
        weather__1__time.textContent = `13:00`;
        if (tempUnitsCelsius === true) {
            weather__1__temp.textContent = `${weatherDataSet.data.area[19].weather[0].hourly[13].tempC}°C`;
        } else if (tempUnitsCelsius === false) {
            weather__1__temp.textContent = `${weatherDataSet.data.area[19].weather[0].hourly[13].tempF}°F`;
        } else {
            return;
        }
        weather__1__precip.textContent = `${weatherDataSet.data.area[19].weather[0].hourly[13].precipMM}mm`;
        weather__1__rain.textContent = `${weatherDataSet.data.area[19].weather[0].hourly[13].chanceofrain}%`;
        // change weather div 2 contents
        weather__2__date.textContent = interlagos__weather__date;
        weather__2__time.textContent = `14:00`;
        if (tempUnitsCelsius === true) {
            weather__2__temp.textContent = `${weatherDataSet.data.area[19].weather[0].hourly[14].tempC}°C`;
        } else if (tempUnitsCelsius === false) {
            weather__2__temp.textContent = `${weatherDataSet.data.area[19].weather[0].hourly[14].tempF}°F`;
        } else {
            return;
        }
        weather__2__precip.textContent = `${weatherDataSet.data.area[19].weather[0].hourly[14].precipMM}mm`;
        weather__2__rain.textContent = `${weatherDataSet.data.area[19].weather[0].hourly[14].chanceofrain}%`;
        // change weather div 3 contents
        weather__3__date.textContent = interlagos__weather__date;
        weather__3__time.textContent = `15:00`;
        if (tempUnitsCelsius === true) {
            weather__3__temp.textContent = `${weatherDataSet.data.area[19].weather[0].hourly[15].tempC}°C`;
        } else if (tempUnitsCelsius === false) {
            weather__3__temp.textContent = `${weatherDataSet.data.area[19].weather[0].hourly[15].tempF}°F`;
        } else {
            return;
        }
        weather__3__precip.textContent = `${weatherDataSet.data.area[19].weather[0].hourly[15].precipMM}mm`;
        weather__3__rain.textContent = `${weatherDataSet.data.area[19].weather[0].hourly[15].chanceofrain}%`;
        // change weather div 4 contents
        weather__4__date.textContent = interlagos__weather__date;
        weather__4__time.textContent = `16:00`;
        if (tempUnitsCelsius === true) {
            weather__4__temp.textContent = `${weatherDataSet.data.area[19].weather[0].hourly[16].tempC}°C`;
        } else if (tempUnitsCelsius === false) {
            weather__4__temp.textContent = `${weatherDataSet.data.area[19].weather[0].hourly[16].tempF}°F`;
        } else {
            return;
        }
        weather__4__precip.textContent = `${weatherDataSet.data.area[19].weather[0].hourly[16].precipMM}mm`;
        weather__4__rain.textContent = `${weatherDataSet.data.area[19].weather[0].hourly[16].chanceofrain}%`;
    } catch(err) { 
        alert("Error: could not get São Paulo weather data!");
        setEmptyWeatherData();
    }
    } else if (melbourne__event.classList.contains("active__event")) {

        hideAllTrackInfo();
        track__info__melbourne.style.display = "flex";

        time__P1.textContent = "12:30 - 13:30";
        time__P2.textContent = "16:00 - 17:00";
        time__P3.textContent = "14:00 - 15:00";
        time__Q.textContent = "17:00 - 18:00";
        time__R.textContent = "17:00 - 19:00";

        race__location.textContent = "Location: Melbourne";
        local__time.textContent = "Local time: -";
        start__time__container.textContent = "Start time: 17:00 @ 21 November 2021";

        // change the text contents of the weather container elements
        try {
        // change the date format for the weather elements
        /* credits #4 (see README.md credits section) */
        const melbourne__weather__date = DateFormatter.formatDate(new Date(weatherDataSet.data.area[20].weather[0].date), 'DD MMMM YYYY');

        // change weather div 1 contents
        weather__1__date.textContent = melbourne__weather__date;
        weather__1__time.textContent = `16:00`;
        if (tempUnitsCelsius === true) {
            weather__1__temp.textContent = `${weatherDataSet.data.area[20].weather[0].hourly[16].tempC}°C`;
        } else if (tempUnitsCelsius === false) {
            weather__1__temp.textContent = `${weatherDataSet.data.area[20].weather[0].hourly[16].tempF}°F`;
        } else {
            return;
        }
        weather__1__precip.textContent = `${weatherDataSet.data.area[20].weather[0].hourly[16].precipMM}mm`;
        weather__1__rain.textContent = `${weatherDataSet.data.area[20].weather[0].hourly[16].chanceofrain}%`;
        // change weather div 2 contents
        weather__2__date.textContent = melbourne__weather__date;
        weather__2__time.textContent = `17:00`;
        if (tempUnitsCelsius === true) {
            weather__2__temp.textContent = `${weatherDataSet.data.area[20].weather[0].hourly[17].tempC}°C`;
        } else if (tempUnitsCelsius === false) {
            weather__2__temp.textContent = `${weatherDataSet.data.area[20].weather[0].hourly[17].tempF}°F`;
        } else {
            return;
        }
        weather__2__precip.textContent = `${weatherDataSet.data.area[20].weather[0].hourly[17].precipMM}mm`;
        weather__2__rain.textContent = `${weatherDataSet.data.area[20].weather[0].hourly[17].chanceofrain}%`;
        // change weather div 3 contents
        weather__3__date.textContent = melbourne__weather__date;
        weather__3__time.textContent = `18:00`;
        if (tempUnitsCelsius === true) {
            weather__3__temp.textContent = `${weatherDataSet.data.area[20].weather[0].hourly[18].tempC}°C`;
        } else if (tempUnitsCelsius === false) {
            weather__3__temp.textContent = `${weatherDataSet.data.area[20].weather[0].hourly[18].tempF}°F`;
        } else {
            return;
        }
        weather__3__precip.textContent = `${weatherDataSet.data.area[20].weather[0].hourly[18].precipMM}mm`;
        weather__3__rain.textContent = `${weatherDataSet.data.area[20].weather[0].hourly[18].chanceofrain}%`;
        // change weather div 4 contents
        weather__4__date.textContent = melbourne__weather__date;
        weather__4__time.textContent = `19:00`;
        if (tempUnitsCelsius === true) {
            weather__4__temp.textContent = `${weatherDataSet.data.area[20].weather[0].hourly[19].tempC}°C`;
        } else if (tempUnitsCelsius === false) {
            weather__4__temp.textContent = `${weatherDataSet.data.area[20].weather[0].hourly[19].tempF}°F`;
        } else {
            return;
        }
        weather__4__precip.textContent = `${weatherDataSet.data.area[20].weather[0].hourly[19].precipMM}mm`;
        weather__4__rain.textContent = `${weatherDataSet.data.area[20].weather[0].hourly[19].chanceofrain}%`;
    } catch(err) { 
        alert("Error: could not get Melbourne weather data!");
        setEmptyWeatherData();
    }
    } else if (jeddah__event.classList.contains("active__event")) {

        hideAllTrackInfo();
        track__info__jeddah.style.display = "flex";

        time__P1.textContent = "15:30 - 16:30";
        time__P2.textContent = "19:00 - 20:00";
        time__P3.textContent = "16:00 - 17:00";
        time__Q.textContent = "19:00 - 20:00";
        time__R.textContent = "19:00 - 21:00";

        race__location.textContent = "Location: Jeddah";
        local__time.textContent = "Local time: -";
        start__time__container.textContent = "Start time: 19:00 @ 5 December 2021";

        // change the text contents of the weather container elements
        try {
        // change the date format for the weather elements
        /* credits #4 (see README.md credits section) */
        const jeddah__weather__date = DateFormatter.formatDate(new Date(weatherDataSet.data.area[21].weather[0].date), 'DD MMMM YYYY');

        // change weather div 1 contents
        weather__1__date.textContent = jeddah__weather__date;
        weather__1__time.textContent = `18:00`;
        if (tempUnitsCelsius === true) {
            weather__1__temp.textContent = `${weatherDataSet.data.area[21].weather[0].hourly[18].tempC}°C`;
        } else if (tempUnitsCelsius === false) {
            weather__1__temp.textContent = `${weatherDataSet.data.area[21].weather[0].hourly[18].tempF}°F`;
        } else {
            return;
        }
        weather__1__precip.textContent = `${weatherDataSet.data.area[21].weather[0].hourly[18].precipMM}mm`;
        weather__1__rain.textContent = `${weatherDataSet.data.area[21].weather[0].hourly[18].chanceofrain}%`;
        // change weather div 2 contents
        weather__2__date.textContent = jeddah__weather__date;
        weather__2__time.textContent = `19:00`;
        if (tempUnitsCelsius === true) {
            weather__2__temp.textContent = `${weatherDataSet.data.area[21].weather[0].hourly[19].tempC}°C`;
        } else if (tempUnitsCelsius === false) {
            weather__2__temp.textContent = `${weatherDataSet.data.area[21].weather[0].hourly[19].tempF}°F`;
        } else {
            return;
        }
        weather__2__precip.textContent = `${weatherDataSet.data.area[21].weather[0].hourly[19].precipMM}mm`;
        weather__2__rain.textContent = `${weatherDataSet.data.area[21].weather[0].hourly[19].chanceofrain}%`;
        // change weather div 3 contents
        weather__3__date.textContent = jeddah__weather__date;
        weather__3__time.textContent = `20:00`;
        if (tempUnitsCelsius === true) {
            weather__3__temp.textContent = `${weatherDataSet.data.area[21].weather[0].hourly[20].tempC}°C`;
        } else if (tempUnitsCelsius === false) {
            weather__3__temp.textContent = `${weatherDataSet.data.area[21].weather[0].hourly[20].tempF}°F`;
        } else {
            return;
        }
        weather__3__precip.textContent = `${weatherDataSet.data.area[21].weather[0].hourly[20].precipMM}mm`;
        weather__3__rain.textContent = `${weatherDataSet.data.area[21].weather[0].hourly[20].chanceofrain}%`;
        // change weather div 4 contents
        weather__4__date.textContent = jeddah__weather__date;
        weather__4__time.textContent = `21:00`;
        if (tempUnitsCelsius === true) {
            weather__4__temp.textContent = `${weatherDataSet.data.area[21].weather[0].hourly[21].tempC}°C`;
        } else if (tempUnitsCelsius === false) {
            weather__4__temp.textContent = `${weatherDataSet.data.area[21].weather[0].hourly[21].tempF}°F`;
        } else {
            return;
        }
        weather__4__precip.textContent = `${weatherDataSet.data.area[21].weather[0].hourly[21].precipMM}mm`;
        weather__4__rain.textContent = `${weatherDataSet.data.area[21].weather[0].hourly[21].chanceofrain}%`;
    } catch(err) { 
        alert("Error: could not get Jeddah weather data!");
        setEmptyWeatherData();
    }
    } else if (emirates__event.classList.contains("active__event")) {

        hideAllTrackInfo();
        track__info__emirates.style.display = "flex";

        time__P1.textContent = "13:30 - 14:30";
        time__P2.textContent = "17:00 - 18:00";
        time__P3.textContent = "14:00 - 15:00";
        time__Q.textContent = "17:00 - 18:00";
        time__R.textContent = "17:00 - 19:00";

        race__location.textContent = "Location: Yas Island";
        local__time.textContent = "Local time: -";
        start__time__container.textContent = "Start time: 17:00 @ 12 December 2021";

        // change the text contents of the weather container elements
        try {
        // change the date format for the weather elements
        /* credits #4 (see README.md credits section) */
        const emirates__weather__date = DateFormatter.formatDate(new Date(weatherDataSet.data.area[22].weather[0].date), 'DD MMMM YYYY');

        // change weather div 1 contents
        weather__1__date.textContent = emirates__weather__date;
        weather__1__time.textContent = `16:00`;
        if (tempUnitsCelsius === true) {
            weather__1__temp.textContent = `${weatherDataSet.data.area[22].weather[0].hourly[16].tempC}°C`;
        } else if (tempUnitsCelsius === false) {
            weather__1__temp.textContent = `${weatherDataSet.data.area[22].weather[0].hourly[16].tempF}°F`;
        } else {
            return;
        }
        weather__1__precip.textContent = `${weatherDataSet.data.area[22].weather[0].hourly[16].precipMM}mm`;
        weather__1__rain.textContent = `${weatherDataSet.data.area[22].weather[0].hourly[16].chanceofrain}%`;
        // change weather div 2 contents
        weather__2__date.textContent = emirates__weather__date;
        weather__2__time.textContent = `17:00`;
        if (tempUnitsCelsius === true) {
            weather__2__temp.textContent = `${weatherDataSet.data.area[22].weather[0].hourly[17].tempC}°C`;
        } else if (tempUnitsCelsius === false) {
            weather__2__temp.textContent = `${weatherDataSet.data.area[22].weather[0].hourly[17].tempF}°F`;
        } else {
            return;
        }
        weather__2__precip.textContent = `${weatherDataSet.data.area[22].weather[0].hourly[17].precipMM}mm`;
        weather__2__rain.textContent = `${weatherDataSet.data.area[22].weather[0].hourly[17].chanceofrain}%`;
        // change weather div 3 contents
        weather__3__date.textContent = emirates__weather__date;
        weather__3__time.textContent = `18:00`;
        if (tempUnitsCelsius === true) {
            weather__3__temp.textContent = `${weatherDataSet.data.area[22].weather[0].hourly[18].tempC}°C`;
        } else if (tempUnitsCelsius === false) {
            weather__3__temp.textContent = `${weatherDataSet.data.area[22].weather[0].hourly[18].tempF}°F`;
        } else {
            return;
        }
        weather__3__precip.textContent = `${weatherDataSet.data.area[22].weather[0].hourly[18].precipMM}mm`;
        weather__3__rain.textContent = `${weatherDataSet.data.area[22].weather[0].hourly[18].chanceofrain}%`;
        // change weather div 4 contents
        weather__4__date.textContent = emirates__weather__date;
        weather__4__time.textContent = `19:00`;
        if (tempUnitsCelsius === true) {
            weather__4__temp.textContent = `${weatherDataSet.data.area[22].weather[0].hourly[19].tempC}°C`;
        } else if (tempUnitsCelsius === false) {
            weather__4__temp.textContent = `${weatherDataSet.data.area[22].weather[0].hourly[19].tempF}°F`;
        } else {
            return;
        }
        weather__4__precip.textContent = `${weatherDataSet.data.area[22].weather[0].hourly[19].precipMM}mm`;
        weather__4__rain.textContent = `${weatherDataSet.data.area[22].weather[0].hourly[19].chanceofrain}%`;
    } catch(err) { 
        alert("Error: could not get Abu Dhabi weather data!");
        setEmptyWeatherData();
    }
    } else {
        return;
    }
};

// function that fetches weather data from an API, then puts the data in localStorage, then executes the displayActiveEventData function
const getWeatherData = async function() {
    /* credits #1 (see README.md credits section) */
    try {
    /* credits #2 (see README.md credits section) */
    const response = await fetch(weather__API);
    const weatherData = await response.json();
    
    // store weather data in local storage converted to a string
    /* credits #3 (see README.md credits section) */
    localStorage.setItem("weatherData", JSON.stringify(weatherData));

    displayActiveEventData();

    } catch(err) { 
        alert("Error: could not get weather data!");
    }
};

// execute function to fetch and store the API weather data, then executes the displayActiveEventData function to display track, time and weather data based on the active race event
getWeatherData();

// checks for changes in window size, then executes the checkMainFlexDirection and setInitialCountdown functions
/* credits #6 (see README.md credits section) */
window.onresize = function(){
    checkMainFlexDirection();
    setInitialCountdown();
};

// function that removes the active class from all race calendar event elements
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

// function that checks what the currently active race calendar event is, then displays its data
/* credits #5 (see README.md credits section) */
const raceCalendarFunctionality = function (raceEvent, raceLocation, eventHIC) {
    if (raceEvent.classList.contains("active__event") && window.getComputedStyle(main__homepage__container, null).getPropertyValue("flex-direction") === "row") {
        return;
    } else if (raceEvent.classList.contains("active__event") && window.getComputedStyle(main__homepage__container, null).getPropertyValue("flex-direction") === "column" && mobileCalendarExpanded === false) {
        hideAllHamburgerIcons();
        HIC__bahrain.style.display = "flex";
        showAllEvents();
        mobileCalendarExpanded = true;
    } else if (raceEvent.classList.contains("active__event") && window.getComputedStyle(main__homepage__container, null).getPropertyValue("flex-direction") === "column" && mobileCalendarExpanded === true) {
        hideAllHamburgerIcons();
        eventHIC.style.display = "flex";
        showActiveEventOnly();
        mobileCalendarExpanded = false;
    } else if (!raceEvent.classList.contains("active__event") && window.getComputedStyle(main__homepage__container, null).getPropertyValue("flex-direction") === "column" && mobileCalendarExpanded === true) {
        removeActiveEventClass();
        raceEvent.classList.add("active__event");
        hideAllHamburgerIcons();
        eventHIC.style.display = "flex";
        displayActiveEventData();
        showActiveEventOnly();
        mobileCalendarExpanded = false;
    } else {
        removeActiveEventClass();
        raceEvent.classList.add("active__event");
        displayActiveEventData();
    }
};

// function that switches between temperature units ( Celcius || Fahrenheit )
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
    }
};

// function that removes the active button ID from the weather, track and time mobile dashboard buttons
const removeActiveButton = function() { 
    weather__button.removeAttribute('id');
    track__button.removeAttribute('id');
    schedule__button.removeAttribute('id');
};

/* ---------- calendar elements event listeners ---------- */

// event listener that makes bahrain the active event and displays its data on click
bahrain__event.addEventListener("click", function(){
    raceCalendarFunctionality(bahrain__event, "bahrain", HIC__bahrain);
});

// event listener that makes imola the active event and displays its data on click
imola__event.addEventListener("click", function(){
    raceCalendarFunctionality(imola__event, "imola", HIC__imola);
});

// event listener that makes portimao the active event and displays its data on click
portimao__event.addEventListener("click", function(){
    raceCalendarFunctionality(portimao__event, "portimao", HIC__portimao);
});

// event listener that makes barcelona the active event and displays its data on click
barcelona__event.addEventListener("click", function(){
    raceCalendarFunctionality(barcelona__event, "barcelona", HIC__barcelona);
});

// event listener that makes monaco the active event and displays its data on click
monaco__event.addEventListener("click", function(){
    raceCalendarFunctionality(monaco__event, "monaco", HIC__monaco);
});

// event listener that makes baku the active event and displays its data on click
baku__event.addEventListener("click", function(){
    raceCalendarFunctionality(baku__event, "baku", HIC__baku);
});

// event listener that makes montreal the active event and displays its data on click
montreal__event.addEventListener("click", function(){
    raceCalendarFunctionality(montreal__event, "montreal", HIC__montreal);
});

// event listener that makes castellet the active event and displays its data on click
castellet__event.addEventListener("click", function(){
    raceCalendarFunctionality(castellet__event, "castellet", HIC__castellet);
});

// event listener that makes spielberg the active event and displays its data on click
spielberg__event.addEventListener("click", function(){
    raceCalendarFunctionality(spielberg__event, "spielberg", HIC__spielberg);
});

// event listener that makes silverstone the active event and displays its data on click
silverstone__event.addEventListener("click", function(){
    raceCalendarFunctionality(silverstone__event, "silverstone", HIC__silverstone);
});

// event listener that makes budapest the active event and displays its data on click
budapest__event.addEventListener("click", function(){
    raceCalendarFunctionality(budapest__event, "budapest", HIC__budapest);
});

// event listener that makes spa the active event and displays its data on click
spa__event.addEventListener("click", function(){
    raceCalendarFunctionality(spa__event, "spa", HIC__spa);
});

// event listener that makes zandvoort the active event and displays its data on click
zandvoort__event.addEventListener("click", function(){
    raceCalendarFunctionality(zandvoort__event, "zandvoort", HIC__zandvoort);
});

// event listener that makes monza the active event and displays its data on click
monza__event.addEventListener("click", function(){
    raceCalendarFunctionality(monza__event, "monza", HIC__monza);
});

// event listener that makes sochi the active event and displays its data on click
sochi__event.addEventListener("click", function(){
    raceCalendarFunctionality(sochi__event, "sochi", HIC__sochi);
});

// event listener that makes singapore the active event and displays its data on click
singapore__event.addEventListener("click", function(){
    raceCalendarFunctionality(singapore__event, "singapore", HIC__singapore);
});

// event listener that makes suzuka the active event and displays its data on click
suzuka__event.addEventListener("click", function(){
    raceCalendarFunctionality(suzuka__event, "suzuka", HIC__suzuka);
});

// event listener that makes austin the active event and displays its data on click
austin__event.addEventListener("click", function(){
    raceCalendarFunctionality(austin__event, "austin", HIC__bahrain);
});

// event listener that makes mexico the active event and displays its data on click
mexico__event.addEventListener("click", function(){
    raceCalendarFunctionality(mexico__event, "mexico", HIC__mexico);
});

// event listener that makes interlagos the active event and displays its data on click
interlagos__event.addEventListener("click", function(){
    raceCalendarFunctionality(interlagos__event, "interlagos", HIC__interlagos);
});

// event listener that makes melbourne the active event and displays its data on click
melbourne__event.addEventListener("click", function(){
    raceCalendarFunctionality(melbourne__event, "melbourne", HIC__melbourne);
});

// event listener that makes jeddah the active event and displays its data on click
jeddah__event.addEventListener("click", function(){
    raceCalendarFunctionality(jeddah__event, "jeddah", HIC__jeddah);
});

// event listener that makes emirates the active event and displays its data on click
emirates__event.addEventListener("click", function(){
    raceCalendarFunctionality(emirates__event, "emirates", HIC__emirates);
});

/* ---------- mobile dashboard buttons event listeners ---------- */

// event listener on the mobile button dashboard's weather button, that displays only the active event weather data on click
weather__button.addEventListener("click", function(){
    if (weather__location__info__container.classList.contains("weather__data__active")) {
        return;
    } else {
        removeActiveButton();
        weather__button.id = "active__button";
        track__info__container.classList.remove("track__data__active");
        time__info__container.classList.remove("schedule__data__active");
        weather__location__info__container.classList.add("weather__data__active");
        displayActiveEventDataMobile();
    }
});

// event listener on the mobile button dashboard's track button, that displays only the active event track data on click
track__button.addEventListener("click", function(){
    if (track__info__container.classList.contains("track__data__active")) {
        return;
    } else {
        removeActiveButton();
        track__button.id = "active__button";
        time__info__container.classList.remove("schedule__data__active");
        weather__location__info__container.classList.remove("weather__data__active");
        track__info__container.classList.add("track__data__active");
        displayActiveEventDataMobile();
    }
});

// event listener on the mobile button dashboard's schedule button, that displays only the active event time data on click
schedule__button.addEventListener("click", function(){
    if (time__info__container.classList.contains("schedule__data__active")) {
        return;
    } else {
        removeActiveButton();
        schedule__button.id = "active__button";
        track__info__container.classList.remove("track__data__active");
        weather__location__info__container.classList.remove("weather__data__active");
        time__info__container.classList.add("schedule__data__active");
        displayActiveEventDataMobile();
    }
});

/* ---------- weather container elements event listeners ---------- */

// switches the displayed temperature units on click ( Celcius || Farenheit )
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