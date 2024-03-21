import { CoreDataTable, CoreBox } from "@wrappid/core";

import RolePermissionForm from "./RolePermissionForm";

export default function RolePermission() {

  return (
    <>
      <CoreLayoutItem id={AppContainerLayout.PLACEHOLDER.CONTENT}>
        <CoreBox>
          <CoreDataTable
            hideForm={true}
            entity={"Roles"}
            preRenderDetailsPaneComponent={RolePermissionForm}
          />
        </CoreBox>
      </CoreLayoutItem>
    </>

  );
}
