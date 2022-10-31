


    //let phoneNumber = "11000000010111011010110001110110"

    function ConvertirBinarioADecimal(binario){
    if (binario.constructor !=String){
      return null;
      }

  binario= binario.replace(/[^01]/gi,'');

    return Number.parseInt(binario, 2);
  }

  console.log(ConvertirBinarioADecimal("11000000010111011010110001110110"));

//convert to decimal to obtains the teahcer's number and write in whtasApp "Profe ya acabe" and send a sticker :)