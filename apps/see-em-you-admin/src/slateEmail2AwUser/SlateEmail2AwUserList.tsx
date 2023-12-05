import * as React from "react";
import { List, Datagrid, ListProps, TextField } from "react-admin";
import Pagination from "../Components/Pagination";

export const SlateEmail2AwUserList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"SlateEmail2AwUsers"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <TextField label="Aw Luu User Id" source="awLuuUserId" />
        <TextField label="Id" source="id" />
        <TextField label="Slate Email" source="slateEmail" />
      </Datagrid>
    </List>
  );
};
