//

let confactForm = document.forms.contactForm;
let contactEmail = contactForm.email; 
let contactName = contactForm.name;
let contactPhone = contactForm.phone;
let contactSubject = contactForm.subject;
let contactMessage = contactForm.message;

contactForm.addEventListener("submit", (e) => {
  e.preventDefault();

  // alert("I am working")
  
  //
  
  if(contactEmail.value === ""){
    // Swal.fire("Error", "Email Address Cannot Be Empty", "error");
    return;
  }
  
  if(contactName.value === ""){
    // Swal.fire("Error", "Please, insert your name", "error");
    return;
  }
  
  if(contactSubject.value === ""){
    // Swal.fire("Error", "Please, input subject", "error");
    return;
  }
  
  if(contactMessage.value === ""){
    // Swal.fire("Error", "Please, message cannot be empty", "error");
    return;
  }
  
  try{
    let request = insertQuery("Engine/contact/contact.php", {
      "email" : contactEmail.value,
      "name" : contactName.value,
      "phone" : contactPhone.value,
      "subject" : contactSubject.value,
      "message" : contactMessage.value
    });
    
    request.then(response => {
      if(response.status === "ok" && response.statusCode === 200){
        //Swal.fire("Success", "Your message has been delivered successfully. A response will be sent to the email used at the course of submitting this form", "success");
        
        contactForm.reset();
        
        contactForm.innerHTML = `
                                <div class="alert alert-success text-center">
                                    <h1>Form Submitted Successfully!</h1>
                                    <p>Thanks for reaching out. We have received your message and will get across to you shortly</p>
                                </div>
                                `;
        
      }else{
        //Swal.fire("Error", response.message, "error");
        
        contactForm.appendChild(`<span class="alert alert-warning">Sorry. We couldn't submit your form at the moment. Please try again.</span>`)
      }
    });
  
  }catch(e ){
    console.log("there was an error: " + e);
  }
  
});

