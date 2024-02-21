import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  ReferenceField,
} from "react-admin";
import { APPLICATION_TITLE_FIELD } from "../application/ApplicationTitle";

export const IeltsscoreShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="Testdate" source="testdate" />
        <TextField label="Listeningscore" source="listeningscore" />
        <TextField label="Readingscore" source="readingscore" />
        <TextField label="Writingscore" source="writingscore" />
        <TextField label="Speakingscore" source="speakingscore" />
        <TextField label="Overallscore" source="overallscore" />
        <TextField label="Scorereceived" source="scorereceived" />
        <TextField label="Datafile Id" source="datafileId" />
        <TextField label="Test Email" source="testEmail" />
        <ReferenceField
          label="Application"
          source="application.id"
          reference="Application"
        >
          <TextField source={APPLICATION_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="Id" source="id" />
      </SimpleShowLayout>
    </Show>
  );
};
