// Add your JavaScript code here

// Submit comment form
$("#commentForm").submit(function (event) {
  event.preventDefault();
  var name = $("#name").val();
  var comment = $("#comment").val();

  // Create new comment element
  var newComment = document.createElement("div");
  newComment.classList.add("card");
  newComment.innerHTML = `
    <div class="card-body">
      <h5 class="card-title">${name}</h5>
      <p class="card-text">${comment}</p>
    </div>
  `;

  // Append the new comment to the comments section
  $("#comments").append(newComment);

  // Clear the form fields
  $("#name").val("");
  $("#comment").val("");
});