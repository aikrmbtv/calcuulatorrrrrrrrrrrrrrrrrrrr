const display = document.getElementById('display');
const buttons = document.querySelectorAll('.btn');
const equals = document.getElementById('equals');
const clear = document.getElementById('clear');

buttons.forEach(button => {
    button.addEventListener('click', () => {
        if (button.id !== 'equals' && button.id !== 'clear') {
            display.value += button.dataset.value;
        }
    });
});

equals.addEventListener('click', () => {
    try {
        display.value = eval(display.value);
    } catch {
        display.value = "Error";
    }
});

clear.addEventListener('click', () => {
    display.value = '';
});
