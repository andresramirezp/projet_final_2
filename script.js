const btn=document.querySelector(".bouton")
const animation=document.querySelector(".mot")
const wrraper=document.querySelector(".wrraper-mot")

btn.addEventListener("click", function(){
    animation.classList.add("animation");
    wrraper.classList.add("animation-wrraper");
})

animation.addEventListener("animationend", function(){
    wrraper.classList.remove("animation-wrraper");    
    animation.classList.remove("animation");
    
})



