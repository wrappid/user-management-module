import { permission } from "./functions/asyncSelect.functions";
import { SanRolePermission, SanRolePermissionReadMap } from "./functions/sanity.functions";

export const FunctionsRegistry = {
  SanRolePermission                 : SanRolePermission,
  SanRolePermissionReadMap          : SanRolePermissionReadMap,
  __ROUTES_GET_OPTION_LABEL         : permission.getOptionLabel,
  __ROUTES_GET_OPTION_VALUE         : permission.getOptionValue,
  __ROUTES_IS_OPTIONS_EQUAL_TO_VALUE: permission.isOptionsEqualToValue
};