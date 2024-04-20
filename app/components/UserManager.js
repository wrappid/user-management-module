import { AppContainerLayout, CoreDataTable, CoreLayoutItem, FORM_IDS } from "@wrappid/core";

export default function UserManager() {
  return (
    <>
      <CoreLayoutItem id={AppContainerLayout.PLACEHOLDER.CONTENT}>
        <CoreDataTable
          entity="UsersData"
          createFormID={FORM_IDS.__PERMISSION_FORM}
          updateFormID={FORM_IDS.__PERMISSION_FORM}
        />
      </CoreLayoutItem>
    </>
  );
}
