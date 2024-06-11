let formData = document.querySelector(".form");
let submitButton = document.querySelector(".button");
let errorMessages = document.querySelectorAll(".error-message")
let emptyFieldMessages = document.querySelectorAll(".empty-field");
let showPwdBtn = document.querySelector(".btn");

let firstName, lastName, email, password;
let fnTarget, lnTarget, eTarget, pwdTarget;
let field;
let fnFlag, lnFlag, eFlag, pwdFlag;

let passwordRegex = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
let emailRegex = /^[a-z0-9]+@[a-z]+\.[a-z]{2,3}$/; 
let nameRegex = /^[a-z]+$/i;
for(let emptyFieldMessage of emptyFieldMessages){
    emptyFieldMessage.classList.add("d-none");
}
for(let errorMessage of errorMessages){
    errorMessage.classList.add("d-none");
}
formData.addEventListener("keyup", (e)=>{
    event.preventDefault();
    field = e.target.dataset.key;
    switch(field){
        case "firstName":
            firstName = e.target.value;
            fnTarget = e.target;
            break;
        case "lastName":
            lastName = e.target.value;
            lnTarget = e.target;
            break;
        case "email":
            email = e.target.value;
            eTarget = e.target;
            break;
        case "password":
            password = e.target.value;
            pwdTarget = e.target;
            break;
        default:
            firstName = lastName = email = password = "";
            break;
    }
})

submitButton.addEventListener("click", (e)=>{
    e.preventDefault();
    console.log(firstName, lastName, email, password);
    if(firstName){
        emptyFieldMessages[0].classList.add("d-none");
        if(!nameRegex.test(firstName)){
            fnTarget.classList.add("error");
            errorMessages[0].classList.remove("d-none")
            fnFlag = false;
        }else{
            fnTarget.classList.remove("error");
            emptyFieldMessages[0].classList.add("d-none");
            errorMessages[0].classList.add("d-none")
            fnFlag = true;
        }
    }else{
        emptyFieldMessages[0].classList.remove("d-none");
    }
    if(lastName){
        emptyFieldMessages[1].classList.add("d-none");
        if(!nameRegex.test(lastName)){
            lnTarget.classList.add("error");
            errorMessages[1].classList.remove("d-none")
            lnFlag = false;
        }else{
            lnTarget.classList.remove("error");
            emptyFieldMessages[1].classList.add("d-none");
            errorMessages[1].classList.add("d-none")
            lnFlag = true;
        }
    }else{
        emptyFieldMessages[1].classList.remove("d-none");
    if(email){
        emptyFieldMessages[2].classList.add("d-none");
        if(!emailRegex.test(email)){
            eTarget.classList.add("error");
            errorMessages[2].classList.remove("d-none")
            eFlag = false;
        }else{
            eTarget.classList.remove("error");
            emptyFieldMessages[2].classList.add("d-none");
            errorMessages[2].classList.add("d-none")
            eFlag = true;
        }
    }else{
        emptyFieldMessages[2].classList.remove("d-none");
    }
    if(password){
        emptyFieldMessages[3].classList.add("d-none");
        if(!passwordRegex.test(password)){
            pwdTarget.classList.add("error");
            errorMessages[3].classList.remove("d-none")
            pwdFlag = false;
        }else{
            pwdTarget.classList.remove("error");
            emptyFieldMessages[3].classList.add("d-none");
            errorMessages[3].classList.add("d-none")
            pwdFlag = true;
        }
    }else{
        emptyFieldMessages[3].classList.remove("d-none");
    }

    if(fnFlag&&lnFlag&&eFlag&&pwdFlag){
        fnTarget.value = lnTarget.value = eTarget.value = pwdTarget.value = "";
        window.location.href = '/index.html';
    }
    }
})

showPwdBtn.addEventListener("click", (e)=>{
    e.preventDefault();
    if(pwdTarget.getAttribute("type")==="text"){
        pwdTarget.setAttribute("type", "password");
    }else{
        pwdTarget.setAttribute("type", "text");
    }
})



