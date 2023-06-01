// Handle form submission
$('#questionForm').submit(function(event) {
  event.preventDefault();

  // Get form values
  var name = $('#name').val();
  var question = $('#question').val();

  // Validate form
  if (!name || !question) {
    alert('Please fill in all fields.');
    return;
  }

  // Process the question (you can customize this based on your needs)
  // For example, you can save the form data to a database or post it to a forum
  
  // Display success message
  alert('Question posted successfully!');
  
  // Reset the form
  $('#questionForm')[0].reset();
});