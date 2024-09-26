const mayusculas = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const minusculas = "abcdefghijklmnopqrstuvwxyz";
const numeros = "0123456789";
const simbolos = "!@#$%^&*()_+[]{}|;:,.<>?";

function generarContraseña() {
    const longitud = document.getElementById("length").value;
    const incluirMayusculas = document.getElementById("mayus").checked;
    const incluirMinusculas = document.getElementById("minus").checked;
    const incluirNumeros = document.getElementById("numeros").checked;
    const incluirSimbolos = document.getElementById("simbolos").checked;

    if (longitud < 8 || longitud > 20) {
        alert("Ingrese una longitud válida.");
    }

    let caracteres = "";
    if (incluirMayusculas) caracteres += mayusculas;
    if (incluirMinusculas) caracteres += minusculas;
    if (incluirNumeros) caracteres += numeros;
    if (incluirSimbolos) caracteres += simbolos;

    let contraseña = "";
    for (let i = 0; i < longitud; i++) {
        const randomIndex = Math.floor(Math.random() * caracteres.length);
        contraseña += caracteres[randomIndex];
    }

    document.getElementById("password").value = contraseña;
}

document.getElementById("generate").addEventListener("click", generarContraseña);