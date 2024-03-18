const para = document.querySelector("#para");
const ColorSelect = document.querySelector("#colorInput");
const SizeSelect = document.querySelector("#sizeInput");
const FontSelect = document.querySelector("#fontSelect");

ColorSelect.addEventListener("change", e=>{
    para.style.color = ColorSelect.value;
});
SizeSelect.addEventListener("change", e=>{
    para.style.fontSize = SizeSelect.value + 'px';
});
FontSelect.addEventListener("change", e=>{
    para.style.fontFamily = FontSelect.value;
});