//Get element by ID
const myName = document.getElementById('myname');
myName.innerHTML = "Hello, My name is 'Rao'"; //it can change the text written in the html. 
myName.classList.add('underline'); //we can add class through js using this without add class name in html.
myName.classList.remove('name'); //we can remove class through js using this.
myName.style.color = 'blue'; //we can change style of html element using this.
myName.style.backgroundColor ='red'; //we can change style of html element using this.
myName.style.fontSize = '20px'; //we can change style of html element using this.
myName.style.fontWeight = 'bold'; //we can change style of html element using this.
myName.style.border = '10px solid black'; //we can change style of html element using this.
myName.style.padding = '10px'; //we can change style of html element using this.
myName.style.textDecoration = 'underline'; //we can change style of html element using this.
myName.style.textDecorationColor = 'white'; //we can change style of html element using this.
console.log(myName.parentElement); //we can access parent element using this.
myName.parentElement.style.backgroundColor = 'yellow'; //we can change style of parent element using this.
myName.parentElement.style.height = '20rem'; //we can change style of parent element using this.
console.log(myName); //we can access html element using this.
myName.setAttribute('data-name', 'Rao'); //we can add attribute to html element using this.
myName.removeAttribute('data-name'); //we can remove attribute from html element using
// myName.remove(); //we can remove html element using this.