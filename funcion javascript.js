function regalo() {
var valor;

for (cliente = 1; cliente <= 10; cliente++) {
valor = Math.floor(Math.random() * 15000)

switch (valor) {
    case 15000:
    console.log("Mandar a cliente" + cliente + ":" + "cesta con jamón");
    break;
}
switch (valor) {
    case 1000:
    console.log("Mandar a cliente" + cliente + ":" + "cesta sin jamón");
    break;
}
switch {
    console.log("Mandar a cliente" + cliente + ":" + "una cartita de mierda");
    break;
}
}

}
regalo();
