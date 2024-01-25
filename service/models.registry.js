const Coupons = require("./models/Coupons.model");
const LoginLogs = require("./models/LoginLogs.model");
const Permissions = require("./models/Permissions.model");
const RolePermissions = require("./models/RolePermissions.model");
const Roles = require("./models/Roles.model");
const UserCoupons = require("./models/UserCoupons.model");
const UserPermissions = require("./models/UserPermissions.model");
const Users = require("./models/Users.model");
const UserSettings = require("./models/UserSettings.model");
const UserTokens = require("./models/UserTokens.model");

const modelsRegistry = {
  "Coupons":{
    database: "application",
    model: Coupons
  },
  "LoginLogs":{
    database: "application",
    model: LoginLogs
  },
  "Permissions":{
    database: "application",
    model: Permissions
  },
  "RolePermissions":{
    database: "application",
    model: RolePermissions
  },
  "Roles":{
    database: "application",
    model: Roles
  },
  "UserCoupons":{
    database: "application",
    model: UserCoupons
  },
  "UserPermissions":{
    database: "application",
    model: UserPermissions
  },
  "Users":{
    database: "application",
    model: Users
  },
  "UserSettings":{
    database: "application",
    model: UserSettings
  },
  "UserTokens":{
    database: "application",
    model: UserTokens
  },
};

exports.modelsRegistry = modelsRegistry;
