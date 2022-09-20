const hamburger = document.querySelector('.hamburger');
const close = document.querySelector('.hidden');
const menu = document.querySelector('.menu-nav');

/* console.log(menu)
console.log(hamburger) */

hamburger.addEventListener('click', ()=>{
    menu.classList.toggle("spread")
    hamburger.classList.toggle("hidden")
    close.classList.toggle("hidden")
})

window.addEventListener('click', e=>{
    /* console.log(e.target) */
    if(menu.classList.contains('spread') && e.target != menu && e.target != hamburger){
            menu.classList.toggle("spread")
            hamburger.classList.toggle("hidden")
            close.classList.toggle("hidden")
    }
})