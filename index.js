import colors from 'colors';

let num1 = parseInt(prompt('Введите первое число'));
let num2 = parseInt(prompt('Введите второе число'));
let a = prompt('Введите аргумент');
if(!Number.isInteger(a)){
    throw new Error();
}

if ( Number.isInteger(a) && a>num1 && a<num2){
    if( a<10 ){
        console.log(colors.green(a))
    } else if( a> 9 && a<100 ){
        let b = a%10;
        a = Math.round(a/10);
        console.log(colors.yellow(a), colors.green(b));
    } else if(a>100){
        let b = a%10;
        a = Math.round(a/10);
        let c = a%10;
        a = Math.round(a/10);
        console.log(colors.red(a), colors.yellow(c), colors.green(b))
    }
} else {
    console.log('Простых чисел в диапазоне нет!')
}