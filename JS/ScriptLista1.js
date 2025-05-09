// Exercício 1
function ex1EnviarNome() {
    const  ex1Nome = document.getElementById("ex1Nome").value;
    alert (`Bem Vindo ao sistema ${ex1Nome}`);
}

// Exercício 2
function ex2Enviar(){
    const ex2Nome = document.getElementById("ex2Nome").value;
    const ex2Idade = document.getElementById("ex2Idade").value;
    alert (`${ex2Nome} você tem ${ex2Idade} anos`);
}

// Exercício 3
function ex3Comparar() {
    const ex3popBrasil = parseFloat(document.getElementById("ex3popBrasil").value);
    const ex3popChina = parseFloat(document.getElementById("ex3popChina").value);

    if (ex3popChina>ex3popBrasil){
    alert(`A população do Brasil é de ${ex3popBrasil} habitantes, a da China é de ${ex3popChina} habitantes, logo, a população da China é maior que a do Brasil.`)
    } else if(ex3popChina<ex3popBrasil) {
    alert (`A população do Brasil é de ${ex3popBrasil} habitantes, a da China é de ${ex3popChina} habitantes, logo, a população do Brasil é maior que a da China.`)
    } else{
    alert(`A população do Brasil é de ${ex3popBrasil} habitantes, a da China é de ${ex3popChina} habitantes, logo, a população do Brasil e da China são Iguais.`)
    }
 }

 // Exercício 4
function ex4Calcular(){
    const ex4Numero = parseFloat(document.getElementById("ex4Numero").value);
    const ex4Divisão = ex4Numero %2;

     if (ex4Divisão == 0) {
            alert (`O número ${ex4Numero} é Par`)
    } else {
            alert (`O número ${ex4Numero} é Impar`)
    }
}

// Exercício 5
function ex5DescontarSalario(){
    const ex5Salario = parseFloat(document.getElementById("ex5Salario").value);
    const ex5Desconto = parseFloat(document.getElementById("ex5Desconto").value) / 100;
    const ex5SalDescontado = ex5Salario - (ex5Salario * ex5Desconto);

    alert(`Seu salário Bruto é de R$${ex5Salario}, após o desconto de ${ex5Desconto * 100}%, seu salário líquido será de R$${ex5SalDescontado}`);
}

// Exercício 6
function ex6converter(){
    const ex6Celcius = parseFloat(document.getElementById("ex6Celcius").value);
    const ex6Converter = ex6Celcius * (9 / 5) + 32;

    alert(`${ex6Celcius} graus celcius são ${ex6Converter} graus fahrenheit`);
}

// Exercício 7
function ex7Calcular(){
    const ex7N1 = parseFloat(document.getElementById("ex7N1").value);
    const ex7N2 = parseFloat(document.getElementById("ex7N2").value);
    const ex7N3 = parseFloat(document.getElementById("ex7N3").value);

    if (ex7N1>ex7N2 && ex7N1>ex7N3) {
        alert(`o maior número é ${ex7N1}`)
    } else if(ex7N2>ex7N1 && ex7N2>ex7N3) {
        alert(`o maior número é ${ex7N2}`)
    }else if(ex7N3>ex7N1 && ex7N3>ex7N2){
        alert(`o maior número é ${ex7N3}`)
     }else if(ex7N1>ex7N2 && ex7N3>ex7N2){
        alert(`o maior número é ${ex7N3}`)
    }else if(ex7N2>ex7N1 && ex7N3>ex7N1){
        alert(`o maior número é ${ex7N3}`)
    }else if(ex7N1>ex7N3 && ex7N2>ex7N3){
        alert(`o maior número é ${ex7N1}`)
    } else {
        alert (`Todos os números possuem o mesmo valor`)
    }
}

//Exercício 8
    function ex8Calcular(){
        const idade = parseFloat(document.getElementById("ex8Idade").value);
        const anoAtual = parseFloat(document.getElementById("ex8AnoAtual").value);
        const nascimento = anoAtual - idade;

        alert(`Seu ano de nascimento é ${nascimento}`)
    }

//Exercício 9
    function ex9Calcular(){
        const ex9Altura = parseFloat(document.getElementById("ex9Altura").value);
        const ex9Peso = parseFloat(document.getElementById("ex9Peso").value);
        const ex9Imc = ex9Peso / ex9Altura ** 2;

        if (ex9Imc <= 16.99 ) {
            alert (`Com IMC de ${ex9Imc} você está Muito Abaixo do Peso`)
        } else if (ex9Imc >= 17 && ex9Imc <= 18.99) {
            alert (`Com IMC de ${ex9Imc} você está Abaixo do Peso`)
         }else if (ex9Imc >= 19 && ex9Imc <= 26.99) {
            alert (`Com IMC de ${ex9Imc} você está Normal`)
        }else if (ex9Imc >= 27 && ex9Imc <= 31.99) {
            alert (`Com IMC de ${ex9Imc} você está Acima do Peso`)
        }else {
            alert (`Com IMC de ${ex9Imc} você está Obeso`)
        }
    }w

//Exercício 10
    function ex10Calcular(){
        const ex10Nota1 = parseFloat(document.getElementById("ex10Nota1").value);
        const ex10Nota2 = parseFloat(document.getElementById("ex10Nota2").value);
        const ex10Nota3 = parseFloat(document.getElementById("ex10Nota3").value);
        const ex10Nota4 = parseFloat(document.getElementById("ex10Nota4").value);
        const ex10Media = (ex10Nota1 + ex10Nota2 + ex10Nota3 + ex10Nota4) / 4;

        if (ex10Media > 7) {
            alert (`O aluno com a Média ${ex10Media} está Aprovado`)
            
        } else if (ex10Media > 5 && ex10Media <= 6.99) {
            alert (`O aluno com a Média ${ex10Media} está Em Recuperação`)
        }else {
            alert (`O aluno com a Média ${ex10Media} está Reprovado`)
        }
    }