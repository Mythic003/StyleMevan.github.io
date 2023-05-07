// Get all the question elements
const questions = document.querySelectorAll('.question');

// Add event listeners to each question
questions.forEach((question) => {
  question.addEventListener('click', () => {
    question.classList.toggle('open');
    const answer = question.nextElementSibling;
    if (question.classList.contains('open')) {
      answer.style.maxHeight = answer.scrollHeight + 'px';
    } else {
      answer.style.maxHeight = '0';
    }
  });
});
