/* eslint-disable no-console */
/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */

const testFunctions = require("../functions/test.functions");
const usermanagementFunctions = require("../functions/usermanagement.functions")
/**
 *
 * @param {*} req
 * @param {*} res
 * @returns
 */
module.exports.createUser = async (req, res) => {
  try {
    let data = await createUser(req, res, db);
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: err });
  }
};

/**
 *
 * @param {*} req
 * @param {*} res
 * @returns
 */
module.exports.searchUser = async (req, res) => {
  try {
    let data = await searchUser(req, db);

    console.log("Search user done");
    res.status(data.status).json(data);
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: err });
  }
};

/**
 *
 * @param {*} req
 * @param {*} res
 * @returns
 */
module.exports.createCommonUser = async (req, res) => {
  try {
    const data = await createCommonUser(req);

    res.status(200).json({ data: data, message: "user created successfully" });
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: err.message });
  }
};

/**
 *
 * @param {*} req
 * @param {*} res
 * @returns
 */
module.exports.updateUser = async (req, res) => {
  try {
    await updateCommonUser(req);
    res.status(200).json({ message: "user updated successfully" });
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: err.message });
  }
};

module.exports.getUserPermission = async (req, res) => {
  try {
    const query = JSON.parse(req.query?._defaultFilter);
    let userPermissions = await getUserPermissions(query.userId);

    res
      .status(200)
      .json({ data: userPermissions, message: "User permission fetched" });
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: err.message });
  }
};

module.exports.createUserPermission = async (req, res) => {
  try {
    const result = await db.sequelize.transaction(async (transaction) => {
      await db.UserPermissions.update(
        { _status: entityStatus.DELETED, deletedBy: req.user.userId },
        { transaction: transaction, where: { userId: req.params.id } }
      );
      let permissions = req.body;

      for (let i = 0; i < permissions.length; i++) {
        let element_i = permissions[i];

        await db.UserPermissions.create(
          {
            _status: entityStatus.ACTIVE,
            createdBy: req.user.userId,
            deletedAt: moment(),
            permissionId: element_i.id,
            userId: req.params.id,
          },
          { transaction: transaction }
        );
      }
    });

    res.status(200).json({ message: "User Permissions created successfully" });
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: err.message });
  }
};

module.exports.rolePermission = async (req, res) => {
  try {
    let data = await usermanagementFunctions.getRolePermissions(req, res);
    console.log("Role permissions fethed ");
    res.status(data.status).json(data);
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Role permissions fethed" });
  }
};
