let userinput1 = document.getElementById('user-input-1'); // Gets user input 1 button element
let userinput2 = document.getElementById('user-input-2');
let userinput3 = document.getElementById('user-input-3');
let userinput4 = document.getElementById('user-input-4');
let userinput5 = document.getElementById('user-input-5');
let userinput6 = document.getElementById('user-input-6');
let tekstvraagbox = document.getElementById('tekst-vraag-box'); // Gets the question-box element
let gobackint = 0; // variable to check where user is for goback function to work

/* Goback is used for when a user wants to go back a question or when a user wants to go back to the beginning.
   The int is used to keep track of where the user is so the user gets sent to the right questions*/
function goback(userinputname1,userinputname2){
    userinputname1.innerText = "Terug naar de vorige vraag";
    userinputname1.className = "tekst-vraag-userinput";
    // Makes the user go back to the first question
    if (gobackint === 1){
        userinputname1.setAttribute("onclick", "clearscreen()")
    }
    // Makes the user go back to the date questions
    if (gobackint === 2){
        userinputname1.setAttribute("onclick" , "dateinfo()");
    }
    // Makes the user go back to the software development questions
    if (gobackint === 3){
        userinputname1.setAttribute("onclick", "softwaredev()");
    }
    // Makes the user go back to the languages questions
    if (gobackint === 4){
        userinputname1.setAttribute("onclick", "languages()")
    }
    if (gobackint === 5){
        userinputname1.setAttribute("onclick", "infodev()");
    }
    userinputname2.innerText = "Terug naar het begin";
    userinputname2.className = "tekst-vraag-userinput";
    userinputname2.setAttribute("onclick", "clearscreen()");
}

// Clears the screen for new interaction
function clearscreen(){
    tekstvraagbox.innerText = "Waar gaat je vraag over?";
    userinput1.innerText = "Datum informatie";
    userinput1.setAttribute("onclick", "dateinfo()");
    userinput2.innerText = "Informatie over software developer";
    userinput2.setAttribute("onclick", "softwaredev()");
    userinput2.className = "tekst-vraag-userinput";
    userinput3.innerText = "Heb je al besloten om je in te schrijven voor de opleiding?";
    userinput3.className = "tekst-vraag-userinput";
    userinput3.setAttribute("onclick", "inschrijvenvraagbox()");
    userinput4.className = "not-visible";
    userinput5.className = "not-visible";
    userinput6.className = "not-visible";
}

// Function to display information about dates
function dateinfo(){
// Changes question in question-box and change answers for user-input
    gobackint = 1; // Assign before goback or it won't work
    goback(userinput3,userinput4); // Returns user to previous question
    tekstvraagbox.innerText = "Welke datum wil je weten";
    userinput1.innerText = "Wanneer begint het schooljaar";
    userinput1.setAttribute("onclick","datesinfo(1)");
    userinput2.innerText = "Wanneer is de opendag";
    userinput2.setAttribute("onclick", "datesinfo(2)");
    userinput5.className = "not-visible";
    userinput6.className = "not-visible";
}

// Function to display information about start school year and opendag
function datesinfo(userinputintfordatum) {
    gobackint = 2;
    goback(userinput1,userinput2)
    if(userinputintfordatum === 1) {
        tekstvraagbox.innerText = "Het schooljaar begin Augustus 2024";
    }
    else if(userinputintfordatum === 2) {
        tekstvraagbox.innerText = "De opendag is op 26 en 27 januari 2024";}
    userinput3.className = "not-visible";
    userinput4.className = "not-visible";
    userinput5.className = "not-visible";
    userinput6.className = "not-visible";
}

// Function to display information about the software developer study
function softwaredev() {
    gobackint = 1;
    goback(userinput5,userinput6)
    tekstvraagbox.innerText = "Wat wil je weten over de opleiding software-developer";
    userinput1.innerText = "Welke programmeer talen leren jullie?";
    userinput1.setAttribute("onclick", "languages()");
    userinput2.innerText = "Hoe lang ben je bezig?";
    userinput2.className = "tekst-vraag-userinput";
    userinput2.setAttribute("onclick", "tijdopleiding()");
    userinput3.innerText = "Wat ga je maken als softwaredeveloper";
    userinput3.className = "tekst-vraag-userinput";
    userinput3.setAttribute("onclick", "infodev()");
    userinput4.innerText = "Hoe zit het met stages?";
    userinput4.className = "tekst-vraag-userinput";
    userinput4.setAttribute("onclick", "stage()");
}

// Function that displays information about the languages learned during the study
function languages(){
    gobackint = 3;
    goback(userinput4, userinput5);
    tekstvraagbox.innerText = "Bij deze opleiding zul je leren over de volgende talen";
    userinput1.innerText = "Html/Css";
    userinput1.setAttribute("onclick", "HtmlCss()");
    userinput2.innerText = "Javascript";
    userinput2.setAttribute("onclick", "Javascript()");
    userinput3.innerText = "PhP";
    userinput3.setAttribute("onclick", "PhP()");
    userinput6.className = "not-visible"
}

// Function that displays information about Html and Css
function HtmlCss(){
    gobackint = 4;
    goback(userinput3, userinput4);
    tekstvraagbox.innerText = "Dit zijn de eerste talen die je gaat leren. Html en CSS vormen de basis van het developen van websites. Als je meer wilt weten klik dan op een van de knoppen voor Html of Css.";
    userinput1.innerText = "Html";
    userinput1.setAttribute("onclick", "window.open('https://www.w3schools.com/html/')");
    userinput2.innerText = "Css";
    userinput2.setAttribute("onclick", "window.open('https://www.w3schools.com/css/default.asp')");
    userinput5.className = "not-visible";
    userinput6.className = "not-visible";
}

