import * as React from "react";
import { List, Datagrid, ListProps, TextField } from "react-admin";
import Pagination from "../Components/Pagination";

export const ContentBakList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"ContentBaks"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <TextField label="Content" source="content" />
        <TextField label="Contenttype Id" source="contenttypeId" />
        <TextField label="Department Id" source="departmentId" />
        <TextField label="Domain Id" source="domainId" />
        <TextField label="Id" source="id" />
        <TextField label="Modifiedby" source="modifiedby" />
        <TextField label="Modifieddate" source="modifieddate" />
        <TextField label="Name" source="name" />
      </Datagrid>
    </List>
  );
};
