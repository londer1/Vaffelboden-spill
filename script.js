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

document.addEventListener("DOMContentLoaded", function() {
    setInterval(function() {
        forsokSelgVaffel();
    }, 5000); // Juster intervallet etter behov (5000 ms = 5 sekunder)
});

function forsokSelgVaffel() {
    if (varerPaLager > 0) {
        let salgsSjanse = Math.random() * 100;

        salgsSjanse -= viserGjeldenePris;

        if (salgsSjanse > 0) {
            penger += viserGjeldenePris;
            varerPaLager--;
            document.getElementById("viserVarebeholdning").textContent = varerPaLager + " varer på lager";
            document.getElementById("viserAntallKroner").textContent = "Totalkapital: " + penger;
            notifi("En vaffel ble solgt!");
        } else {
            notifi("Du fikk ikke solgt, vent litt eller senk pris");
        }
    } else {
        notifi("Lagret er tomt!");
        }
}

function notifi(melding) {
    let notifikasjonPanel = document.getElementById("notifi");
    notifikasjonPanel.textContent = melding;
}





// document.getElementById("selgVaffelKnapp").addEventListener("click", function() {
//     if (varerPaLager > 0) {
//         penger += viserGjeldenePris;
//         varerPaLager--;
//         document.getElementById("viserVarebeholdning").textContent = varerPaLager + " varer på lager";
//         document.getElementById("viserAntallKroner").textContent = "Totalkapital: " + penger;
//     } else {
//         alert("Ingen vafler å selge!");
//     }
// });









// function selg() {
//     if (varerPaLager > 0) {
//         varerPaLager--;
//         penger = penger + kostnad;
//         updateDisplay();
//         console.log(penger + " moenymoney");
//     }
// }
// function updateDisplay() {

//     varerPaLagerGebi.textContent = varerPaLager + " vaffler på lager";
//     moneyGebi.textContent = penger + " kr";
// }


// const varerPaLager = document.getElementById("varerPaLager");
// const penger = document.getElementById("penger");

// updateDisplay();
