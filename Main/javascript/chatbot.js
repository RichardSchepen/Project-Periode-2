function datainformatie(){
// Repeat but change question in questionbox
    document.getElementById('tekst-vraag-box').innerHTML = "Welke data wil je weten";
    document.getElementById('user-input-1').innerHTML = "Wanneer begint het schooljaar";
    document.getElementById('user-input-1').setAttribute("onClick","schooljaar()");
    document.getElementById('user-input-2').innerHTML = "Wanneer is de opendag";
    document.getElementById('user-input-3').innerHTML = "Will je terug naar het begin?"
}
function schooljaar() {
    document.getElementById('tekst-vraag-box').innerHTML = ""
}
