// Handle form submission
$('#sharingForm').submit(function(event) {
  event.preventDefault();

  // Get form values
  var name = $('#name').val();
  var experience = $('#experience').val();

  // Validate form
  if (!name || !experience) {
    alert('Please fill in all fields.');
    return;
  }

  // Process the sharing (you can customize this based on your needs)
  // For example, you can save the form data to a database or display it on a public feed
  
  // Display success message
  alert('Experience shared successfully!');
  
  // Reset the form
  $('#sharingForm')[0].reset();
});