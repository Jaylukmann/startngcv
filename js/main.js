// ========================= Theme shift ========================
var d = new Date();
var time = d.getHours();
if (time <= 19) {
    document.getElementById("day").className = "day";
}
else {
    document.getElementById("day").className = "night";
} 


// ================================== Validation =============================================
var username = document.getElementById("username");
var email = document.getElementById("email");
var message = document.getElementById("message");
var submit = document.getElementById("submitButton");
var myform = document.getElementById("myModalForm");

// check if name is up to 4 characters, if it's not up to 4. Disable other input fields until the name is corrected.
function checkNameField() {
    if (username.value.length < 4) {
        username.className = "input-error";
        document.getElementById("errorName").style.display = "block";
        email.setAttribute('disabled', 'disabled');
        message.setAttribute('disabled', 'disabled');
        submit.setAttribute('disabled', 'disabled');
        title.setAttribute('disabled', 'disabled');
    }
    else {
        username.className = "form";
        document.getElementById("errorName").style.display = "none";
        email.removeAttribute('disabled');
        message.removeAttribute('disabled');
        submit.removeAttribute('disabled');
        title.removeAttribute('disabled');
    }
}

function removeNameErrorWhenCorrecting() {
    document.getElementById("errorName").style.display = "none";
}

if (username.addEventListener) {
    username.addEventListener('blur', checkNameField, false);
    username.addEventListener('focus', removeNameErrorWhenCorrecting, false);
}

// If email is the right format

function checkEmailField() {

    // format for email validation
    var mailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    if (email.value.indexOf("@", 0) < 0) {
        email.className = "input-error";
        document.getElementById("errorEmail").style.display = "block";
        document.getElementById("errorEmail").textContent = "Your email address does not have an '@' symbol!";
        message.setAttribute('disabled', 'disabled');
        username.setAttribute('disabled', 'disabled');
        submit.setAttribute('disabled', 'disabled');
        title.setAttribute('disabled', 'disabled');
    } 
    else if (email.value.indexOf(".", 0) < 0) {
        email.className = "input-error";
        document.getElementById("errorEmail").style.display = "block";
        document.getElementById("errorEmail").textContent = "A '.' symbol is missing in your email address, please check!";
        message.setAttribute('disabled', 'disabled');
        username.setAttribute('disabled', 'disabled');
        submit.setAttribute('disabled', 'disabled');
        title.setAttribute('disabled', 'disabled');
    }
    else if (mailFormat.test(email.value) == false) {
        email.className = "input-error";
        document.getElementById("errorEmail").style.display = "block";
        document.getElementById("errorEmail").textContent = "Wrong email format, please try again!";
        message.setAttribute('disabled', 'disabled');
        username.setAttribute('disabled', 'disabled');
        submit.setAttribute('disabled', 'disabled');
        title.setAttribute('disabled', 'disabled');
    }
    else {
        email.className = "form";
        //document.getElementById("errorEmail").style.display = "none";
        message.removeAttribute('disabled');
        username.removeAttribute('disabled');
        submit.removeAttribute('disabled');
        title.removeAttribute('disabled');
    }
}

function removeEmailErrorWhenCorrecting() {
    document.getElementById("errorEmail").style.display = "none";
    email.className = "form";
}

if (email.addEventListener) {
    email.addEventListener('blur', checkEmailField, false);
    email.addEventListener('focus', removeEmailErrorWhenCorrecting, false);
}



// At least 20 characters for the message

function checkMessageField() {
    if (message.value.length < 20) {
        message.className = "textarea-error";
        document.getElementById("errorMessage").style.display = "block";
        email.setAttribute('disabled', 'disabled');
        username.setAttribute('disabled', 'disabled');
        submit.setAttribute('disabled', 'disabled');
        title.setAttribute('disabled', 'disabled');
    }
    else {
        message.className = "form";
        document.getElementById("errorMessage").style.display = "none";
        email.removeAttribute('disabled');
        username.removeAttribute('disabled');
        submit.removeAttribute('disabled');
        title.removeAttribute('disabled');
    }
}

function removeMessageErrorWhenCorrecting() {
    document.getElementById("errorMessage").style.display = "none";
    message.className = "form";
}

if (message.addEventListener) {
    message.addEventListener('blur', checkMessageField, false);
    message.addEventListener('focus', removeMessageErrorWhenCorrecting, false);
}



// ================= Modal ==============================

// Get the modal and button
var modal = document.getElementById('myModal');

// Get the image and insert it inside the modal - use its "alt" text as a caption
var button = document.getElementById('contactButton');

button.addEventListener('click', function() {
    modal.style.display = "block";
});

function closeModal() {
    modal.style.display = "none";
    myform.reset();
}

// Get the <span> element that closes the modal
var close = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
close.addEventListener('click', closeModal, false);
