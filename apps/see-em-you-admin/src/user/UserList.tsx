import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  TextField,
  BooleanField,
} from "react-admin";
import Pagination from "../Components/Pagination";

export const UserList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"Users"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <TextField label="Email" source="email" />
        <TextField label="Firstname" source="firstname" />
        <TextField label="First Name Pref" source="firstNamePref" />
        <TextField label="Guid" source="guid" />
        <TextField label="Id" source="id" />
        <TextField label="Initials" source="initials" />
        <TextField label="Lastname" source="lastname" />
        <TextField label="Middlename" source="middlename" />
        <TextField label="Signup Date" source="signupDate" />
        <TextField label="Suffix" source="suffix" />
        <TextField label="Title" source="title" />
        <BooleanField label="Verified" source="verified" />
      </Datagrid>
    </List>
  );
};
