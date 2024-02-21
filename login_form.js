let form=document.querySelector('#form')
let username=document.querySelector('#username')
let email=document.querySelector('#email')
let password=document.querySelector('#password')
let cpassword=document.querySelector('#cpassword')

// form.addEventListener('submit',validate())

// function validate(){

// }
// form.addEventListener('submit',function(){

// code 
    
// })

form.addEventListener('submit', (event) => {
    // Prevent the default form submission
    event.preventDefault();
    
    // Validate inputs
    if (ValidateInputs()) {
        // If inputs are valid, show success message
        Swal.fire({
            icon: "success",
            title:username.value ,
            text: "Form submitted successfully!",
        }).then((result) => {
            // Check if the user clicked the "OK" button
            if (result.isConfirmed) {
                // Reload the page
                form.reset();
                window.location.reload();
            }
        });
    } else {
        // If inputs are invalid, show error message
        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Please provide valid inputs!"
        });
    }
});


function ValidateInputs(){

    let username_value=username.value.trim();
    let email_value=email.value.trim();
    let password_value=password.value.trim();
    let cpassword_value=cpassword.value.trim();

    let success=true;

    if(username_value==="")
    {
        success=false
        SetError(username,"User name required")
    }
    else{
        SetSuccess(username)
    }

    if(email_value==="")
    {
        success=false
        SetError(email,"Email Id required")
    }
    else if(ValidateEmail(email_value)===null)
    {
        success=false
        SetError(email,"Invalid Email Id")
    }
    else{
        SetSuccess(email)
    }
    if(password_value==="")
    {
        success=false
        SetError(password,"Password required")
    }
    else if(password_value.length<8)
    {
        success=false
        SetError(password,"Password must be atleast 8 digit characters")
    }
    else{
        SetSuccess(password)
    }
    if(cpassword_value==="")
    {
        success=false
        SetError(cpassword,"Confirm Password required")
    }
    else if(password_value !==  cpassword_value)
    {
        success=false
        SetError(cpassword,"Password does not match")
    }
    else{
        SetSuccess(cpassword)
    }

    return success;

}
function SetError(element,message){

   let parent_element= element.parentElement;
   let error_element = parent_element.querySelector('.error')

   error_element.innerHTML=message
   parent_element.classList.add('error')
   parent_element.classList.remove('success')

}
function SetSuccess(element){

    let parent_element= element.parentElement;
    let error_element = parent_element.querySelector('.error')
 
    error_element.innerHTML=""
    parent_element.classList.add('success')
    parent_element.classList.remove('error')
 }

 function ValidateEmail(ev) {
    return String(ev).toLowerCase().match(
        /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
      );
  };