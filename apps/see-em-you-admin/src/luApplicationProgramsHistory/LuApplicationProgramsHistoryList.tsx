import * as React from "react";
import { List, Datagrid, ListProps, TextField, DateField } from "react-admin";
import Pagination from "../Components/Pagination";

export const LuApplicationProgramsHistoryList = (
  props: ListProps
): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"LuApplicationProgramsHistories"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <TextField label="Lap Id" source="lapId" />
        <TextField label="Application Id" source="applicationId" />
        <TextField label="Program Id" source="programId" />
        <TextField label="Choice" source="choice" />
        <TextField label="Deleted By" source="deletedBy" />
        <DateField source="createdDate" label="Created Date" />
        <TextField label="Id" source="id" />
      </Datagrid>
    </List>
  );
};
