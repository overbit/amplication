import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  DateField,
  TextField,
} from "react-admin";

export const LuUsersUsertypesHistoryShow = (
  props: ShowProps
): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <DateField source="deleteTimestamp" label="Delete Timestamp" />
        <TextField label="Delete Users Id" source="deleteUsersId" />
        <TextField label="Id" source="id" />
        <TextField label="User Id" source="userId" />
        <TextField label="Usertype Id" source="usertypeId" />
      </SimpleShowLayout>
    </Show>
  );
};
