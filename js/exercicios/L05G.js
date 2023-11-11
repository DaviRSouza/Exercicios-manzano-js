export function L05G(){
    let resultado;

    for (let expoente = 0; expoente <= 15; expoente++) {
        resultado = 1;

        for (let i = 1; i <= expoente; i++) {
            resultado *= 3;
        }

        console.log(`3^${expoente} = ${resultado}`);
    }

}