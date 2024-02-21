import * as React from "react";
import { List, Datagrid, ListProps, TextField } from "react-admin";
import Pagination from "../Components/Pagination";

export const AssistantshipList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"Assistantships"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <TextField label="Id" source="id" />
        <TextField label="Application Id" source="applicationId" />
        <TextField label="Requested" source="requested" />
        <TextField label="Granted" source="granted" />
      </Datagrid>
    </List>
  );
};
