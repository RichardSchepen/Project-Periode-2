// Welkom message
let welkomtekst = "welkom bij de opendag van het Techniek College Rotterdam";
let day = new Date;
h = day.getHours();
m = day.getMinutes();
if (h > 0 && h < 12) {
    document.getElementById("welkom").innerHTML = "<h2> Goedemorgen " + welkomtekst + "</h2>";
}
if (h > 12 && h < 18) {
    document.getElementById("welkom").innerHTML = "<h2> Goedemiddag " + welkomtekst + "</h2>";
}
if (h > 18 || h === 0) {
    document.getElementById("welkom").innerHTML = "<h2> Goedenavond " + welkomtekst + "</h2>"
}
// Opendag countdown
// Set the date we're counting down to
let countDownDate = new Date("Jan 26, 2024 15:00:00").getTime();

// Update the count-down every 1 second
let x = setInterval(function() {

// Get today's date and time
let now = new Date().getTime();

// Find the distance between now and the count-down date
let distance = countDownDate - now;

// Time calculations for days, hours, minutes and seconds
let days = Math.floor(distance / (1000 * 60 * 60 * 24));
let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
let seconds = Math.floor((distance % (1000 * 60)) / 1000);

// Output the result in an element with id="demo"
document.getElementById("demo").innerHTML = days + "d " + hours + "h "
    + minutes + "m " + seconds + "s ";

// If the count-down is over, write some text
if (distance < 0) {
    clearInterval(x);
    document.getElementById("demo").innerHTML = "Helaas ben je net te laat voor de open dag!";
    }
}, 1000);