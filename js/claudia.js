  const formFields = ['name', 'email', 'password'];

   const errorMessages = {
     name: 'Brugernavn er "1".',
     email: 'Email er "1@gmail.com".',
     invalidEmail: 'ligegyldig Email.',
     password: 'Adganskode er "1".'
   };


   function validateForm(event) {
     event.preventDefault();


     clearErrorMessages();

     let isValid = true;


     formFields.forEach(field => {
       const value = document.getElementById(field).value;

       if (value === '') {
         displayErrorMessage(field, errorMessages[field]);
         isValid = false;
       } else if (field === 'email' && !isValidEmail(value)) {
         displayErrorMessage(field, errorMessages.invalidEmail);
         isValid = false;
       }
     });


     if (isValid) {
       document.getElementById('myForm').submit();
     }
   }


   function isValidEmail(email) {
     const emailRegex = /^\S+@\S+\.\S+$/;
     return emailRegex.test(email);
   }


   function displayErrorMessage(field, message) {
     document.getElementById(`${field}Error`).textContent = message;
   }

   function clearErrorMessages() {
     formFields.forEach(field => {
       document.getElementById(`${field}Error`).textContent = '';
     });
   }

   document.getElementById('myForm').addEventListener('submit', validateForm);
