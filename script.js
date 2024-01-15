let penger = 100;
let kostnad = 5;
let pris = 10;
let varerPaLager = 0;
let button = document.querySelector(".lageKnapp");
// let num = 5;

function lagVaffel() {
    // Deaktiver
    button.disabled = true;

    setTimeout(function() {
      // Aktiverer
    button.disabled = false;
    }, 3000);

    varerPaLager++;
    document.getElementById("viserVarebeholdning").textContent = varerPaLager + " varer på lager";

    penger --;
    document.getElementById("viserAntallKroner").textContent = penger + " antall kroner"
}