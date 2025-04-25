var Tiempo = 1200; 
var indicarTiempo=document.querySelector(".temporizador");


console.log(indicarTiempo); 

let con=0
setInterval(() => {
    const minutos = Math.floor(Tiempo / 60); 
    const segundos = Tiempo % 60; 

    indicarTiempo.innerText=`${minutos} : ${segundos < 10 ? '0' :'' } ${segundos} `
    Tiempo--;
    
    
    

    if (Tiempo < 0) {
        clearInterval();
        verificarRespuestas();
        Tiempo = 1200; 

    }

}, 1000);