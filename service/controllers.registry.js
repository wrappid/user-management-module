const usermanagementController = require("./controllers/usermanagement.controller");
const { CoreMiddlewaresRegistry } = require("@wrappid/service-core");
const {rolePermissionGET,getUserSearchPaginated} = require("./validations/usermanagement.validation")
// const CoreMiddleware =
const controllersRegistry = {
  rolePermission: [
    CoreMiddlewaresRegistry.jwtVerify,
    CoreMiddlewaresRegistry.validation(rolePermissionGET),
    usermanagementController.rolePermission,
  ],
  getUserSearchPaginated: [usermanagementController.getUserSearchPaginated]
  //CoreMiddlewaresRegistry.validation(getUserSearchPaginated)
};

exports.controllersRegistry = controllersRegistry;
