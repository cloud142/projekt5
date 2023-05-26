// Array til at gemme formularfelter
   const formFields = ['name', 'email', 'password'];

   // Array til at gemme fejlbeskeder
   const errorMessages = {
     name: 'Brugernavn er "1".',
     email: 'Email er "1@gmail.com".',
     invalidEmail: 'ligegyldig Email.',
     password: 'Adganskode er "1".'
   };

   // Function to validate the form
   function validateForm(event) {
     event.preventDefault(); // Prevent form submission

     // Clear previous error messages
     clearErrorMessages();

     let isValid = true; // Flag to track form validity

     // Validate each form field
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

     // If form is valid, submit the form
     if (isValid) {
       document.getElementById('myForm').submit();
     }
   }

   // Function to check if email is valid using a simple regular expression
   function isValidEmail(email) {
     const emailRegex = /^\S+@\S+\.\S+$/;
     return emailRegex.test(email);
   }

   // Function to display error message for a specific field
   function displayErrorMessage(field, message) {
     document.getElementById(`${field}Error`).textContent = message;
   }

   // Function to clear all error messages
   function clearErrorMessages() {
     formFields.forEach(field => {
       document.getElementById(`${field}Error`).textContent = '';
     });
   }

   // Event listener for form submission
   document.getElementById('myForm').addEventListener('submit', validateForm);
