/*funcion que suma dos operandos*/
function sumar(){
    const forma = document.getElementById("formulario");
    let operandoA = forma["operandoA"];
    let operandoB = forma["operandoB"];
    let resultado = parseInt(operandoA.value) + parseInt(operandoB.value);
    if(isNaN(resultado)){
       resultado = "No se ingresó algún operando";
    }
     document.getElementById("resultado").innerHTML = `Resultado: ${resultado}`;   
}

/*funcion que resta dos operandos*/
function restar(){
   const forma = document.getElementById("formulario");
   let operandoA = forma["operandoA"];
   let operandoB = forma["operandoB"];
   let resultado = parseInt(operandoA.value) - parseInt(operandoB.value);
   if(isNaN(resultado)){
      resultado = "No se ingresó algún operando";
   }
    document.getElementById("resultado").innerHTML = `Resultado: ${resultado}`;   
}

