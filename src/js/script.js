let menu = document.querySelector('.menu'),
btn = document.querySelector('.btn');

document.querySelector('.btn').onclick = function (x) {

    menu.classList.toggle('is-active');
    btn.classList.toggle('is-active');

    x.preventDefault();
}