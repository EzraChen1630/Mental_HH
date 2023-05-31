function validatemember(){ 
  
var name=document.forms.signupf.name.value;  

var password=document.forms.signupf.password.value;  

var email=document.forms.signupf.email.value; 
var regEmail=/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/g;
  var age=document.forms.signupf.age.value;  
var confirmpassword = document.forms.signupf.confirmpassword.value;

var phone =	document.forms.signupf.contact.value;
var regPhone=/^\d{10}$/;

 

if (name==null || name==""){  
  window.alert("Please Enter your Name");
				
  return false;  
}

if (email == "" || !regEmail.test(email)) {
    window.alert("Please enter a valid e-mail address.");
   
    return false;
}
if (age==null || age==""){  
  window.alert("Please Enter your Age");
                
  return false;  
}

if (phone == "" || !regPhone.test(phone)) {
    alert("Please enter valid phone number.");
   
    return false;
}

    

 

if(password.length<8){  
    alert("Password must be at least 8 characters long.");  
    return false;  
    } 
        if (confirmpassword == "") {
    window.alert("Please reenter your password.");
   
    return false;
}

   
   
}

function validatememberlogin(){ 


var email=document.forms.signin.email.value; 
var password=document.forms.signin.password.value;  
var regEmail=/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/g;

if (email == "" || !regEmail.test(email)) {
  window.alert("Please enter a valid e-mail address.");
  
  return false;
}

if(password.length<8){  
  alert("Password must be at least 8 characters long.");  
  return false;  
  } 
}