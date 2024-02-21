import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  NumberInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";

import { ApplicationTitle } from "../application/ApplicationTitle";

export const PublicationCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="Title" source="title" />
        <TextInput label="Author" source="author" />
        <TextInput label="Forum" source="forum" />
        <TextInput label="Citation" source="citation" />
        <TextInput label="Url" source="url" />
        <TextInput label="Status" source="status" />
        <TextInput label="Type Field" source="typeField" />
        <TextInput label="Type Other" source="typeOther" />
        <NumberInput step={1} label="Datafile Id" source="datafileId" />
        <ReferenceInput
          source="application.id"
          reference="Application"
          label="Application"
        >
          <SelectInput optionText={ApplicationTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Create>
  );
};
