import { CoreDataTable, CoreBox } from "@wrappid/core";

import RolePermissionForm from "./RolePermissionForm";

export default function RolePermission() {

  return (
    <CoreBox>
      <CoreDataTable
        hideForm={true}
        entity={"Roles"}
        preRenderDetailsPaneComponent={RolePermissionForm}
      />
    </CoreBox>
  );
}
