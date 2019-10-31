window.addEventListener('DOMContentLoaded', (event) => {
    const tup = document.getElementById('tup');
    const tdown = document.getElementById('tdown');
    const heart = document.getElementById('heart');

    tup.onclick = function (event) {
        event.preventDefault;
        tup.src = './images/icons/tup-green-icon.svg';
        tdown.src = './images/icons/tdown-icon.svg';
    }
    tdown.onclick = function (event) {
        event.preventDefault;
        tdown.src = './images/icons/tdown-red-icon.svg';
        tup.src = './images/icons/tup-icon.svg';
    }
    heart.onclick = function (event) {
        event.preventDefault;
        heart.src = './images/icons/heart-green-icon.svg';
    }
});