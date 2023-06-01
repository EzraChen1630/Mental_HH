// Dummy data for example
var questions = [
  {
    name: 'Zainab',
    question: 'How can I manage stress effectively?'
  },
  {
    name: 'Sarah',
    question: 'What are some techniques to improve sleep quality?'
  },
  {
    name: 'Michael',
    question: 'How can I overcome social anxiety?'
  }
];

$(document).ready(function() {
  // Display questions on page load
  displayQuestions();
});

function displayQuestions() {
  var questionList = $('#questionList');

  // Clear existing content
  questionList.html('');

  // Iterate through questions and create HTML elements
  for (var i = 0; i < questions.length; i++) {
    var question = questions[i];

    var questionDiv = $('<div>').addClass('question');
    var nameHeading = $('<h3>').text(question.name);
    var questionParagraph = $('<p>').text(question.question);

    questionDiv.append(nameHeading, questionParagraph);
    questionList.append(questionDiv);
  }
}