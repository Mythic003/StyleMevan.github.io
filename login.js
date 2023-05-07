// Toggle between login and register forms
document.querySelector('a[href="#register"]').addEventListener('click', function (e) {
  e.preventDefault();
  document.getElementById('register').classList.add('show-register');
});

document.querySelector('a[href="#login"]').addEventListener('click', function (e) {
  e.preventDefault();
  document.getElementById('register').classList.remove('show-register');
});