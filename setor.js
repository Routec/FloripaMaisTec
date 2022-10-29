function calcular() {
    let campo_1 = Number(document.getElementById('campo_1').value)
    let campo_2 = Number(document.getElementById('campo_2').value)
    let operacao = document.getElementById('operacao').value

    switch (operacao) {
        case 'soma':
            document.getElementById('resultado').textContent = campo_1 + campo_2
            break;
        case 'subtracao':
            document.getElementById('resultado').textContent = campo_1 - campo_2            
            break;
        case 'multiplicacao':
            document.getElementById('resultado').textContent = campo_1 * campo_2            
            break;
        case 'divisao':
            document.getElementById('resultado').textContent = campo_1 / campo_2            
            break;
        case 'exponenciacao':
            document.getElementById('resultado').textContent = campo_1 ** campo_2            
            break;
        case 'resto':
            document.getElementById('resultado').textContent = campo_1 % campo_2            
            break;
    }
}


function setor() {
    let idade = document.getElementById('idade').value
    
    if (idade>25){
        document.getElementById('setor').textContent = 'Setor Verde'
    } else if ((idade < 25) && (idade > 18)){
        document.getElementById('setor').textContent = 'Setor Branco'
    } else if ((idade < 18) && (idade > 14)){
        document.getElementById('setor').textContent = 'Setor Azul'
    } else {
        document.getElementById('setor').textContent = 'Setor Amarelo'
    }
}


function concatenar() {
    let nome = document.getElementById('nome').value;
    let sobrenome = document.getElementById('sobrenome').value;
    document.getElementById('nomeCompleto').textContent = nome + ' ' + sobrenome;
}

const num1 = 13;
const num2 = 7;

function som(){
    document.getElementById('opar').textContent = "A soma entre 13 e 7 é: " + (num1 + num2);
}

function sub(){
    document.getElementById('opar').textContent = "A subtração entre 13 e 7 é: " + (num1 - num2);
}

function mul(){
    document.getElementById('opar').textContent = "A multiplicação entre 13 e 7 é: " + (num1 * num2);
}

function div(){
    document.getElementById('opar').textContent = "A divisão entre 13 e 7 é: " + (num1 / num2);
}

function exp(){
    document.getElementById('opar').textContent = "A exponenciação entre 13 e 7 é: " + (num1 ** num2);
}

function res(){
    document.getElementById('opar').textContent = "O resto da divisão entre 13 e 7 é: " + (num1 % num2);
}
