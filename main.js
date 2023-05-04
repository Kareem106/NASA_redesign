let NarBar=document.getElementById("nav-bar");
let Menu=document.getElementById("burger-menu");
Menu.addEventListener("click",()=>{
    NarBar.classList.toggle("nav-bar-open");
    Menu.classList.toggle("burger-menu-icon-open");
});