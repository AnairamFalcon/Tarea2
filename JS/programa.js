document.write("<h1>Restaurante My Little Pony</h1>")

var comida = ""
var bebidaop = ""
var cantcomida = 0
var cantbebida = 0
var totalcomida = 0

comida = prompt("Menú Platillos \n Selecione la que sea de su agrado \n1) Hamburguesa $40 \n2) Hotdog $30 \n3) Papitas $25")
switch (comida) {
    case "1":
        cantcomida = prompt("¿Cuántos va a llevar?")
        cantcomida = parseInt(cantcomida);
        comidaop = "Hamburguesa"
        totalcomida += 40 * cantcomida
        break;
    case "2":
        cantcomida = prompt("¿Cuántos va a llevar?")
        cantcomida = parseInt(cantcomida);
        totalcomida += 30 * cantcomida
        comidaop = "Hot Dog"
        break;
    case "3":
        cantcomida = prompt("¿Cuántos va a llevar?")
        cantcomida = parseInt(cantcomida);
        totalcomida += 25 * cantcomida
        comidaop = "Papitas"
        break;
    default:
        alert("Opción inexistente. Refresque la pantalla para volver a iniciar")
        break;
}

document.write("<h2>TICKET</h2>")

document.write(
"<table><tr><th>Pedido</th><th></th><th></th><th>Total</th></tr><tr><td align='center'>",comidaop,"</td><td></td><td align='center'>",cantcomida,"</td><td align='center'>$"+totalcomida,"</td></tr></table>"
)



/*bebidaop = prompt("Menú Bebidas \n Selecione la que sea de su agrado \n1) Agua Natural $20 \n2) Soda $30 \n3) Cerveza $45")
switch(comidaop){
    case "1":
        cantcomida = prompt("¿Cuántos va a llevar?")
        cantcomida=parseInt(cantcomida);
        totalcomida+=40*cantcomida
        break;
    case "2":
        totalcomida+=30*cantcomida
        break;
        cantcomida = prompt("¿Cuántos va a llevar?")
        cantcomida=parseInt(cantcomida);
    case "3":
        cantcomida = prompt("¿Cuántos va a llevar?")
        cantcomida=parseInt(cantcomida);
        totalcomida+=25*cantcomida
        break;
    default:
        alert("Opción inexistente. Refresque la pantalla para volver a iniciar")
        break;
}
cantbebida = prompt("¿Cuántos va a llevar?")
cantbebida=parseInt(cantbebida)

var totalcomida=0
var totalbebida=0
var total=0



alert("El costo de la comida es de $"+totalcomida) */

