// 

let changePasswordForm = document.querySelector("#changePasswordForm");

changePasswordForm.addEventListener("submit", (e) => {
    e.preventDefault();
    
    let params = {
        "user_id" : changePasswordForm.user_id.value,
        "email" : changePasswordForm.email.value,
        "old_password" : changePasswordForm.old_password.value,
        "new_password" : changePasswordForm.new_password.value,
        "fname" : changePasswordForm.fname.value,
        "role" : changePasswordForm.role.value,
    };
    
    
    let url = "../../../Engine/users/change-password.php";
    
    let request = insertQuery(url, params);
    
    request.then(response => {
        // console.log(response);
        
        if(response.status === "ok" && response.statusCode === 200){
            
            // alert(response.message);
            
            Swal.fire('Success!', response.message, 'success');
            
            // changePasswordForm.reset();
            setTimeout(() => {
                window.location.reload();
            }, 3000);
            
            
        }else{
            // 
            
            // alert(response.message + " because it was " + response.data);
            
            Swal.fire('Error!', response.message, 'error');
        }
        
    }).catch(error => console.log("Operation failed with error " + error));
})

// 


let updateProfileForm = document.querySelector("#updateProfileForm");

updateProfileForm.addEventListener("submit", (e) => {
    e.preventDefault();
    
    let params = {
        "user_id" : updateProfileForm.user_id.value,
        "fname" : updateProfileForm.firstname.value,
        "lname" : updateProfileForm.lastname.value,
        "phone" : updateProfileForm.phone.value,
        "address" : updateProfileForm.address.value,
        "city" : updateProfileForm.city.value,
        "state" : updateProfileForm.state.value,
        "country" : updateProfileForm.country.value,
        "dob" : updateProfileForm.dob.value,
        "gender" : updateProfileForm.gender.value,
        "bio" : updateProfileForm.bio.value,
    };
    
    let url = "../../../Engine/users/update-profile.php";
    
    let request = insertQuery(url, params);
    
    request.then(response => {
        // console.log(response);
        
        if(response.status === "ok" && response.statusCode === 200){
            
            // alert(response.message);
            
            Swal.fire('Success!', response.message, 'success');
            
            // updateProfileForm.reset();
            setTimeout(() => {
                window.location.reload();
            }, 3000);
            
        }else{
            // 
            
            // alert(response.message + " because it was " + response.data);
            
            Swal.fire('Error!', response.message, 'error');
        }
        
    }).catch(error => console.log("Operation failed with error " + error));
    
    
});