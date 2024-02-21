import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
} from "react-admin";

export const LuUsersUsertypesHistoryShow = (
  props: ShowProps
): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="User Id" source="userId" />
        <TextField label="Usertype Id" source="usertypeId" />
        <TextField label="Delete Users Id" source="deleteUsersId" />
        <DateField source="deleteTimestamp" label="Delete Timestamp" />
        <TextField label="Id" source="id" />
      </SimpleShowLayout>
    </Show>
  );
};
