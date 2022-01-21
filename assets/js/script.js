$(document).ready(function () {
    //Evento botón calcular
    $('#calcular').on('click', function () {
        //Captura de dato númerico del input
        let num = document.getElementById('input-number').value;

        //Validación rango númerico
        if (num > 0 && num < 20) {

            //Ciclo for para multiplicación
            let multiplicacion = (num) => {
                console.log(`MULTIPLICACIÓN DE ${num} ES:`);
                for (let i = 0; num > i; i++) {
                    var mult = (num * (i + 1));
                    console.log(mult);
                }
            }
            //Muesta de datos
            multiplicacion(num);
            console.log("\nFACTORIAL:");

            //Ciclo for anidado Factorial
            let factorial = (num) => {
                for (let i = 1; i <= num; i++) {
                    let resultado = 1;
                    for (let j = 1; i >= j; j++) {
                        resultado = resultado * j;
                    }
                    console.log(`Factorial de ${i} es: ${resultado}`);
                }
            }
            //Muestra de datos y limpieza del imput
            factorial(num);
            console.log("\n")
            document.getElementById('input-number').value = "";
        //Else de validación rango numérico y limpieza del input    
        } else {
            alert("Número fuera de rango");
            document.getElementById('input-number').value = "";
        }
    });

    //Tooltips Bootstrap
    var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
    var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
        return new bootstrap.Tooltip(tooltipTriggerEl)
    })


});