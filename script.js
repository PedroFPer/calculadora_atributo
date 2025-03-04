document.addEventListener("DOMContentLoaded", () => {
    const valorAtri = [
        {
            habil: document.getElementById("habilFor"),
            raca: document.getElementById("racaFor"),
            pontoTot: document.getElementById("pontoTotFor"),
            modicAtrib: document.getElementById("modicAtribFor"),
            valorAtributoAntigo: 8,
            valorRacaAntigo: 0,
        },
        {
            habil: document.getElementById("habilDes"),
            raca: document.getElementById("racaDes"),
            pontoTot: document.getElementById("pontoTotDes"),
            modicAtrib: document.getElementById("modicAtribDes"),
            valorAtributoAntigo: 8,
            valorRacaAntigo: 0,
        },
        {
            habil: document.getElementById("habilCon"),
            raca: document.getElementById("racaCon"),
            pontoTot: document.getElementById("pontoTotCon"),
            modicAtrib: document.getElementById("modicAtribCon"),
            valorAtributoAntigo: 8,
            valorRacaAntigo: 0,
        },
        {
            habil: document.getElementById("habilCar"),
            raca: document.getElementById("racaCar"),
            pontoTot: document.getElementById("pontoTotCar"),
            modicAtrib: document.getElementById("modicAtribCar"),
            valorAtributoAntigo: 8,
            valorRacaAntigo: 0,
        },
        {
            habil: document.getElementById("habilSab"),
            raca: document.getElementById("racaSab"),
            pontoTot: document.getElementById("pontoTotSab"),
            modicAtrib: document.getElementById("modicAtribSab"),
            valorAtributoAntigo: 8,
            valorRacaAntigo: 0,
        },
        {
            habil: document.getElementById("habilInt"),
            raca: document.getElementById("racaInt"),
            pontoTot: document.getElementById("pontoTotInt"),
            modicAtrib: document.getElementById("modicAtribInt"),
            valorAtributoAntigo: 8,
            valorRacaAntigo: 0,
        }
    ];

    let totalPontoGeral = document.getElementById("totalPontoGeral");
    let totalPontoRacial = 0;

    const PONTOS_CONVERSAO = Object.freeze({
        SUBTRACAO: { 8: 0, 9: 1, 10: 1, 11: 1, 12: 1, 13: 2, 14: 2, 15: 2 },
        SOMA: { 8: 1, 9: 1, 10: 1, 11: 1, 12: 2, 13: 2, 14: 2, 15: 2 }
    });

    const ATRIBUTO_CONVERSAO = Object.freeze({
        8: 0, 9: 1, 10: 2, 11: 3,
        12: 4, 13: 6, 14: 8, 15: 10
    });

    function vericPontosResta(indexValor) {
        let pontosGastos = PONTOS_CONVERSAO.SUBTRACAO[parseInt(valorAtri[indexValor].habil.value)];
        let pontosAdicion = PONTOS_CONVERSAO.SOMA[parseInt(valorAtri[indexValor].habil.value)];
        let pontosHabAtul = parseInt(valorAtri[indexValor].habil.value)
        let pontosHabAnti = valorAtri[indexValor].valorAtributoAntigo;
        let pontosRestantes = parseInt(totalPontoGeral.textContent);

        if (pontosHabAnti > pontosHabAtul) {
            totalPontoGeral.textContent = pontosRestantes + pontosAdicion;
        } else {
            if (pontosRestantes - pontosGastos < 0) {
                valorAtri[indexValor].habil.value = pontosHabAtul    - 1;
                window.alert("Número de pontos insuficiente")
            } else {
                totalPontoGeral.textContent = pontosRestantes - pontosGastos;
            }
        }
        valorAtri[indexValor].valorAtributoAntigo = pontosHabAtul;
    }

    function vericPontRaca(indexValor) {
        let pontoRacaAtual = valorAtri[indexValor].raca.value;

        if (valorAtri[indexValor].valorRacaAntigo > pontoRacaAtual) {
            totalPontoRacial--;
        } else if (totalPontoRacial > 2) {
            valorAtri[indexValor].raca.value = parseInt(pontoRacaAtual) - 1;
            window.alert('Todos os pontos de raça já utilizados');
        } else {
            totalPontoRacial++;
        }

        valorAtri[indexValor].valorRacaAntigo = parseInt(pontoRacaAtual);
    }

    function atualizaValorInput(indexValor, tipoInput) {
        let atributoTotal = parseInt(valorAtri[indexValor].habil.value) + parseInt(valorAtri[indexValor].raca.value);
        let valorModif = Math.floor((atributoTotal - 10) / 2);;
        let valorPon = ATRIBUTO_CONVERSAO[parseInt(valorAtri[indexValor].habil.value)];

        valorAtri[indexValor].pontoTot.textContent = valorPon;
        valorAtri[indexValor].modicAtrib.textContent = valorModif;

        if (tipoInput === "habil") {
            vericPontosResta(indexValor);
        } else if (tipoInput === "raca") {

            vericPontRaca(indexValor);
        }
    }

    
    for (let i = 0; i < valorAtri.length; i++) {
        valorAtri[i].habil.addEventListener("keydown", function (event) {
            if (!["ArrowUp", "ArrowDown"].includes(event.key)) {
                event.preventDefault(); 
            }
        });

        valorAtri[i].raca.addEventListener("keydown", function (event) {
            if (!["ArrowUp", "ArrowDown"].includes(event.key)) {
                event.preventDefault(); 
            }
        });

        valorAtri[i].habil.addEventListener("input", () => atualizaValorInput(i, "habil"));
        valorAtri[i].raca.addEventListener("input", () => atualizaValorInput(i, "raca"));
    }

});



    


