import * as React from "react";
import { Show, SimpleShowLayout, ShowProps, TextField } from "react-admin";

export const ToeflItpPlusShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="Application Id" source="applicationId" />
        <TextField label="Datafile Id" source="datafileId" />
        <TextField label="Id" source="id" />
        <TextField label="Listeningscore" source="listeningscore" />
        <TextField label="Overallscore" source="overallscore" />
        <TextField label="Readingscore" source="readingscore" />
        <TextField label="Scorereceived" source="scorereceived" />
        <TextField label="Testdate" source="testdate" />
        <TextField label="Test Email" source="testEmail" />
        <TextField label="Url" source="url" />
        <TextField label="Writingscore" source="writingscore" />
      </SimpleShowLayout>
    </Show>
  );
};
