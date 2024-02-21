import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  BooleanInput,
  ReferenceArrayInput,
  SelectArrayInput,
} from "react-admin";

import { DomainUnitTitle } from "../domainUnit/DomainUnitTitle";

export const DomainCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="Name" source="name" />
        <TextInput label="Description" source="description" />
        <TextInput label="Path" source="path" />
        <BooleanInput label="Active" source="active" />
        <TextInput label="Banner" source="banner" />
        <ReferenceArrayInput
          source="domainUnit"
          reference="DomainUnit"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={DomainUnitTitle} />
        </ReferenceArrayInput>
      </SimpleForm>
    </Create>
  );
};
