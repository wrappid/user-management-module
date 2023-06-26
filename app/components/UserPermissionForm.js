import { FORM_EDIT_MODE, FORM_IDS, CoreForm } from "@wrappid/core";

export default function UserPermissionForm(props) {
  const { data } = props;

  return (
    <CoreForm
      formId={FORM_IDS.__USER_PERMISSION_MAP}
      query={{ _defaultFilter: encodeURIComponent(JSON.stringify({ userId: data?.id })) }}
      _query={{ id: data.id }}
      mode={FORM_EDIT_MODE}
      apiMode="create"
    />
  );
}
