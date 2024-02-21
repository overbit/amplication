import * as React from "react";
import { List, Datagrid, ListProps, TextField } from "react-admin";
import Pagination from "../Components/Pagination";

export const MhciSlateIeltList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"MhciSlateIelts"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <TextField label="Prefix" source="prefix" />
        <TextField label="First" source="first" />
        <TextField label="Middle" source="middle" />
        <TextField label="Last" source="last" />
        <TextField
          label="Ielts Overall Band Score"
          source="ieltsOverallBandScore"
        />
        <TextField label="Ielts Listening" source="ieltsListening" />
        <TextField label="Ielts Reading" source="ieltsReading" />
        <TextField label="Ielts Writing" source="ieltsWriting" />
        <TextField label="Ielts Speaking" source="ieltsSpeaking" />
        <TextField label="Id" source="id" />
      </Datagrid>
    </List>
  );
};
