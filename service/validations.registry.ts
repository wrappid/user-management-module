import {rolePermissionGET, getUserSearchPaginated} from "./validations/usermanagement.validation";

const ValidationsRegistry = {
  rolePermissionGET: rolePermissionGET,
  getUserSearchPaginated: getUserSearchPaginated,
};

export default ValidationsRegistry;
