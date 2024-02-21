import * as React from "react";
import { List, Datagrid, ListProps, TextField, DateField } from "react-admin";
import Pagination from "../Components/Pagination";

export const WaiverApplicationList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"WaiverApplications"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <TextField label="Id" source="id" />
        <TextField label="Application Id" source="applicationId" />
        <TextField label="Org Id" source="orgId" />
        <TextField label="Datafile Id" source="datafileId" />
        <DateField source="createDate" label="Create Date" />
        <DateField source="updateDate" label="Update Date" />
      </Datagrid>
    </List>
  );
};
