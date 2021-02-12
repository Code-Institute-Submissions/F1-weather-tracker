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

// races starting date & time
const bahrain__race__start = new Date(Date.UTC(2021, 2, 28, 13, 0, 0));
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
console.log(current__date);
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