import Permissions from "./components/Permissions";
import RolePermission from "./components/RolePermission";
import RolePermissionForm from "./components/RolePermissionForm";
import Roles from "./components/Roles";
import UserManager from "./components/UserManager";
import UserPermission from "./components/UserPermission";
import UserPermissionForm from "./components/UserPermissionForm";

export const ComponentsRegistry = {
  Permissions       : { comp: Permissions },
  RolePermission    : { comp: RolePermission },
  RolePermissionForm: { comp: RolePermissionForm },
  Roles             : { comp: Roles },
  UserManager       : { comp: UserManager },
  UserPermission    : { comp: UserPermission },
  UserPermissionForm: { comp: UserPermissionForm }
};
