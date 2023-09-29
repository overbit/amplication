import * as React from "react";
import { Edit, SimpleForm, EditProps, TextInput } from "react-admin";

export const SlateOrgsAllEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="Aw Id" source="awId" />
        <TextInput label="Aw Name" source="awName" />
        <TextInput label="Local Name" source="localName" />
        <TextInput label="Name" source="name" />
        <TextInput label="Shared Name" source="sharedName" />
        <TextInput label="Slate Orgs All Id" source="slateOrgsAllId" />
      </SimpleForm>
    </Edit>
  );
};
