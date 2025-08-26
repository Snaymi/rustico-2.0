const btnMenu = document.querySelector('.btn-menu');
const menu = document.querySelector('.menu');
//'querySelector - seleciona CLASSES 
//'getElementById - Seleciona ID's #
function manipularMenuNoMenu() {
    console.log('Houve um click no menu ✅');
    menu.classList.toggle('show'); //adiciona e remove a classe show ao MENU
    
}
function closeMenu() {
    console.log('Fechando menu ✅');
    menu.classList.remove('show');
}
btnMenu.addEventListener('click', manipularMenuNoMenu);
menu.addEventListener('click', closeMenu);