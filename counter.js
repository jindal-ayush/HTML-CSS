const btnIncrement = document.getElementById('btnIncrement');

const btnDecrement = document.getElementById('btnDecrement');

const txtCounter = document.getElementById('txtCounter');

btnIncrement.addEventListener('click', () => {
    let counter = txtCounter.innerHTML;
    counter = parseInt(counter) + 1;
    txtCounter.innerHTML = counter;
});

btnDecrement.addEventListener('click', () => {
    let counter = txtCounter.innerHTML;
    counter = parseInt(counter) - 1;
    txtCounter.innerHTML = counter;
});