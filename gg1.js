var array=[true, 5, false, "hola", "adios", 2];

a = prompt("la palabra hola es mas larga que adios?")

if(a=="si"){
    console.log (array[2]);
}

else if(a=="no"){
    console.log (array[0]);
} 

else {
    console.log ("no")
}

b = prompt("queres ver las operaciones que arma esta bella pagina web? :D")

if(b=="weno"){
    let xd = array[1]+array[5]
    let xdd = array[1]-array[5]
    let xddd = array[1]*array[5]
    let xdddd = array[1]/array[5]
    let xddddd = array[1]**array[5]
    console.log ("5+2=",xd)
    console.log ("5-2=",xdd)
    console.log ("5*2=",xddd)
    console.log ("5/2=",xdddd)
    console.log ("5^2=",xddddd)
}

else {
    console.log("tonto")
}