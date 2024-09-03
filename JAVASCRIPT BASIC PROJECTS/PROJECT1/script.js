const body = document.querySelector('body');
const btn = document.querySelector('.btn');
const colors =['violet','orange','red','green','yellow','pink','blue','white','brown','grey']

body.style.backgroundColor = 'violet';

btn.addEventListener('click', () => {
    const colorIndex = parseInt(Math.random() * colors.length);
    body.style.backgroundColor = colors[colorIndex]
})