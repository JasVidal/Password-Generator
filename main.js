let passwordEntered = document.getElementById('cantidad');
let buttonGenerate = document.getElementById('generar');
let buttonClear = document.getElementById('limpiar');
let passwordGenerated = document.getElementById('contrasena');
let passwordStrengthMessage = document.getElementById('mensaje-fuerza');

const characterString = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()';

function generatePassword(){

    let numberEntered = parseInt(passwordEntered.value);

    if (numberEntered < 8){
        alert('Los caracteres deben ser mayor que 8');
    }

    // Se CONSTRUYE la contraseña
    
    let password ='';

    //Inicializador, Condición, Resultado
    for(let i = 0; i < numberEntered; i++){
        let randomCharacter = characterString[Math.floor(Math.random() * characterString.length)];    
        password+=randomCharacter;
    }

    passwordGenerated.value = password;

    // Se VALIDA la contraseña 
    let validationMessage = validatePassword(password);
    passwordStrengthMessage.textContent = validationMessage;

    // Mostrar el mensaje de la fuerza de la contraseña
    passwordStrengthMessage.style.display = 'block';
}



/* ------- Función para validar la contraseña ------- */

function validatePassword(password) {

    // Validar longitud
    if (password.length < 8) {
        return 'La contraseña es débil: debe tener al menos 8 caracteres.';
    }

    // Validar mayúsculas
    if (!/[A-Z]/.test(password)) {
        return 'La contraseña es débil: debe tener al menos una letra mayúscula.';
    }

    // Validar número
    if (!/\d/.test(password)) {
        return 'La contraseña es débil: debe contener al menos un número.';
    }

    // Si pasa las validaciones
    return 'La contraseña es segura.';
}   



/* ------- Función para limpiar los campos ------- */

function clearFields() {
    passwordEntered.value = '';
    passwordGenerated.value = '';
    passwordStrengthMessage.textContent = ''; 
}

// Se asigna la función al botón de generación
buttonGenerate.addEventListener('click', generatePassword)

// Se asigna la función al botón de limpieza

buttonClear.addEventListener('click', clearFields)

