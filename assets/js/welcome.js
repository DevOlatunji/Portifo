if(getCookie(appinstalled)){

	// check if user is logged in and redirect to dashboard UI
	if(getCookie(userLoggedIn)){
		windows.href = "dashboard";
	}else{
		displayLoginUI();
	}
}


