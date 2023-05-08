// Get all the question elements
const questions = document.querySelectorAll('.question');

// Add event listeners to each question
questions.forEach((question) => {
  const arrow = question.querySelector('.arrow');
  const answer = question.nextElementSibling;

  question.addEventListener('click', () => {
    question.classList.toggle('open');
    arrow.classList.toggle('rotate');
    answer.classList.toggle('open');

    if (answer.classList.contains('open')) {
      answer.style.maxHeight = answer.scrollHeight + 'px';
    } else {
      answer.style.maxHeight = '0';
    }
  });

  arrow.addEventListener('click', (event) => {
    event.stopPropagation();
    question.click();
  });
});
