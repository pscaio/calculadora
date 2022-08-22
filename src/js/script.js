function inserir(numero) {
    let num = document.getElementById('resultado').innerHTML;
    document.getElementById('resultado').innerHTML = num + numero
}

function limpar() {
    document.getElementById('resultado').innerHTML = ''
}

function apagar() {
    let resultado = document.getElementById('resultado').innerHTML;
    document.getElementById('resultado').innerHTML = resultado.substring(0, resultado.length -1 );
}

btnIgual = document.querySelector('.botao-igual')

btnIgual.onclick = () => {
    calcular();
}

function calcular() {
    let resultado = document.getElementById('resultado').innerHTML;
    
    if (resultado) {
        document.getElementById('resultado').innerHTML = eval(resultado);
    } else {
        alert('Nada para calcular')
        document.getElementById('resultado').innerHTML = ''
    }
}