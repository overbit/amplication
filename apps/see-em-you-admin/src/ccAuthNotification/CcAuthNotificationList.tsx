import * as React from "react";
import { List, Datagrid, ListProps, DateField, TextField } from "react-admin";
import Pagination from "../Components/Pagination";

export const CcAuthNotificationList = (
  props: ListProps
): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"CcAuthNotifications"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <DateField
          source="authNotificationTime"
          label="Auth Notification Time"
        />
        <TextField label="Id" source="id" />
        <TextField label="Payment Id" source="paymentId" />
      </Datagrid>
    </List>
  );
};
