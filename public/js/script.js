var openModalBtn = document.getElementById("offcanvas-toggler");
var closeModalBtn = document.getElementById("offcanvas-close");
var modal = document.getElementById("offcanvas");

openModalBtn.addEventListener("click",()=>{
    console.log("Hello")
    modalSide('0')
})
closeModalBtn.addEventListener("click", ()=>{
    modalSide("-800px")
})

function modalSide(width){
    modal.style.left = width
}