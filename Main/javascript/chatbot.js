let userinput1 = document.getElementById('user-input-1')
let userinput2 = document.getElementById('user-input-2');
let userinput3 = document.getElementById('user-input-3');
let userinput4 = document.getElementById('user-input-4');
let userinput5 = document.getElementById('user-input-5');
let tekstvraagbox = document.getElementById('tekst-vraag-box');

function Clearscreen(){
    tekstvraagbox.innerText = "Waar gaat je vraag over?";
    userinput1.innerText = "Datum informatie";
    userinput1.setAttribute("onclick", "datainformatie()");
    userinput2.innerText = "Informatie over software developer";
    userinput2.setAttribute("onclick", "softwaredev()");
    userinput2.className = "tekst-vraag-userinput";
    userinput3.innerText = "";
    userinput3.setAttribute("onclick", "");
    userinput3.className = "tekst-vraag-userinput";
    userinput4.innerText = "";
    userinput4.className = "tekst-vraag-userinput";
    userinput5.innerText = "";
    userinput5.className = "tekst-vraag-userinput";
}

function datainformatie(){
// Change question in question-box and change answers for user-input
    tekstvraagbox.innerText = "Welke data wil je weten";
    userinput1.innerText = "Wanneer begint het schooljaar";
    userinput1.setAttribute("onclick","schooljaar()");
    userinput2.innerText = "Wanneer is de opendag";
    userinput2.setAttribute("onclick", "opendag()");
    userinput3.innerText = "Will je terug naar het begin?";
    userinput3.setAttribute("onclick", "Clearscreen()");
    userinput4.className = "not-visible";
    userinput5.className = "not-visible";
}
//
function schooljaar() {
    tekstvraagbox.innerText = "Het schooljaar begin Augustus 2024";
    userinput1.innerText = "Terug naar het begin";
    userinput1.setAttribute("onclick", "Clearscreen()");
    userinput2.className = "not-visible";
    userinput3.className = "not-visible";
    userinput4.className = "not-visible";
    userinput5.className = "not-visible";
}
function opendag(){
    tekstvraagbox.innerText = "De opendag is op 26 en 27 januari 2024";
    userinput1.innerText = "Terug naar het begin";
    userinput1.setAttribute("onclick", "Clearscreen()")
    userinput2.className = "not-visible";
    userinput3.className = "not-visible";
    userinput4.className = "not-visible";
    userinput5.className = "not-visible";
}
function softwaredev() {
    tekstvraagbox.innerText = "Wat wil je weten over de opleiding software-developer";
    userinput1.innerText = "Welke programmeer talen leren jullie?";
    userinput1.setAttribute("onclick", "languages()");
    userinput2.innerText = "Hoe lang ben je bezig?";
    userinput2.setAttribute("onclick", "tijdopleiding()");
    userinput3.innerText = "Wat ga je maken als softwaredeveloper";
    userinput3.setAttribute("onclick", "infodev()");
    userinput4.innerText = "Heb je al besloten om je in te schrijven voor de opleiding?"
    userinput4.setAttribute("onclick", "inschrijven()");
    userinput5.innerText = "Wil je terug naar het begin?";
    userinput5.setAttribute("onclick", "Clearscreen()");

}
function languages(){
    tekstvraagbox.innerText = "Bij deze opleiding zul je leren over de volgende talen";
    userinput1.innerText = "Html/Css";
    userinput1.setAttribute("onclick", "HtmlCss()");
    userinput2.innerText = "Javascript";
    userinput2.setAttribute("onclick", "Javascript()");
    userinput3.innerText = "PhP";
    userinput3.setAttribute("onclick", "PhP()");
    userinput4.className = "not-visible";
    userinput5.className = "not-visible";
}
function HtmlCss(){
    tekstvraagbox.innerText = "Dit zijn de eerste talen die je gaat leren. Html en CSS vormen de basis van het developen van websites. Als je meer wilt weten klik dan op een van de knoppen voor Html of Css.";
    userinput1.innerText = "Html";
    userinput1.setAttribute("onclick", "location.href='https://www.w3schools.com/html/'");
    userinput2.innerText = "Css";
    userinput2.setAttribute("onclick", "location.href='https://www.w3schools.com/css/default.asp'");
    userinput3.innerText = "Terug naar het begin";
    userinput3.setAttribute("onclick", "Clearscreen()");
    userinput4.className = "not-visible";
    userinput5.className = "not-visible";
}
function Javascript() {
    tekstvraagbox.innerText = "Dit zul je in je 2de periode leren. Javascript zorgt ervoor dat een website interactief is. Deze chatbot is volledig geschreven met javascript, html en css. Als je meer wilt weten klik dan op de knop Javascript.";
    userinput1.innerText = "Javascript";
    userinput1.setAttribute("onclick", "location.href='https://www.w3schools.com/js/default.asp'");
    userinput2.innerText = "Terug naar het begin";
    userinput2.setAttribute("onclick", "Clearscreen()")
    userinput3.className = "not-visible";
    userinput4.className = "not-visible";
    userinput5.className = "not-visible";
}
function PhP(){
    tekstvraagbox.innerText = "Dit zul je in de 3de of 4de periode leren. PhP zorgt ervoor dat websites zoals forums en webshops gebruik kunnen maken van een database voor allerlei dingen zoals het inloggen, het bijhouden van de vooraad en de prijs. Als je meer wilt weten klik dan op een van de knoppen voor PhP of Databases";
    userinput1.innerText = "PhP";
    userinput1.setAttribute("onclick", "location.href='https://www.w3schools.com/php/default.asp'")
    userinput2.innerText = "Databases";
    userinput2.setAttribute("onclick", "location.href='https://nl.wikipedia.org/wiki/Database'");
    userinput3.innerText = "terug naar het begin";
    userinput3.setAttribute("onclick", "Clearscreen()")
    userinput4.className = "not-visible";
    userinput5.className = "not-visible";
}
function tijdopleiding(){
    tekstvraagbox.innerText = "Deze opleiding duurt 4 jaar met een mogelijkheid om het in 3 jaar te doen";
    userinput1.innerText = "Terug naar het begin";
    userinput1.setAttribute("onclick", "Clearscreen()");
    userinput2.className = "not-visible";
    userinput3.className = "not-visible";
    userinput4.className = "not-visible";
    userinput5.className = "not-visible";
}
function infodev(){
    tekstvraagbox.innerText = "";
}
function inschrijven() {
    tekstvraagbox.innerText = "";
}