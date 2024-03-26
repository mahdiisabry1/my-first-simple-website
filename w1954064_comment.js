var nameError = document.getElementById('name-error');
var mailError = document.getElementById('mail-error');
var submitError = document.getElementById('submiterror');

function validateName(){
    var name = document.getElementById('contact-name').value;

    if(name.length == 0){
        nameError.innerHTML = "Full name required !";
        return false;
    }                                                                                          // https://youtu.be/fz8bwvn9lA4
    if(!name.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/)){
        nameError.innerHTML = 'Enter fullname';
        return false;
    }
    nameError.innerHTML = '<img src="images/verified.png" alt="">';
    return true;
}

function validatemail(){
    var email = document.getElementById('mail-name').value;

    if(email.length == 0){
        mailError.innerHTML = 'E-mail required !';
        return false;                                                                   
    }
    if(!email.match(/^[A-Za-z\._\-[0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)){
        mailError.innerHTML = 'Email Invalid';
        return false;
    }

    mailError.innerHTML = '<img src="images/verified.png" alt="">';
    return true;
}

function validateform(){
    if(!validateName() || !validatemail){
        submitError.style.display = 'block';
        submitError.innerHTML = 'Please fill with the correct options';
        setTimeout(function(){submitError.style.display = 'none';}, 3000);
        return false;
    }
    else{
        true;
    }
}






// reference are added exactly where i have used them