import { CoreDataTable, CoreLayoutItem, AppContainerLayout } from "@wrappid/core";

export default function Permissions() {
  return (
    <>
      <CoreLayoutItem id={AppContainerLayout.PLACEHOLDER.CONTENT}>
        <CoreDataTable
          entity="Permissions"
          createFormID={"PermissionForm"}
          updateFormID={"PermissionForm"}
        />
      </CoreLayoutItem>
    </>);
}