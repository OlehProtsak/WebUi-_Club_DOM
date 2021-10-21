const btn = document.querySelector('button');
const divContainer = document.querySelector('.container');


btn.addEventListener('click', () => {
    const p = document.createElement('p');
    p.innerHTML = 'I was pressed!';
    divContainer.appendChild(p);
})

btn.addEventListener('mouseenter', () => {
    const p = document.createElement('p');
    p.innerHTML = 'Mouse on me!';
    divContainer.appendChild(p);

})

btn.addEventListener('mouseleave', () => {
    const p = document.createElement('p');
    p.innerHTML = 'Mouse is not on me!';
    divContainer.appendChild(p);

})