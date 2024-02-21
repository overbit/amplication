import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  NumberInput,
  DateTimeInput,
} from "react-admin";

export const ContentBakEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="Name" source="name" />
        <TextInput label="Content" source="content" />
        <NumberInput step={1} label="Contenttype Id" source="contenttypeId" />
        <NumberInput step={1} label="Domain Id" source="domainId" />
        <DateTimeInput label="Modifieddate" source="modifieddate" />
        <NumberInput step={1} label="Modifiedby" source="modifiedby" />
        <NumberInput step={1} label="Department Id" source="departmentId" />
      </SimpleForm>
    </Edit>
  );
};
