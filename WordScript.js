const para = document.querySelector("#para");
function changeColor(){
    let colorInput = document.getElementById('colorInput');
    para.style.color = colorInput.value;
}
function changeSize() {
    let sizeInput = document.getElementById('sizeInput');
    para.style.fontSize = sizeInput.value + 'px';
}

function changeFont() {
    let fontSelect = document.getElementById('fontSelect');
    para.style.fontFamily = fontSelect.value;
}