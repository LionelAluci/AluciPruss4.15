var letras = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K',
    'E', 'T'];
    a=prompt("ingrese su DNI")

    if(a<0||a>99999999){
        console.log("ERROOOOOORRRR")
    }
    else {
        let xd=a%23
        console.log(xd)
        console.log (letras[xd])
    }