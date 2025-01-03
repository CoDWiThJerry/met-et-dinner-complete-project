const menuToggle = document.getElementById('menuToggle');
const closeButton = document.getElementById('menu-Toggle'); // Close button inside nav-links
const navLinks = document.getElementById('navLinks');

// Show nav-links when menu button is clicked
menuToggle.addEventListener('click', () => {
    navLinks.classList.add('active'); // Add the "active" class to display nav-links
});

// Hide nav-links when close button is clicked
closeButton.addEventListener('click', () => {
    navLinks.classList.remove('active'); // Remove the "active" class to hide nav-links
});



const popup = document.getElementById("popup");
const openPopupBtns = document.querySelectorAll("#btn");
const closePopupBtn = document.getElementById("close-popup-btn");

openPopupBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    popup.classList.remove("hidden");
  });
});

closePopupBtn.addEventListener("click", () => {
  popup.classList.add("hidden");
  resetForm(); // Reset form data when popup is closed aabhi
});

window.addEventListener("click", (e) => {

  if (e.target === popup) {
    popup.classList.add("hidden");
    resetForm(); // Reset form data when popup is closed aabhi
  }
});

const emailInput = document.getElementById("email");
const contactInput = document.getElementById("contact-number");
const passwordInput = document.getElementById("password");
const confirmPasswordInput = document.getElementById("confirm-password");
const emailStatus = document.getElementById("email-status");
const contactStatus = document.getElementById("contact-status");
const emailError = document.getElementById("email-error");
const contactError = document.getElementById("contact-error");
const passwordError = document.getElementById("password-error");
const formError = document.getElementById("form-error");

// Email validation
emailInput.addEventListener("input", () => {
  const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{3,3}$/;
  if (emailPattern.test(emailInput.value)) {
    emailStatus.innerHTML = `<img src="fi_3641252.svg" alt="Valid" width="5" height="5">`; // Replace with your check icon
    emailStatus.style.color = "green";
    emailInput.classList.remove("invalid");
    emailError.style.display = "none";
    emailInput.style.color = "white";
  } else {
    emailStatus.innerHTML = "";
    emailStatus.style.color = "red";
    emailInput.classList.add("invalid");
    emailError.style.display = "block";
    emailInput.style.color = "red";
  }
});

// Contact number validation
contactInput.addEventListener("input", () => {
  const contactPattern = /^\+?[1-9]\d{9,14}$/; // Accepts international numbers
  if (contactPattern.test(contactInput.value)) {
    contactStatus.innerHTML = `<img src="fi_3641252.svg" alt="Valid" width="5" height="5">`; // Replace with your check icon
    contactStatus.style.color = "green";
    contactInput.classList.remove("invalid");
    contactError.style.display = "none";
    contactInput.style.color = "white";
  } else {
    contactStatus.innerHTML = "";
    contactStatus.style.color = "red";
    contactInput.classList.add("invalid");
    contactError.style.display = "block";
    contactInput.style.color = "red";
  }
});

// Password validation
confirmPasswordInput.addEventListener("input", () => {
  if (confirmPasswordInput.value === passwordInput.value) {
    passwordError.style.display = "none";
    confirmPasswordInput.classList.remove("invalid");
    confirmPasswordInput.style.color = "white";
    passwordInput.style.color = "white";
  } else {
    passwordError.style.display = "block";
    confirmPasswordInput.classList.add("invalid");
    confirmPasswordInput.style.color = "red";
    passwordInput.style.color = "red";
  }
});

// Toggle password visibility and icon
function togglePassword(id, button) {
  const input = document.getElementById(id);
  if (input.type === "password") {
    input.type = "text";
    button.innerHTML = `<img src="Frame 2 (1).svg" alt="Show Password" width="20" height="20">`;  // Replace with 'eye-slash.svg' // Eye closed icon
  } else {
    input.type = "password";
    button.innerHTML = `<img src="Frame 2.svg" alt="Show Password" width="20" height="20">`; 
  }
}


// Reset form fields
function resetForm() {
  const form = document.getElementById("signup-form");
  if (form) {
    form.reset();
  }
  emailStatus.innerHTML = "";
  contactStatus.innerHTML = "";
  emailError.style.display = "none";
  contactError.style.display = "none";
  passwordError.style.display = "none";
  formError.style.display = "none";
}





