// Referência: https://nodejs.org/docs/latest/api/readline.html#class-interfaceconstructor
const readline = require('node:readline');

const {stdin: input, stdout: output} = require('node:process');

const rl = readline.createInterface({input, output});

// Declarar array para guardar lista de notas
listaDeNotas = [];

function resultados () {
    // média;
    let soma = 0;
    for (let i = 0; i < listaDeNotas.length; i++) {
        soma += listaDeNotas[i];
    }
    let media = soma / listaDeNotas.length;
    media = media.toFixed(1)
    console.log('A nota média dos alunos é:' + media);


    listaDeNotas.sort(); // Ordenar lista
    let qtdAprovados = 0;
    let qtdReprovados = 0;
    for (nota in listaDeNotas) {
        if (listaDeNotas[nota] >= 7){
            qtdAprovados++; // quantidade de aprovados;
        }
        else{
            qtdReprovados++; // quantidade de reprovados;
        }
    }
    console.log(`Ao todo ${qtdAprovados} alunos foram aprovados`);
    console.log(`e ${qtdReprovados} foram reprovados`);


    console.log(`A maior nota da turma foi ${listaDeNotas[listaDeNotas.length - 1]}`); // maior nota;
    console.log(`E menor nota foi ${listaDeNotas[0]}`) // menor nota;
}

// Definição de função recursiva
function receberNotas (){

    rl.question("Insira aqui a sua nota, ou escreva 'sair' para encerrar o programa: ", function (respostaUsuario){

        // Tratamentos de  inputs corretos
        // Converter para minúsculas e remover espaços para que passe pelo controle de fluxo se user digitar 'sair'
        respostaUsuario = respostaUsuario.toLowerCase().trim()
        if (respostaUsuario === "sair"){
            console.log('Encerrando inserção de notas e compilando resultados');
            console.log('...');
            resultados();
            rl.close();
            return;
        }
        // Converter input de string para número
        respostaUsuario = Number(respostaUsuario)

        // Tratamento    de inputs inválidos
        if (isNaN(respostaUsuario) === true || respostaUsuario > 10 || respostaUsuario < 0){
            console.log("Digite um número válido (entre 1 e 10) ou 'sair' se não deseja continuar")
            receberNotas();
        }
        else {
            listaDeNotas.push(respostaUsuario);
            receberNotas();
        }
    });
}
receberNotas()












