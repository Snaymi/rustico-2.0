const btnMenu = document.querySelector('.btn-menu');
const menu = document.querySelector('.menu');

// Menu
function manipularMenuNoMenu() {
    console.log('Houve um click no menu ✅');
    menu.classList.toggle('show');
}
function closeMenu() {
    console.log('Fechando menu ✅');
    menu.classList.remove('show');
}
btnMenu.addEventListener('click', manipularMenuNoMenu);
menu.addEventListener('click', closeMenu);

