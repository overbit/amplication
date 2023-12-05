import * as React from "react";
import { List, Datagrid, ListProps, TextField } from "react-admin";
import Pagination from "../Components/Pagination";

export const VoucherApplicationErrorList = (
  props: ListProps
): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"VoucherApplicationErrors"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <TextField label="Allow Multiple" source="allowMultiple" />
        <TextField label="App Id" source="appId" />
        <TextField label="Code" source="code" />
        <TextField label="Err Msg" source="errMsg" />
        <TextField label="Id" source="id" />
        <TextField label="Va Id" source="vaId" />
      </Datagrid>
    </List>
  );
};
