document.addEventListener('DOMContentLoaded', function(){

    const toggleBtn = document.querySelector('.mobile-toggler');
    const items = document.querySelector('.mobile-menu-items');

    toggleBtn.addEventListener('click', function(){
        items.classList.toggle('active');
    })

});


window.addEventListener('scroll', function(){
    const navBar = document.querySelector('.navbar');
    if(window.scrollY > 0){
        navBar.classList.add('nav-scroll');
    }else{
        navBar.classList.remove('nav-scroll');
    }
})