import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  BooleanField,
  ReferenceField,
} from "react-admin";
import { APPLICATION_TITLE_FIELD } from "../application/ApplicationTitle";

export const GresubjectscoreShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="Testdate" source="testdate" />
        <TextField label="Name" source="name" />
        <TextField label="Score" source="score" />
        <TextField label="Percentile" source="percentile" />
        <TextField label="Datafile Id" source="datafileId" />
        <TextField label="Gre Sub Email" source="greSubEmail" />
        <BooleanField label="Scorereceived" source="scorereceived" />
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
