const { cacheActions, databaseActions } = require("@wrappid/service-core");
async function groupRolePermissionData(data, roleId) {
    try {
      if (!data || data.length == 0) return null;
      for (var i = 0; i < data.length; i++) {
        var x = await databaseActions.findAll("application","Permissions",{
          include: [
            {
              model: db.RolePermissions,
              attributes: ["id", "priority"],
              required: true,
              where: {
                roleId: roleId,
                _status: entityStatus.ACTIVE,
              },
            },
          ],
          where: { parentId: data[i].id, _status: entityStatus.ACTIVE },
          order: [[db.RolePermissions, "priority", "asc"]],
        });
        data[i].dataValues["Children"] = await groupRolePermissionData(x, roleId);
      }
      return data;
    } catch (err) {
      console.log(err);
      throw err;
    }
  }

  async function groupUserPermissionData(data, userId) {
    try {
      if (!data || data.length == 0) return null;
      for (var i = 0; i < data.length; i++) {
        var x = await databaseActions.findAll("application",".Permissions",{
          include: [
            {
              model: db.UserPermissions,
              attributes: ["id", "priority"],
              required: true,
              where: {
                userId: userId,
                _status: entityStatus.ACTIVE,
              },
            },
          ],
          where: { parentId: data[i].id, _status: entityStatus.ACTIVE },
          order: [[db.UserPermissions, "priority", "asc"]],
        });
        data[i].dataValues["Children"] = await groupUserPermissionData(x, userId);
      }
      return data;
    } catch (err) {
      console.log(err);
      throw err;
    }
  }

const getRolePermissions = async (req, res) => {
  // var isValidJOI = await authenticateJOI(req, "rolePermissionGET", ["query"]);
  var roleId = null;
  if (req.query.roleId) {
    roleId = req.query.roleId;
  } else {
    p = await databaseActions.findOne("application","Persons", { where: { userId: req.user.userId } });
    if (p?.isVerified) {
      roleId = req.user.roleId;
    }
  }
  if (roleId) {
    var role = await databaseActions.findByPk("application","Roles",roleId);
    //Get role permissions
    var rolePermissions = await databaseActions.findAll("application","Permissions",{
      include: [
        {
          model: db.RolePermissions,
          attributes: ["id", "priority"],
          required: true,
          where: {
            roleId: roleId,
            _status: entityStatus.ACTIVE,
          },
        },
      ],
      where: { parentId: null, _status: entityStatus.ACTIVE },
      order: [[db.RolePermissions, "priority", "asc"]],
    });
    //Group child role permissions
    rolePermissions = await groupRolePermissionData(rolePermissions, roleId);

    //Get user permissions
    var userPermissions = await databaseActions.findAll("application","Permissions",{
      include: [
        {
          model: db.UserPermissions,
          attributes: ["id", "priority"],
          required: true,
          where: {
            userId: req.user.userId,
            _status: entityStatus.ACTIVE,
          },
        },
      ],
      where: { parentId: null, _status: entityStatus.ACTIVE },
      order: [[db.UserPermissions, "priority", "asc"]],
    });
    //Group child user permissions
    userPermissions = await groupUserPermissionData(
      userPermissions,
      req.user.userId
    );

    //get the priority key from rolepermission
    rolePermissions = rolePermissions.map((a) => {
      return {
        ...a.dataValues,
        priority: a.dataValues.RolePermissions[0].priority,
      };
    });
    userPermissions = userPermissions
      ? userPermissions.map((a) => {
          return {
            ...a.dataValues,
            priority: a.dataValues.UserPermissions[0].priority,
          };
        })
      : [];

    //concat and sort based on priority
    var finalData = [...rolePermissions, ...userPermissions];
    finalData = finalData.sort((a, b) => a.priority - b.priority);

    console.log("Permission fetched successfully");
    return {
      status: 200,
      message: "Permissions fetched successfully",
      data: { role, permissions: finalData },
    };
  } else {
    return {
      status: 500,
      message: "Role id not found",
      data: null,
    };
  }
};

module.exports = {
  getRolePermissions,
};
