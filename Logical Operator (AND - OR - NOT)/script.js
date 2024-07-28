// Logical Operator

//And Operator
const age = 18;
const gen = 'male';
if (gen == 'male' && age >=18){ // Both condition must be True in And operator.
    console.log('You are Adult');
}else{
    console.log('You are a boy.');
}

//OR Operator
const firstName = "Ali";
const lastName = "Hassan";
if (firstName == "Ali" || lastName == "Hussain"){ // Atleast one condition must be True in OR operator.
    console.log('Verified User');
}else{
    console.log('Not Verified');
}

//Not Operator

const name = "Ali";
if (!(name == "Ali")){
    console.log('Not Verified');
}else{
    console.log('Verified User');
}