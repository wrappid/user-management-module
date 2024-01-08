const PersonAddresses = require("./models/PersonAddresses.model");
const PersonContacts = require("./models/PersonContacts.model");
const PersonDocs = require("./models/PersonDocs.model");
const PersonEducations = require("./models/PersonEducations.model");
const PersonExperiences = require("./models/PersonExperiences.model");
const PersonRelations = require("./models/PersonRelations.model");
const Persons = require("./models/Persons.model");
const UserCoupons = require("./models/UserCoupons.model");
const UserPayments = require("./models/UserPayments.model");
const UserPermissions = require("./models/UserPermissions.model");
const UserSettings = require("./models/UserSettings.model");
const UserTokens = require("./models/UserTokens.model");
const Users = require("./models/Users.model");
const LoginLogs = require("./models/LoginLogs.model");
const Coupons = require("./models/Coupons.model");
const DoctorDetails = require("./models/DoctorDetails.model");
const RolePermissions = require("./models/RolePermissions.model");
const Permissions = require("./models/Permissions.model");
const Roles = require("./models/Roles.model");
const Relations = require("./models/Relations.model");
const modelsRegistry = {
  PersonAddresses: {
    database: "application",
    model: PersonAddresses,
  },
  PersonContacts: {
    database: "application",
    model: PersonContacts,
  },
  PersonDocs: {
    database: "application",
    model: PersonDocs,
  },
  PersonEducations: {
    database: "application",
    model: PersonEducations,
  },
  PersonExperiences: {
    database: "application",
    model: PersonExperiences,
  },
  PersonRelations: {
    database: "application",
    model: PersonRelations,
  },
  Persons: {
    database: "application",
    model: Persons,
  },
  UserCoupons: {
    database: "application",
    model: UserCoupons,
  },
  UserPayments: {
    database: "application",
    model: UserPayments,
  },
  UserPermissions: {
    database: "application",
    model: UserPermissions,
  },
  UserSettings: {
    database: "application",
    model: UserSettings,
  },
  UserTokens: {
    database: "application",
    model: UserTokens,
  },
  Users: {
    database: "application",
    model: Users,
  },
  LoginLogs: {
    database: "application",
    model: LoginLogs,
  },
  Coupons: {
    database: "application",
    model: Coupons,
  },
  DoctorDetails: {
    database: "application",
    model: DoctorDetails,
  },
  RolePermissions: {
    database: "application",
    model: RolePermissions,
  },
  Permissions: {
    database: "application",
    model: Permissions,
  },
  Roles: {
    database: "application",
    model: Roles,
  },
  Relations: {
    database: "application",
    model: Relations,
  },
};

exports.modelsRegistry = modelsRegistry;
