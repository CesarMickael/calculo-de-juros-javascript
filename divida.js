import entradaDados from 'readline-sync';

function imprimirTexto(imprimirTexto) {
    console.log(imprimirTexto);
}

imprimirTexto("Aplicação de juros: ");

let valor_devedor = entradaDados.question("\nInforme o valor devido: R$");

let dias_atraso = entradaDados.question("\nInforme quantos dias se passaram desde o vencimento do boleto: ");

console.log("\nValor original da divida: " + valor_devedor);

console.log("Dias atrasados: " + dias_atraso);

let valor_juros = (valor_devedor * 0.10) + Number(valor_devedor);
let valor_juros2= (valor_devedor * 0.05) + Number(valor_devedor);

if (dias_atraso > 15) {
    console.log("Taxa de juros: 10%")

    console.log("Valor total com juros: R$"+ valor_juros);
}
else if (dias_atraso >= 1 || dias_atraso == 15) {
    console.log("Taxa de juros: 5%")

    console.log("Valor total com juros: R$"+ valor_juros2);
}
else if (dias_atraso == 0) (
    console.log("Você está em dia!!!")
)
else (
    console.log("Valor inválido!!!")
)
