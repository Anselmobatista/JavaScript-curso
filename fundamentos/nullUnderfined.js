let valor //não inicializado
console.log(valor)

valor = null //ausêsncia de valor
console.log(valor)
    // console.log(valor.toString()) //Erro!

const produto = {}
console.log(produto.preco)
console.log(produto)

produto.preco = 3.50
console.log(produto)

//produto.preco = undefined //evite atribuir underfined. deixe a linguagem fazer.
console.log(!!produto.preco)
console.log(produto)

produto.preco = null //sem preço
console.log(produto.preco)
console.log(produto)