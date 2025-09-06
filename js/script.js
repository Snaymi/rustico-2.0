const btnMenu = document.querySelector('.btn-menu');
const menu = document.querySelector('.menu');

// Menu

btnMenu.addEventListener('click', () => {
    console.log('Houve um click no menu ✅');
    menu.classList.toggle('show');
    btnMenu.classList.toggle('x');
});

