const menu = document.querySelector('.hambuger-bar input');
const nav1 = document.querySelector('header .download');
const nav2 = document.querySelector('header .media-sosial');
const nav3 = document.querySelector('header .navigator');

menu.addEventListener('click', function () {
    nav1.classList.toggle('slide');
    nav2.classList.toggle('slide');
    nav3.classList.toggle('slide');
});

document.querySelectorAll('header .hambuger-bar a').forEach(n => n.
    addEventListener('click', () => {
        nav1.classList.remove('slide');
        nav2.classList.remove('slide');
        nav3.classList.remove('slide');
    }))


const header = document.querySelector('header');
let lastScrollY = window.scrollY;

window.addEventListener("scroll", () => {
    if (lastScrollY < window.scrollY) {
        header.classList.add('header-hidden');
    } else {
        header.classList.remove('header-hidden');
    }
    lastScrollY = window.scrollY;
}

);