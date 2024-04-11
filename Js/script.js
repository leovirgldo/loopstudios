let btnOpen = document.querySelector('.menu');
let btnClose = document.querySelector('.btn-close');
let aside = document.querySelector('.aside');
let body = document.body;
btnOpen.addEventListener('click', ()=>{
    aside.style.width = "100%";
    document.getElementsByTagName('ul')[0].style.marginTop = '150px'
    body.style.overflow = 'hidden';
    aside.style.transition = 'all 1s linear';
})
btnClose.addEventListener('click', ()=>{
    aside.style.width = "0%";
    body.style.overflow = 'auto'
    aside.style.transition = 'all 1s linear';
})