// alert("mo n se ise ooooo");

let newUserform = document.forms.newUserform || null;

newUserform.addEventListener("submit", (e) => {
	// 
	e.preventDefault();


// 	let generatedPassword = generatePassword(8); // I fit change the number of characters by changing the value called with the function
	// alert(generatedPassword);
	
	let generatedPassword = "jkstores@2024";

	let params = {
		"firstname" : newUserform.firstname.value,
		"email" : newUserform.email.value,
		"password" : generatedPassword,
		"role" : newUserform.role.value
	};

	console.log(params);

	let url = "../../Engine/users/add-new-user.php";

	let request = insertQuery(url, params);

	request.then(response => {
		// 

		// console.log(response);

		if (response.status === "ok" && response.statusCode === 200) {
			// 

// 			alert(response.message);
            
            Swal.fire('Success!', response.message, 'success');

			newUserform.reset();
			setTimeout(() => {
			    window.location.reload();
            }, 5000);
		}else{
			// 

// 			alert(response.data)
			
			Swal.fire('Error!', response.message, 'error');
		}

	})
});



function deleteUser(user_id, deleteURL){
	// 

	let params = {
		"user_id" : user_id
	};

	let url = deleteURL;

	let req = insertQuery(url, params);

	req.then(response => {
		// 

		// console.log(response);

		if(response.status === "ok" && response.statusCode === 200){
// 			alert(response.message);

            Swal.fire('Success!', response.message, 'success');
            
            setTimeout(() => {
			    window.location.reload();
            }, 5000);
            
		}else{
			Swal.fire('Error!', response.message, 'error');
		}

	});
}
