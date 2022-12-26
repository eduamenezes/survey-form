
// Validation code of button "Next" (least one checkbox)

const nextButton = document.getElementById("next");

nextButton.addEventListener('click', function(event) {

    const checkboxes = document.querySelectorAll('input[type="checkbox"]');
    let checked = false;

    checkboxes.forEach(checkbox => {
    if (checkbox.checked) {
        checked = true;
  }
});


// Display an error message or prevent the form from being submitted

if (!checked) {
  event.preventDefault();
  alert('Please check at least one checkbox');
}

//Enable the "Next" button when a checkbox is checked and disable it again when all checkboxes are unchecked

checkboxes.forEach(checkbox => {
    checkbox.addEventListener('change', function() {
      let checked = false;
      checkboxes.forEach(checkbox => {
        if (checkbox.checked) {
          checked = true;
        }
      });
  
      if (checked) {
        nextButton.removeAttribute('disabled');
      } else {
        nextButton.setAttribute('disabled', true);
      }
    });
  });

});


// This is for check only an option at checkbox

function onlyOne(checkbox) {
    var checkboxes = document.getElementsByName('check')
        checkboxes.forEach((item) => {
    if (item !== checkbox) item.checked = false
})
      
}