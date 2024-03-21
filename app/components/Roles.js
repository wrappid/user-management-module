import { AppContainerLayout, CoreDataTable, CoreLayoutItem } from "@wrappid/core";

export default function Roles() {
  return (
    <>
      <CoreLayoutItem id={AppContainerLayout.PLACEHOLDER.CONTENT}>
        <CoreDataTable 
          entity="Roles"

        />
      </CoreLayoutItem>
    </>
  );
}