// reto extra
/*Crea un programa que imprima por consola todos los números comprendidos
 entre 10 y 55 (incluidos), pares, y que no son ni el 16 ni múltiplos de 3.*/


let numeros = 10

 while(numeros <= 55){
    console.log(numeros)
    numeros++
    if (numeros != 16 && numeros % 3 === 0){
        
    }else if(numeros % 2 === 0){
        numerosPares = numeros
        console.log("los numeros pares son: ", numerosPares)
    }

 }




