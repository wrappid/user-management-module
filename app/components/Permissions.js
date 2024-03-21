import { CoreDataTable, FORM_IDS, CoreLayoutItem, AppContainerLayout } from "@wrappid/core";

export default function Permissions() {
  return (
    <>
      <CoreLayoutItem id={AppContainerLayout.PLACEHOLDER.CONTENT}>
        <CoreDataTable
          entity="Permissions"
          createFormID={FORM_IDS.__PERMISSION_FORM}
          updateFormID={FORM_IDS.__PERMISSION_FORM}
        />
      </CoreLayoutItem>
    </>);
}