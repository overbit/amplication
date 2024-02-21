import * as React from "react";
import { List, Datagrid, ListProps, TextField, DateField } from "react-admin";
import Pagination from "../Components/Pagination";

export const HighschoolList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"Highschools"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <TextField label="App Id" source="appId" />
        <TextField label="Hs Name" source="hsName" />
        <TextField label="Hs Ceeb" source="hsCeeb" />
        <TextField label="Hs Nces" source="hsNces" />
        <TextField label="Hs State" source="hsState" />
        <TextField label="Hs Zip" source="hsZip" />
        <TextField label="Hs Grad Year" source="hsGradYear" />
        <TextField label="Hs Duration" source="hsDuration" />
        <TextField label="Graduated" source="graduated" />
        <DateField source="created" label="Created" />
        <DateField source="modified" label="Modified" />
        <TextField label="Id" source="id" />
      </Datagrid>
    </List>
  );
};
