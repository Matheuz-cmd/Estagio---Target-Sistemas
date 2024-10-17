// Questao 1

function isFibonacci(num){
    if(num === 0 || num === 1) return `O número ${num} pertence à sequência de Fibonacci.`

    let prev = 0
    let curr = 1
    let fib = prev + curr

    while(fib <= num){
        if(fib === num) return `O número ${num} pertence à sequência de Fibonacci.`

        prev = curr
        curr = fib
        fib = prev + curr
    }

    return `O número ${num} não pertence à sequência de Fibonacci.`
}

const numero = 50
console.log(isFibonacci(numero))


// Questao 2

function letterAExists(string){
    let count = 0
    let palavra = string.toLowerCase()
    for (let i = 0; i < string.length; i++) {
        if (palavra[i] === 'a') {
            count ++
        }
    }
    if (count === 0) {
        return 'a string não tem nenhuma letra a'
    }
    return `a string tem ${count} letra(s) a`
}

let string = 'estagio'
console.log(letterAExists(string))


// Questao 3

function sumOfNTerms(){
    i = 12
    soma = 0
    k = 1
    while(k < i){
        k = k + 1
        soma = soma +k 
    }
    return `O valor da variável soma é: ${soma}`
}

console.log(sumOfNTerms())

// Questao 4

console.log('A sequencia: 1, 3, 5, 7, (9) é a sequencia dos números impares')
console.log('A sequencia: 2, 4, 8, 16, 32, 64, (128) nessa sequencia cada número é o anterior multiplicado por 2')
console.log('A sequencia: 0, 1, 4, 9, 16, 25, 36, (49) essa sequência é formada pelos quadrados perfeitos dos números inteiros começando pelo 0')
console.log('A sequencia: 4, 16, 36, 64, (100) essa sequência é formada pelos quadrados perfeitos dos números pares')
console.log('A sequencia: 1, 1, 2, 3, 5, 8, (13) essa é a sequência de fibonacci')
console.log('A sequencia: 2, 10, 12, 16, 17, 18, 19, (200) essa sequência é composta pelos números que começam com a letra d')

// Questao 5

// Resposta:

// Ligo o primeiro interruptor e logo após alguns minutos desligo, na sequência ligo o segundo interruptor e vou para uma das salas verificar,
// se a lampada estiver ligado então o segundo interruptor é referente a esta lampada, caso a lampada esteja apagada e quente então ela é referente
// ao primeiro interruptor, e caso esteja esteja apagada e fria ela é referente ao terceiro interruptor. Na sequência, para as demais lampadas 
// basta ligar um dos dois interruptores restantes e ir para uma das salas restantes verificar, caso a lampada esteja acesa então o interruptor
// que foi ligado corresponde a lampada da sala em questão, caso contrario o outro interruptor que sobrou é o referente para esta lampada.
