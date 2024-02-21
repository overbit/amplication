import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  NumberInput,
  ReferenceArrayInput,
  SelectArrayInput,
} from "react-admin";

import { DomainUnitTitle } from "../domainUnit/DomainUnitTitle";

export const UnitEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="Unit Name" source="unitName" />
        <TextInput label="Unit Name Short" source="unitNameShort" />
        <TextInput label="Unit Description" source="unitDescription" />
        <TextInput label="Unit Url" source="unitUrl" />
        <TextInput label="Unit Oracle String" source="unitOracleString" />
        <TextInput label="Unit System Email" source="unitSystemEmail" />
        <TextInput label="Unit Cc Email" source="unitCcEmail" />
        <NumberInput
          label="Application Base Price"
          source="applicationBasePrice"
        />
        <NumberInput
          label="Application Program Price"
          source="applicationProgramPrice"
        />
        <NumberInput step={1} label="Parent Unit Id" source="parentUnitId" />
        <ReferenceArrayInput
          source="domainUnit"
          reference="DomainUnit"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={DomainUnitTitle} />
        </ReferenceArrayInput>
      </SimpleForm>
    </Edit>
  );
};
