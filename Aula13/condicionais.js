let velocidade = 900;
if (velocidade > 70) {
    console.log("Você foi multado");
}
else {
    console.log("Parabéns! Continue assim");
}

//condicionais alinhadas

let hora = new Date().getHours();
console.log(hora);

if (hora<12) {
    console.log("Bom dia");
}
else if (hora<18) {
    console.log("Boa tarde");
}
else {
    console.log("Boa noite");
}
