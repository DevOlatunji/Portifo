// 

// personal details 
let applicationForm = document.forms.applicationForm;

applicationForm.addEventListener("submit", (e) => {
	//
	e.preventDefault();

	// collect form data
	let first_name = applicationForm.first_name;
	let middle_name = applicationForm.middle_name;
	let last_name = applicationForm.last_name;
	let email = applicationForm.email;
	let phone_number = applicationForm.phone_number;
	let gender = applicationForm.gender;
	let address = applicationForm.address;
	let date_of_birth = applicationForm.date_of_birth;
	let country = applicationForm.country;
	// parent/gaurdian 
	let parent_first_name = applicationForm.parent_first_name;
	let parent_last_name = applicationForm.parent_last_name;
	let parent_middle_name = applicationForm.parent_middle_name;
	let parent_email = applicationForm.parent_email;
	let parent_phone = applicationForm.parent_phone;
	let parent_relationship = applicationForm.parent_relationship;
	let parent_gender = applicationForm.parent_gender;
	let parent_address = applicationForm.parent_address;
	let parent_date_of_birth = applicationForm.parent_date_of_birth;
	let parent_nationality = applicationForm.parent_nationality;
	// program
	let preferred_program = applicationForm.preferred_program;
	let previous_education = applicationForm.previous_education;
	let previous_school = applicationForm.previous_school;
	let application_status = applicationForm.application_status;
	let uploaded_documents = applicationForm.uploaded_documents.files;

	if (!first_name || !middle_name || !last_name || !email) {
		Swal.fire("Error", "Please ensure the required input fields are correctly filled"); 
		return;
	}

	// personal details 
	let formData = new FormData(applicationForm);

	try{

		fetch("Engine/admission/application-form.php", {
			method: 'POST',
			body: formData
		}).then(
			response => response.json()
		).then(
			data => {
			console.log(data);

				if (data.status === "ok") {
		      applicationForm.innerHTML = `
		        <div>
		          <h5>Form Submitted Successfully!</h5>
		          <p>Thanks for submitting your details. We have received your application and will get across to you shortly</p>
		        </div>
		      `;
		    } else {
		      const errorAlert = document.createElement("div");
		      errorAlert.className = "alert alert-warning p-3 pt-3";
		      errorAlert.textContent = data.message;
		      applicationForm.appendChild(errorAlert);
		    }
		});
	} catch (error) {
    console.error("Error submitting form:", error);
    const errorAlert = document.createElement("div");
    errorAlert.className = "alert alert-danger p-3 pt-3";
    errorAlert.textContent = "An unexpected error occurred. Please try again later.";
    applicationForm.appendChild(errorAlert);
  }

});

