import * as React from "react";
import { List, Datagrid, ListProps, TextField, DateField } from "react-admin";
import Pagination from "../Components/Pagination";

export const AccesslogreplyformList = (
  props: ListProps
): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"Accesslogreplyforms"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <TextField label="Activity" source="activity" />
        <TextField label="Application Id" source="applicationId" />
        <TextField label="Client" source="client" />
        <TextField label="Id" source="id" />
        <TextField label="Lu Users Usertypes Id" source="luUsersUsertypesId" />
        <DateField source="timestamp" label="Timestamp" />
        <TextField label="Users Id" source="usersId" />
        <TextField label="Usertype Id" source="usertypeId" />
      </Datagrid>
    </List>
  );
};
