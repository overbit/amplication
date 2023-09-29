import * as React from "react";
import { List, Datagrid, ListProps, TextField } from "react-admin";
import Pagination from "../Components/Pagination";

export const ProgramGroupList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"ProgramGroups"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <TextField label="Id" source="id" />
        <TextField label="Period Id" source="periodId" />
        <TextField
          label="Program Group Description"
          source="programGroupDescription"
        />
        <TextField label="Program Group Name" source="programGroupName" />
        <TextField
          label="Program Group Name Short"
          source="programGroupNameShort"
        />
        <TextField label="Unit Id" source="unitId" />
      </Datagrid>
    </List>
  );
};
