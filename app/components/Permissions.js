import { CoreDataTable, FORM_IDS } from "@wrappid/core";

export default function Permissions(){
  return( <CoreDataTable
    entity="Permissions"
    createFormID={FORM_IDS.__PERMISSION_FORM}
    updateFormID={FORM_IDS.__PERMISSION_FORM}
  />);
}