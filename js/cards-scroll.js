window.addEventListener('DOMContentLoaded', (event) => {
    const continuar = document.getElementById('continuar');
    const sugerencias = document.getElementById('sugerencias');
    const recomendaciones = document.getElementById('recomendaciones');

    const laContinuar = document.getElementById('laContinuar');
    const laContinuarM = document.getElementById('laContinuarM');
    const raContinuar = document.getElementById('raContinuar');
    const raContinuarM = document.getElementById('raContinuarM');

    const laSugerencias = document.getElementById('laSugerencias');
    const laSugerenciasM = document.getElementById('laSugerenciasM');
    const raSugerencias = document.getElementById('raSugerencias');
    const raSugerenciasM = document.getElementById('raSugerenciasM');

    const laRecomendaciones = document.getElementById('laRecomendaciones');
    const laRecomendacionesM = document.getElementById('laRecomendacionesM');
    const raRecomendaciones = document.getElementById('raRecomendaciones');
    const raRecomendacionesM = document.getElementById('raRecomendacionesM');

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
    document.getElementById('lContinuarM').onclick = function (event) {
        event.preventDefault;
        scroll(continuar, laContinuarM, raContinuarM, 'left');
    };
    document.getElementById('rContinuar').onclick = function (event) {
        event.preventDefault;
        scroll(continuar, laContinuar, raContinuar, 'right');
    };
    document.getElementById('rContinuarM').onclick = function (event) {
        event.preventDefault;
        scroll(continuar, laContinuarM, raContinuarM, 'right');
    };

    
    document.getElementById('lSugerencias').onclick = function (event) {
        event.preventDefault;
        scroll(sugerencias, laSugerencias, raSugerencias, 'left');
    };
    document.getElementById('lSugerenciasM').onclick = function (event) {
        event.preventDefault;
        scroll(sugerencias, laSugerenciasM, raSugerenciasM, 'left');
    };
    document.getElementById('rSugerencias').onclick = function (event) {
        event.preventDefault;
        scroll(sugerencias, laSugerencias, raSugerencias, 'right');
    };
    document.getElementById('rSugerenciasM').onclick = function (event) {
        event.preventDefault;
        scroll(sugerencias, laSugerenciasM, raSugerenciasM, 'right');
    };


    document.getElementById('lRecomendaciones').onclick = function (event) {
        event.preventDefault;
        scroll(recomendaciones, laRecomendaciones, raRecomendaciones, 'left');
    };
    document.getElementById('lRecomendacionesM').onclick = function (event) {
        event.preventDefault;
        scroll(recomendaciones, laRecomendacionesM, raRecomendacionesM, 'left');
    };
    document.getElementById('rRecomendaciones').onclick = function (event) {
        event.preventDefault;
        scroll(recomendaciones, laRecomendaciones, raRecomendaciones, 'right');
    };
    document.getElementById('rRecomendacionesM').onclick = function (event) {
        event.preventDefault;
        scroll(recomendaciones, laRecomendacionesM, raRecomendacionesM, 'right');
    };

});
