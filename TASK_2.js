function createStaircase(n) { //Define la funcion y recibe el  umero de filas como n 
    for (let i = 1; i <= n; i++) {
        let row = ""; //se crea un string vacio  donde se iran vaciando los #

        for (let j = 1; j <= i; j++) { //Aqui va a ir controlando cuantos # van a ir aparecienendo
            row = row + "#";  
        }

        console.log(row);
    }
}

createStaircase(3);