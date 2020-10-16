const escola = "Cod3r"

console.log(escola.charAt(4)) //caractere no indice 4
console.log(escola.charAt(5)) //valor vazio ou Null
console.log(escola.charAt(3))
console.log(escola.charCodeAt(3))
console.log(escola.indexOf('o'))
console.log(escola.indexOf('2')) //não existe= -1

console.log(escola.substring(1))
console.log(escola.substring(0, 3))

console.log('Escola'.concat(escola).concat("!")) //concatenar
console.log(escola.replace(3, 'e')) //substituir

console.log('Ana, Maria, Pedro'.split(','))