import {
  databaseActions,
  databaseProvider,
  coreConstant,
} from "@wrappid/service-core";

async function groupRolePermissionData(data: any, roleId: any) {
  try {
    if (!data || data.length == 0) return null;
    for (let i = 0; i < data.length; i++) {
      const x = await databaseActions.findAll("application", "Permissions", {
        include: [
          {
            model: databaseProvider.application.models.RolePermissions,
            attributes: ["id", "priority"],
            required: true,
            where: {
              roleId: roleId,
              _status: coreConstant.entityStatus.ACTIVE,
            },
          },
        ],
        where: {
          parentId: data[i].id,
          _status: coreConstant.entityStatus.ACTIVE,
        },
        order: [
          [
            databaseProvider.application.models.RolePermissions,
            "priority",
            "asc",
          ],
        ],
      });
      data[i].dataValues["Children"] = await groupRolePermissionData(x, roleId);
    }
    return data;
  } catch (err: any) {
    console.log(err);
    throw err;
  }
}

async function groupUserPermissionData(data: any, userId: any) {
  try {
    if (!data || data.length == 0) return null;
    for (let i = 0; i < data.length; i++) {
      const x = await databaseActions.findAll("application", ".Permissions", {
        include: [
          {
            model: databaseProvider.application.models.UserPermissions,
            attributes: ["id", "priority"],
            required: true,
            where: {
              userId: userId,
              _status: coreConstant.entityStatus.ACTIVE,
            },
          },
        ],
        where: {
          parentId: data[i].id,
          _status: coreConstant.entityStatus.ACTIVE,
        },
        order: [
          [
            databaseProvider.application.models.UserPermissions,
            "priority",
            "asc",
          ],
        ],
      });
      data[i].dataValues["Children"] = await groupUserPermissionData(x, userId);
    }
    return data;
  } catch (err: any) {
    console.log(err);
    throw err;
  }
}

