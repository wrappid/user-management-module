import * as yup from "yup";

type RolePermissionGET = {
  body: yup.ObjectSchema<object>;
  query: yup.ObjectSchema<{
    roleId: any;
  }>;
}

export const rolePermissionGET: RolePermissionGET = {
  body: yup.object({}).noUnknown().strict(),
  query: yup
    .object({ roleId: yup.string().min(1) })
    .noUnknown()
    .strict(),
};

type GetUserSearchPaginated = {
  body: yup.ObjectSchema<object>;
  query: yup.ObjectSchema<object>;
}

export const getUserSearchPaginated: GetUserSearchPaginated = {
  body: yup.object({}).noUnknown().strict(),
  query: yup.object({}).noUnknown().strict(),
};
