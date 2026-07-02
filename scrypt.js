const Screen =  document.querySelector(".screen");

const operators = document.querySelectorAll(".operator");

let firstTerme = 0;
let operator = "";
let secondTerme = 0;
let isNewNumb = true;

function addNumb(numb) {
    Screen.value += numb;
}

function addOperator(op) {
    operator = op;
    
    if (isNewNumb) {
        firstTerme = Number(Screen.value);
        isNewNumb = false;
    }
    Screen.value = "";

    operators.forEach((operator) => {
        operator.disabled = true;
});

}


function equals() {

    if (!isNewNumb) {
            secondTerme = Number(Screen.value);
            console.log(secondTerme);
    }

    switch (operator) {
        case "+" :
            Screen.value = "";
            Screen.value = firstTerme + secondTerme;
            break;

        case "-" :
            Screen.value = "";
            Screen.value = firstTerme - secondTerme;
            break;

        case "/" :
            Screen.value = "";
            Screen.value = firstTerme / secondTerme;
            break;

        case "*" :
            Screen.value = "";
            Screen.value = firstTerme * secondTerme;
            break;
    }
}

function clearScreen() {
    Screen.value = "";
    firstTerme = 0;
    operator = "";
    secondTerme = 0;
    isNewNumb = true;

    operators.forEach((operator) => {
    operator.disabled = false;
});
}