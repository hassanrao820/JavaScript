// let age = 30;
//     if (age < 18) {
//     console.log('you can vote')
// } else if (age >= 30) {
//     console.log('you are adult')
// } else {
//     console.log('you can not vote')
// }



//ternary operator//
const age = 30;
let result = age >= 30 ? 'Yes, you can vote' : 'No, you can not vote';
console.log(result);

const firstName = 'Ali'; 
let print = firstName == 'Ali' ? 'Yes' : 'No';
console.log(print);

//switch case//

const color = 'green';
switch (color) {
    case 'red':
        console.log('color is red');
        break;
    case 'blue':
        console.log('color is blue');
        break;
    case 'green':
        console.log('color is green');
        break;
    default:
        console.log('color is not red, blue or green');
        break;
}

const option = 4;
switch (option){
    case 1:
        console.log('option is 1');
        break;
    case 2:
        console.log('option is 2');
        break;
    case 3:
        console.log('option is 3');
        break;
    case 4:
        console.log('option is 4');
        break;
    default:
        console.log('option is not 1, 2, 3, 4');
        break;
}