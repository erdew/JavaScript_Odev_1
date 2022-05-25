// JavaScript Ödev 1

// Kullanıcıdan isim bilgisini alarak sayfada görüntüledik.
let userName = prompt("Name?", "Erdem");
document.querySelector("#name").innerHTML = userName;

// date isminde bir Date objesi yaratarak, şuanki zaman bilgilerini aldık.
let date = new Date();

// Saatler
let the_hours = date.getHours();
document.querySelector("#time_hours").innerHTML = the_hours;

// Dakikalar
let the_minutes = date.getMinutes();
document.querySelector("#time_minutes").innerHTML = the_minutes;

// Saniyeler
let the_seconds = date.getSeconds();
document.querySelector("#time_seconds").innerHTML = the_seconds;

// Günler
let the_day = date.getDay();

if (the_day == 1) {
  document.querySelector("#time_days").innerHTML = "Pazartesi";
} else if (the_day == 2) {
  document.querySelector("#time_days").innerHTML = "Salı";
} else if (the_day == 3) {
  document.querySelector("#time_days").innerHTML = "Çarşamba";
} else if (the_day == 4) {
  document.querySelector("#time_days").innerHTML = "Perşembe";
} else if (the_day == 5) {
  document.querySelector("#time_days").innerHTML = "Cuma";
} else if (the_day == 6) {
  document.querySelector("#time_days").innerHTML = "Cumartesi";
} else if (the_day == 7) {
  document.querySelector("#time_days").innerHTML = "Pazar";
} else {
  document.querySelector("#time_days").innerHTML = "Somethings wrong!";
}
