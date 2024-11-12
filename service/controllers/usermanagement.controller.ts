/* eslint-disable no-console */
/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */

import { WrappidLogger } from "@wrappid/service-core";
import * as usermanagementFunctions from "../functions/usermanagement.functions";

const rolePermission = async (req: any, res: any) => {
  try {
    const data = await usermanagementFunctions.getRolePermissions(req, res);
    console.log("Role permissions fetched ");
    res.status(data.status).json(data);
  } catch (err: any) {
    WrappidLogger.error(err.message);
    WrappidLogger.error(err.stack);
    res.status(500).json({ message: err.message });
  }
};

const getUserSearchPaginated = async (req: any, res: any) => {
  try {
    // res.status(200).json({message:"API call sucessfully!"});
    const data = await usermanagementFunctions.getUserSearchPaginatedFunc(
      req,
      res
    );
    console.log("Search user done");
    res.status(data.status).json(data);
  } catch (err: any) {
    WrappidLogger.error(err.message);
    WrappidLogger.error(err.stack);
    res.status(500).json({ message: err.message });
  }
};
export { getUserSearchPaginated, rolePermission };

