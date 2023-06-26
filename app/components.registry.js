import Permissions from "./components/Permissions";
import RolePermission from "./components/RolePermission";
import RolePermissionForm from "./components/RolePermissionForm";
import Roles from "./components/Roles";
import RxUser from "./components/RxUser";
import UserPermission from "./components/UserPermission";
import UserPermissionForm from "./components/UserPermissionForm";

export const ComponentRegistry = {
  Permissions       : { comp: Permissions },
  RolePermission    : { comp: RolePermission },
  RolePermissionForm: { comp: RolePermissionForm },
  Roles             : { comp: Roles },
  RxUser            : { comp: RxUser },
  UserPermission    : { comp: UserPermission },
  UserPermissionForm: { comp: UserPermissionForm }
};
