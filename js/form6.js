// Define a regular expression for validating email addresses
var emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
var nameRegex = /^[a-zA-Z\u00C0-\u017F\s]*$/;
const nextButton = document.getElementById("next");

nextButton.addEventListener('click', function(event) {
  
  // Get the full name input element
  var nameInput = document.getElementById("full-name");
  // Get the full name input value
  var name = nameInput.value;

  // Check if the full name is valid
  if (!nameRegex.test(name)) {
    // If the full name is not valid, display an error message and prevent the form from being submitted
    event.preventDefault();
    alert('Please enter a valid full name');
    return;
  }


  // Get the email input element
  var emailInput = document.getElementById("email");
  // Get the email input value
  var email = emailInput.value;

  // Check if the email is a valid
  if (!emailRegex.test(email)) {
    // If the email is not valid, display an error message and prevent the form from being submitted
    event.preventDefault();
    alert('Please enter a valid email address');
    return;
  }

  const requiredFields = document.querySelectorAll('textarea[required]');
  let emptyFields = false;
  
  requiredFields.forEach(field => {
    if (field.value.trim() === '') {
      emptyFields = true;
    }
  });
  
  if (emptyFields) {
    // Display an error message or prevent the form from being submitted
    event.preventDefault();
    alert('All fields are required');
  }
});


//validate if there are only valid age in the "age" textarea

function minMaxValidationFunc(that,value){
  let min = parseInt(that.getAttribute("min"));
  let max = parseInt(that.getAttribute("max"));
  let val = parseInt(value);

  if (val < min || isNaN(val)) {
    return min;
  }else if (val > max){
    return max;
  }else{
    return val;
  }
}


