import UserPermissionForm from "./UserPermissionForm";
import {CoreDataTable,CoreBox} from '@wrappid/core';

export default function UserPermission() {
    const columns = [
        { id: "id", label: "ID" },
        { id: "email", label: "Email" },
        {
            id    : "role",
            label : "Role",
            render: (cellData, rowData) => {
                return <>{rowData["Role.role"]}</>;
            },
        },
    ];

    return (
        <CoreBox>
            <CoreDataTable
                hideForm={true}
                entity={"RxefyUsers"}
                columns={columns}
                preRenderDetailsPaneComponent={UserPermissionForm}
            />
        </CoreBox>
    );
}
