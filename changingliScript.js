function changeColor(link) {
    let randomColor = getRandomColor();
    link.style.color = randomColor;
}

function getRandomColor() {
    let color = 'rgba';
    color += `(${(Math.random()*255)}, `;
    color += `${(Math.random()*255)}, `;
    color += `${(Math.random()*255)})`;
    return color;
}
document.querySelector('#linkList').addEventListener('click', e=>{
    changeColor(e.target);
})