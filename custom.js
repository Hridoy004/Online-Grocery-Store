alert("Hi! This is new project");

let btnOpen = document.querySelector('label');
let input = document.querySelector('input');

btnOpen.addEventListener('click', () =>{
    window.open(input.value, '_blank');
});