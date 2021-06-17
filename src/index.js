import cipher from './cipher.js'


document.getElementById("code").addEventListener("click", encode)
function encode(e){
    e.preventDefault()
    const offset = (document.getElementById("offset").value) 
    let string = document.getElementById("texto").value 
    let encodeCipher = cipher.encode(offset, string)
    document.getElementById("saidaTexto").value = encodeCipher 
}

document.getElementById("decode").addEventListener("click", decode) 
function decode(e){
    e.preventDefault() 
    const offset = (document.getElementById("offset").value) 
    let string = document.getElementById("texto").value 
    let decodeCipher = cipher.decode (offset, string) 
    document.getElementById("saidaTexto").value = decodeCipher
};
