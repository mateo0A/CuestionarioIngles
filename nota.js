function verificarRespuestas() {
    let puntos = 0;

    // Respuestas correctas
    const respuestasCorrectas = {
        q1: "a",
        q2: "b",
        q3: "a",
        q4: "b",
        q5: "b",
        q6: "a",
        q7: "b",
        q8: "a",
        q9: "b",
        q10: "b",
        q11: "a", 
        q12: "b",
        q13: "a",
        q14: "a",
        q15: "b",
        q16: "a",
        q17: "a",
        q18: "b",
        q19: "b",
        q20: "a",
        q21: "b",
        q22: "b",
        q23: "a",
        q24: "b",
        q25: "a",
        q26: "b",
        q27: "a",
        q28: "b",
        q29: "a",
        q30: "b",
        q31: "a",
        q32: "b",
        q33: "a",
        q34: "b",
        q35: "a",
        q36: "b",
        q37: "a",
        q38: "b",
        q39: "a",
        q40: "b",
        q41: "a",
        q42: "b",
        q43: "a",
        q44: "b",
        q45: "a",
        q46: "b",
        q47: "a",
        q48: "b",
        q49: "a",
        q50: "b"
    };

    const inputs = document.querySelectorAll('input[type="radio"][value="a"], input[type="radio"][value="b"]');

    // Comparar las respuestas seleccionadas con las correctas
    inputs.forEach(input => {
        if (input.checked && input.value === respuestasCorrectas[input.name]) {
            puntos++;
        }
        console.log(respuestasCorrectas["q1"]);
        
    });

    
    // Mostrar el puntaje final
    alert("Tu puntuación es: " + puntos + " de 50");

    if(puntos<35){
        alert("Buen intento")
    }else if(puntos>=35 && puntos<40){
        alert("Muy bien, sigue asi")
    }else if(puntos>=40 && puntos<50){
        alert("Excelente, sigue practicando y mejorando")
    }
    Tiempo=1200
}




