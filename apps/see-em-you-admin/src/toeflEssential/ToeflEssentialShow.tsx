import * as React from "react";
import { Show, SimpleShowLayout, ShowProps, TextField } from "react-admin";

export const ToeflEssentialShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
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
      </SimpleShowLayout>
    </Show>
  );
};
