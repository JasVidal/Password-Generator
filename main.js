let passwordEntered = document.getElementById('cantidad');
let buttonGenerate = document.getElementById('generar');
let buttonClear = document.getElementById('limpiar');
let passwordGenerated = document.getElementById('contrasena');

const characterString = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()';

function generatePassword(){

    let numberEntered = parseInt(passwordEntered.value);

    if (numberEntered < 8){
        alert('Los caracteres deben ser mayor que 8');
    }

    /*Construir la contraseña*/

    let password ='';
    /*Inicializador, Condición, Resultado */
    for(let i = 0; i < numberEntered; i++){

        let randomCharacter = characterString[Math.floor(Math.random() * characterString.length)];
        
        password+=randomCharacter;
    }

    passwordGenerated.value = password;
}

/* ------- Función para limpiar los campos ------- */

function clearFields() {
    passwordEntered.value = '';
    passwordGenerated.value = '';
}

// Se asigna la función al botón

buttonClear.addEventListener('click', clearFields)

