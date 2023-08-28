const yup = require("yup");



const rolePermissionGET = {
    body: yup.object({}).noUnknown().strict(),
    query: yup
      .object({
        roleId: yup.string().min(1),
      })
      .noUnknown()
      .strict(),
  };


  module.exports = {rolePermissionGET};