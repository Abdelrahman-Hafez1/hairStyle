var menu=document.querySelector('.menu');
var sideBar=document.querySelector('.sideBar');
var menuImg=document.querySelector('.menu img');

sideBar.style.right='-270px'
menu.addEventListener('click',function(){
    if(sideBar.style.right=='-270px'){
        sideBar.style.right='0';
        menuImg.src='imgs/close.png'
    }else{
        sideBar.style.right='-270px';
        menuImg.src='imgs/menu.png'

    }
})