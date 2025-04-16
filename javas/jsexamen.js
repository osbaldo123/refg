function verificarParImpar() {
    const numero = document.getElementById('numero').value;
    const resultado = document.getElementById('resultado');
    if (numero === '') {
        resultado.textContent = 'Por favor, introduce un número.';
        return;
    }
    if (numero % 2 === 0) {
        resultado.textContent = `El número ${numero} es par.`;
    } else {
        resultado.textContent = `El número ${numero} es impar.`;
    }
}

function encontrarMayor() {
    const numero1 = parseFloat(document.getElementById('numero1').value);
    const numero2 = parseFloat(document.getElementById('numero2').value);
    const numero3 = parseFloat(document.getElementById('numero3').value);
    const resultadoMayor = document.getElementById('resultadoMayor');

    if (isNaN(numero1) || isNaN(numero2) || isNaN(numero3)) {
        resultadoMayor.textContent = 'Por favor, introduce los tres números.';
        return;
    }

    const mayor = Math.max(numero1, numero2, numero3);
    resultadoMayor.textContent = `El número mayor es: ${mayor}`;
}