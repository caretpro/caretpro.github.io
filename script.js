document.addEventListener('DOMContentLoaded', function () {
    const menuIcon = document.querySelector('.menu-icon');
    const navUl = document.querySelector('nav ul');

    menuIcon.addEventListener('click', function () {
        navUl.classList.toggle('show');
    });
});
