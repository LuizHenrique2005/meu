let produtos = [ 'arroz', 'feijão', 'leite']
var codigos = Array(10, 20, 30)
var test = Array(10)


test[0] = "Oi"
test[9] = "Tudo bem?"
test[10] = "opa!"
let meses = ['Jan', 'Fev', 'Mar', 'Abr']
meses [0] = 'Janeiro'
produtos.push('Açucar', 'Trigo')
codigos.push ( 40, 50, 60, 70, 80)
meses.push('Mai', 'jun', 'Ago', '07')

produtos.pop()
meses.pop()
meses.pop()

produtos.unshift('Uva', 'Maçã')
produtos.shift()
codigos.splice(1,3)

let meses1 = meses.slice()
let meses2 = meses.slice(0,3)
meses.length
meses1.length
meses2.length

//Spreed operador ... copiar

let teste = [... produtos, 'Ovo', 'Pera']
let teste2 = [... meses, 'Setembro', 'Outubro', 'Novembro', ]

// ver indice de um valor no array
//let pos = nome_array.indexOf('Valor')
 let pos = produtos.indexOf ('leite')