function machWas() {
    const nummer = document.querySelector(".num_input").value*2;
    const ergebnis = document.querySelector(".ergebnis");

    ergebnis.innerHTML = nummer;
}

function alterBerechnen() {
    const gebJahr = document.querySelector(".jahr").value;
    const aktJahr = new Date().getFullYear();
    const alterErgebnis = document.querySelector(".alterergebnis");
    alterErgebnis.innerHTML = "Du bist " + (aktJahr - gebJahr) + " <b>Jahre</b> alt.";
}

function differenzBerechnen() {
    const erstesJahr = document.querySelector(".jahr1").value;
    const zweitesJahr = document.querySelector(".jahr2").value;
    const diffErgebnis = document.querySelector(".differgebnis");
    diffErgebnis.innerHTML = "Die Altersdifferenz beträgt " + (erstesJahr - zweitesJahr) + " Jahre." ;
}


const counterLiveOutput = document.querySelector(".counterlive");
let outputDefault = 0;
counterLiveOutput.innerHTML = outputDefault;

function addOne(numRandom) {
    outputDefault += numRandom;
    counterLiveOutput.innerHTML = outputDefault;
}

function resetAll() {
    outputDefault = 0;
    counterLiveOutput.innerHTML = outputDefault;
}

function multiplyAll() {
    outputDefault = outputDefault*2
    counterLiveOutput.innerHTML = outputDefault;
}

function changeH3() {
    const headlineH3 = document.querySelector("h3");
    headlineH3.classList.add("zusatzh3");
}

function resetH3() {
    const headlineH3 = document.querySelector("h3");
    headlineH3.classList.remove("zusatzh3");
}