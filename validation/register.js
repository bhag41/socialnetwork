const validator = require("validator");
const isEmpty = require("./is-empty");

module.exports = function validateResgisterInput(data) {
  let errors = {};
  data.name = !isEmpty(data.name) ? data.name : "";
  if (!validator.isLength(data.name, { min: 2, max: 30 })) {
    errors.name = "Name must be between 2 and 30 characters";
  }
  if (validator.isEmpty(data.name)) {
    errors.name = "Name field is required";
  }

  return {
    errors,
    isValid: isEmpty(errors)
  };
};
