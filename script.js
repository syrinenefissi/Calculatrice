document.addEventListener('keydown', function(event) {
    const display = document.querySelector('input[name="display"]');

    switch (event.key) {
        case '0':
        case '1':
        case '2':
        case '3':
        case '4':
        case '5':
        case '6':
        case '7':
        case '8':
        case '9':
        case '+':
        case '-':
        case '*':
        case '/':
        case '.':
            display.value += event.key;
            break;
        case 'Enter':
            display.value = eval(display.value);
            break;
        case 'Backspace':
            display.value = display.value.slice(0, -1);
            break;
        case 'Escape':
            display.value = '';
            break;
    }
});
