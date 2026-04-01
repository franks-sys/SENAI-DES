function reajustar(){
    let preco = Number(document.getElementById('preco').value);
    let resultado = document.getElementById('resultado');
    let desconto = 0;

    if(preco >= 2500){
        desconto = preco * (15 / 100);

    }
    else if(preco >= 2000){
        desconto = preco * (10 / 100);

    }
    else if(preco >= 1000){
        desconto = preco * (8 / 100);

    }

    let precoFinal = preco - desconto;

    resultado.innerHTML = 
    `Desconto de R$ ${desconto.toFixed(2)} <br>Preço Final R$ ${precoFinal.toFixed(2)}`
}


function freteGratis() {
    let compra = Number(document.getElementById("valor").value);

    let frete = compra >= 150 ? 0 : 20;

    let total = compra + frete;

    document.getElementById("resultado").innerHTML =
        `Frete: R$ ${frete.toFixed(2)} <br> Total: R$ ${total.toFixed(2)}`;
}


function descontoCombustivel() {
    let valor = Number(document.getElementById("valor").value);

    let desconto = valor > 200 ? valor * 0.05 : 0;

    let total = valor - desconto;

    document.getElementById("resultado").innerHTML =
        `Desconto: R$ ${desconto.toFixed(2)} <br> Total: R$ ${total.toFixed(2)}`;
}


function taxaServico() {
    let conta = Number(document.getElementById("valor").value);

    let taxa = conta > 100 ? conta * 0.10 : 0;

    let total = conta + taxa;

    document.getElementById("resultado").innerHTML =
        `Taxa: R$ ${taxa.toFixed(2)} <br> Total: R$ ${total.toFixed(2)}`;
}

function multaAtraso() {
    let valor = Number(document.getElementById("valor").value);

    let dias = Number(document.getElementById("dias").value);

    let multa = dias > 0 ? valor * 0.02 : 0;


    let total = valor + multa;

    document.getElementById("resultado").innerHTML =
        `Multa: R$ ${multa.toFixed(2)} <br> Total: R$ ${total.toFixed(2)}`;
}

function cashback() {
    let compra = Number(document.getElementById("valor").value);

    let cashback = compra > 300 ? compra * 0.05 : 0;
    
    let total = compra - cashback;

    document.getElementById("resultado").innerHTML =
        `Cashback: R$ ${cashback.toFixed(2)} <br> Valor Final: R$ ${total.toFixed(2)}`;
}

