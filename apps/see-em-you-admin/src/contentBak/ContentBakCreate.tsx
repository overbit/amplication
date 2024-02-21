import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  NumberInput,
  DateTimeInput,
} from "react-admin";

export const ContentBakCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="Name" source="name" />
        <TextInput label="Content" source="content" />
        <NumberInput step={1} label="Contenttype Id" source="contenttypeId" />
        <NumberInput step={1} label="Domain Id" source="domainId" />
        <DateTimeInput label="Modifieddate" source="modifieddate" />
        <NumberInput step={1} label="Modifiedby" source="modifiedby" />
        <NumberInput step={1} label="Department Id" source="departmentId" />
      </SimpleForm>
    </Create>
  );
};
