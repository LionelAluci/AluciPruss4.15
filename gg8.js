let xd = prompt("ingrese una palabra")
let ingreso = []
for (let i = 0; i < xd.length; i++) {
    if (xd[i] != " ") {
        ingreso.push(xd.charAt(i).toUpperCase())
    }
}

let j = 0;
if (ingreso[j] != ingreso.reverse()[j]) {
    console.log("no es palindromo")
}
else {
    while (j < ingreso.length && ingreso[j] == ingreso.reverse()[j]) {
        if (j == ingreso.length - 1) {
            console.log("es palindromo")
        }
        j++
    }


}
