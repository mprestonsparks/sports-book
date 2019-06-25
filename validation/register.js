const Validator = require("validator");
const isEmpty = require("is-empty");

module.exports = function validateRegisterInput(data) {
  let errors = {};

// Convert empty fields to an empty string so we can use validator functions
  data.name = !isEmpty(data.name) ? data.name : "";
  data.email = !isEmpty(data.email) ? data.email : "";
  data.password = !isEmpty(data.password) ? data.password : "";
  data.password2 = !isEmpty(data.password2) ? data.password2 : "";

// Name checks
  if (Validator.isEmpty(data.name)) {
    errors.name = "Please enter your name.";
  }

// Email checks
  if (Validator.isEmpty(data.email)) {
    errors.email = "Please enter your email address.";
  } else if (!Validator.isEmail(data.email)) {
    errors.email = "The email address you entered is not valid.";
  }

// Password checks
  if (Validator.isEmpty(data.password)) {
    errors.password = "Please enter a password.";
  }

if (Validator.isEmpty(data.password2)) {
    errors.password2 = "Please confirm your password.";
  }

if (!Validator.isLength(data.password, { min: 8, max: 30 })) {
    errors.password = "Your password must be at least 8 characters.";
  }

if (!Validator.equals(data.password, data.password2)) {
    errors.password2 = "The passwords you entered do not match.";
  }

return {
    errors,
    isValid: isEmpty(errors)
  };
};