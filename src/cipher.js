
const cipher = {

  encode: function encode(offset,string) {
    let mensage= ""
    let offsetNumber = parseInt(offset)

    for (let i=0; i< string.length; i++){  //loop inicial 
      let cripto= string.charCodeAt(i) //variavel que recebe e guarda o código
      if (cripto >= 65 && cripto <= 90) { // condição para calculo/codifica
        cripto = ((cripto - 65 + offsetNumber)% 26) + 65
      }
      else if (cripto >= 97 && cripto <= 122) { // condição 97 A 122 MAISCULAS ASC
        cripto = ((cripto - 97 + offsetNumber) % 26) + 97
      }
      mensage += String.fromCharCode(cripto)
    }
    return mensage
  },
  decode: function decode(offset,string){
    let resposta= ""
    let offsetNumber= parseInt(offset) ///parseInt converter p/ string?
  
    for (let i=0; i<string.length; i++){ //erro de sintaxe, tinha esquecido sinal "<" e escrito length errado
      let decode = string.charCodeAt(i) //variavel que recebe/guarda o código
      if (decode >= 65 && decode <= 90) { // &&= rode isso e em seguida rode aquilo // condição 65=a 90=z
        decode = 90-((90 - decode + offsetNumber)% 26);
      }
      else if (decode >= 97 && decode <= 122){  // condição 97 A 122 MAISCULAS
        decode = 122-((122 -decode + offsetNumber)%26);
      }
      resposta += String.fromCharCode(decode)
    } 
    return resposta
  
  }
};
export default cipher;