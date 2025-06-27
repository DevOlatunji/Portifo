function requestOTP(url) {
            const email = document.getElementById('email').value;
            fetch(url, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ email })
            })
            .then(response => response.json())
            .then(data => {
                
                if (data.success) {
                    document.getElementById('genOTPForm').classList.add('d-none');
                    document.getElementById('responseMessage').innerText = data.message;
                }
                   // document.getElementById('otpVerifyForm').classList.remove('d-none');
                   window.location.href = 'https://deiluxschools.com/app/auth/verify-otp.php';
                }else{
                   document.getElementById('responseMessage').innerText = data.message;
                }
            });
        }

function verifyOTP(url) {
            const otpInputs = document.querySelectorAll('.otp-input');
            let otp = '';
            otpInputs.forEach(input => otp += input.value);

            fetch(url, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ otp })
            })
            .then(response => response.json())
            .then(data => {
                document.getElementById('responseMessage').innerText = data.message;
                if (!data.success) {
                    // Clear all OTP input fields and refocus on the first one
                    otpInputs.forEach(input => input.value = '');
                    otpInputs[0].focus();
                }else{
                    window.location.href='https://deiluxschools.com/app/auth/change-password.php';
                }
            });
        }