/* Atividade: Alunos Aprovados
1 - Crie uma função que recebe o array alunos e um número que irá representar a média final;
2 - Percorra o array e popule um novo array auxiliar apenas com os alunos cujas notas são maiores ou iguais à média final;
3 - Utilize a técnica "object destructuring" para manipular as propriedades desejadas de cada aluno. */

const alunos = [
    {
        nome: "Pedro",
        nota: 5,
        turma: "1B"
    },
    {
        nome: "Carlos",
        nota: 8,
        turma: "1A"
    },
    {
        nome: "Laura",
        nota: 7.5,
        turma: "2B"
    },
    {
        nome: "Julia",
        nota: 3,
        turma: "2C"
    }
]

function alunosAprovados (alunos, media) {
    let aprovados = [];

    for (let i = 0; i < alunos.length; i++) {
        const {nota, nome} = alunos[i];

        if (nota >= media) {
            aprovados.push(nome)
        }
    }
    return aprovados;
}

console.log (alunosAprovados (alunos, 6))