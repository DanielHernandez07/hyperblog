/*if (true) {
    console.log("Hola");

}else{
    console.log("Soy falso");
}*/

  

/*if (true) {
    console.log("Hola");

}else if () {
    console.log("Soy falso");
}else{

}*/

/*var edad = 18;

if(edad === 18){
    console.log("Puedes votar, será tu primera vez")
}else if(edad > 118){
    console.log("Puedes votar de nuevo")
}else{
    console.log("Aun no puedes votar")
}

//operador teneario

condition ? true : false;

var numemro = 1;

var resultado =  numero === 1 ?  "Si soy un uno" : "No, soy uno";*/


//RETO DE LA CLASE - JUEGO DE PIEDRA PAPEL O TIJERA

var opc1 = "Piedra";
var opc2 = "Papel";
var opc3 = "Tijera";

var resultado = function(user, pc){
    if(user != pc)
        if(user ===  opc1 && pc === opc3)
    
    {console.log("El usuario ganó con  "+ opc1)}

    else if (user === opc2 && pc === opc1)
    {console.log("El usuario ganó con: "+ opc2)}

    else if(user === opc3 && pc === opc2)
    {console.log("El usuario ganó con : "+ opc3)}

    else{console.log("El pc ganó")}
    
    else if (user === cpu){
        console.log("Empate")
    }
};