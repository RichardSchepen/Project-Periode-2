let userinput1 = document.getElementById('user-input-1')
let userinput1text = userinput1.innerText;
let userinput2 = document.getElementById('user-input-2');
let userinput2classname = userinput2.className;
let userinput2text = userinput2.innerText;
let userinput3 = document.getElementById('user-input-3');
let userinput3classname = userinput3.className;
let userinput3text = userinput3.innerText;
let userinput4 = document.getElementById('user-input-4');
let userinput4classname = userinput4.className;
let userinput4text = userinput4.innerText;
let userinput5 = document.getElementById('user-input-5');
let userinput5classname = userinput5.className;
let userinput5text = userinput5.innerText;
let tekstvraagbox = document.getElementById('tekst-vraag-box');
let tekstvraagboxtext = tekstvraagbox.innerText;

function reset(){
    tekstvraagboxtext = "Waar gaat je vraag over?";
    userinput1text = "Datum informatie";
    userinput1.setAttribute("onclick", "datainformatie()");
    userinput2text = "Informatie over software developer";
    userinput2.setAttribute("onclick", "softwaredev()");
    userinput2classname = "tekst-vraag-userinput";
    userinput3text = "";
    userinput3.setAttribute("onclick", "");
    userinput3classname = "tekst-vraag-userinput";
    userinput4classname = "tekst-vraag-userinput";
    userinput5classname = "tekst-vraag-userinput";
}

function datainformatie(){
// Change question in question-box and change answers for user-input
    tekstvraagboxtext = "Welke data wil je weten";
    userinput1text = "Wanneer begint het schooljaar";
    userinput1.setAttribute("onclick","schooljaar()");
    userinput2text = "Wanneer is de opendag";
    userinput2.setAttribute("onclick", "opendag()");
    userinput3text = "Will je terug naar het begin?";
    userinput3.setAttribute("onclick", "reset()");
    userinput4classname = "not-visible";
    userinput5classname = "not-visible";
}
//
function schooljaar() {
    tekstvraagboxtext = "Het schooljaar begin Augustus 2024";
    userinput1text = "Terug naar het begin";
    userinput1.setAttribute("onclick", "reset()");
    userinput2classname = "not-visible";
    userinput3classname = "not-visible";
    userinput4classname = "not-visible";
    userinput5classname = "not-visible";
}
function opendag(){
    tekstvraagboxtext = "De opendag is op 26 en 27 januari 2024";
    userinput1text = "Terug naar het begin";
    userinput1.setAttribute("onclick", "reset()")
    userinput2classname = "not-visible";
    userinput3classname = "not-visible";
    userinput4classname = "not-visible";
    userinput5classname = "not-visible";
}
function softwaredev() {
    tekstvraagboxtext = "Wat wil je weten over de opleiding software-developer";
    userinput1text = "Welke programmeer talen leren jullie?";
    userinput1.setAttribute("onclick", "languages()");
    userinput2text = "Hoe lang ben je bezig?";
    userinput2.setAttribute("onclick", "tijdopleiding()");
    userinput3text = "Wat ga je maken als softwaredeveloper";
    userinput3.setAttribute("onclick", "infodev()");
    userinput4text = "Heb je al besloten om je in te schrijven voor de opleiding?"
    userinput4.setAttribute("onclick", "inschrijven()");
    userinput5text = "Wil je terug naar het begin?";
    userinput5.setAttribute("onclick", "reset()");

}
function languages(){
    tekstvraagboxtext = "Bij deze opleiding zul je leren over de volgende talen";
    userinput1text = "Html/Css";
    userinput1.setAttribute("onclick", "HtmlCss()");
    userinput2text = "Javascript";
    userinput2.setAttribute("onclick", "Javascript()");
    userinput3text = "PhP";
    userinput3.setAttribute("onclick", "PhP()");
    userinput4classname = "not-visible";
    userinput5classname = "not-visible";
}
function HtmlCss(){
    tekstvraagboxtext = "Dit zijn de eerste talen die je gaat leren. Html en CSS vormen de basis van het developen van websites. Als je meer wilt weten klik dan op een van de knoppen";
    userinput1text = "Html";
    userinput1.setAttribute("onclick", "location.href='https://www.w3schools.com/html/'");
    userinput2text = "Css";
    userinput2.setAttribute("onclick", "location.href='https://www.w3schools.com/css/default.asp'");
    userinput3.setAttribute("onclick", "reset()");
    userinput4classname = "not-visible";
    userinput5classname = "not-visible";
}
function tijdopleiding(){
    tekstvraagboxtext = "Deze opleiding duurt 4 jaar met een mogelijkheid om het in 3 jaar te doen";
    userinput1text = "Terug naar het begin";
    userinput1.setAttribute("onclick", "reset()");
    userinput2classname = "not-visible";
    userinput3classname = "not-visible";
    userinput4classname = "not-visible";
    userinput5classname = "not-visible";
}