function showCustomAlert(message) {
  // Create overlay for the alert
  const alertOverlay = document.createElement("div");
  alertOverlay.style.position = "fixed";
  alertOverlay.style.top = "0";
  alertOverlay.style.left = "0";
  alertOverlay.style.width = "100%";
  alertOverlay.style.height = "100%";
  alertOverlay.style.backgroundColor = "rgba(0, 0, 0, 0.7)";
  alertOverlay.style.display = "flex";
  alertOverlay.style.alignItems = "center";
  alertOverlay.style.justifyContent = "center";
  alertOverlay.style.zIndex = "1000";

  // Create alert box
  const alertBox = document.createElement("div");
  alertBox.style.backgroundColor = "#121212";
  alertBox.style.padding = "20px";
  alertBox.style.borderRadius = "30px";
  alertBox.style.textAlign = "center";
  alertBox.style.width = "430px";
  alertBox.style.boxShadow = "0px 4px 10px rgba(0, 0, 0, 0.2)";

  // Add heading
  const alertHeading = document.createElement("h1");
  alertHeading.textContent = "Registration Successful!";
  alertHeading.style.color = "#F5F5F5";
  alertHeading.style.fontSize = "24px";
  alertHeading.style.margin = "0 0 20px";
  alertHeading.style.fontFamily = "Merriweather";
  alertHeading.style.fontWeight = "700";
  alertBox.appendChild(alertHeading);

  const alertImage = document.createElement("img");
  alertImage.src = "fi_5253968.svg"; // Replace with your image URL or path
  alertImage.style.width = "80px";
  alertImage.style.height = "80px";
  alertImage.style.marginBottom = "20px";
  alertBox.appendChild(alertImage);

  // Add image and text in a single line
  const iconTextContainer = document.createElement("div");
  iconTextContainer.style.display = "flex";
  iconTextContainer.style.alignItems = "center";
  iconTextContainer.style.justifyContent = "center";
  iconTextContainer.style.marginBottom = "20px";

  const alertIcon = document.createElement("img");
  alertIcon.src = "fi_3146600.svg"; // Replace with your icon path
  alertIcon.style.width = "25px";
  alertIcon.style.height = "25px";
  alertIcon.style.marginLeft = "10px";

  const alertText = document.createElement("p");
  alertText.textContent = "You're all set!";
  alertText.style.color = "#F5F5F5";
  alertText.style.fontSize = "18px";
  alertText.style.margin = "0"; 
  alertText.style.fontFamily = " Lato";
  alertText.style.fontWeight = "300";

  iconTextContainer.appendChild(alertText);
  iconTextContainer.appendChild(alertIcon);
  alertBox.appendChild(iconTextContainer);

  // Add message text
  const alertMessage = document.createElement("p");
  alertMessage.innerHTML =
    "Login to the app to unlock personalized features, connect with others, and explore all we have to offer. Download now for the full experience!";
  alertMessage.style.fontFamily = " Lato";
  alertMessage.style.color = "#F5F5F5";
  alertMessage.style.fontSize = "18px";
  alertMessage.style.margin = "0 0 20px";
  alertText.style.fontWeight = "300";
  alertBox.appendChild(alertMessage);

  // Add close button
  const closeButton = document.createElement("button");
  closeButton.textContent = "Okay";
  closeButton.style.padding = "10px 20px";
  closeButton.style.backgroundColor = "#9D1313";
  closeButton.style.color = "#fff";
  closeButton.style.border = "none";
  closeButton.style.borderRadius = "5px";
  closeButton.style.cursor = "pointer";
  closeButton.style.fontFamily = "Poppins";
  closeButton.style.fontSize = "18px";
  closeButton.style.width = "100%";
  closeButton.style.fontWeight = "600";

  closeButton.addEventListener("click", () => {
    document.body.removeChild(alertOverlay);
    resetForm(); // Clear the form when the alert is closed abhi
  });

  alertBox.appendChild(closeButton);
  alertOverlay.appendChild(alertBox);
  document.body.appendChild(alertOverlay);
}







// Form submission  

document.getElementById("signup-form").addEventListener("submit", function (e) {
  e.preventDefault();
  const name = document.getElementById("name").value;


  if (
    !name ||
    emailInput.classList.contains("invalid") ||
    contactInput.classList.contains("invalid") ||
    confirmPasswordInput.classList.contains("invalid") ||
    !passwordInput.value
  ) {
    formError.textContent = "Please fill all fields correctly.";
    formError.style.display = "block";
  } else {
    formError.style.display = "none";
    showCustomAlert();
    popup.classList.add("hidden");
  }
});




