
let sumaApariciones = new Array(13).fill(0); 
function lanzarDado() {
  return Math.floor(Math.random() * 6) + 1; 
}

for (let i = 0; i < 36000; i++) {
    let dado1 = lanzarDado();
    let dado2 = lanzarDado();
    let suma = dado1 + dado2;

    sumaApariciones[suma]++;
}
console.log("numero de apariciones de cada suma:");
for (let suma = 2; suma <= 12; suma++) {
    console.log(`Suma ${suma}: ${sumaApariciones[suma]} veces`);
}