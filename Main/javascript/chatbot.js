let u1 = document.getElementById('user-input-1');
let u2 = document.getElementById('user-input-2');
let u3 = document.getElementById('user-input-3');
let tvb = document.getElementById('tekst-vraag-box');

function reset(){
    tvb.innerHTML = "Waar gaat je vraag over?";
    u1.innerHTML = "Datum informatie";
    u1.setAttribute("onClick", "datainformatie()");
    u2.innerHTML = "";
    u2.setAttribute("onClick", "");
    u2.className = "tekst-vraag-userinput";
    u3.innerHTML = "";
    u3.setAttribute("onClick", "");
    u3.className = "tekst-vraag-userinput";
}

function datainformatie(){
// Change question in question-box and change answers for user-input
    tvb.innerHTML = "Welke data wil je weten";
    u1.innerHTML = "Wanneer begint het schooljaar";
    u1.setAttribute("onClick","schooljaar()");
    u2.innerHTML = "Wanneer is de opendag";
    u2.setAttribute("onClick", "opendag()");
    u3.innerHTML = "Will je terug naar het begin?";
    u3.setAttribute("onClick", "reset()");
}
//
function schooljaar() {
    tvb.innerHTML = "Het schooljaar begin Augustus 2024";
    u1.innerHTML = "Terug naar het begin";
    u1.setAttribute("onClick", "reset()");
}
function opendag(){
    document.getElementById('tekst-vraag-box').innerHTML = "De opendag is op 26 en 27 januari 2024";
    u1.innerHTML = "Terug naar het begin";
    u1.setAttribute("onClick", "reset()")
    u2.className = "not-visible";
    u3.className = "not-visible";
}