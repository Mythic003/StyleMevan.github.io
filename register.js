document.querySelector('a[href="#register"]').addEventListener('click', function (e) {
    e.preventDefault();
    document.getElementById('register').classList.add('show-register');
    setTimeout(() => {
      window.location.href = 'index.html';
    }, 1000); // Redirect after 1 second (adjust the delay as needed)
  });
  