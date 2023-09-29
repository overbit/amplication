import * as React from "react";
import { Create, SimpleForm, CreateProps, TextInput } from "react-admin";

export const SlateOrgsAllCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="Aw Id" source="awId" />
        <TextInput label="Aw Name" source="awName" />
        <TextInput label="Local Name" source="localName" />
        <TextInput label="Name" source="name" />
        <TextInput label="Shared Name" source="sharedName" />
        <TextInput label="Slate Orgs All Id" source="slateOrgsAllId" />
      </SimpleForm>
    </Create>
  );
};
