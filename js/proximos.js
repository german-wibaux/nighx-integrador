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

    const cards = document.getElementsByClassName('proximos-card');
    const overlay = document.getElementsByClassName('proximos-overlay')[0];
    const laProximos = document.getElementById('laProximos');
    const raProximos = document.getElementById('raProximos');

    const cardWidth = 1220;
    const numOfCards = 4;
    let pixels = 0;
    let currentCard = 1;

    document.getElementById('rProximos').onclick = function (event) {
        event.preventDefault;

        if (currentCard >= 1 && currentCard < numOfCards) {
            currentCard++;
            pixels += cardWidth;
            laProximos.classList.remove('arrow-gray');
            laProximos.classList.add('arrow-green');
            for (let i = 0; i < cards.length; i++) {
                const card = cards[i];
                card.style = 'transform: translateX(-' + pixels + 'px);';
            }
            if (currentCard == numOfCards) {
                laProximos.classList.remove('arrow-gray');
                laProximos.classList.add('arrow-green');
                raProximos.classList.remove('arrow-green');
                raProximos.classList.add('arrow-gray');
                overlay.style = 'display: none;';
            }
        }
    };
    document.getElementById('lProximos').onclick = function (event) {
        event.preventDefault;

        if (currentCard > 1 && currentCard <= numOfCards) {
            currentCard--;
            pixels -= cardWidth;
            overlay.style = 'display: block;';
            raProximos.classList.remove('arrow-gray');
            raProximos.classList.add('arrow-green');
            for (let i = 0; i < cards.length; i++) {
                const card = cards[i];
                card.style = 'transform: translateX(-' + pixels + 'px);';
            }
            if (currentCard == 1) {
                laProximos.classList.remove('arrow-green');
                laProximos.classList.add('arrow-gray');
                raProximos.classList.remove('arrow-gray');
                raProximos.classList.add('arrow-green');
            }
        }
    };

    const proxMobile = document.getElementsByClassName('proximos-card-mobile')[0];
    const laProxMobile = document.getElementById('lProximos-mobile');
    const raProxMobile = document.getElementById('rProximos-mobile');
    
    const cardWidthMobile = 375;
    const numOfCardsMobile = 4;
    let pixelsMobile = 0;
    let currentCardMobile = 1;

    raProxMobile.onclick = function (event) {
        event.preventDefault;
        if (currentCardMobile >= 1 && currentCardMobile < numOfCardsMobile) {
            currentCardMobile++;
            pixelsMobile += cardWidthMobile;
            proxMobile.style = 'background-position-x: -' + pixelsMobile + 'px;';
        }
    };
    laProxMobile.onclick = function (event) {
        event.preventDefault;
        if (currentCardMobile > 1 && currentCardMobile <= numOfCardsMobile) {
            currentCardMobile--;
            pixelsMobile -= cardWidthMobile;
            proxMobile.style = 'background-position-x: -' + pixelsMobile + 'px;';
        }
    };

});