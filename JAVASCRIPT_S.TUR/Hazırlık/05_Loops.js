// for loop
// for d. 3 bölümü olmak zorunda. 1. değişken tanımladık. 2. condition 3 her defasında atama operatörü.

// for(let i=0; i<10; i++){
//     // console.log(i) //1'le 9 arasını yazar
    
//     if (i == 3){
//         console.log('en sevdiğim rakam: ' + i);
//         continue; // continue ile döngüyü durdurdu başa aldı. 
//     }

//     if (i == 6){
//         console.log('en sevmediğim rakam: ' + i);
//         break; // break ile döngü durdu.
//     }

//     console.log(i);
// }
// iç içe for 
// for (let i=0; i<10; i++){
//     for(let j=0; j<10; j++){
//         console.log(`i: ${i} j: ${j}`);
//     }
// }
let val = '\n';
for (let i=0; i<10; i++){
    for(let j=0; j<10; j++){
        val += '* ';
    }
    
    val += '\n';
}
console.log(val)
//while
// for(let i=0; i<10; i++){console.log(i)}

// for daki gibi while de 3 bölümden oluşur.

// let i = 0;
// while(i<10){
//     console.log(i)
//     i++;
// }

// do-while loop

// let i = 0;
// do{
//     console.log(i)
//     i++;
// }while(i<10)  // fark while-cond sonda.