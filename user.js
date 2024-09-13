// Forms: Exercise
// ▪ Add a user button at the top right corner in the Header.
// ▪ Redirecting the user to a user.html sub page.
// ▪ Create a form, to be used for creating users on the page.
// ▪ What would be usefull when creating users?
// ▪ At least name, so we can get rid of the annoying popup each time we open the site.
// ▪ What would we need to validate? ▪ Lets create some JavaScript validation, and add
//  custom error messages.

// let users = [];

// My dear input fields
const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");

// I choose to go with including the error messages in <p> in the html and toggle a class hidden to display them
// I could also create and append them with js but, you know...
const usernameError = document.getElementById("usernameError");
const emailError = document.getElementById("emailError");
const passwordError = document.getElementById("passwordError");

// The idea here is to compare the input values with regex patterns for validation

// regex patterns from chatGPT
const usernamePattern = /^[a-zA-Z0-9]{5,}$/; // Alphanumeric, at least 5 characters
const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Basic email pattern
const passwordPattern = /^[a-zA-Z0-9]{5,}$/; // Alphanumeric, at least 5 characters

// validate on blur, compare the input values with the regex patterns with .test() and toggle the hidden class
username.addEventListener("blur", function () {
  if (!usernamePattern.test(username.value)) {
    usernameError.classList.remove("hidden");
    username.classList.add("invalid");
  } else {
    usernameError.classList.add("hidden");
    username.classList.remove("invalid");
  }
});

email.addEventListener("blur", function () {
  if (!emailPattern.test(email.value)) {
    emailError.classList.remove("hidden");
    email.classList.add("invalid");
  } else {
    emailError.classList.add("hidden");
    email.classList.remove("invalid");
  }
});

password.addEventListener("blur", function () {
  if (!passwordPattern.test(password.value)) {
    passwordError.classList.remove("hidden");
    password.classList.add("invalid");
  } else {
    passwordError.classList.add("hidden");
    password.classList.remove("invalid");
  }
});

// But also validate on the submit button
document.getElementById("submit").addEventListener("click", function (e) {
  e.preventDefault(); // Hello old friend
  const isValid =
    usernamePattern.test(username.value) &&
    emailPattern.test(email.value) &&
    passwordPattern.test(password.value);

  if (isValid) {
    console.log("User created");
  } else {
    console.log("Errors in form");
  }
});
