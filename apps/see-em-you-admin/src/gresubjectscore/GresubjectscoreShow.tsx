import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  ReferenceField,
  TextField,
  BooleanField,
} from "react-admin";
import { APPLICATION_TITLE_FIELD } from "../application/ApplicationTitle";

export const GresubjectscoreShow = (props: ShowProps): React.ReactElement => {
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
        <TextField label="Gre Sub Email" source="greSubEmail" />
        <TextField label="Id" source="id" />
        <TextField label="Name" source="name" />
        <TextField label="Percentile" source="percentile" />
        <TextField label="Score" source="score" />
        <BooleanField label="Scorereceived" source="scorereceived" />
        <TextField label="Testdate" source="testdate" />
      </SimpleShowLayout>
    </Show>
  );
};
