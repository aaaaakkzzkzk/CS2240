//Best Frog
let messageBestFrog = document.querySelector("#bestFrogMessage");
$("#submitBestFrog").on("click", function(){
    if(document.querySelector("#frogNameInput").value.trim() === ''){
        messageBestFrog.innerText = "Please input a frog name."
    }else{
        messageBestFrog.innerText = "That is a cool frog!"
    }
});

//Auto complete 
 const frogNames = [
    "Amazon Milk Frog",
    "Blue Poison Dart Frog",
    "Borneo Eared Frog",
    "Bumblebee Dart Frog",
    "Chaco Horned Frog",
    "Common Rain Frog",
    "Harlequin Poison Dart Frog",
    "Mimic Poison Dart Frog",
    "Pacman Frog",
    "Polka-Dot Tree Frog",
    "Red Eyed Tree Frog",
    "Reed Frog",
    "Tomato Frog",
    "Waxy Monkey Frog",
    "White's Tree Frog"
  ];
  $( "#frogNameInput" ).autocomplete({ 
    source: frogNames
  });



// for Registration form
$("#bday").datepicker({
    changeMonth: true,
    changeYear: true
});

$( ".radioset" ).buttonset();

$( "#registerDialogB" ).dialog({
    autoOpen: false,
    show: {
      effect: "slide",
      duration: 800
    },
    hide: {
      effect: "slide",
      duration: 800
    }
  });

const form = document.querySelector('#form');
const email = document.querySelector('#email');

form.addEventListener('submit', e => {
    e.preventDefault();
    checkInputs(); 
    });

const setError = (element, message) => {
    const formInput = element.parentElement;
    const errorDiv = formInput.querySelector('.error');
    errorDiv.innerText = message;
}

const setSuccess = element => {
    const formInput = element.parentElement;
    const errorDiv = formInput.querySelector('.error');
    errorDiv.innerText = '';
};

const isValidEmail = email => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}


const checkInputs = () => {
    const username = document.querySelector('#username');
    const bday = document.querySelector('#bday');
    const password = document.querySelector('#password');
    const password2 = document.querySelector('#password2');
    let formValid = 0;

    if(username.value.trim() === '') {
        setError(username, 'Username is required');
    } else {
        setSuccess(username);
        formValid++;
    }

    if(email.value.trim() === '') {
        setError(email, 'Email is required');
    } else if (!isValidEmail(email.value.trim())) {
        setError(email, 'Provide a valid email address');
    } else {
        setSuccess(email);
        formValid++;
    }

    if(bday.value.trim() === '') {
        setError(bday, 'Birth date is required');
    } else {
        setSuccess(bday);
        formValid++;
    }

    if(password.value.trim() === '') {
        setError(password, 'Password is required');
    } else if (password.value.trim().length < 8 ) {
        setError(password, 'Password must be at least 8 character.')
    } else {
        setSuccess(password);
        formValid++;
    }

    if(password2.value.trim() === '') {
        setError(password2, 'Please confirm your password');
    } else if (password2.value.trim() !== password.value.trim()) {
        setError(password2, "Passwords doesn't match");
    } else {
        setSuccess(password2);
        formValid++;
    }

    if(formValid===5){
        $( "#registerDialogB" ).dialog( "open" );
    }

};