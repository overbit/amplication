import * as React from "react";
import { List, Datagrid, ListProps, TextField } from "react-admin";
import Pagination from "../Components/Pagination";

export const IniDisciplinaryActionList = (
  props: ListProps
): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"IniDisciplinaryActions"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <TextField label="Application Id" source="applicationId" />
        <TextField label="Id" source="id" />
        <TextField label="Retraction" source="retraction" />
        <TextField
          label="Retraction Description"
          source="retractionDescription"
        />
        <TextField label="Sanction" source="sanction" />
        <TextField label="Sanction Description" source="sanctionDescription" />
      </Datagrid>
    </List>
  );
};