// eslint-disable-next-line no-unused-vars
const getRolePermissions = async (req: any, res: any) => {
  // let isValidJOI = await authenticateJOI(req, "rolePermissionGET", ["query"]);
  let roleId = null;
  if (req.query.roleId) {
    roleId = req.query.roleId;
  } else {
    const p = await databaseActions.findOne("application", "Persons", {
      where: { userId: req.user.userId },
    });
    if (p?.isVerified) {
      roleId = req.user.roleId;
    }
  }
  if (roleId) {
    const role = await databaseActions.findByPk("application", "Roles", roleId);
    //Get role permissions
    let rolePermissions = await databaseActions.findAll(
      "application",
      "Permissions",
      {
        include: [
          {
            model: databaseProvider.application.models.RolePermissions,
            attributes: ["id", "priority"],
            required: true,
            where: {
              roleId: roleId,
              _status: coreConstant.entityStatus.ACTIVE,
            },
          },
        ],
        where: { parentId: null, _status: coreConstant.entityStatus.ACTIVE },
        order: [
          [
            databaseProvider.application.models.RolePermissions,
            "priority",
            "asc",
          ],
        ],
      }
    );
    //Group child role permissions
    rolePermissions = await groupRolePermissionData(rolePermissions, roleId);

    //Get user permissions
    let userPermissions = await databaseActions.findAll(
      "application",
      "Permissions",
      {
        include: [
          {
            model: databaseProvider.application.models.UserPermissions,
            attributes: ["id", "priority"],
            required: true,
            where: {
              userId: req.user.userId,
              _status: coreConstant.entityStatus.ACTIVE,
            },
          },
        ],
        where: { parentId: null, _status: coreConstant.entityStatus.ACTIVE },
        order: [
          [
            databaseProvider.application.models.UserPermissions,
            "priority",
            "asc",
          ],
        ],
      }
    );
    //Group child user permissions
    userPermissions = await groupUserPermissionData(
      userPermissions,
      req.user.userId
    );

    //get the priority key from rolepermission
    rolePermissions = rolePermissions.map((a: any) => {
      return {
        ...a.dataValues,
        priority: a.dataValues.RolePermissions[0].priority,
      };
    });
    userPermissions = userPermissions
      ? userPermissions.map((a: any) => {
        return {
          ...a.dataValues,
          priority: a.dataValues.UserPermissions[0].priority,
        };
      })
      : [];

    //concat and sort based on priority
    let finalData = [...rolePermissions, ...userPermissions];
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
// eslint-disable-next-line no-unused-vars
const getUserSearchPaginatedFunc = async (req: any, res: any) => {
  const name = "%" + req.query.input + "%";
  const roleOb: any = {};
  if (req.query.role) roleOb.role = req.query.role;
  console.log("NAME", name);
  const baseQuery = {
    [databaseProvider.application.Sequelize.Op.or]: [
      {
        email: {
          [databaseProvider.application.Sequelize.Op.iLike]: name.toLowerCase(),
        },
      },
      {
        phone: {
          [databaseProvider.application.Sequelize.Op.iLike]: name.toLowerCase(),
        },
      },
    ],
  };
  const pageQuery: any = {};
  pageQuery["start"] = req.query.start;
  pageQuery["length"] = req.query.length;

  const data = await paginate(
    databaseProvider.application.models.Users,
    [
      {
        model: databaseProvider.application.models.Persons,
        as: "Person",
        include: [
          {
            model: databaseProvider.application.models.PersonRelations,
            as: "Person",
            include: [
              { model: databaseProvider.application.models.Relations },
              {
                model: databaseProvider.application.models.Persons,
                as: "RelatedPerson",
              },
            ],
          },
        ],
      },
      {
        model: databaseProvider.application.models.Roles,
        where: roleOb,
        as: "Role",
        attributes: ["id", "role"],
      },
    ],
    baseQuery,
    pageQuery
  );
  console.log("Users match fetched successfully", data.totalRecords);
  const finalRows: any = [];
  for (let i = 0; i < data.rows.length; i++) {
    const x: any = data.rows[i];
    // eslint-disable-next-line no-unsafe-optional-chaining
    const relatives: any = [...x?.Person?.Person];
    const r = delete x?.Person?.Person;
    console.log("DELETING", r, ", relatives:", relatives?.length);
    finalRows.push(x);
    relatives?.forEach((relative: any) => {
      finalRows.push({
        Person: relative.RelatedPerson,
        Relation: relative.Relation,
        RootPerson: {
          id: x.Person.id,
          firstName: x.Person.firstName,
          middleName: x.Person.middleName,
          lastName: x.Person.lastName,
        },
        email: x.email,
        phone: x.phone,
      });
    });
  }
  data.rows = finalRows;
  data.totalRecords = finalRows.length;
  return {
    status: 200,
    message: "Users match successfully",
    data: data,
  };
};

async function paginate(
  model: any,
  inculdeOb: any,
  whereOb: any,
  pageQuery: any
) {
  console.log("pageQuery", inculdeOb, whereOb, pageQuery);
  try {
    const data = await databaseActions.findAll("application", "Users", {
      // benchmark: true,
      // logging: console.log,
      include: inculdeOb,
      where: whereOb,
      offset: pageQuery?.start /* 
          ((pageQuery?.page || 1) - 1) *
          pageQuery.maxRowInPage *
          config.cachePage */,
      limit: pageQuery?.length || 10 /* Math.min(
        config.maxRow,
        (pageQuery?.maxRowInPage || 10) * config.cachePage
      ) */,
      order: [[pageQuery?.orderBy || "id", pageQuery?.order || "desc"]],
    });

    const totalRecords = await databaseProvider.application.models.Users.count({
      include: inculdeOb,
      where: whereOb,
      distinct: true,
      col: "id",
    });

    Object.keys(
      (data && Array.isArray(data) && data.length > 0 && data[0]?.dataValues) ||
        {}
    );
    console.log("Paginated", data.length, totalRecords);
    return { totalRecords, rows: data };
  } catch (error: any) {
    console.error("Error in pagination", error);
    throw "Pagination error";
  }
}

export { getRolePermissions, getUserSearchPaginatedFunc };
