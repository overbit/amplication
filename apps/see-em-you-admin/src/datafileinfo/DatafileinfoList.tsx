import * as React from "react";
import { List, Datagrid, ListProps, TextField } from "react-admin";
import Pagination from "../Components/Pagination";

export const DatafileinfoList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"Datafileinfos"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <TextField label="Extension" source="extension" />
        <TextField label="Id" source="id" />
        <TextField label="Moddate" source="moddate" />
        <TextField label="Section" source="section" />
        <TextField label="Size" source="size" />
        <TextField label="Type Field" source="typeField" />
        <TextField label="Userdata" source="userdata" />
        <TextField label="User Id" source="userId" />
      </Datagrid>
    </List>
  );
};
