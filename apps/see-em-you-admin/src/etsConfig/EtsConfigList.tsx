import * as React from "react";
import { List, Datagrid, ListProps, TextField } from "react-admin";
import Pagination from "../Components/Pagination";

export const EtsConfigList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"EtsConfigs"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <TextField label="Test Name" source="testName" />
        <TextField label="Wsdl" source="wsdl" />
        <TextField label="Login" source="login" />
        <TextField label="Password" source="password" />
        <TextField label="Id" source="id" />
      </Datagrid>
    </List>
  );
};
