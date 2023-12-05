import * as React from "react";
import { List, Datagrid, ListProps, TextField } from "react-admin";
import Pagination from "../Components/Pagination";

export const DuolingoscoreList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"Duolingoscores"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <TextField label="Application Id" source="applicationId" />
        <TextField label="Duolingodata Id" source="duolingodataId" />
        <TextField label="Id" source="id" />
        <TextField label="Match Date" source="matchDate" />
        <TextField label="Testdate" source="testdate" />
        <TextField label="Testemail" source="testemail" />
      </Datagrid>
    </List>
  );
};
