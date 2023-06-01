document.addEventListener('DOMContentLoaded', function() {
  // Simulated question and comment data
  var questionData = {
    question: "How can I manage stress effectively?",
    answer: ""
  };

  var commentData = [
    { author: "Dr Juelina", comment: "Recognize the main causes of your stress. It could be work-related, personal relationships, financial issues, or other factors. Understanding the source can help you find appropriate solutions." },
    { author: "Dr Elsa", comment: "I find exercise to be helpful in managing stress." },
    { author: "Dr John", comment: "Don't forget to take breaks and practice self-care!" }
  ];

  var questionText = document.querySelector('.question-text');
  var answerTextarea = document.getElementById('answer');
  var answerForm = document.getElementById('answer-form');
  var commentTextarea = document.getElementById('comment');
  var commentForm = document.getElementById('comment-form');
  var commentsList = document.querySelector('.comments-list');

  // Set the question text
  questionText.textContent = questionData.question;

  // Populate existing comments
  commentData.forEach(function(comment) {
    var commentItem = document.createElement('li');
    commentItem.classList.add('comment-item');
    commentItem.innerHTML = `
      <div class="comment-author">${comment.author}:</div>
      <div class="comment-text">${comment.comment}</div>
    `;
    commentsList.appendChild(commentItem);
  });

  // Handle answer submission
  answerForm.addEventListener('submit', function(e) {
    e.preventDefault();

    // Get the answer text
    var answer = answerTextarea.value;

    // Save the answer or perform other actions as needed

    // Clear the answer textarea
    answerTextarea.value = "";

    // Show a success message or update the UI
    alert("Answer submitted successfully!");
  });

  // Handle comment submission
  commentForm.addEventListener('submit', function(e) {
    e.preventDefault();

    // Get the comment text
    var commentText = commentTextarea.value;

    // Save the comment or perform other actions as needed

    // Create a new comment item and add it to the comments list
    var commentItem = document.createElement('li');
    commentItem.classList.add('comment-item');
    commentItem.innerHTML = `
      <div class="comment-author">You:</div>
      <div class="comment-text">${commentText}</div>
    `;
    commentsList.appendChild(commentItem);

    // Clear the comment textarea
    commentTextarea.value = "";

    // Show a success message or update the UI
    alert("Comment submitted successfully!");
  });
});
