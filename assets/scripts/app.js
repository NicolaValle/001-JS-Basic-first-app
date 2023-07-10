const defaultResult = 0;
let currentResult = defaultResult;

function add() {
    const result = currentResult + userInput.value;
    return result;
}

addBtn.addEventListener('click', add);

outputResult(currentResult, calculationDescription);

