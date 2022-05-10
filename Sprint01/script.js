const inputTexto = document.querySelector(".input-text");
const mensaje = document.querySelector(".input-text-area");

function btnencriptar() {
    const textoEncriptado = encriptar(inputTexto.value);
    mensaje.value = textoEncriptado;
}

function encriptar(stringParaEncriptar){
    let matrizCodigo = [["e","enter"], ["i","imes"], ["a","ai"], ["o","ober"], ["u","ufat"]]; 
    stringParaEncriptar = stringParaEncriptar.toLowerCase();
    
    for (let i=0; i < matrizCodigo.length; i++){
      if(stringParaEncriptar.includes(matrizCodigo[i][0])){
          stringParaEncriptar = stringParaEncriptar.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1]);
      }
    }
    return stringParaEncriptar;
}

function btndesencriptar(){
    const textoEncriptado = desencriptar(inputTexto.value);
    mensaje.value = textoEncriptado;
}

function desencriptar(stringParaEncriptar){
    let matrizCodigo = [["enter","e"], ["imes","i"], ["ai","a"], ["ober","o"], ["ufat","u"]]; 
    stringParaEncriptar = stringParaEncriptar.toLowerCase();

    for(let i=0; i < matrizCodigo.length; i++){
        if(stringParaEncriptar.includes(matrizCodigo[i][0])){
            stringParaEncriptar = stringParaEncriptar.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1]);
        }
    }
    return stringParaEncriptar;
}

function copiar(){
    var texto = mensaje.value;
    navigator.clipboard.writeText(texto);
}

var botonCopiar = document.querySelector("#btncopiar");
    botonCopiar.addEventListener("click", function (event) {
    event.preventDefault();

    copiar();
});


