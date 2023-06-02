import React from "react";

import { useDispatch } from "react-redux";


import { FORM_EDIT_MODE, FORM_IDS,CoreForm } from '@wrappid/core';
import { __SET_ROLE } from "../types/mdmTypes";

export default function RolePermissionForm(props) {
    const { data } = props;

    const dispatch = useDispatch();

    React.useEffect(() => {
        dispatch({
            payload: data,
            type   : __SET_ROLE,
        });
    }, []);

    return (
        <CoreForm
            // query={{
            //   _defaultFilter: encodeURIComponent(JSON.stringify({ "RolePermissions.roleId": data?.id })),
            // }}
            _query={{ roleId: data?.id }}
            formId={FORM_IDS.__ROLE_PERMISSION_MAP}
            mode={FORM_EDIT_MODE}
            apiMode="create"
        />
    );
}
