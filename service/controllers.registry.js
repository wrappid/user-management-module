const usermanagementController = require("./controllers/usermanagement.controller");
const { CoreMiddlewaresRegistry } = require("@wrappid/service-core");
const {rolePermissionGET} = require("./validations/usermanagement.validation")
// const CoreMiddleware =
const controllersRegistry = {
  rolePermission: [
    CoreMiddlewaresRegistry.jwtVerify,
    CoreMiddlewaresRegistry.validation(rolePermissionGET),
    usermanagementController.rolePermission,
  ],
};

exports.controllersRegistry = controllersRegistry;
