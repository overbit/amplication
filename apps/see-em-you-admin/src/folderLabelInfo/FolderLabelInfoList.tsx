import * as React from "react";
import { List, Datagrid, ListProps, TextField } from "react-admin";
import Pagination from "../Components/Pagination";

export const FolderLabelInfoList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"FolderLabelInfos"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <TextField label="Period Id" source="periodId" />
        <TextField label="Last Ran Time" source="lastRanTime" />
        <TextField label="Last Label Column" source="lastLabelColumn" />
        <TextField label="Last Label Row" source="lastLabelRow" />
        <TextField label="Id" source="id" />
      </Datagrid>
    </List>
  );
};
