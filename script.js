let habilFor = document.getElementById("habilFor");
let racaFor = document.getElementById("racaFor");
let pontoTotFor = document.getElementById("pontoTotFor");
let modicAtribFor = document.getElementById("modicAtribFor");

let totalPontoGeral = document.getElementById("totalPontoGeral");

let valores; 

window.onload = function () {
    valores = [
        { pontoTotFor, modicAtribFor }
    ];

    habilFor.addEventListener("input", function () {
        let valorAtri = parseInt(habilFor.value);
        let valorRaca = parseInt(racaFor.value);
        atualizaValorInput(0, valorAtri, valorRaca);
    });

    racaFor.addEventListener("input", function () {
        let valorAtri = parseInt(habilFor.value);
        let valorRaca = parseInt(racaFor.value);
        atualizaValorInput(0, valorAtri, valorRaca);
    });
};

function atualizaValorInput(indexValor, valorAtri, valorRaca) {
    let atributoTotal = valorAtri + valorRaca;
    let atributoConveModif = AtributoConveModif(atributoTotal);
    let atributoConvePon = AtributoConvePon(valorAtri);
    let pontConveCust = PontConveCust(valorAtri);

    valores[indexValor].pontoTotFor.textContent = atributoConvePon;
    valores[indexValor].modicAtribFor.textContent = atributoConveModif;


    // Verificar quando todos os pontos foram utilizados, além de resolver o bug de pontos de raça estarem diminuindo os pontos totais
    if (parseInt(totalPontoGeral.textContent) - pontConveCust === -1) {
        window.alert("Todos os pontos foram utilizados!")
    } else {
        totalPontoGeral.textContent = parseInt(totalPontoGeral.textContent) - pontConveCust;
    }
}


function AtributoConvePon(valorAtri) {
    switch (valorAtri) {
        case 8:
            return 0;
        case 9:
            return 1;
        case 10:
            return 2;
        case 11:
            return 3;
        case 12:
            return 4;
        case 13:
            return 6;
        case 14:
            return 8;
        case 15:
            return 10;
    }
}


function AtributoConveModif(valorAtri) {
    return Math.floor((valorAtri - 10) / 2);
}

function PontConveCust(valorAtri) {
    switch (valorAtri) {
        case 8:
            return 0;
        case 9:
            return 1;
        case 10:
            return 1;
        case 11:
            return 1;
        case 12:
            return 1;
        case 13:
            return 2;
        case 14:
            return 2;
        case 15:
            return 2;
    }
}