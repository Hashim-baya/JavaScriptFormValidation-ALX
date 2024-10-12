const form = document.getElementById('registrationForm');

form.addEventListener('submit', (event) => {
    event.preventDefault();

    const usernameInput = document.getElementById('username');
    const usernameError = document.getElementById('usernameError');
    usernameError.textContent = ' ';
    

    let isValid = true;

    if(usernameInput.value.length < 6){
        usernameError.textContent = "The username should have a minimum of six characters!";
        isValid = false;
    }

    const emailInput = document.getElementById('email');
    const emailError = document.getElementById('emailError');
    emailError.textContent = ' ';

    const regex = /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/;

    if(!regex.test(emailInput.value)){
        emailError.textContent = "Please enter a valid email address!";
        isValid = false;
    }

    const ageInput = document.getElementById('age');
    const ageError = document.getElementById('ageError');
    ageError.textContent = ' ';

    if(ageInput.value < 18 || ageInput.value > 99){
        ageError.textContent = "The age should be between 18 and 99 years old!";
        isValid = false;
    }

    const feedbackMessage = document.getElementById('message');
    const feedbackMessageError = document.getElementById('messageError');
    feedbackMessageError.textContent = ' ';

    if(feedbackMessage.value.length > 5000){
        feedbackMessageError.textContent = "You have exceeded the maximum character limit of 5000!";
        isValid = false;
    }

    return isValid;

    form.submit();

});