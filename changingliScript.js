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