const container = document.querySelector('.container');
const button = document.querySelector('.clear-button');
const newGridBtn = document.querySelector('.new-grid-btn');

function createGrid(size) {

    container.innerHTML = '';

    const totalSize = size * size;

    for(let i = 0; i < totalSize; i++) {

        const square = document.createElement('div');

        square.style.width = `${500 / size}px`;
        square.style.height = `${500 / size}px`;

        square.classList.add('square');

        // function randomColor(){

        //      const opacity = Number(square.dataset.opacity) || 0;

        //      opacity += 0.1;

        //      if(opacity > 1) opacity = 1;

        //      opacity = square.dataset.opacity;

        //      if(!square.dataset.color) {
        //         const r = Math.floor(Math.random() * 256);
        //         const g = Math.floor(Math.random() * 256);
        //         const b = Math.floor(Math.random() * 256);

        //         square.dataset.color = `${r}, ${g}, ${b}`;
        //      }

        //      const color = square.dataset.color;

        //      return `rgba(${color}, ${opacity})`;
        // }

        square.addEventListener('mouseover', () => {
            
            let opacity = Number(square.dataset.opacity) || 0;

             opacity += 0.1;

             if(opacity > 1) opacity = 1;

             square.dataset.opacity = opacity;

             if(!square.dataset.color) {
                const r = Math.floor(Math.random() * 256);
                const g = Math.floor(Math.random() * 256);
                const b = Math.floor(Math.random() * 256);

                square.dataset.color = `${r}, ${g}, ${b}`;
             }

             const color = square.dataset.color;

             square.style.backgroundColor = `rgba(${color}, ${opacity})`;
        });

        container.appendChild(square);
    }
}

newGridBtn.addEventListener('click', () => {

    const newSize = prompt("Enter a value between 1 to 100");
    const size = Number(newSize);

    if(size >= 1 && size <= 100) {
        createGrid(size);
    } else {
        alert("Invalid Number");
    }
});

button.addEventListener('click', () => {

    const squares = document.querySelectorAll('div');

    squares.forEach(square => {
        square.style.backgroundColor = 'white';
    });
});

createGrid(16);