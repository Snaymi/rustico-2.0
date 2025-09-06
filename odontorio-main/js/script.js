const btnMenu = document.getElementById('btn-menu');
const menu = document.getElementById('menu');
const backgroundPopoup = document.querySelector ('.background-popoup')

btnMenu.addEventListener('click', function() {
    console.log('clicado')
    menu.classList.toggle('show');
    btnMenu.classList.toggle('x');
});
backgroundPopoup.addEventListener('click', function(){
    backgroundPopoup.classList.add('hide-popup');
})