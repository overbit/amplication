import * as React from "react";
import { List, Datagrid, ListProps, TextField, DateField } from "react-admin";
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
        <TextField label="Payment Id" source="paymentId" />
        <DateField
          source="authNotificationTime"
          label="Auth Notification Time"
        />
        <TextField label="Id" source="id" />
      </Datagrid>
    </List>
  );
};
