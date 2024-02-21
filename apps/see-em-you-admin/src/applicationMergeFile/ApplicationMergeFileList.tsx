import * as React from "react";
import { List, Datagrid, ListProps, TextField, DateField } from "react-admin";
import Pagination from "../Components/Pagination";

export const ApplicationMergeFileList = (
  props: ListProps
): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"ApplicationMergeFiles"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <TextField label="Id" source="id" />
        <TextField label="Guid" source="guid" />
        <TextField label="Merge File" source="mergeFile" />
        <DateField source="mergeDate" label="Merge Date" />
      </Datagrid>
    </List>
  );
};
