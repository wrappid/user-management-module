import { CoreDataTable, CoreBox } from "@wrappid/core";

import UserPermissionForm from "./UserPermissionForm";

export default function UserPermission() {
  const columns = [
    { id: "id", label: "ID" },
    { id: "email", label: "Email" },
    {
      id: "role",
      label: "Role",
      render: (cellData, rowData) => {
        return <>{rowData["Role.role"]}</>;
      },
    },
  ];

  return (
    <>
      <CoreLayoutItem id={AppContainerLayout.PLACEHOLDER.CONTENT}>
        <CoreBox>
          <CoreDataTable
            hideForm={true}
            entity={"RxefyUsers"}
            columns={columns}
            preRenderDetailsPaneComponent={UserPermissionForm}
          />
        </CoreBox>
      </CoreLayoutItem>
    </>
  );
}
