
//#region = Seccion de funciones descartadas en la version final

contadorPuntos = 0;

// Funci0n para agregar el caracter presionado en la botonera en el campo de texto.
function mostrarCaracter() {
    // Asignar el texto introducido por el usuario a la variable operacion
    operacion = document.getElementById("operacion");
    // Enfocar input para ingresar la operacion matematica
    operacion.focus();
    // Definir los simbolos aritmeticos que se utilizaran en la calculadora
    simbolosAritmeticos = [" + ", " - ", " / ", " * "];
    // Definir variable que determina cuando se presiona un simbolo aritmetico en la botonera
    isSimbolo = false;
    // Definir la variable que almacenara los elementos de la operacion
    elementosOperacion = operacion.value.split(" ");

    // Verificar si fue presionado un simbolo aritmetico en la botonera
    for (var simbolo in simbolosAritmeticos) {
        if ((window.event.target.value === simbolosAritmeticos[simbolo]) || window.event.target.value === ".") {
            isSimbolo = true;
        }
    }

    /*
        REGLAS PARA LAS CONDICIONALES:
        1. Los simbolos aritmeticos siempre se agregan al campo de texto con un espacio antes y despues del caracter. (ej. " + ", " - ", etc)
        2. Los caracteres numericos se agregan al campo de texto sin ningun espacio agregado.
        3. El unico simbolo aritmetico que se puede agregar al principio de una operación es "-", este es el unico simbolo que no se agrega con espacios agregados.
        4. Un sibolo no puede ser agregado seguido de otro simbolo, solo puede ser agregado al lado de un numero.
        5. Solo deben ser agregados 3 elementos en la operación, es decir, dos numeros y un simbolo aritmetico.
        6. Solo puede ser agregado 1 punto seguido de otro.
    */

    if (operacion.value === "NaN") limpiarOperacion();

    console.log(elementosOperacion);
    console.log(window.event.target.value);

    // Si hay menos de 3 elementos en la operación ingresada, entonces se permitira ingresar mas elementos.
    if (elementosOperacion.length <= 3) {
        // Si el ultimo caracter de la operación es un simbolo o punto y se pretende agregar otro simbolo o punto a continuación, entonces no se agregara nada al campo de texto
        if (((operacion.value.toString().endsWith(" ") || operacion.value.toString() === "-" || operacion.value.toString().endsWith(".")) && isSimbolo === true));
        // Si no se ha ingresado nada en el campo de texto, entonces se evaluará... 
        else if (operacion.value.toString() === "") {
            // ... Si fue presionado el simbolo "-", entonces se agregara "-" al incioo de la operación
            if (window.event.target.value.toString()[1] === "-") {
                operacion.value += window.event.target.value.toString()[1];
            }
            // ... Si ningún simbolo fue presionado, entonces se agregara el numero que fue presionado
            else if (isSimbolo === false) {
                operacion.value += window.event.target.value;
            }
        }
        // Si el campo de texto no esta vacio y tampoco tiene como ultimo caracter un simbolo aritmetico, entonces se evaluará...
        else {
            // Si hay 3 elementos en la operación y se quiere agregar otro simbolo, entonces no se agregara el simbolo
            if (elementosOperacion.length === 3 && isSimbolo === true) {
                // Si se presiona el btnPunto y se ha al menos un punto en la operacion, entonces se podra agregar un nuevo punto
                if (window.event.target.value === "." && contadorPuntos <= 1) {
                    if (contadorPuntos === 0) contadorPuntos = 2;
                    else contadorPuntos++;
                    operacion.value += window.event.target.value;
                }
            }
            // pero si no hay 3 elementos se podran agregar un simbolo o un numero
            else {
                // Si se presiona el btnPunto, entonces...
                if (window.event.target.value === ".") {
                    // Se evaluara que no se haya agregado puntos a la operacion
                    // Si no se agregaron puntos, entonces se podra agregar uno nuevo
                    if (contadorPuntos === 0) {
                        contadorPuntos++;
                        operacion.value += window.event.target.value;
                    }
                }
                else operacion.value += window.event.target.value;
            }
        }
    }
}

