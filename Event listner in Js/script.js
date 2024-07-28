//**Way to calling a function in Js through different method


//*!1st Method
// function handleButtonClick(){
//     alert("I'm Watching You☠");
//     console.log("Clicked")
// }

//*!2nd Method
// const button = document.getElementById('btn');
// button.onclick = function() {
//     alert("I'm Watching You☠");
//     console.log("Clicked")
// }
//*Same as 2nd method function.
// const button = document.getElementById('btn');
// button.onclick = () => {
//     alert("I'm Watching You☠");
//     console.log("Clicked")
// }

//!Most Prefer way to add Eventlistener

// const button = document.getElementById('btn');
// function doSomething(){
//     alert("I'm Watching You☠");
//     console.log("Clicked")
// }
// button.addEventListener('click', doSomething);

// //*when someone outsider access the event listener
// button.addEventListener('click', () => console.log("Hacked"));

//!By click the button h1 will be changed the color.
// const button = document.getElementById('btn');
// const colorChange = document.getElementById('color-change');
// button.addEventListener('click', () => {
//     colorChange.style.color = 'red';
// });

//*We can toggle the color of h1 either blue or red
// const button = document.getElementById('btn');
// const colorChange = document.getElementById('color-change');
// button.addEventListener('click', () => {
//     if ( colorChange.style.color === 'red') {
//         colorChange.style.color = 'blue';
//     } else {
//         colorChange.style.color = 'red';
//     }
// });

// //!We can remove the text by clicking it.
// const remove = document.querySelector("body").children; {
//     for(let i = 0; i < remove.length; i++){
//         remove.item(i).addEventListener('click', () => {
//             remove.item(i).remove() = "";
//         });
//     }
// }