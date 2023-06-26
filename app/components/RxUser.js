import { CoreDataTable, FORM_IDS } from "@wrappid/core";

export default function RxUser() {
  return (
    <CoreDataTable
      entity="RxefyUsers"
      createFormID={FORM_IDS.__PERMISSION_FORM}
      updateFormID={FORM_IDS.__PERMISSION_FORM}
    />
  );
}
