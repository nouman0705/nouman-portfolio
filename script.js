let sections = document.querySelectorAll("section")
let links = document.querySelectorAll("li")
let arrow=document.getElementById("arrow")

window.addEventListener("scrollend",()=>{
    arrow.style.opacity="15%"
    arrow.style.transition="3s"
})

window.addEventListener("scroll",()=>{
    arrow.style.opacity="100%"
    arrow.style.transition="1s"
})

// let height = window.innerHeight
// console.log(height);
// let screenHeight = screen.height
// console.log(screenHeight);



