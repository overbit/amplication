import * as React from "react";
import { List, Datagrid, ListProps, TextField } from "react-admin";
import Pagination from "../Components/Pagination";

export const MergeApplicationList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"MergeApplications"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <TextField label="Base Convert Error" source="baseConvertError" />
        <TextField label="Base Convert Message" source="baseConvertMessage" />
        <TextField label="Base Write Error" source="baseWriteError" />
        <TextField label="Base Write Message" source="baseWriteMessage" />
        <TextField label="Id" source="id" />
        <TextField
          label="Search Text Write Error"
          source="searchTextWriteError"
        />
        <TextField
          label="Search Text Write Message"
          source="searchTextWriteMessage"
        />
      </Datagrid>
    </List>
  );
};
