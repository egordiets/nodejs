//import colors from 'colors';
const colors = require('colors')

//const a = prompt('Введите простое число');
const b = 2;

if ( Number.isInteger(b) && b>1 && b<998){
    // while(a>0){
    //     a
    // }
    for(let i=0; i<3; i++){
        c = b%10;
        b = b/10;
        const units = 0;
        if ( b<0 ){
            console.log(colors.green.c)
        } else{
            units = colors.green.c;
        }
    }
}