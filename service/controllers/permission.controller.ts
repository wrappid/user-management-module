import { createRolePermissions } from "../functions/permission.functions";

export const postRolePermissionsMap = async (req: any, res: any) => {
  try {
    const data = await createRolePermissions(req);
    console.log("Role permissions updated ");
    res.status(data.status).json(data);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Role permissions update error" });
  }
};