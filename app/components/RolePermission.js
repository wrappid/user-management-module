import RolePermissionForm from "./RolePermissionForm";

import {CoreDataTable,CoreBox} from '@wrappid/core';

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
