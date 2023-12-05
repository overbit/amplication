import * as React from "react";
import { List, Datagrid, ListProps, TextField } from "react-admin";
import Pagination from "../Components/Pagination";

export const RejectionWaiverList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"RejectionWaivers"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <TextField label="Id" source="id" />
        <TextField
          label="Lu Application Programs Id"
          source="luApplicationProgramsId"
        />
        <TextField label="Permitted Program Id" source="permittedProgramId" />
        <TextField label="Waived" source="waived" />
      </Datagrid>
    </List>
  );
};
