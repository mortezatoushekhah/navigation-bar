const hamburger = document.querySelector(".navToggle");
const navbar = document.querySelector(".navbar");
const closeIcon = document.querySelector("#close");
const icons = document.querySelectorAll(".icon");

hamburger.addEventListener("click" , () => {
    navbar.classList.toggle("open");
    icons.forEach(icon => {
        icon.classList.toggle("hidden");
    })
    
})