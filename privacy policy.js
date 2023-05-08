// Get all the question elements
const questions = document.querySelectorAll('.question');

// Add event listeners to each question
questions.forEach((question) => {
  question.addEventListener('click', () => {
    question.classList.toggle('open');
  });
});
