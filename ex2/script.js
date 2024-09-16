const pessoa = {
id : prompt("Qual seu identificador?"),
produto : prompt("Qual produto?"), 
preço : prompt("Preço do produto..."),
estoque : prompt('Quantidade em estoque?')
}
if (preço > 20){
    console.log('Digite um número menor que 20')
} else if (preço < 0) {
    console.log('Digite um número maior que 0')
} else {
    console.log('Seu produto foi precificado!')
}