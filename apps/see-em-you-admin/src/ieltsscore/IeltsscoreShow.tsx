import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  ReferenceField,
  TextField,
} from "react-admin";
import { APPLICATION_TITLE_FIELD } from "../application/ApplicationTitle";

export const IeltsscoreShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <ReferenceField
          label="Application"
          source="application.id"
          reference="Application"
        >
          <TextField source={APPLICATION_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="Datafile Id" source="datafileId" />
        <TextField label="Id" source="id" />
        <TextField label="Listeningscore" source="listeningscore" />
        <TextField label="Overallscore" source="overallscore" />
        <TextField label="Readingscore" source="readingscore" />
        <TextField label="Scorereceived" source="scorereceived" />
        <TextField label="Speakingscore" source="speakingscore" />
        <TextField label="Testdate" source="testdate" />
        <TextField label="Test Email" source="testEmail" />
        <TextField label="Writingscore" source="writingscore" />
      </SimpleShowLayout>
    </Show>
  );
};
