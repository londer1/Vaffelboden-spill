let penger = 100;
let kostnad = 5;
// let pris =  ;
let varerPaLager = 0;
let button = document.querySelector(".lageKnapp");
let viserGjeldenePris = 5;
// let prisJustering = 5;
// let num = 5;
let dobbeltjernOppgradering = false;
let antallVaflerPerRunde = 1;

function lagVaffel() {
    // Deaktiver
    button.disabled = true;

    setTimeout(function () {
        // Aktiverer
        button.disabled = false;
    }, 2000);

    if (penger >= kostnad) {
        varerPaLager += antallVaflerPerRunde; // Oppdatert linje for å lage riktig antall vafler per runde
        document.getElementById("viserVarebeholdning").textContent = varerPaLager + " vafler på lager";

        penger -= kostnad * antallVaflerPerRunde; // Oppdatert linje for å trekke riktig beløp fra pengene
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
document.addEventListener("DOMContentLoaded", function() {
    setInterval(function() {
        forsokSelgVaffel();
    }, 5000);
});
function forsokSelgVaffel() {
    if (varerPaLager > 0) {
        let salgsSjanse = Math.random() * 100;
        salgsSjanse -= viserGjeldenePris / 2;
        if (salgsSjanse > 0) {
            penger += viserGjeldenePris;
            varerPaLager--;
            document.getElementById("viserVarebeholdning").textContent = varerPaLager + " vafler på lager";
            document.getElementById("viserAntallKroner").textContent = "Totalkapital: " + penger;
            let salgsprosent = 100 - salgsSjanse;
            notifi("En vaffel ble solgt! Sjanse for salget: " + salgsprosent.toFixed(2) + "%");
        } else {
            notifiNegativ("En kunde ombestemte seg, vent litt eller senk pris");
        }
    } else {
        notifiNegativ("Lageret er tomt!");
    }
}
function notifi(melding) {
    let notifikasjonPanel = document.getElementById("notifi");
    notifikasjonPanel.textContent = melding;
}
function notifiNegativ(melding) {
    let notifikasjonPanel = document.getElementById("notifiNegativ");
    notifikasjonPanel.textContent = melding;

    // Tøm innholdet i "notifi"
    let notifiPanel = document.getElementById("notifi");
    notifiPanel.textContent = "";
}

function kjopOppgradering(oppgradering) {
    if (oppgradering === 'dobbeljern' && !dobbeltjernOppgradering) {
        if (penger >= 500) {
            penger -= 500;
            dobbeltjernOppgradering = true;
            antallVaflerPerRunde = 2;
            document.getElementById("viserAntallKroner").textContent = "Totalkapital: " + penger;
            notifiNegativ("Du har oppgradert til dobbeltjern! Nå kan du lage 2 vafler per runde.");
        } else {
            notifiNegativ("Du har ikke nok penger til å kjøpe denne oppgraderingen.");
        }
    } else if (dobbeltjernOppgradering) {
        notifiNegativ("Du har allerede oppgradert til dobbeltjern.");
    }
}