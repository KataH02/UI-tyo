const form = document.getElementById("muistiinpano-form");
const muistiinpanot = document.getElementById("muistiinpanot");
const logo = '<i class="fas fa-exclamation-circle" style="color: #002057;"></i>';


form.addEventListener("submit", lisaamuistiinpano);

function lisaamuistiinpano(event) {
    event.preventDefault();

    const nimi = document.getElementById("nimi").value;
    const muistiinpano = document.getElementById("muistiinpano").value;
    const important = document.getElementById("important").checked;

    const uusimuistiinpano = document.createElement("div");
    uusimuistiinpano.classList.add("muistiinpano");

    const nimiElementti = document.createElement("div");
    nimiElementti.textContent = nimi + " - " + new Date().toLocaleString();
    nimiElementti.classList.add("nimi");

    if (important) {
        uusimuistiinpano.classList.add("important");
        uusimuistiinpano.insertAdjacentHTML("beforeend", logo);
        
    }


    const muistiinpanoElementti = document.createElement("div");
    muistiinpanoElementti.textContent = muistiinpano;
    muistiinpanoElementti.classList.add("muistiinpano-teksti");

    uusimuistiinpano.appendChild(nimiElementti);
    uusimuistiinpano.appendChild(muistiinpanoElementti);

    muistiinpanot.appendChild(uusimuistiinpano);

    document.getElementById("nimi").value = "";
    document.getElementById("muistiinpano").value = "";
    document.getElementById("important").checked = false;
}


