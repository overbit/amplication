import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  ReferenceField,
  TextField,
} from "react-admin";
import { APPLICATION_TITLE_FIELD } from "../application/ApplicationTitle";

export const PublicationShow = (props: ShowProps): React.ReactElement => {
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
        <TextField label="Author" source="author" />
        <TextField label="Citation" source="citation" />
        <TextField label="Datafile Id" source="datafileId" />
        <TextField label="Forum" source="forum" />
        <TextField label="Id" source="id" />
        <TextField label="Status" source="status" />
        <TextField label="Title" source="title" />
        <TextField label="Type Field" source="typeField" />
        <TextField label="Type Other" source="typeOther" />
        <TextField label="Url" source="url" />
      </SimpleShowLayout>
    </Show>
  );
};
