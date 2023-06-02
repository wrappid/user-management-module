import RolePermission from "./components/RolePermission";
import RolePermissionForm from "./components/RolePermissionForm";
import UserPermission from "./components/UserPermission";
import UserPermissionForm from "./components/UserPermissionForm";
import RxUser from "./components/RxUser";
import Permissions from "./components/Permissions";
import Roles from "./components/Roles";

export const ComponentRegistry = {
  RolePermission: { comp: RolePermission },
  RolePermissionForm: { comp: RolePermissionForm },
  UserPermission: { comp: UserPermission },
  UserPermissionForm: { comp: UserPermissionForm },
  RxUser: { comp: RxUser },
  Permissions: { comp:Permissions },
  Roles: { comp:Roles }
};
