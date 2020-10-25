const nav = document.querySelector('.nav');
const navToggler = document.querySelector('.nav-toggler');
const btn = document.querySelector('.nav-btn');
const items = document.querySelectorAll('.nav-list a');

btn.addEventListener('click', () => {
    nav.classList.toggle('nav-toggler')
})

function addClassActive() {
    items.forEach(e => e.classList.remove('active'))
    this.classList.add('active')
    nav.classList.remove('nav-toggler')
}

items.forEach(e => {
    e.addEventListener('click', addClassActive)
})

