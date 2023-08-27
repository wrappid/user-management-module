const testValidations = require("./validations/test.validation");
const usermanagementValidation = require("./validations/usermanagement.validation")
const validationsRegistry = {
    ...testValidations,
    ...usermanagementValidation
};

exports.validationsRegistry = validationsRegistry;