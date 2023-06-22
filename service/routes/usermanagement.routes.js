const express = require("express");

const usermanagementController = require("../controllers/usermanagement.controller");



const usermanagementRouter = express.Router();

usermanagementRouter.post("/user", usermanagementController.createUser);
usermanagementRouter.get("/userSearchPaginated", usermanagementController.searchUser);
usermanagementRouter.post("/user/common", usermanagementController.createCommonUser);
usermanagementRouter.put("/user/common/:id", usermanagementController.updateUser);

usermanagementRouter.get("/userPermissionMap", usermanagementController.getUserPermission);
usermanagementRouter.post("/user/:id/userPermissionMap", usermanagementController.createUserPermission);


module.exports = usermanagementRouter;