var generatedOTP;

function updateOTPButton() {
  var phoneInput = document.getElementById('phone');
  var otpButton = document.getElementById('otpButton');

  if (phoneInput.value.length < 10) {
    otpButton.classList.remove('valid');
    otpButton.disabled = true;
  } else {
    otpButton.classList.add('valid');
    otpButton.disabled = false;
  }
}

function generateOTP() {
  generatedOTP = Math.floor(100000 + Math.random() * 900000);
  alert("OTP: " + generatedOTP);

  var otpInput = document.getElementById('otp');
  var submitOTPButton = document.getElementById('submitOTP');
  
  otpInput.disabled = false;
  submitOTPButton.disabled = false;
}

function verifyOTP() {
  var enteredOTP = document.getElementById('otp').value;

  if (enteredOTP === generatedOTP.toString()) {
    alert("OTP verification successful!");
    hideOTPSection();
    // Perform further actions upon successful OTP verification
  } else {
    alert("Invalid OTP. Please try again.");
  }
}

function hideOTPSection() {
  var otpButton = document.getElementById('otpButton');
  var otpInput = document.getElementById('otp');
  var submitOTPButton = document.getElementById('submitOTP');

  otpButton.style.display = 'none';
  otpInput.style.display = 'none';
  submitOTPButton.style.display = 'none'; 
}
