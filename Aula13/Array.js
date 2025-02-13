//criando listas
listaSupermercado = ["ovo", "farinha", "leite"];
console.log(listaSupermercado);

listaNumero = [1, 2, 3, 4];
console.log(listaNumero);

listaHeroes = [];
heroes[2] = "Hulk";
heroes[0] = "Homem de ferro";
heroes[1] = "Homem aranha";

console.log(heroes);
console.log(heroes[1])
console.log(`Meu herói preferido: ${heroes[1]}`);

let comp = heroes.length;
console.log(`A lista tem ${comp} heróis`);

heroes.push("Capitão américa");
console.log(heroes);

//criando lista multidimensional

let jogoDavelha = [["X", "O", "X"],["O", "X", "O"],["O", "O", "X"]];

console.log(jogoDavelha)

let listaSupermercado = [["ovo", 18], ["farinha", 5], ["leite", 4.5], ["arroz", 20], ["feijão", 25]];
console.log(`O preço do ${listaSupermercado[0][1]} é reais`);

let objetoSupermercado = {"ovo" : 18, "farinha" : 5, "leite" : 4.5};
console.log(objetoSupermercado.ovo);

let listaArroz = ["arroz", 20]

listaSupermercado.push(listaArroz);
console.log(listaSupermercado)