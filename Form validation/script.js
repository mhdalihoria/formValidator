//Setting up variables
const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');
const submitSuccess = document.getElementById('submitSuccess');
var totalScore = 0;
//-----------------------------------------------------------


//watiting for the submit button to be pressed 
form.addEventListener('submit', (e)=>{
    e.preventDefault();

    checkInputs();
    
    if(totalScore == 4){
        showSubmitSuccess();
    }
});

function checkInputs(){
    //get the values from the inputs
    const usernameValue  = username.value.trim();
    const emailValue     = email.value.trim();
    const passwordValue  = password.value.trim();
    const password2Value = password2.value.trim();

    if(usernameValue === ''){
        setErrorFor(username, 'Username cannot be blank');

    }else if(usernameValue.length < 3){
        setErrorFor(username, "Username must be at least 3 letters");
    }else{
        setSuccessFor(username);
        totalScore= totalScore+1; 
    }

    if(emailValue === ''){
        setErrorFor(email, 'email cannot be blank');

    }else if(!isEmail(emailValue)){
        setErrorFor(email, "Email is not valid")

    }else{
        setSuccessFor(email);
        totalScore= totalScore+1; 
    }

    if(passwordValue === ''){
        setErrorFor(password, 'Password cannot be blank');

    }else if(passwordValue.length < 8){
        setErrorFor(password, "Password should be longer than 8 letters");
    }else{
        setSuccessFor(password);
        totalScore= totalScore+1; 
    }

    if(password2Value === ''){
        setErrorFor(password2, 'This field cannot be blank');

    }else if( passwordValue != password2Value){
        setErrorFor(password2, "Passwords do not match")
    }else{
        setSuccessFor(password2);
        totalScore= totalScore+1; 
    }
    

}

function setErrorFor(input, message){
    const formControl = input.parentElement;
    const small = formControl.querySelector('small');

    //add error message inside small
    small.innerText = message;

    //add error class
    formControl.className = 'form-control error';
}

function setSuccessFor(input){
    //set a success message
    const formControl = input.parentElement;
    formControl.className = "form-control success";
}

function isEmail(email){
    //to validate the email
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}

function showSubmitSuccess(){
    submitSuccess.className = "submit-success success";
}
