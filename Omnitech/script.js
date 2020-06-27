
let isOpen = false;

const $header = document.querySelector('header');

const $logo = document.querySelectorAll('.logo')[0];
const $navBar = document.querySelectorAll('.nav-bar')[0];
const $menu = document.querySelectorAll('.menu')[0];
const $hamburguer = document.querySelectorAll('.hamburguer')[0];
const $aItens1 = document.querySelectorAll('.aItens')[0];
const $aItens2 = document.querySelectorAll('.aItens')[1];
const $aItens3 = document.querySelectorAll('.aItens')[2];
const $aItens4 = document.querySelectorAll('.aItens')[3];


window.addEventListener('scroll', toggleHeader, false);
window.addEventListener('scroll', toggleMenuScroll, false);

$menu.addEventListener("click", toggleMenu, false);
$aItens1.addEventListener("click", toggleAItens, false);
$aItens2.addEventListener("click", toggleAItens, false);
$aItens3.addEventListener("click", toggleAItens, false);
$aItens4.addEventListener("click", toggleAItens, false);


function toggleHeader() {
    if (window.pageYOffset > 60 && $header.classList.contains('max-header')) {
        $header.classList.remove('max-header');
        $header.classList.add('min-header');
        $logo.firstElementChild.setAttribute('src', 'imgs/omnitech-logo-2.png');
        $logo.classList.remove('max-logo');
        $logo.classList.add('min-logo');
        $navBar.classList.remove('max-nav');
        $navBar.classList.add('min-nav');
        if($navBar.classList.contains('menu-opened')) {
            $navBar.classList.remove('menu-opened');
            $hamburguer.classList.remove('close-btn');
            isOpen = false;
        }
        $hamburguer.classList.remove('max-hamburguer');
        $hamburguer.classList.add('min-hamburguer');
    } else if (window.pageYOffset <= 60 && $header.classList.contains('min-header')) {
        $header.classList.remove('min-header');
        $header.classList.add('max-header');
        $logo.firstElementChild.setAttribute('src', 'imgs/omnitech-logo-1.png');
        $logo.classList.remove('min-logo');
        $logo.classList.add('max-logo');
        $navBar.classList.remove('min-nav');
        $navBar.classList.add('max-nav');
        $hamburguer.classList.remove('min-hamburguer');
        $hamburguer.classList.add('max-hamburguer');
    }
}

function toggleMenu() {
    if (isOpen == false){
        $navBar.classList.add('menu-opened');
        $hamburguer.classList.add('close-btn');
        isOpen = true;
    } else {
        $navBar.classList.remove('menu-opened');
        $hamburguer.classList.remove('close-btn');
        isOpen = false;
    }
}

function toggleAItens() {
    if($navBar.classList.contains('menu-opened')) {
        $navBar.classList.remove('menu-opened');
        $hamburguer.classList.remove('close-btn');
        isOpen = false;
    }
}

function toggleMenuScroll() {
    if($navBar.classList.contains('menu-opened')) {
        $navBar.classList.remove('menu-opened');
        $hamburguer.classList.remove('close-btn');
        isOpen = false;
    }
}
