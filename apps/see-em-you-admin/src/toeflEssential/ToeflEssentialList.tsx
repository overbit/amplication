import * as React from "react";
import { List, Datagrid, ListProps, TextField } from "react-admin";
import Pagination from "../Components/Pagination";

export const ToeflEssentialList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"ToeflEssentials"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <TextField label="Application Id" source="applicationId" />
        <TextField label="Datafile Id" source="datafileId" />
        <TextField label="Id" source="id" />
        <TextField label="Listeningscore" source="listeningscore" />
        <TextField label="Listeningscoremb" source="listeningscoremb" />
        <TextField label="Overallscore" source="overallscore" />
        <TextField label="Overallscoremb" source="overallscoremb" />
        <TextField label="Readingscore" source="readingscore" />
        <TextField label="Readingscoremb" source="readingscoremb" />
        <TextField label="Scorereceived" source="scorereceived" />
        <TextField label="Speakingscore" source="speakingscore" />
        <TextField label="Speakingscoremb" source="speakingscoremb" />
        <TextField label="Testdate" source="testdate" />
        <TextField label="Test Email" source="testEmail" />
        <TextField label="Url" source="url" />
        <TextField label="Writingscore" source="writingscore" />
        <TextField label="Writingscoremb" source="writingscoremb" />
      </Datagrid>
    </List>
  );
};
