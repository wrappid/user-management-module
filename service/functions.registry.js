const testFunctions = require("./functions/test.functions");
const usermanagementFunctions = require("./functions/usermanagement.functions");

const functionsRegistry = {
  getRolePermissions: usermanagementFunctions.getRolePermissions,
};

exports.functionsRegistry = functionsRegistry;
