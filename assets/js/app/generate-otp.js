const genOTPForm = document.forms.genOTPForm;

genOTPForm.addEventListener("submit", (e) => {
  e.preventDefault();
  
  //alert('form submitted');
  
  genOtp('../../Engine/otp/generate_otp.php');
  
  
});