// Function that displays information about Javascript
function Javascript() {
    gobackint = 4;
    goback(userinput2,userinput3)
    tekstvraagbox.innerText = "Dit zul je in je 2de periode leren. Javascript zorgt ervoor dat een website interactief is. Deze interactie is volledig geschreven met javascript, html en css. Als je meer wilt weten klik dan op de knop Javascript.";
    userinput1.innerText = "Javascript";
    userinput1.setAttribute("onclick", "window.open('https://www.w3schools.com/js/default.asp')");
    userinput4.className = "not-visible";
    userinput5.className = "not-visible";
    userinput6.className = "not-visible";
}

// Function that displays information about PhP
function PhP(){
    gobackint = 4;
    goback(userinput3,userinput4);
    tekstvraagbox.innerText = "Dit zul je in de 3de of 4de periode leren. PhP zorgt ervoor dat websites zoals forums en webshops gebruik kunnen maken van een database voor allerlei dingen zoals het inloggen, het bijhouden van de vooraad en de prijs. Als je meer wilt weten klik dan op een van de knoppen voor PhP of Databases";
    userinput1.innerText = "PhP";
    userinput1.setAttribute("onclick", "window.open('https://www.w3schools.com/php/default.asp')");
    userinput2.innerText = "Databases";
    userinput2.setAttribute("onclick", "window.open('https://nl.wikipedia.org/wiki/Database')");
    userinput5.className = "not-visible";
    userinput6.className = "not-visible";
}

// Function that displays information about how long this study takes
function tijdopleiding(){
    gobackint = 3;
    goback(userinput1,userinput2);
    tekstvraagbox.innerText = "Deze opleiding duurt 4 jaar met een mogelijkheid om het in 3 jaar te doen";
    userinput3.className = "not-visible";
    userinput4.className = "not-visible";
    userinput5.className = "not-visible";
    userinput6.className = "not-visible"
}

// Function that displays information about what you learn to make during the study
function infodev(){
    gobackint = 3;
    goback(userinput4,userinput5);
    tekstvraagbox.innerText = "Deze dingen ga je leren maken als software-developer";
    userinput1.innerText = "Websites";
    userinput1.setAttribute("onclick", "websites()");
    userinput2.innerText = "Databases";
    userinput2.setAttribute("onclick", "databases()");
    userinput3.innerText = "Games";
    userinput3.className = "tekst-vraag-userinput";
    userinput3.setAttribute("onclick", "games()");
    userinput6.className = "not-visible";
}

// Function that displays information about website development
function websites(){
    gobackint = 5;
    goback(userinput1,userinput2);
    tekstvraagbox.innerText = "Websites, je ziet ze overal. Als software developer leer jij hoe je de beste websites kunt maken. Van Html tot PhP. jij leert het allemaal.";
    userinput3.className = "not-visible";
    userinput4.className = "not-visible";
    userinput5.className = "not-visible";
    userinput6.className = "not-visible";
}

// Function that displays information about databases
function databases(){
    gobackint = 5;
    goback(userinput1,userinput2);
    tekstvraagbox.innerText = "Databases zijn een belangrijk onderdeel voor websites. Ze houden bij wat de prijs van een artikel is. Hoeveel er nog op vooraad is. Gebruikersgegevens. Al deze gegevens worden bijgehouden en opgeslagen in de databases van de websites.";
    userinput3.className = "not-visible";
    userinput4.className = "not-visible";
    userinput5.className = "not-visible";
    userinput6.className = "not-visible";
}

// Function that displays information about game development
function games(){
    gobackint = 5;
    goback();
    tekstvraagbox.innerText = "Je hebt tijdens de opleiding de mogelijkheid om game development als keuzevak te doen. Je zal dan een basis leren in game development";
    userinput3.className = "not-visible";
    userinput4.className = "not-visible";
    userinput5.className = "not-visible";
    userinput6.className = "not-visible";

}

// Function that displays information about internship
function stage(){
    gobackint = 3;
    goback(userinput1,userinput2);
    tekstvraagbox.innerText = "Je vraagt je dus af hoe het zit met stages. Je zal in je 2de jaar een half jaar stage moeten gaan lopen. Ook in je 3de leerjaar loop je een half jaar stage. Je zal hier aan het begin van je schooljaar wat meer over horen.";
    userinput3.className = "not-visible";
    userinput4.className = "not-visible";
    userinput5.className = "not-visible";
    userinput6.className = "not-visible";
}

// Function that displays information about registering to study
function inschrijvenvraagbox() {
    gobackint = 1;
    goback(userinput2,userinput3);
    tekstvraagbox.innerText = "Tof dat je je wilt inschrijven. En maak je geen zorgen je kan je voor elke opleiding inschrijven. Mocht je dus eigenlijk al een andere opleiding hebben gekozen dan kan je je alsnog daarvoor inschrijven.";
    userinput1.innerText = "Inschrijven";
    userinput1.setAttribute("onclick", "window.open('https://www.techniekcollegerotterdam.nl/aanmelden');");
    userinput4.className = "not-visible";
    userinput5.className = "not-visible";
    userinput6.className = "not-visible";
}