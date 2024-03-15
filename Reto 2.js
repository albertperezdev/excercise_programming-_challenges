
//operadores aritmeticos
console.log("Suma: 4 + 4 = ", 4 + 4 );
console.log("Resta: 4 - 4 = ", 4 - 4 );

console.log("Multiplicacion: 4 * 4 = ", 4 * 4 );
console.log("Division: 4 / 4 = ", 4 / 4 );
console.log("Modulo: 4 / 4 = ", 4 % 4 );
console.log("Exponente; 4 ** 2 = ", 4 ** 2 );

//operadores comparativos 

console.log("Igualdad: 4 == 4 es", 4 == 4);
console.log("Desigualdad: 4 != 4 es", 4 != 4);
console.log("Estricamente igual: 4 === 4 es", 4 === 4);
console.log("Estricamente Desiguales: 4 !== 4", 4 !== 4);
console.log("Mayor que: 4 > 4 es", 4 > 4);
console.log("Menor que: 4 < 4 es", 4 < 4);
console.log("Mayor o igual que: 4 >= 4 es", 4 >= 4);
console.log("Menor o Igual que: 4 <= 4 es", 4 <= 4);

//operadores lógicos    
console.log("AND logico: 4 + 4 == 8 and 8 - 4 == 4", 4 + 4 == 8 && 8- 4 == 4);
console.log("OR logico: 4 + 4 == 8 or 8 - 2 == 4", 4 + 4 == 8 || 8 - 2 == 4);
console.log("NOT !: not 8 + 4 == 8 es", (!8 - 2 == 4));



//estructura de control

let edad = 43
//si tiene mas de 45 años no pude pasar
if (edad > 45){

    console.log("tiene mas de la edad permitida, no pude ingresar")

}else{
    console.log("puede pasar")
}
let clics = 20

for(let clic = 0; clic <= clics; clic++){
    console.log("Estoy dando un clic" + clic)

}

let cont = 0;

while(cont < 10){
    cont++
    console.log("Hola mundo");  
}

let tipoDeFruta = "Mango" 

switch(tipoDeFruta){
    case "Naranja":
        console.log("La naranja cuesta $300");
        break;
    case "Mango":
        console.log("El mango cuesta $1000");
        break;
    case "Platano":
        console.log("El platano cuesta $200");
        break;
    default:
        console.log("La fruta no existe");
        break;

}










