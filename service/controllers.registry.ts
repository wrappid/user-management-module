import { CoreMiddlewaresRegistry } from "@wrappid/service-core";
import * as usermanagementController from "./controllers/usermanagement.controller";
import { rolePermissionGET } from "./validations/usermanagement.validation";
// const CoreMiddleware =
const ControllersRegistry = {
  rolePermission: [
    CoreMiddlewaresRegistry.jwtVerify,
    CoreMiddlewaresRegistry.validation(rolePermissionGET),
    usermanagementController.rolePermission,
  ],
  getUserSearchPaginated: [usermanagementController.getUserSearchPaginated],
  //CoreMiddlewaresRegistry.validation(getUserSearchPaginated)
};

export default ControllersRegistry;
