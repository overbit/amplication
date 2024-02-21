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
        <TextField label="Test Email" source="testEmail" />
        <TextField label="Application Id" source="applicationId" />
        <TextField label="Testdate" source="testdate" />
        <TextField label="Listeningscore" source="listeningscore" />
        <TextField label="Readingscore" source="readingscore" />
        <TextField label="Writingscore" source="writingscore" />
        <TextField label="Speakingscore" source="speakingscore" />
        <TextField label="Overallscore" source="overallscore" />
        <TextField label="Url" source="url" />
        <TextField label="Scorereceived" source="scorereceived" />
        <TextField label="Datafile Id" source="datafileId" />
        <TextField label="Listeningscoremb" source="listeningscoremb" />
        <TextField label="Readingscoremb" source="readingscoremb" />
        <TextField label="Writingscoremb" source="writingscoremb" />
        <TextField label="Speakingscoremb" source="speakingscoremb" />
        <TextField label="Overallscoremb" source="overallscoremb" />
        <TextField label="Id" source="id" />
      </Datagrid>
    </List>
  );
};
