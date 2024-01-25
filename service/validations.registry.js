const usermanagementValidation = require("./validations/usermanagement.validation");

const validationsRegistry = {
  ...usermanagementValidation
};

exports.validationsRegistry = validationsRegistry;