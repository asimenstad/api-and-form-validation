const form = document.querySelector("#contact-form");
const fullName = document.querySelector("#name");
const nameError = document.querySelector("#error-name");
const subject = document.querySelector("#subject");
const subjectError = document.querySelector("#error-subject");
const email = document.querySelector("#email");
const emailError = document.querySelector("#error-email");
const address = document.querySelector("#address");
const addressError = document.querySelector("#error-address");
const validationMessage = document.querySelector(".form-validation-passed");

function validateForm(event) {
  event.preventDefault();

  if (checkLength(fullName.value, 1)) {
    nameError.style.display = "none";
  } else {
    nameError.style.display = "block";
  }

  if (checkLength(subject.value, 10)) {
    subjectError.style.display = "none";
  } else {
    subjectError.style.display = "block";
  }

  if (validateEmail(email.value)) {
    emailError.style.display = "none";
  } else {
    emailError.style.display = "block";
  }

  if (checkLength(address.value, 25)) {
    addressError.style.display = "none";
  } else {
    addressError.style.display = "block";
  }

  if (fullName.value && subject.value && email.value && address.value) {
    validationMessage.style.display = "block";
    form.reset();
  }
}

form.addEventListener("submit", validateForm);

function checkLength(value, length) {
  if (value.trim().length >= length) {
    return true;
  } else {
    return false;
  }
}

function validateEmail(email) {
  const regEx = /\S+@\S+\.\S+/;
  const patternMatch = regEx.test(email);
  return patternMatch;
}
