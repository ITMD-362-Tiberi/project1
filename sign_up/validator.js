document.getElementById("jsStatus").innerHTML = "Sign Up";

function validateSignUpForm() {
    var fields = [ccn, ageVerification, address, email, fullname]
    var fieldsReturn = [ccn.checkValidity(), ageVerification.checkValidity(), address.checkValidity(), email.checkValidity(), fullname.checkValidity()]
    flagInvalidFields(fields)

    if(!fieldsReturn.includes(false) && fullname.value.includes(" ")) {
        document.getElementById("jsStatus").innerHTML = "Membership Activated";
        document.getElementById("jsStatus").style.color = 'red';
        //console.log("Valid");
    }
    else{
        document.getElementById("jsStatus").innerHTML = "Invalid Input";
        document.getElementById("jsStatus").style.color = 'red';
        //console.log("Invalid");
    }
    //console.log("End");
    return false;
}

function flagInvalidFields(fields){
    fields.forEach(function(field) {
        if(!field.checkValidity()){
            field.style.borderColor = "red";
        }
        else if(!fullname.value.includes(" ")){
            fullname.style.borderColor = "red";
        }
        else{
            field.style.borderColor = "green";
        }
    });
}
