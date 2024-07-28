//Array high order function

//For each
const student= ['Usman','Khalid','Shahzad','Moiz','Ali','Ahsan','Kalim'];
function print(n){
    console.log(n);
}
student.forEach(print);
student.forEach((val) => console.log(val + 'Mustafa')); // one liner function

//Map 
const boy= ['Jamsheed','Tariq','Wasi'];
boy.map((val) => console.log(val))

//Difference b/w map and forEach
//forEach is used to iterate over the array and perform some operation on each element of the array
//map is used to iterate over the array and perform some operation on each element of the array and return a new array

const naturalNumbers = [1,2,3,4,5,6,7,8,9,10];
function square(n){
    return n*n;
}
let Numbers = naturalNumbers.forEach(square);
console.log(Numbers);

const wholeNumbers = [0,1,2,3,4,5,6,7,8,9,10];
function square(n){
    return n*n;
}
let Number = wholeNumbers.map(square);
console.log(Number);

//Find
const numbers = [1,2,3,4,5,6,7,8,9,10];
function isEven(n){
    return n + 2 == 3;
}
let result = numbers.find(isEven);
console.log(result);

const digits = [1, 2, 3, 4, 5];
let ans = digits.find((num) => num + 2 == 3);
console.log(ans);

//Find Index
const number = [1,2,3,4,5,6,7,8,9,10];
function isEven(n){
    return n === 3;
}
let FinalResult = number.findIndex(isEven);
console.log(FinalResult);

const value = [1,2,3,4,5,6,7,8,9,10];
let answer = value.findIndex((num) => num ===3);
console.log(answer);

//Include
const val = [1,2,3,4,5,6,7,8,9,10];
let anz = val.includes(1);
console.log(anz);

//Filter
const num = [1,2,3,4,5,6,7,8,9,10];
function isEven(n){
    return n % 2 == 1;
}
let Fnl = num.filter(isEven);
console.log(Fnl);

const numb = [1,2,3,4,5,6,7,8,9,10];
let res = numb.filter((num) => num % 2 == 0);
console.log(res);

//Slice
const no = [1,2,3,4,5,6,7,8,9,10];
let newResult = no.slice(4 , 9);
console.log(newResult);

//Splice
const nu = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let newN = nu.splice(1, 4);
console.log(newN);
console.log(nu);
