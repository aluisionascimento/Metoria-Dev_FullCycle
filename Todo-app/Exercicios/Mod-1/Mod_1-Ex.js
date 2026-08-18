// 1. encontrar o maior número
function maiorNum(n1, n2) {
    if (n1 > n2){
        console.log(`O número ${n1} é o maior entre os dois números`)
    }
    else{
        console.log(`O número ${n2} é o maior entre os dois números`)
    }
}
//maiorNum(1,3)

// 2. validar uma senha;
let password = 'S3nhaMestra'

function validarSenha (senha){
    if (senha != password){
        console.log('Senha inválida')
    }
    else {
        console.log('Successful login')
    }
}

//validarSenha('S3nhaMestra')

//3. Mudar Frase
const clickBotaoMudarFrase = document.getElementById("botaoMudarFrase")

// Implementação clickBotaoMudarFrase
clickBotaoMudarFrase.onclick = function () {
    campoTexto = document.getElementById("campoTexto")
    p001 = document.getElementById("pMudarFrase")
    p001.textContent = campoTexto.value
}

//4. Calcular Dobro
const clickBotaoCalcular = document.getElementById("botaoCalcular")

//Implementação clickBotaoCalcular
clickBotaoCalcular.onclick = function () {
    valorInserido = document.getElementById("campoNumero")
    resultado.textContent = Number(valorInserido.value) * 2

}

//5. Calcular média
function calculadoraDeMedia (nota1, nota2){

    let media = (nota1 + nota2)/2

    if (media >= 7){
        console.log(`Sua média foi de ${media} pontos, você foi APROVADO`)
    }
    else {
        console.log(`Sua média foi de ${media} pontos, você foi REPROVADO`)
    }
}

//6. Verificar par ou ímpar
function verificarParImpar (num){

    if (num % 2 != 0){
        console.log('Este é um número ímpar')
    }
    else {
        console.log('Este é um número par')
    }
}

// 7. Contador seletivo

function contadorSeletivo (limite){

    let listaDeImpares = []

    for (i = 0; i <= limite; i++){

        if (i % 2 != 0){
            listaDeImpares.push(i)
        }
    }
    console.log(listaDeImpares)
}

//contadorSeletivo(10)