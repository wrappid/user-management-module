import { Coupons } from "./models/Coupons.model";
import { LoginLogs } from "./models/LoginLogs.model";
import { Permissions } from "./models/Permissions.model";
import { RolePermissions } from "./models/RolePermissions.model";
import { Roles } from "./models/Roles.model";
import { UserCoupons } from "./models/UserCoupons.model";
import { UserPermissions } from "./models/UserPermissions.model";
import { Users } from "./models/Users.model";
import { UserSettings } from "./models/UserSettings.model";
import { UserTokens } from "./models/UserTokens.model";
import { PersonContacts } from "./models/PersonContacts.model";
import { PersonRelations } from "./models/PersonRelations.model";
import { Persons } from "./models/Persons.model";
import { Relations } from "./models/Relations.model";
const ModelsRegistry = {
  Coupons: {
    database: "application",
    model: Coupons,
  },
  LoginLogs: {
    database: "application",
    model: LoginLogs,
  },
  Permissions: {
    database: "application",
    model: Permissions,
  },
  RolePermissions: {
    database: "application",
    model: RolePermissions,
  },
  Roles: {
    database: "application",
    model: Roles,
  },
  UserCoupons: {
    database: "application",
    model: UserCoupons,
  },
  UserPermissions: {
    database: "application",
    model: UserPermissions,
  },
  Users: {
    database: "application",
    model: Users,
  },
  UserSettings: {
    database: "application",
    model: UserSettings,
  },
  UserTokens: {
    database: "application",
    model: UserTokens,
  },
  PersonContacts: {
    database: "application",
    model: PersonContacts,
  },
  PersonRelations: {
    database: "application",
    model: PersonRelations,
  },
  Persons: {
    database: "application",
    model: Persons,
  },
  Relations: {
    database: "application",
    model: Relations,
  },
};

export default ModelsRegistry;
