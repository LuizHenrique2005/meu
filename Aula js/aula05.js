let pessoa = {
    nome: 'Luiz',
    idade: 18,
    peso: 75,
    altura: 1.86,
    doador: true,
}

let produto = {
    descrição : [ 'TV'],
    preço : ['1000']

}

const carros = {
    marca : ['Ford', 'Fiat', 'GM'],
    modelo : ['Ka', 'uno', 'Corsa'],
    ano: [2020, 2012, 2010]
}

var  imc = pessoa.peso/(pessoa.altura)**2
console.log("Seu IMC é de:", imc)