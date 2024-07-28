//If Else Statement

const age = 18;
if (age > 18) {
    console.log("Eligible to vote");
}
else if(age >= 18){
    console.log("Yes, your age is 18, You can vote.");
} 
else {
    console.log("Not Eligible to vote");
}

//Ternary Operator

const num = 16;
num >= 15 ? console.log("Correct Number") : console.log("Incorrect Number");

//Switch

const option = 1;
switch(option){
    case 1:{
        console.log("Yes, it is correct");
        break;
    }
    case 2:{    
        console.log("No");
    }
}

let a = 10;
let opt = '/';
let b = 10;

switch(opt) {
    case '+' : console.log(a + b); break;
    case '-' : console.log(a - b); break;
    case '*' : console.log(a * b); break;
    case '/' : console.log(a / b); break;
}