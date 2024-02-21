import * as React from "react";
import { List, Datagrid, ListProps, TextField } from "react-admin";
import Pagination from "../Components/Pagination";

export const LuProgramsInterestList = (
  props: ListProps
): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"LuProgramsInterests"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <TextField label="Program Id" source="programId" />
        <TextField label="Interest Id" source="interestId" />
        <TextField label="Id" source="id" />
      </Datagrid>
    </List>
  );
};
