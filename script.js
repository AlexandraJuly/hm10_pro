//1

for (var i=20; i <= 30; i += 0.5) {
    console.log(i) 
}

//2

let n = 27;
for (var i=10; i <= 100;  i += 10) {
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
    while (number % 3 == 0) {
        number /= 3;
        }
        console.log(number == 1);
        if(number == true){
            return 'можна возвести в ступінь';
        }
        return 'не можна возвести в ступінь';
}
console.log(num(number));