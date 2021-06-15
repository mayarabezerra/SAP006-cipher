import cipher from './cipher.js'

// falta criar variavel "const encodeButton= ..." e mostrar botão para js pela id?
document.getElementById("code").addEventListener("click", encode)
function encode(e){
    e.preventDefault()
    const offset = (document.getElementById("offset").value) // value null?
    let string = document.getElementById("texto").value 
    let encodeCipher = cipher.encode(offset, string)
    document.getElementById("saidaTexto").value = encodeCipher //innerHTML(printar o resultado na 'saidaTexto'?/ Uso  mesma Id "texto"? (não,peguei id da saida)

}
// falta criar variavel "const decodeButton= ..." e mostrar botão para js pela id?
document.getElementById("decode").addEventListener("click", decode) //evento, função
function decode(e){
    e.preventDefault() //adicionei para parar evento
    const offset = (document.getElementById("offset").value) //falta indicar valor do offset "number"?
    let string = document.getElementById("texto").value 
    let decodeCipher = cipher.decode (offset, string) //função cipher que ta no cipher
    document.getElementById("saidaTexto").value = decodeCipher
}

console.log("cipher");