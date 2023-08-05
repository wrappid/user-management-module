/* eslint-disable no-unused-vars */
/* eslint-disable id-length */

import { __EntityStatus } from "@wrappid/core";

// asyncSelect and formSubmitSanitization

function nLevelGroup(data, parentId) {
  let finalData = data
    .filter((d) => d.parentId == parentId)
    .map((h) => {
      return {
        ...h,
        __children: nLevelGroup(data, h.id),
      };
    });
      
  return finalData;
}
      
function nLevelFlat(data, finalData) {
  for (let i = 0; i < data.length; i++) {
    let ob = { ...data[i] };
    
    delete ob.__children;
    finalData.push(ob);
    finalData = nLevelFlat(data[i].__children, finalData);
  }
  return finalData;
}

export const FunctionsRegistry = {
  SanRolePermission: (formData, apiMeta, state, others) => {
    // -- console.log("SANITING", apiMeta.endpoint, others);
    return {
      endpoint: apiMeta.endpoint.replace(
        ":id",
        state?.mdm?.rolePermissionRole?.id
      ),
      values: nLevelFlat(formData, { rolePermissionMap: nLevelFlat(formData.rolePermissionMap, []) }),
    };
  },
        
  SanRolePermissionReadMap: (data, otherData) => {
    // -- console.log("SANITING", apiMeta, others);
    let roleId = otherData?.reduxData?.query?.roleId;
        
    // -- console.log("SANITING0", roleId, roleId);
        
    let temp = data?.rows?.map((m) => {
      return {
        groupHead: m.parentId === null ? true : false,
        hasEntry:
                m?.RolePermissions &&
                m?.RolePermissions?.length > 0 &&
                m.RolePermissions.find(
                  (rp) => rp.roleId === roleId && rp._status === __EntityStatus.ACTIVE
                )
                  ? true
                  : false,
        id      : m?.id,
        name    : m?.label,
        parentId: m?.parentId,
        priority:
                m?.RolePermissions &&
                m?.RolePermissions?.length > 0 &&
                m.RolePermissions.find(
                  (rp) => rp.roleId === roleId && rp._status === __EntityStatus.ACTIVE
                )
                  ? m.RolePermissions.find(
                    (rp) =>
                      rp.roleId === roleId && rp._status === __EntityStatus.ACTIVE
                  )?.priority
                  : 1,
      };
    });
        
    return { rolePermissionMap: nLevelGroup(temp, null) };
  }
};