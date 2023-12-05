import * as React from "react";
import { List, Datagrid, ListProps, TextField } from "react-admin";
import Pagination from "../Components/Pagination";

export const LegacyEthnicityList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"LegacyEthnicities"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <TextField label="Ethnicity Id" source="ethnicityId" />
        <TextField label="Id" source="id" />
        <TextField label="Name" source="name" />
        <TextField label="Sortorder" source="sortorder" />
      </Datagrid>
    </List>
  );
};
