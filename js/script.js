const btnMenu = document.querySelector('.btn-menu');
const menu = document.querySelector('.menu');
//'querySelector - seleciona CLASSES 
//'getElementById - Seleciona ID's #
function mexerNoMenu() {
    alert('Houve um click aqui!')
    console.log('houve um click')
}
btnMenu.addEventListener('click', mexerNoMenu)