//1

for (var i=20; i <= 30; i=i+0.5) {
    console.log(i) 
}

//2

let n = 27;
for (var i=10; i <= 100; i=i+10) {
    console.log(`${i*n} $`);
}

//3

let num = Number(prompt("Введите любое число"));

function isPrime(num) {
    if (num < 2) {
    return 'Число должно быть больше 1';
    } else if (num === 2) {
    return 'Простое число';
    }
    let i = 2;
    const limit = Math.sqrt(num);
    while (i <= limit) {
    if (num % i === 0) {
        return 'Составное число';
    }
    i +=1;
    }
    
    return 'Простое число';
}
console.log(isPrime(num));

//4

let number = Number(prompt("Введіть будьяке число"));

function num(number) {
    let res = Math.pow(number, 1/3);
    console.log(res);
    if(res !== 0){
        return 'можна возвести в 3й ступінь';
    }
    return 'не можна возвести в 3й ступінь';
}

console.log(num(number));