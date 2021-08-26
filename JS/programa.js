document.write("<h1>Programa restaurante, My Little Pony</h1>")

console.log("Bienvenidxs al restaurante, ¿qué van a querer de comer?")
console.log("Platillos (seleccione una letra):")
console.log("a) Nachos $30")
console.log("b) Pizza $120")
console.log("c) Tacos $10")

var op="a"

switch(op){
    case "a":
        var plato=30;
        console.log("Escogió nachos $30")
        break;
    case "b":
        var plato=120;
        console.log("Escogió pizza $120")
        break;
    case "c":
        var plato=10;
        console.log("Escogió tacos $10")
        break;
    default:
        console.log("Opción inválida")
        break;
}

console.log("¿Cuántos plátillos quiere?")
var cant=2;

console.log("Escogió", cant)

var comida=plato*cant;

console.log("Total comida $"+comida)

console.log("¿Desea una bebida? SI/NO")
var preg="SI"

console.log("Escogió SI")

if(preg=="SI"){
    console.log("¿Qué desea? (escriba la letra)")
    console.log("a) Agua Natural $15")
    console.log("b) Soda $30")
    console.log("c) Cerveza $45")
    var op2="b"
        switch(op){
            case "a":
                var bebida=15;
                console.log("Escogió Agua Natural $15")
                break;
            case "b":
                var bebida=30;
                console.log("Escogió Soda $30")
                break;
            case "c":
                 var bebida=45;
                 console.log("Escogió Cerveza $45")
                break;
            default:
                console.log("Opción inválida")
                break;
    }
    console.log("¿Cuántas bebidas quiere?")
    var cantb=2;
    console.log("Escogió",cantb)
    var bebidas=bebida*cantb;
    console.log("Total bebida(s) $"+bebidas)
}else{
    bebidas=0
}

var total=comida+bebidas

console.log("Su total es de $"+ total)