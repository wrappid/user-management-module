import { coreConstant, databaseActions, databaseProvider } from "@wrappid/service-core";

export async function createRolePermissions(req: any) {
  const rows = req.body.rolePermissionMap;
  const roleId = req.params.id;
  const database:string = <string>req.query?.database || "application";
  
  const result = await databaseProvider[database].sequelize.transaction(async (transaction: any) => {
    const nrows = await databaseActions.update(database,"RolePermissions", {
      _status: coreConstant.entityStatus.INACTIVE,
      updatedBy: req.user.userId,
    },
    {
      where: {
        roleId: roleId,
      },
    }
    );
  
    if (nrows < 1) {
      throw "Update old role permissions error";
    }
  
    console.log("Old entries updated: ", nrows);
  
    let count = 0;
  
    for (let i = 0; i < rows?.length; i++) {
      const data = rows[i];
      let obData = {};
      if (data && data.hasEntry) {
        obData = {
          roleId: req.params.id,
          permissionId: data.id,
          priority: data.priority,
          createdBy: req.user.userId,
          updatedBy: req.user.userId,
          _status: coreConstant.entityStatus.ACTIVE,
        };
  
        const nData = await databaseActions.create(database, "RolePermissions", obData, {
          transaction: transaction,
        });
  
        console.log("obDataNew entry created: ", nData.id);
  
        count += 1;
      }
    }
  
    return count;
  });
  
  return {
    status: 200,
    message: "Role permissions updated",
    data: result,
  };
}