// Funci0n para ejecutar el calculo de la operación ingresada.
function calcular() {
    // Almacenar operacion ingresada en la variable operación
    operacion = document.getElementById("operacion");
    // Dividir los elementos de la operacion ingresada y almacenarlos en el arreglo elementosOperacion
    elementosOperacion = operacion.value.split(" ");
    // Definir variables donde se almacenaran los elementos numericos de la operacion
    elemento1 = 0;
    elemento2 = 0;
    resultado = 0;

    // Evaluar si el arreglo elementosOperacion contiene 3 elementos
    if (elementosOperacion.length === 3) {
        // Asignar valores numericos a los elementos definidos
        elemento1 = parseFloat(elementosOperacion[0]);
        elemento2 = parseFloat(elementosOperacion[2]);

        // Evaluar que operacion ejecutar segun el simbolo aritmetico ingresado en la operacion
        if (elementosOperacion[1] === "*")
            resultado = elemento1 * elemento2;
        else if (elementosOperacion[1] === "+")
            resultado = elemento1 + elemento2;
        else if (elementosOperacion[1] === "-")
            resultado = elemento1 - elemento2;
        else if (elementosOperacion[1] === "/")
            resultado = elemento1 / elemento2;
    }
    // Si solo hay un elemento numerico, este sera el resultado
    else if (elementosOperacion.length < 3) resultado = parseFloat(elementosOperacion[0]);

    // Mostrar resultado de la operacion
    console.log(resultado);
    operacion.value = resultado;
}

// Funci0n para controlar las teclas que se pueden y no se pueden agrgar en la caja de texto.
function controlTeclas(e) {
    // Asignar el elemento donde se agregara la operacion a la variable operación
    operacion = document.getElementById("operacion");
    // Capturar el codigo de la tecla presionada en la variable tecla
    tecla = e.KeyCode || e.which;
    // Transformar el codigo en una cadena de texto dentro de la variable strTecla
    strTecla = String.fromCharCode(tecla);
    // Definir las teclas especiales que se podran usar dentro de la caja de texto
    caracteresEspeciales = "8-37-38-46";
    // Definir variable booleana que verifica si una tecla especial fue presionada
    tecladoEspecial = false;

    console.log(tecla)

    // Comprobar si una tecla especial fue presionada
    for (var i in caracteresEspeciales) {
        if (tecla === caracteresEspeciales[i]) {
            // Establecer que una tecla especial fue precionada en la variable teclaEspecial
            tecladoEspecial = true;
            // Finalizar la funcion
            break;
        }
    }

    // Si ninguna tecla especial fue presionada, se ignorara lo que se presione en el teclado
    if ((!tecladoEspecial)) {
        return false;
    }

}

//#endregion


//#region = Seccion de funciones usadas */

// CAJA DE TEXTO
operacion = document.getElementById("operacion");

// MAPEADO DE BOTONERA
btnMultiplicacion = document.getElementById("multiplicacion");
btnSuma = document.getElementById("suma");
btnResta = document.getElementById("resta");
btnDivision = document.getElementById("division");
btn0 = document.getElementById("cero");
btn1 = document.getElementById("uno");
btn2 = document.getElementById("dos");
btn3 = document.getElementById("tres");
btn4 = document.getElementById("cuatro");
btn5 = document.getElementById("cinco");
btn6 = document.getElementById("seis");
btn7 = document.getElementById("siete");
btn8 = document.getElementById("ocho");
btn9 = document.getElementById("nueve");
btnPunto = document.getElementById("punto");
btnIgual = document.getElementById("igual");
btnClear = document.getElementById("clear");

function onClickButton(btnValue) {
    document.calculadora.operacion.value += btnValue;
}

function getResult() {
    try {
        document.calculadora.operacion.value = eval(document.calculadora.operacion.value);
    } catch {
        btnClear.click();
    }
}

// Función para detectar las teclas que se presionan y sincronizar el teclado fisico con la botonera.
document.addEventListener("keypress", function (e) {
    // MAPEADO DE TECLADO FISICO
    if (e.key === "*")
        btnMultiplicacion.click();

    else if (e.key === "+")
        btnSuma.click();

    else if (e.key === "-")
        btnResta.click();

    else if (e.key === "/")
        btnDivision.click();

    else if (e.key === "0")
        btn0.click();

    else if (e.key === "1")
        btn1.click();

    else if (e.key === "2")
        btn2.click();

    else if (e.key === "3")
        btn3.click();

    else if (e.key === "4")
        btn4.click();

    else if (e.key === "5")
        btn5.click();

    else if (e.key === "6")
        btn6.click();

    else if (e.key === "7")
        btn7.click();

    else if (e.key === "8")
        btn8.click();

    else if (e.key === "9")
        btn9.click();

    else if (e.key === ".")
        btnPunto.click();

    else if (e.key === "Enter")
        btnIgual.click();

    else
        btnClear.click();
});

//#endregion