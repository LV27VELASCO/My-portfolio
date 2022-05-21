const navbarBtn= document.getElementById("nav-btn");
const navbarNav= document.querySelector(".nav-menu");

const fn= function(){
    navbarNav.classList.toggle("active")
}

navbarBtn.addEventListener("click",fn)