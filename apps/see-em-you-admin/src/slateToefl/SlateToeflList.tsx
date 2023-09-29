import * as React from "react";
import { List, Datagrid, ListProps, TextField } from "react-admin";
import Pagination from "../Components/Pagination";

export const SlateToeflList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"SlateToefls"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <TextField label="First" source="first" />
        <TextField label="Id" source="id" />
        <TextField label="Last" source="last" />
        <TextField label="Middle" source="middle" />
        <TextField label="Prefix" source="prefix" />
        <TextField label="Toefl Listening" source="toeflListening" />
        <TextField label="Toefl Reading" source="toeflReading" />
        <TextField label="Toefl Speaking" source="toeflSpeaking" />
        <TextField
          label="Toefl Structure Written Expression"
          source="toeflStructureWrittenExpression"
        />
        <TextField label="Toefl Total" source="toeflTotal" />
      </Datagrid>
    </List>
  );
};
