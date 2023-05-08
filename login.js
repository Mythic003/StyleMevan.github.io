document.querySelector('a[href="#login"]').addEventListener('click', function (e) {
  e.preventDefault();
  document.getElementById('register').classList.remove('show-register');
  setTimeout(() => {
    window.location.href = 'index.html';
  }, 0000); // Redirect 
});
