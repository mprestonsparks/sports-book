const Validator = require("validator");
const isEmpty = require("is-empty");

module.exports = function validateLoginInput(data) {
  let errors = {};

// Convert empty fields to an empty string so we can use validator functions
  data.email = !isEmpty(data.email) ? data.email : "";
  data.password = !isEmpty(data.password) ? data.password : "";

// Email checks
  if (Validator.isEmpty(data.email)) {
    errors.email = "Please enter your email address.";
  } else if (!Validator.isEmail(data.email)) {
    errors.email = "The email address you entered is not valid.";
  }

// Password checks
  if (Validator.isEmpty(data.password)) {
    errors.password = "Please enter your password.";
  }

return {
    errors,
    isValid: isEmpty(errors)
  };
};