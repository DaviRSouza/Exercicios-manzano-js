export function L05D(){
    let somaPares = 0;

    for (let i = 2; i <= 500; i += 2) {
        somaPares += i;
    }

    alert(`A soma dos valores pares de 1 a 500 é: ${somaPares}`);
} 