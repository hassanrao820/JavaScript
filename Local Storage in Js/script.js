const input = document.getElementById('input');
const button = document.getElementById('clickButton');
const displayName = document.getElementById('name');

button.addEventListener('click', () => {
    const value = input.value;
    localStorage.setItem('name', value);
    location.reload();
});
window.addEventListener('load', () => {
    const value = localStorage.getItem('name');
    displayName.innerText = value;
});