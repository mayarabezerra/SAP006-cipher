
const cipher = {

  encode: function encode(offset,string) {
    let mensage= ""
    let offsetNumber = parseInt(offset) 

    for (let i=0; i< string.length; i++){   
      let cripto= string.charCodeAt(i) 
      if (cripto >= 65 && cripto <= 90) { 
        cripto = ((cripto - 65 + offsetNumber)% 26) + 65
      }
      else if (cripto >= 97 && cripto <= 122) { 
        cripto = ((cripto - 97 + offsetNumber) % 26) + 97
      }
      mensage += String.fromCharCode(cripto)
    }
    return mensage
  },
  decode: function decode(offset,string){
    let resposta= ""
    let offsetNumber= parseInt(offset) 
  
    for (let i=0; i<string.length; i++){ 
      let decode = string.charCodeAt(i) 
      if (decode >= 65 && decode <= 90) { 
        decode = 90-((90 - decode + offsetNumber)% 26);
      }
      else if (decode >= 97 && decode <= 122){  
        decode = 122-((122 -decode + offsetNumber)%26);
      }
      resposta += String.fromCharCode(decode)
    } 
    return resposta
  
  }
};
export default cipher;