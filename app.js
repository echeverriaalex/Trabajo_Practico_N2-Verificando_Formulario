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
        let pattern = /[A-Za-z]/g;
        let check = pattern.test(firstName);

        //console.log("name ---> "+ firstName);
        //console.log('name length ---> ' + firstName.length);
        //console.log("el check name ---> " + check)
        //console.log('el tipo de check --> ' + typeof(check));

        if(check == true){
            if(firstName.length > 20){
                firstMessage.innerHTML = "It is very long, maximum 20 characters."
                console.log("It is very long, maximum 20 characters.");
            }
            if(firstName.length > 1 && firstName.length <= 20){
                firstMessage.innerHTML =  "acceptable."
                console.log("firstname is acceptable.");
                return true;
            }
        }
        else{
            firstMessage.innerHTML = "firstname cannot be empty."
            console.log("firstname cannot be empty.");
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
            if(lastName.length > 1 && lastName.length <= 20){
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



        if(check == true){
            ln = document.getElementById("ln-message")
            last = lastname.value.length;
            console.log("Last long: " + last);            

            if(last < 1)
                ln.innerHTML = "lastname cannot be empty." 
            
            if(last > 20)
                ln.innerHTML = "lastname is very long, it must not have more than 20 characters."
            
            if(last < 1 && last <= 20)
                ln.innerHTML =  "lastname is nice, correct, good and better"

            return true;
        }
        else{
            return false;
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

    function checkData(){

            //result = checkName()
            //console.log("Result name: "  + result);

            //(checkName())? alert('nombre valido') : alert('nombre no valido')

            if (checkName() && checkLastame() && checkAge()){

            }
            else{
                message.innerHTML = "complete and check your information"
            }
            

            /*
            
            checkAge()
            checkEmail()
            checkPassword()
            

            message.innerHTML = "All right"
            return true

            */
     
    }

    /*

    form.addEventListener("submit", (e)=>{

        //alert("Voy a checkear los datos primero")

        check = checkData();
        
        e.preventDefault();

        if(check == false){
            e.preventDefault();
            alert("mensaje")
            console.log("No se enviaran los datos hasta que todos cumplan lo pedido");
        }

       

        message.innerHTML = "aceptado"
    })

    */