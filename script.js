document.querySelector('.btn').onclick = function (x) {
    var menu = document.querySelector('.menu');
    var btn = document.querySelector('.btn');

    menu.classList.toggle('is-active');
    btn.classList.toggle('is-active');

    x.preventDefault();
}