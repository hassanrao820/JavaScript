const click = document.getElementById('clickButton');
const cont = document.getElementById('container');

click.addEventListener('click', () => {
    const el = document.createElement('li');
    el.innerText = "Hassan";
    cont.appendChild(el);
});