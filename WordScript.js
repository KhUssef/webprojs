const para = document.querySelector("#para");
const ColorSelect = document.querySelector("#colorInput");
const SizeSelect = document.querySelector("#SizeInput");
const FontSelect = document.querySelector("#FontInput");

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
console.log()
ColorSelect.addEventListener('changecolor', function(event){
    event.preventDefault();
    let colorInput = document.getElementById('colorInput');
    para.style.color = colorInput.value;
});