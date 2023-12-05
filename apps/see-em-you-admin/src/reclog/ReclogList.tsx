import * as React from "react";
import { List, Datagrid, ListProps, DateField, TextField } from "react-admin";
import Pagination from "../Components/Pagination";

export const ReclogList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"Reclogs"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <DateField source="created" label="Created" />
        <TextField label="Id" source="id" />
        <TextField label="Ip" source="ip" />
        <TextField label="Message" source="message" />
      </Datagrid>
    </List>
  );
};
