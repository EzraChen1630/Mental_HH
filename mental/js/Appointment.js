function validateForm() {
    // Retrieve form values
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var phone = document.getElementById('phone').value;
    var date = document.getElementById('date').value;
    var doctor = document.getElementById('doctor').value;
    var message = document.getElementById('message').value;
   
    // Check if name is empty
    if (name === '') {
      alert('Please enter your name.');
      return false;
    }
   
    // Check if email is empty
    if (email === '') {
      alert('Please enter your email.');
      return false;
    }
   
    // Validate email format
    var emailRegex = /^\S+@\S+\.\S+$/;
    if (!email.match(emailRegex)) {
      alert('Invalid email format.');
      return false;
    }
   
    // Check if phone is empty
    if (phone === '') {
      alert('Please enter your phone number.');
      return false;
    }
   
    // Validate phone number format
    var phoneRegex = /^\d{10}$/; // Assuming 10-digit phone numbers
    if (!phone.match(phoneRegex)) {
      alert('Invalid phone number format. Please enter a 10-digit number.');
      return false;
    }
   
    // Check if date is empty
    if (date === '') {
      alert('Please select a preferred date.');
      return false;
    }
   
    // Check if doctor is empty
    if (doctor === '') {
      alert('Please select a doctor and time.');
      return false;
    }
   
    // Check if message is empty
    if (message === '') {
      alert('Please enter a message.');
      return false;
    }
   
    // If all validations pass, the form can be submitted
    return true;
  }



//data input

const submitForm = () => {
  let formData = {};
  formData.name = $('#name').val();
  formData.email = $('#email').val();
  formData.phone = $('#phone').val();
  formData.date = $('#date').val();
  formData.doctor = $('#doctor').val();
  formData.message = $('#message').val();

  console.log('form data: ', formData);
  addInfo(formData);
}

const addInfo = (info) => {
  $.ajax({
      url: 'api/info',
      data: info,
      type: 'POST',
      success: (result) => {
          alert(result.message);
          location.reload();
      }
  });
}

$(document).ready(function(){
  $('.materialboxed').materialbox();
  $('.modal').modal();

  $('#formSubmit').click(()=>{
      submitForm();
  })
});