let caracteres = /[~!@#$%^&*()_+|}{[\]\\\/?><:"`;.,áéíóúàèìòù']/g;
let mayusculas = /[A-Z]/g; 

const reglas = {"e":"enter","i":"imes","a":"ai","o":"ober","u":"ufat"}

function Validacion(texto, encriptado) {
    
    if (texto.match(caracteres)) {
        alert("No ingreses caracteres");
        return false;
    } else if (texto.match(mayusculas)) {
        alert("No ingreses mayusculas");
        return false;
    } else if (texto == "") {
        alert("Ingrese algo por favor");
        return false;
    } else {
        document.getElementById("mensaje").innerHTML = encriptado
        document.getElementById("texto").value = "";
        return true;
    }
}

function Encriptar() {
    let texto = document.getElementById("texto").value;
    let encriptado = texto;

    for (letra in reglas) {
        encriptado = encriptado.replaceAll(letra, reglas[letra])
    }

    Validacion(texto, encriptado);

    return encriptado
}

function Desencriptar() {
    let textoEncriptado = document.getElementById("mensaje");

    let desencriptado = textoEncriptado.innerHTML;
    
    for (let letra in reglas) {
        desencriptado = desencriptado.replaceAll(reglas[letra], letra)
    }

    textoEncriptado.innerHTML = desencriptado
}

function Copiar() {
    let mensaje = document.getElementById("mensaje").innerHTML;
    navigator.clipboard.writeText(mensaje);
    alert("Texto Copiado")
}

