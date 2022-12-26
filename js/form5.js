//This make sh


const nextButton = document.getElementById("next");

nextButton.addEventListener('click', function(event) {
    const textarea = document.querySelector('textarea');

    if (textarea.value.trim() === '') {
      // Display an error message or prevent the form from being submitted
      event.preventDefault();
      alert('Please enter some text in the text box');
    }

    textarea.addEventListener('keyup', function() {
        if (textarea.value.trim() === '') {
          nextButton.setAttribute('disabled', true);
        } else {
          nextButton.removeAttribute('disabled');
        }
    });
});


//Count the characteres of textarea
