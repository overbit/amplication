import * as React from "react";
import { List, Datagrid, ListProps, TextField, DateField } from "react-admin";
import Pagination from "../Components/Pagination";

export const ParentInfoList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"ParentInfos"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <TextField label="App Id" source="appId" />
        <TextField label="P1 Profession" source="p1Profession" />
        <TextField label="P1 Ed Level" source="p1EdLevel" />
        <TextField label="P2 Profession" source="p2Profession" />
        <TextField label="P2 Ed Level" source="p2EdLevel" />
        <DateField source="created" label="Created" />
        <TextField label="Modified" source="modified" />
        <TextField label="Id" source="id" />
      </Datagrid>
    </List>
  );
};
