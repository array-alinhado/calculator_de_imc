// DOM
const nome = document.getElementById('nome');
const peso = document.getElementById('peso');
const altura = document.getElementById('altura');
const calcular = document.getElementById('calcular');
const resultado = document.getElementById('resultado');

// Evento
calcular.addEventListener('click', imc);

// Função
function imc() {
    const nomeValor = nome.value;
    const pesoValor = Number(peso.value);
    const alturaValor = Number(altura.value);

    const calculo = pesoValor / (alturaValor * alturaValor);
    let situacao = '';

    if (calculo < 18.5) {
        situacao = 'Abaixo do peso';
        resultado.innerHTML = `${nomeValor}, seu IMC é ${calculo.toFixed(2)} e você está muito ${situacao}, SEU DESNUTTRIDO.`;
    } else if (calculo >= 18.5 && calculo <= 24.9) {
        resultado.innerHTML = `${nomeValor}, seu IMC é ${calculo.toFixed(2)} e você está muito ${situacao} PERFEITA...`;
        situacao = 'Peso normal';
    } else if (calculo >= 25 && calculo <= 29.9) {
        resultado.innerHTML = `${nomeValor}, seu IMC é ${calculo.toFixed(2)} e você está muito ${situacao}, NO CAMINHA PRA VIRAR THAIS CARLA `;
        situacao = 'Acima do peso';
    } else if (calculo >= 30 && calculo <= 39.9) {
        resultado.innerHTML = `${nomeValor}, seu IMC é ${calculo.toFixed(2)} e você está muito ${situacao}, FILHO DA THAIS CARLA...?`;
        situacao = 'Obesidade';
    } else {
        resultado.innerHTML = `${nomeValor}, seu IMC é ${calculo.toFixed(2)} e você está  muito ${situacao}, CALMA KONDZILLA`;
        situacao = 'Obesidade Grave';

    }

}
