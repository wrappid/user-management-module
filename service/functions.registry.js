const usermanagementFunctions = require("./functions/usermanagement.functions");

const functionsRegistry = {
  getRolePermissions: usermanagementFunctions.getRolePermissions,
};

exports.functionsRegistry = functionsRegistry;
