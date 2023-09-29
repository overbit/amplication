import * as React from "react";
import { List, Datagrid, ListProps, TextField } from "react-admin";
import Pagination from "../Components/Pagination";

export const SlateOrgsAllList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"SlateOrgsAlls"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <TextField label="Aw Id" source="awId" />
        <TextField label="Aw Name" source="awName" />
        <TextField label="Id" source="id" />
        <TextField label="Local Name" source="localName" />
        <TextField label="Name" source="name" />
        <TextField label="Shared Name" source="sharedName" />
        <TextField label="Slate Orgs All Id" source="slateOrgsAllId" />
      </Datagrid>
    </List>
  );
};
