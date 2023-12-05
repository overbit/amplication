import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  TextField,
  BooleanField,
} from "react-admin";
import Pagination from "../Components/Pagination";

export const UsersOrigList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"UsersOrigs"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <TextField label="Email" source="email" />
        <TextField label="Firstname" source="firstname" />
        <TextField label="Guid" source="guid" />
        <TextField label="Id" source="id" />
        <TextField label="Initials" source="initials" />
        <TextField label="Lastname" source="lastname" />
        <TextField label="Middlename" source="middlename" />
        <TextField label="Password" source="password" />
        <TextField label="Signup Date" source="signupDate" />
        <TextField label="Title" source="title" />
        <TextField label="Username" source="username" />
        <BooleanField label="Verified" source="verified" />
      </Datagrid>
    </List>
  );
};
