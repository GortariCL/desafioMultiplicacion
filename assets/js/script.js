$(document).ready(function () {

    let num = prompt("ingrese número");

    function multiplicacion(num) {
        for (let i = 0; num > i; i++) {
            var mult = (num * (i + 1));
            console.log(mult);
        }
    }
    multiplicacion(num);

    function factorial(num) {
        for (let i = 1; i <= num; i++) {
            let resultado = 1;
            for (let j = 1; i >= j; j++) {
                resultado = resultado * j;
            }
            console.log("Factorial de " + i + " es: " + resultado);
        }
    }
    factorial(num);

});




