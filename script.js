hamburgerBtn.addEventListener('click', function () {
  sidebar.classList.add('show-sidebar');
});

closeXBtn.addEventListener('click', function () {
  sidebar.classList.remove('show-sidebar');
});

const services = document.querySelector('.services');
services.addEventListener('click', function () {
  sidebar.classList.remove('show-sidebar');
});

const socials = document.querySelector('.socials');
socials.addEventListener('click', function () {
  sidebar.classList.remove('show-sidebar');
});

const about = document.querySelector('.about');
about.addEventListener('click', function () {
  sidebar.classList.remove('show-sidebar');
});

const newYear = (document.querySelector('#footer-date').innerHTML =
  new Date().getFullYear());
