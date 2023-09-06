const form = document.getElementById("form");
const firstname = document.getElementById("firstname");
const lastname = document.getElementById("lastname");
const age = document.getElementById("age");

const email = document.getElementById("email");
const password = document.getElementById("password");

let message = document.getElementById("message")

/*
firstname.addEventListener('keydown', ()=>{

    first = firstname.value.length;
    console.log("Longitud: " + first);

    if(first ){
        alert("firstname is ok.");
        
    }
})


form.addEventListener('submit', e =>{
    
    first = firstname.value.length;
    console.log(first);

    last = lastname.value.length;
    console.log(lastname);

    password = password.value.length;
    console.log(password);

    e.preventDefault();

    if(first <= 0 && first >= 20){
        alert("firstname is so long, max 20 characters.");
    }
    else{
        alert("firstname is invalido.");
    }

    /*
    if(last <= 0 && last >= 20){
        alert("lastname is empty");
    }
    
    if(password >= 9 && password <=20){
        alert("firstname or lastname is empty");
    }
    */

//})


   

    function checkName(){
        let pattern = /[A-Za-z^0-9]/g;
        check = pattern.test(firstname.value)

        if(check == true){
            fn = document.getElementById("fn-message")
            first = firstname.value.length;

            if(first < 1){
                fn.innerHTML = "firstname cannot be empty." 
            }
            if(first > 20){
                fn.innerHTML = "firstname is very long, it must not have more than 20 characters."
            }
            if(first < 1 && first <= 20){
                fn.innerHTML =  "firstname is nice, correct, good and better"
            }

            return true;
        }
        else{
            return false;
        }
    }

    function checkLastame(){

        let pattern = /[A-Za-z^0-9]/g;
        console.log("Last long: " + lastname.value.length );
        alert("Check lastname Test patron " + pattern.test(lastname.value))

        last = lastname.value.length;
        console.log("Longitud: " + last);

        switch(last){
            case last < 1 : alert("lastname cannot be empty."); 
                break;
            case last > 20: alert("lastname is very long, it must not have more than 20 characters."); 
                break
            default: console.log("lastname is nice, correct, good and better");            
        }
    }

    function checkAge(){
        realAge = age.value
        let pattern = /[0-9]/g;
        console.log("Age is: " + realAge);

        if(pattern.test(realAge)){
            if(0 < parseInt(age.value) && parseInt(age.value) < 170 )
            console.log("Is a right age: " + realAge);
            //console.log("Tipo original " +  typeof(age.value))
            //console.log("Tipo parseado " +  typeof(parseInt(age.value)))
            //console.log("Valor parseado " +  parseInt(age.value))
            return true
        }
        else{
            console.log("Not is a right age " + realAge);
            alert("Age should be a number, without letters." + realAge)
            return false
        }        
    }

    function checkEmail(){
        let pattern = /[A-Za-z]/g;
        let patternDominian = /[googlegmailoutlookicloud]/g;

        console.log("El email es: " + password.value);
        console.log("Longitud email: " + password.value.length);
        console.log("Comprobando email: " + pattern.test(email.value));
        console.log("Comprobando dominio email: " + patternDominian.test(email.value));
        
        emailLength = email.value.length 


        switch(emailLength){
            case emailLength < 5 : alert("Email is invalid, it is very short")
                break;
            case emailLength > 20 && pattern.test(email.value): alert("Email is valid, it is nice")
                break
            default: console.log("firstname is nice, correct, good and better");            
        }
    }

    function checkPassword(){
        let pattern = /[A-Za-z0-9]/g;
        console.log("Comprobando Password: " + pattern.test(password.value));
        console.log("Longitud password: " + password.value.length);

        passwordLength = password.value.length 

        switch(passwordLength){
            case passwordLength < 5 : alert("Password must have between 9 and 20 characters.")
                break;
            case passwordLength > 20 && pattern.test(password.value): alert("Password is very long, it must not have more than 20 characters.");
                break
            default: console.log("firstname is nice, correct, good and better");            
        }
    }

    function checkData(e){

        if(true){
            result = checkName()
            console.log("Result name: "  + result);

            checkLastame()
            checkAge()
            checkEmail()
            checkPassword()

            message.innerHTML = "All right"
            return true
        }
        else{
            message.innerHTML = "Faltan datos"
            return false;
        }
    }

    form.addEventListener("submit", (e)=>{

        alert("Voy a checkear los datos primero")

        check = checkData();

        if(check == false){
            e.preventDefault();
            console.log("No se enviaran los datos hasta que todos cumplan lo pedido");
        }

        e.preventDefault();
    })