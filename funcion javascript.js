function regalo() {
var valor;

for (cliente = 1; cliente <= 10; cliente++) {
valor = Math.floor(Math.random() * 15000)

if (valor > 10000) {
    console.log("Mandar a cliente" + cliente + ":" + "cesta con jamón");
}
else if (valor > 1000) {
    console.log("Mandar a cliente" + cliente + ":" + "cesta sin jamón");
}
else {
    console.log("Mandar a cliente" + cliente + ":" + "una cartita de mierda");
}
}

}

regalo();
