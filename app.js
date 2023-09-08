const form = document.getElementById("form");

const firstname = document.getElementById("firstname");
const lastname = document.getElementById("lastname");
const age = document.getElementById("age");
const email = document.getElementById("email");
const password = document.getElementById("password");

const message = document.getElementById("message")

    function checkName(){
        firstMessage = document.getElementById('fn-message');
        let firstName = firstname.value;
        let pattern = /[\D]/g;
        let check = pattern.test(firstName);

        //console.log("name ---> "+ firstName);
        //console.log('name length ---> ' + firstName.length);
        //console.log("el check name ---> " + check)
        //console.log('el tipo de check --> ' + typeof(check));

        if(check == true && firstName.length > 0){
            if(firstName.length > 20){
                firstMessage.innerHTML = "It is very long, maximum 20 characters."
                console.log("It is very long, maximum 20 characters.");
            }
            if(firstName.length > 0 && firstName.length <= 20){
                firstMessage.innerHTML =  "acceptable."
                console.log("firstname is acceptable.");
                return true;
            }
        }
        else if(!check){
            if(firstName.length < 1){
                firstMessage.innerHTML = "firstname cannot be empty."
                console.log("firstname cannot be empty.");
            }
            else{
                firstMessage.innerHTML = "firstname must be only letters."
                console.log("firstname must be only letters.");
            }
            return false;
        }
    }

    
    function checkLastame(){
        let lastNameMessage = document.getElementById("ln-message")
        let lastName = lastname.value;
        let pattern = /[A-Za-z]/g;
        let check = pattern.test(lastName)

        console.log("apellido ---> "+ lastName);
        console.log("Last long: " + lastName.length);     
        console.log("el check lastname ---> "+ check);

        

        if(check == true){
            if(lastName.length > 20){
                lastNameMessage.innerHTML = "It is very long, maximum 20 characters."
                console.log("It is very long, maximum 20 characters.");
            }
            if(lastName.length > 0 && lastName.length <= 20){
                lastNameMessage.innerHTML = "acceptable."
                console.log("lastname is acceptable.");
                return true;
            }
        }
        else{
            lastNameMessage.innerHTML = "lastname cannot be empty."
            console.log("lastname cannot be empty.");
            return false;
        }
    }

    function checkAge(){
        realAge = age.value
        let pattern = /[0-9]/g;
        console.log("Age is: " + realAge);

        ageMessage = document.getElementById('age-message')

        if(pattern.test(realAge)){
            if(parseInt(realAge) > 0 && parseInt(realAge) < 170 ){
                console.log("Is a right age: " + realAge);
                ageMessage.innerHTML = 'acceptable'
                //console.log("Tipo original " +  typeof(age.value))
                //console.log("Tipo parseado " +  typeof(parseInt(age.value)))
                //console.log("Valor parseado " +  parseInt(age.value))
                return true
            }
            else{
                console.log("Not is a right age " + realAge);
                ageMessage.innerHTML = 'Age should be real and a number, without letters.'
                return false
            }
        }
        else{
            console.log("Not is a right age " + realAge);
            ageMessage.innerHTML = 'Age should be a number, without letters.'
            return false
        }        
    }

    function checkEmail(){
        let pattern = /[A-Za-z]/g;
        let patternDominian = /[@google@gmail@outlook@icloud]/g;
        let mail = email.value;
        let checkMail = pattern.test(mail);
        let checkDominian = patternDominian.test(mail);
        let emailMessage = document.getElementById('e-message');
        
        //console.log("El email es: " + mail);
        //console.log("Longitud email: " + mail.length);
        //console.log("Comprobando email: " + pattern.test(mail));
        //console.log("Comprobando dominio email: " + patternDominian.test(mail));

        if(checkMail && checkDominian && mail.length > 5){
            console.log("acceptable.");
            emailMessage.innerHTML = "acceptable.";
            return true;
        }
        else{
            console.log("Email cannot be empty or ckeck dominian.");
            emailMessage.innerHTML = "Email cannot be empty or ckeck dominian."
            return false;
        }
    }

    function checkPassword(){
        let pass= password.value
        let pattern = /[A-Za-z0-9]/g;
        let passMessage = document.getElementById('pass-message');
        //console.log("Comprobando Password: " + pattern.test(password.value));
        //console.log("Longitud password: " + password.value.length);

        if(pattern.test(pass)){           
            if(pass.length < 9 || pass.length > 20){
                console.log("Password must have between 9 and 20 characters.");
                passMessage.innerHTML = "Password must have between 9 and 20 characters.";
            }
            if(pass.length >= 9 && pass.length <= 20){
                passMessage.innerHTML = "acceptable.";
                return true;
            }
        }
        else{
            console.log("Password cannot be empty.");
            passMessage.innerHTML = "Password cannot be empty."
            return false;
        }
    }

    function checkData(){
        
        let checkname = checkName();
        let checklastame = checkLastame();
        let checkage = checkAge();
        let checkemail = checkEmail();
        let checkpassword = checkPassword();




        if (checkname && checklastame && checkage && checkemail && checkpassword){
            message.innerHTML = "form completed succefull"
        }
        else{
            message.innerHTML = "complete and check your information"
        }
    }