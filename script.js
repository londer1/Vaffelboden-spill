let penger = 100;
let kostnad = 5;
// let pris =  ;
let varerPaLager = 0;
let button = document.querySelector(".lageKnapp");
let viserGjeldenePris = 5;
// let prisJustering = 5;
// let num = 5;


function lagVaffel() {
    // Deaktiver
    button.disabled = true;

    setTimeout(function() {
        // Aktiverer
        button.disabled = false;
    }, 2000);

    if (penger >= kostnad) {
        varerPaLager++;
        document.getElementById("viserVarebeholdning").textContent = varerPaLager + " varer på lager";

        penger -= kostnad;
        document.getElementById("viserAntallKroner").textContent = "Totalkapital: " + penger;
    } else {
        alert("Ikke nok penger til å lage vafler!");
    }
}

function oppdaterPris() {
    document.getElementById("viserGjeldendePris").textContent = viserGjeldenePris + " NOK";
}

document.getElementById("prisNedKnapp").addEventListener("click", function() {
    viserGjeldenePris = Math.max(viserGjeldenePris - 1, kostnad);
    oppdaterPris();
});

document.getElementById("prisOppKnapp").addEventListener("click", function() {
    viserGjeldenePris++;
    oppdaterPris();
});
