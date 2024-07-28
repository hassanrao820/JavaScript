//Arrays

//number
let marks = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(marks);

//Strings
let heros = ['Batman', 'Superman', 'Spiderman'];
console.log(heros);

//Calls in Arrays
let student = ['Ali','Hassan','Mohammad','Rizwaan','Khalid','Abdullah'];
console.log(student[2]); 

let student2 = ['Ali','Hassan','Mohammad','Rizwaan','Khalid','Abdullah'];
student2[2] = 'Piyush';  //<<- we can change values using this in array.
console.log(student2[2]); 

let student3 = ['Ali','Hassan','Mohammad','Rizwaan','Khalid','Abdullah'];
student3.push('Saqlain Mushtaq', 'Kamran Shahid');  //<<- we can add more values using this in array.
console.log(student3);

let array =[1, 2, 3, 4, 5, 6,];
array.shift(); //<<- we can remove first value using this in array.
console.log(array);

let array2 =[1, 2, 3, 4, 5, 6,];
array2.pop(); //<<- we can remove last value using this in array.
console.log(array2);

let array3 =[1, 2, 3, 4, 5, 6,];
array3.unshift(-1,0); //<<- we can add more values at first using this in array.
console.log(array3);

let array4 =[1, 2, 3, 4, 5, 6,];
array4.reverse(); //<<- we can reverse the array using this in array.
console.log(array4);

let array5 =[1, 2, 3, 4, 'a', 'b', '🥱', 5, 6,];
array5.sort(); //<<- we can sort the array using this in array.
console.log(array5);

let student4 = ['Ali', 'Hassan', 'Mohammad', 'Rizwaan', 'Khalid', 'Abdullah','😎'];
console.log(student4.indexOf('😎')); //<<- we can find the index of the value using this in array.