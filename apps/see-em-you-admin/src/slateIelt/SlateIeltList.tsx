import * as React from "react";
import { List, Datagrid, ListProps, TextField } from "react-admin";
import Pagination from "../Components/Pagination";

export const SlateIeltList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"SlateIelts"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <TextField label="First" source="first" />
        <TextField label="Id" source="id" />
        <TextField label="Ielts Listening" source="ieltsListening" />
        <TextField
          label="Ielts Overall Band Score"
          source="ieltsOverallBandScore"
        />
        <TextField label="Ielts Reading" source="ieltsReading" />
        <TextField label="Ielts Speaking" source="ieltsSpeaking" />
        <TextField label="Ielts Writing" source="ieltsWriting" />
        <TextField label="Last" source="last" />
        <TextField label="Middle" source="middle" />
        <TextField label="Prefix" source="prefix" />
      </Datagrid>
    </List>
  );
};
