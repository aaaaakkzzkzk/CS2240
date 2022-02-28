// for Registration form

$("#bday").datepicker({
    changeMonth: true,
    changeYear: true
});

$( ".radioset" ).buttonset();

const form = document.querySelector('#form');
const email = document.querySelector('#email');

form.addEventListener('submit', e => {
    e.preventDefault();
    validateInputs(); 
    });

const setError = (element, message) => {
    const formInput = element.parentElement;
    const errorDiv = formInput.querySelector('.error');

    errorDiv.innerText = message;
    // inputControl.classList.add('error');
    // inputControl.classList.remove('success')
}

const setSuccess = element => {
    const formInput = element.parentElement;
    const errorDiv = formInput.querySelector('.error');

    errorDiv.innerText = '';
    // inputControl.classList.add('success');
    // inputControl.classList.remove('error');
};

const isValidEmail = email => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

const isValidBday = element =>{
    //add some sht to validate bday
    return true;
}

const validateInputs = () => {
    const username = document.querySelector('#username');
    const bday = document.querySelector('#bday');
    const password = document.querySelector('#password');
    const password2 = document.querySelector('#password2');

    if(username.value.trim() === '') {
        setError(username, 'Username is required');
    } else {
        setSuccess(username);
    }

    if(email.value.trim() === '') {
        setError(email, 'Email is required');
    } else if (!isValidEmail(email.value.trim())) {
        setError(email, 'Provide a valid email address');
    } else {
        setSuccess(email);
    }

    if(bday.value.trim() === '') {
        setError(bday, 'Birth date is required');
    } else if (!isValidBday(bday)) {
        setError(bday, 'Provide a valid birth date');
    } else {
        setSuccess(bday);
    }

    if(password.value.trim() === '') {
        setError(password, 'Password is required');
    } else if (password.value.trim().length < 8 ) {
        setError(password, 'Password must be at least 8 character.')
    } else {
        setSuccess(password);
    }

    if(password2.value.trim() === '') {
        setError(password2, 'Please confirm your password');
    } else if (password2.value.trim() !== password.value.trim()) {
        setError(password2, "Passwords doesn't match");
    } else {
        setSuccess(password2);
    }

};