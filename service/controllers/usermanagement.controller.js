/* eslint-disable no-console */
/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */

const usermanagementFunctions = require("../functions/usermanagement.functions");

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

module.exports.getUserSearchPaginated = async (req, res) => {
  try {
    // res.status(200).json({message:"API call sucessfully!"});
    let data = await usermanagementFunctions.getUserSearchPaginatedFunc(
      req,
      res
    );
    console.log("Search user done");
    res.status(data.status).json(data);
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: err });
  }
};
