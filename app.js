// Selecionar elementos do DOM
const displayElement = document.getElementById('display');
const clearButton = document.getElementById('clear');
const backspaceButton = document.getElementById('backspace');
const divideButton = document.getElementById('divide');
const multiplyButton = document.getElementById('multiply');
const subtractButton = document.getElementById('subtract');
const addButton = document.getElementById('add');
const equalsButton = document.getElementById('equals');
const decimalButton = document.getElementById('decimal');
const numberButtons = document.querySelectorAll('.number');

// Variáveis para manter o estado da calculadora
let currentInput = '0';
let previousInput = '';
let operator = '';

// Atualiza o visor da calculadora
function updateDisplay() {
    displayElement.innerText = currentInput;
}

// Adiciona um evento de clique aos botões numéricos
numberButtons.forEach(button => {
    button.addEventListener('click', () => {
        if (currentInput === '0' || currentInput === '-0') {
            currentInput = button.innerText;
        } else {
            currentInput += button.innerText;
        }
        updateDisplay();
    });
});

// Adiciona um evento de clique ao botão de ponto decimal
decimalButton.addEventListener('click', () => {
    if (!currentInput.includes('.')) {
        currentInput += '.';
        updateDisplay();
    }
});

// Adiciona um evento de clique ao botão de limpar (C)
clearButton.addEventListener('click', () => {
    currentInput = '0';
    previousInput = '';
    operator = '';
    updateDisplay();
});

// Adiciona um evento de clique ao botão de voltar (⌫)
backspaceButton.addEventListener('click', () => {
    if (currentInput.length === 1) {
        currentInput = '0';
    } else {
        currentInput = currentInput.slice(0, -1);
    }
    updateDisplay();
});

// Função para executar a operação matemática
function calculate() {
    const prev = parseFloat(previousInput);
    const current = parseFloat(currentInput);

    switch (operator) {
        case '+':
            currentInput = (prev + current).toString();
            break;
        case '-':
            currentInput = (prev - current).toString();
            break;
        case '×':
            currentInput = (prev * current).toString();
            break;
        case '÷':
            if (current === 0) {
                currentInput = 'Error';
            } else {
                currentInput = (prev / current).toString();
            }
            break;
    }
}

// Adiciona um evento de clique aos botões de operador (+, -, ×, ÷)
addButton.addEventListener('click', () => {
    calculate();
    operator = '+';
    previousInput = currentInput;
    currentInput = '0';
    updateDisplay();
});

subtractButton.addEventListener('click', () => {
    calculate();
    operator = '-';
    previousInput = currentInput;
    currentInput = '0';
    updateDisplay();
});

multiplyButton.addEventListener('click', () => {
    calculate();
    operator = '×';
    previousInput = currentInput;
    currentInput = '0';
    updateDisplay();
});

divideButton.addEventListener('click', () => {
    calculate();
    operator = '÷';
    previousInput = currentInput;
    currentInput = '0';
    updateDisplay();
});

// Adiciona um evento de clique ao botão de igual (=)
equalsButton.addEventListener('click', () => {
    calculate();
    operator = '';
    previousInput = '';
    updateDisplay();
});
