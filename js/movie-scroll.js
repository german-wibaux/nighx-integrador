window.addEventListener('DOMContentLoaded', (event) => {
    const continuar = document.getElementById('continuar');
    const sugerencias = document.getElementById('sugerencias');
    const recomendaciones = document.getElementById('recomendaciones');

    const laContinuar = document.getElementById('laContinuar');
    const raContinuar = document.getElementById('raContinuar');
    const laSugerencias = document.getElementById('laSugerencias');
    const raSugerencias = document.getElementById('raSugerencias');
    const laRecomendaciones = document.getElementById('laRecomendaciones');
    const raRecomendaciones = document.getElementById('raRecomendaciones');

    function scroll(tira, lArrow, rArrow, direction) {
        switch (direction) {
            case 'right':
                tira.classList.remove('scroll-left');
                tira.classList.add('scroll-right');
                lArrow.classList.remove('arrow-gray');
                lArrow.classList.add('arrow-green');
                rArrow.classList.remove('arrow-green');
                rArrow.classList.add('arrow-gray');
                break;
            
            case 'left':
                tira.classList.remove('scroll-right');
                tira.classList.add('scroll-left');
                lArrow.classList.remove('arrow-green');
                lArrow.classList.add('arrow-gray');
                rArrow.classList.remove('arrow-gray');
                rArrow.classList.add('arrow-green');
            default:
                break;
        }
    }

    document.getElementById('lContinuar').onclick = function (event) {
        event.preventDefault;
        scroll(continuar, laContinuar, raContinuar, 'left');
    };
    document.getElementById('rContinuar').onclick = function (event) {
        event.preventDefault;
        scroll(continuar, laContinuar, raContinuar, 'right');
    };
    document.getElementById('lSugerencias').onclick = function (event) {
        event.preventDefault;
        scroll(sugerencias, laSugerencias, raSugerencias, 'left');
    };
    document.getElementById('rSugerencias').onclick = function (event) {
        event.preventDefault;
        scroll(sugerencias, laSugerencias, raSugerencias, 'right');
    };
    document.getElementById('lRecomendaciones').onclick = function (event) {
        event.preventDefault;
        scroll(recomendaciones, laRecomendaciones, raRecomendaciones, 'left');
    };
    document.getElementById('rRecomendaciones').onclick = function (event) {
        event.preventDefault;
        scroll(recomendaciones, laRecomendaciones, raRecomendaciones, 'right');
    };

});
