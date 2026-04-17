function funcion(event) {
    //no recargar automáticamente la página 
    event.preventDefault();
    //obtenemos el valor del input
    //let obtenemos el valor del input con una 
    // variable local solo para esta funcion
    let numero = document.getElementById("numero").value;
    //calculo la raiz cuadrada del numero mediante la funcion Math.sqrt()
    var resultado = Math.sqrt(numero);
    //mostramos el resultado en el elemento con id "resultado"
    document.getElementById("resultado").innerHTML = " la raiz del numero: " + numero + " es : "
        + resultado;
    //calculo el sin del numero mediante math.sin() y lo guardo en la variable resultado2
    var resultado2 = Math.sin(resultado);
    //mostramos el resultado con el elemento id "resultado2"
    document.getElementById("resultados").innerHTML = " el seno del numero: " + numero + " es : "
        + resultado2;
    var resultado3 = Math.pow(resultado2, 3);
    //mostramos el resultado con el elemento id "resultado2"
    document.getElementById("resultados3").innerHTML = " el numero elevado al cubo es: " + numero + " es : "
        + resultado3;

}