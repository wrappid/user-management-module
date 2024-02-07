import * as usermanagementValidation from "./validations/usermanagement.validation";

const ValidationsRegistry = {
  rolePermissionGET: usermanagementValidation.rolePermissionGET,
  getUserSearchPaginated: usermanagementValidation.getUserSearchPaginated,
};

export default ValidationsRegistry;
