/* eslint-disable no-console */
/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */

import * as usermanagementFunctions from "../functions/usermanagement.functions";

const rolePermission = async (req: any, res: any) => {
  try {
    let data = await usermanagementFunctions.getRolePermissions(req, res);
    console.log("Role permissions fethed ");
    res.status(data.status).json(data);
  } catch (err: any) {
    console.log(err);
    res.status(500).json({ message: "Role permissions fethed" });
  }
};

const getUserSearchPaginated = async (req: any, res: any) => {
  try {
    // res.status(200).json({message:"API call sucessfully!"});
    let data = await usermanagementFunctions.getUserSearchPaginatedFunc(
      req,
      res
    );
    console.log("Search user done");
    res.status(data.status).json(data);
  } catch (err: any) {
    console.log(err);
    res.status(500).json({ message: err });
  }
};
export { rolePermission, getUserSearchPaginated };
