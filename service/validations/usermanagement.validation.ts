import * as yup from "yup";

interface RolePermissionGET {
  body: yup.ObjectSchema<{}>;
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

interface GetUserSearchPaginated {
  body: yup.ObjectSchema<{}>;
  query: yup.ObjectSchema<{}>;
}

export const getUserSearchPaginated: GetUserSearchPaginated = {
  body: yup.object({}).noUnknown().strict(),
  query: yup.object({}).noUnknown().strict(),
};
