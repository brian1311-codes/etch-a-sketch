const container = document.querySelector('.container');
const button = document.querySelector('button');
const newGridBtn = document.querySelector('.new-grid-btn');

newGridBtn.addEventListener('click', () => {
    const newSize = prompt('Enter new grid size (max 100):');
    
})

for(let i = 0; i < 1024; i++) {
    const div = document.createElement('div');
    div.classList.add('square');
    container.appendChild(div);

    

    div.addEventListener('mouseover', () => {
    div.style.backgroundColor = 'black';

});

button.addEventListener('click', () => {
    div.style.backgroundColor = 'white';
});
}



